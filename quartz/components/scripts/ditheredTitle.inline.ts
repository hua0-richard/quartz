import * as THREE from "three"

const W = 140
const H = 100

function getThemeColors() {
  const isDark = document.documentElement.getAttribute("saved-theme") === "dark"
  return {
    fg: isDark ? new THREE.Color("#e8e6df") : new THREE.Color("#1A1816"),
    bg: isDark ? new THREE.Color("#0e0f0c") : new THREE.Color("#FAFAF8"),
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
    float threshold = bayer8(gl_FragCoord.xy);
    vec3 color = lum > threshold ? uFg : uBg;
    gl_FragColor = vec4(color, 1.0);
  }
`

function createScene(canvas: HTMLCanvasElement) {
  canvas.width = W
  canvas.height = H

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: false, antialias: false })
  renderer.setSize(W, H, false)
  renderer.setPixelRatio(1)

  // 3D scene
  const scene = new THREE.Scene()
  scene.background = new THREE.Color(0x000000)

  const camera = new THREE.PerspectiveCamera(35, W / H, 0.1, 100)
  camera.position.set(0, 0, 5)

  const geometry = new THREE.IcosahedronGeometry(1.4, 0)
  const material = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    roughness: 0.6,
    metalness: 0.0,
    flatShading: true,
  })
  const mesh = new THREE.Mesh(geometry, material)
  mesh.rotation.x = 0.4
  mesh.rotation.z = 0.2
  scene.add(mesh)

  const dirLight = new THREE.DirectionalLight(0xffffff, 2.2)
  dirLight.position.set(2, 3, 5)
  scene.add(dirLight)

  const fillLight = new THREE.DirectionalLight(0xffffff, 0.4)
  fillLight.position.set(-3, -1, 2)
  scene.add(fillLight)

  scene.add(new THREE.AmbientLight(0xffffff, 0.25))

  // Render target
  const renderTarget = new THREE.WebGLRenderTarget(W, H, {
    minFilter: THREE.NearestFilter,
    magFilter: THREE.NearestFilter,
  })

  // Dither post-processing
  const { fg, bg } = getThemeColors()
  const ditherMaterial = new THREE.ShaderMaterial({
    uniforms: {
      tDiffuse: { value: renderTarget.texture },
      uFg: { value: new THREE.Vector3(fg.r, fg.g, fg.b) },
      uBg: { value: new THREE.Vector3(bg.r, bg.g, bg.b) },
    },
    vertexShader: ditherVertexShader,
    fragmentShader: ditherFragmentShader,
  })

  const ditherScene = new THREE.Scene()
  const ditherCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)
  ditherScene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), ditherMaterial))

  // Mouse interaction
  const mouse = { x: 0, y: 0, tx: 0, ty: 0, over: false }
  const baseRotation = { x: mesh.rotation.x, y: mesh.rotation.y }
  let spinX = 0
  let spinY = 0

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

  function animate() {
    if (!running) return
    animFrame = requestAnimationFrame(animate)

    // Smooth idle spin
    spinX += 0.0015
    spinY += 0.002

    // Lerp mouse toward target
    const lerp = mouse.over ? 0.08 : 0.04
    mouse.x += (mouse.tx - mouse.x) * lerp
    mouse.y += (mouse.ty - mouse.y) * lerp

    // Combine idle rotation with mouse tilt
    mesh.rotation.x = baseRotation.x + spinX + mouse.y * 0.6
    mesh.rotation.y = baseRotation.y + spinY + mouse.x * 0.6

    renderer.setRenderTarget(renderTarget)
    renderer.render(scene, camera)

    renderer.setRenderTarget(null)
    renderer.render(ditherScene, ditherCamera)
  }

  animate()

  return {
    updateColors() {
      const { fg, bg } = getThemeColors()
      ditherMaterial.uniforms.uFg.value.set(fg.r, fg.g, fg.b)
      ditherMaterial.uniforms.uBg.value.set(bg.r, bg.g, bg.b)
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
    },
  }
}

let current: ReturnType<typeof createScene> | null = null

function handleTheme() {
  current?.updateColors()
}

document.addEventListener("nav", () => {
  current?.destroy()
  current = null

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
