import * as THREE from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"

const W = 210
const H = 150

function parseCSSColor(value: string): THREE.Vector3 {
  const el = document.createElement("div")
  el.style.color = value
  document.body.appendChild(el)
  const rgb = getComputedStyle(el).color
  document.body.removeChild(el)
  const m = rgb.match(/[\d.]+/g)!
  return new THREE.Vector3(+m[0] / 255, +m[1] / 255, +m[2] / 255)
}

function getThemeColors() {
  const style = getComputedStyle(document.documentElement)
  return {
    fg: parseCSSColor(style.getPropertyValue("--dark").trim()),
    bg: parseCSSColor(style.getPropertyValue("--bg").trim()),
  }
}

const ditherVertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`

const ditherFragmentShader = `
  precision highp float;

  uniform sampler2D tDiffuse;
  uniform vec3 uFg;
  uniform vec3 uBg;
  varying vec2 vUv;

  // Recursive Bayer dithering
  float bayer2(vec2 a) {
    a = floor(a);
    return fract(dot(a, vec2(0.5, a.y * 0.75)));
  }
  float bayer4(vec2 a) { return bayer2(a * 0.5) * 0.25 + bayer2(a); }
  float bayer8(vec2 a) { return bayer4(a * 0.5) * 0.25 + bayer2(a); }

  void main() {
    vec4 tex = texture2D(tDiffuse, vUv);
    float lum = dot(tex.rgb, vec3(0.299, 0.587, 0.114));
    // Compress the Bayer threshold range so darks stay solid and brights stay
    // solid; only mid-tones dither. Reduces overall dither noise.
    float threshold = bayer8(gl_FragCoord.xy) * 0.38 + 0.31;
    vec3 color = lum > threshold ? uFg : uBg;
    gl_FragColor = vec4(color, 1.0);
  }
`

function createScene(canvas: HTMLCanvasElement) {
  canvas.width = W
  canvas.height = H

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: false, antialias: false })
  renderer.outputColorSpace = THREE.LinearSRGBColorSpace
  renderer.setSize(W, H, false)
  renderer.setPixelRatio(1)

  // 3D scene
  const scene = new THREE.Scene()
  scene.background = new THREE.Color(0x000000)

  const camera = new THREE.PerspectiveCamera(35, W / H, 0.1, 100)
  camera.position.set(0, 0.35, 5)
  camera.lookAt(0, 0, 0)

  // ── Endurance: loaded from GLB ──
  // Movie-accurate framing: ship orientation is STATIC. Only the ring spins
  // around the spine (movie behavior — centrifugal habitat rotation while the
  // craft maintains its heading). The static tilt below frames the spine at
  // an angled 3/4 view.
  const endurance = new THREE.Group()
  endurance.rotation.x = -0.45
  endurance.rotation.y = 0.55
  endurance.rotation.z = 0.2
  scene.add(endurance)
  let loadedModel: THREE.Object3D | null = null

  const ringLight = new THREE.DirectionalLight(0xffffff, 1.8)
  ringLight.position.set(2.5, 3, 4)
  scene.add(ringLight)
  const fillLight = new THREE.DirectionalLight(0xffffff, 0.35)
  fillLight.position.set(-2, -1, 2)
  scene.add(fillLight)
  scene.add(new THREE.AmbientLight(0xffffff, 0.12))

  const TARGET_SIZE = 2.4 // diameter the model should fit within
  const loader = new GLTFLoader()
  let modelDisposeFns: (() => void)[] = []
  loader.load(
    "/static/endurance.glb",
    (gltf) => {
      const model = gltf.scene
      // Auto-fit: compute bounding box, center, then uniformly scale to fit.
      const box = new THREE.Box3().setFromObject(model)
      const size = new THREE.Vector3()
      const center = new THREE.Vector3()
      box.getSize(size)
      box.getCenter(center)
      const maxDim = Math.max(size.x, size.y, size.z)
      const scale = maxDim > 0 ? TARGET_SIZE / maxDim : 1
      model.position.sub(center.multiplyScalar(scale))
      model.scale.setScalar(scale)
      // Override the GLB's PBR materials with a flat white so the dither reads
      // form via lighting, not surface texture.
      const flatMat = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        roughness: 0.55,
        metalness: 0.15,
        flatShading: true,
      })
      model.traverse((o) => {
        const m = o as THREE.Mesh
        if (m.isMesh) m.material = flatMat
      })
      endurance.add(model)
      loadedModel = model
      modelDisposeFns.push(() => {
        model.traverse((o) => {
          const m = o as THREE.Mesh
          if (m.isMesh) {
            m.geometry.dispose()
          }
        })
        flatMat.dispose()
      })
    },
    undefined,
    (err) => console.error("[DitheredTitle] Failed to load endurance.glb:", err),
  )

  // ── Background starfield (sparse, distant) ──
  // Static layer: bright anchor stars don't drift, so the eye has a stable
  // reference. The "messy" feel before came from too many drifting layered
  // sizes; now we keep one tight size distribution and fewer stars overall.
  const STAR_COUNT = 70
  const FIELD_X = 10
  const FIELD_Y = 7
  const FIELD_Z_NEAR = -5
  const FIELD_Z_FAR = -12
  const starPositions = new Float32Array(STAR_COUNT * 3)
  const starSizes = new Float32Array(STAR_COUNT)
  for (let i = 0; i < STAR_COUNT; i++) {
    starPositions[i * 3 + 0] = (Math.random() - 0.5) * FIELD_X
    starPositions[i * 3 + 1] = (Math.random() - 0.5) * FIELD_Y
    starPositions[i * 3 + 2] = FIELD_Z_FAR + Math.random() * (FIELD_Z_NEAR - FIELD_Z_FAR)
    // Tight size distribution: most stars near aSize=0.6, rare ones up to 2.0.
    starSizes[i] = 0.6 + Math.pow(Math.random(), 12) * 1.4
  }
  const starGeometry = new THREE.BufferGeometry()
  starGeometry.setAttribute("position", new THREE.BufferAttribute(starPositions, 3))
  starGeometry.setAttribute("aSize", new THREE.BufferAttribute(starSizes, 1))

  const starMaterial = new THREE.ShaderMaterial({
    vertexShader: `
      attribute float aSize;
      void main() {
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        // Multiplier 10 → typical star renders as ~1px, brightest ~3-4px on
        // a 140x100 internal canvas. Stops them from looking like spheres.
        gl_PointSize = aSize * (10.0 / -mvPosition.z);
        gl_Position = projectionMatrix * mvPosition;
      }
    `,
    fragmentShader: `
      void main() {
        // Hard edge with just a 1px feather — reads as a sharp pixel dot.
        vec2 c = gl_PointCoord - 0.5;
        float d = length(c) * 2.0;
        float a = step(d, 0.9);
        gl_FragColor = vec4(vec3(a), 1.0);
      }
    `,
  })
  const stars = new THREE.Points(starGeometry, starMaterial)
  scene.add(stars)

  // Aliases so the rest of the file's logic (animation/destroy) reads cleanly.
  const geometry = starGeometry
  const material = starMaterial
  const mesh = stars

  // Render target
  const renderTarget = new THREE.WebGLRenderTarget(W, H, {
    minFilter: THREE.LinearFilter,
    magFilter: THREE.LinearFilter,
  })

  // Dither post-processing
  const { fg, bg } = getThemeColors()
  const ditherMaterial = new THREE.ShaderMaterial({
    uniforms: {
      tDiffuse: { value: renderTarget.texture },
      uFg: { value: fg },
      uBg: { value: bg },
    },
    vertexShader: ditherVertexShader,
    fragmentShader: ditherFragmentShader,
  })

  const ditherScene = new THREE.Scene()
  const ditherCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)
  ditherScene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), ditherMaterial))

  // Mouse interaction (parallax camera shift)
  const mouse = { x: 0, y: 0, tx: 0, ty: 0, over: false }
  const baseCamera = { x: camera.position.x, y: camera.position.y }
  const posAttr = geometry.attributes.position as THREE.BufferAttribute
  const posArray = posAttr.array as Float32Array

  function onMouseMove(e: MouseEvent) {
    const rect = canvas.getBoundingClientRect()
    mouse.tx = ((e.clientX - rect.left) / rect.width - 0.5) * 2
    mouse.ty = ((e.clientY - rect.top) / rect.height - 0.5) * 2
  }
  function onMouseEnter() { mouse.over = true }
  function onMouseLeave() {
    mouse.over = false
    mouse.tx = 0
    mouse.ty = 0
  }

  canvas.addEventListener("mousemove", onMouseMove)
  canvas.addEventListener("mouseenter", onMouseEnter)
  canvas.addEventListener("mouseleave", onMouseLeave)

  // Animation
  let animFrame: number
  let running = true

  let t = 0
  function animate() {
    if (!running) return
    animFrame = requestAnimationFrame(animate)
    t += 1 / 60

    // Only the loaded model spins (around its native Y axis, the most common
    // "up"/spine convention for glTF aerospace models). The endurance group
    // stays static so the ship's pose in frame doesn't drift.
    if (loadedModel) loadedModel.rotation.x += 0.0008

    // Background stars drift toward camera with gentle wrap. Slowed so the
    // field reads as a stable backdrop rather than rushing motion.
    const drift = mouse.over ? 0.0008 : 0.00025
    for (let i = 0; i < STAR_COUNT; i++) {
      let z = posArray[i * 3 + 2] + drift
      if (z > FIELD_Z_NEAR) {
        z = FIELD_Z_FAR
        posArray[i * 3 + 0] = (Math.random() - 0.5) * FIELD_X
        posArray[i * 3 + 1] = (Math.random() - 0.5) * FIELD_Y
      }
      posArray[i * 3 + 2] = z
    }
    posAttr.needsUpdate = true

    // Lerp mouse toward target for camera parallax
    const lerp = mouse.over ? 0.08 : 0.04
    mouse.x += (mouse.tx - mouse.x) * lerp
    mouse.y += (mouse.ty - mouse.y) * lerp
    camera.position.x = baseCamera.x + mouse.x * 0.25
    camera.position.y = baseCamera.y - mouse.y * 0.15
    camera.lookAt(0, 0, 0)

    renderer.setRenderTarget(renderTarget)
    renderer.render(scene, camera)

    renderer.setRenderTarget(null)
    renderer.render(ditherScene, ditherCamera)
  }

  animate()

  return {
    updateColors() {
      const { fg, bg } = getThemeColors()
      ditherMaterial.uniforms.uFg.value.copy(fg)
      ditherMaterial.uniforms.uBg.value.copy(bg)
    },
    destroy() {
      running = false
      cancelAnimationFrame(animFrame)
      canvas.removeEventListener("mousemove", onMouseMove)
      canvas.removeEventListener("mouseenter", onMouseEnter)
      canvas.removeEventListener("mouseleave", onMouseLeave)
      renderer.dispose()
      geometry.dispose()
      material.dispose()
      ditherMaterial.dispose()
      renderTarget.dispose()
      modelDisposeFns.forEach((fn) => fn())
    },
  }
}

let current: ReturnType<typeof createScene> | null = null

function handleTheme() {
  current?.updateColors()
}

// Match the desktop breakpoint in variables.scss ($breakpoints.desktop = 1200px).
const DESKTOP_QUERY = "(min-width: 1200px)"

document.addEventListener("nav", () => {
  current?.destroy()
  current = null

  // Skip init below desktop — the GLB is 4.9MB and the canvas is hidden anyway.
  if (!window.matchMedia(DESKTOP_QUERY).matches) return

  const canvas = document.getElementById("dithered-canvas") as HTMLCanvasElement | null
  if (!canvas) return

  try {
    current = createScene(canvas)
  } catch (e) {
    console.error("[DitheredTitle] Failed to initialize:", e)
  }

  document.addEventListener("themechange", handleTheme)
  window.addCleanup(() => {
    current?.destroy()
    current = null
    document.removeEventListener("themechange", handleTheme)
  })
})
