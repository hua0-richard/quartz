import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const Landing: QuartzComponent = ({ fileData, allFiles }: QuartzComponentProps) => {
  const isHomePage = fileData.slug === "index"
  if (!isHomePage) return null

  interface ProjectFrontmatter {
    title?: string
    description?: string
    eyebrow?: string
    github?: string
    demo?: string
    features?: string[]
    tags?: string[]
  }

  const projects = allFiles
    .filter((f) => f.slug?.startsWith("Projects/") && f.slug !== "Projects/index")
    .map((f) => ({
      slug: f.slug!,
      ...(f.frontmatter as unknown as ProjectFrontmatter),
    }))

  return (
    <div class="landing">
      {/* ── Hero ── */}
      <section class="landing-hero">
        <div class="landing-name" role="heading" aria-level={1} aria-label="Richard Hua">
          <canvas class="dot-name" aria-hidden="true"></canvas>
        </div>
        <p class="landing-subtitle">
          Full-stack engineer building AI-powered products — RAG systems, LLM pipelines, and the
          interfaces on top of them.
        </p>
        <p class="landing-bio">
          Waterloo CS &middot; UBC MDS &middot; Based in Canada &middot; Open to full-stack and AI
          engineer roles.
        </p>
        <div class="landing-links">
          <a href="mailto:hua.richard0@gmail.com">Email</a>
          <span class="dot">&middot;</span>
          <a href="https://github.com/hua0-richard" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <span class="dot">&middot;</span>
          <a href="https://www.linkedin.com/in/richard0hua/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </section>

      {/* ── Education ── */}
      <section class="landing-education">
        <h2 class="landing-section-heading">Education</h2>
        <div class="landing-edu-list">
          <div class="edu-item reveal-card">
            <div class="edu-logo">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/6/6e/University_of_Waterloo_seal.svg/500px-University_of_Waterloo_seal.svg.png?20181003010357"
                alt="University of Waterloo"
              />
            </div>
            <div class="edu-content">
              <div class="edu-title">University of Waterloo</div>
              <div class="edu-meta">2020 &ndash; 2025 &middot; B.CS in Computer Science</div>
              <div class="edu-courses">
                <span class="edu-courses-label">Selected courses</span>
                <ul>
                  <li>Algorithms</li>
                  <li>Operating Systems</li>
                  <li>Artificial Intelligence</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="edu-item reveal-card">
            <div class="edu-logo">
              <img
                src="https://cdn.worldvectorlogo.com/logos/chalmers-university-of-technology.svg"
                alt="Chalmers University of Technology"
              />
            </div>
            <div class="edu-content">
              <div class="edu-title">Chalmers University of Technology</div>
              <div class="edu-meta">
                Jan &ndash; May 2025 &middot; Exchange term in Computer Science
              </div>
              <div class="edu-courses">
                <span class="edu-courses-label">Selected courses</span>
                <ul>
                  <li>Applied Machine Learning</li>
                  <li>Game Engine Architecture</li>
                  <li>Agile Software Development</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="edu-item reveal-card">
            <div class="edu-logo">
              <img
                src="https://commons.wikimedia.org/wiki/Special:FilePath/UBC_COA2.svg"
                alt="University of British Columbia"
              />
            </div>
            <div class="edu-content">
              <div class="edu-title">University of British Columbia</div>
              <div class="edu-meta">2025 &ndash; 2026 &middot; MDS in Data Science (current)</div>
              <div class="edu-courses">
                <span class="edu-courses-label">Selected courses</span>
                <ul>
                  <li>Statistical Learning</li>
                  <li>Machine Learning Systems</li>
                  <li>Data Visualization</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Projects ── */}
      {projects.length > 0 && (
        <section class="landing-projects">
          <h2 class="landing-section-heading">Projects</h2>
          <div class="landing-project-grid">
            {projects.map((p, idx) => (
              <div class="lp-card reveal-card" style={`animation-delay: ${0.4 + idx * 0.12}s`}>
                {p.eyebrow && <p class="lp-card-eyebrow">{p.eyebrow}</p>}
                <h3 class="lp-card-title">{p.title}</h3>
                {p.description && <p class="lp-card-desc">{p.description}</p>}
                {p.tags && p.tags.length > 0 && (
                  <div class="lp-card-tags">
                    {p.tags
                      .filter((t) => t !== "projects")
                      .map((t) => (
                        <span>{t}</span>
                      ))}
                  </div>
                )}
                <div class="lp-card-links">
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noreferrer" class="lp-link-demo">
                      <span class="lp-live-dot"></span>
                      Live Demo
                    </a>
                  )}
                  <a href={`/${p.slug}`}>Writeup</a>
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noreferrer">
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── Explorations ── */}
      <section class="landing-explorations">
        <h2 class="landing-section-heading">Explorations</h2>
        <p class="landing-section-desc">
          Study notes and technical explorations — machine learning, statistics, and systems. Linked
          through Quartz's knowledge graph.
        </p>
        <div class="landing-explore-links">
          <a
            href="/Machine-Learning/Supervised-Learning/Supervised-Learning"
            class="explore-pill reveal-card"
          >
            Machine Learning
          </a>
          <a href="/Statistics/Fundamentals/Random-Variables" class="explore-pill reveal-card">
            Statistics
          </a>
        </div>
      </section>

      {/* ── Webring ── */}
      <section class="landing-webring reveal-card">
        <a href="https://cs.uwatering.com/#richardhua.dev?nav=prev" class="webring-arrow">
          &larr;
        </a>
        <a
          href="https://cs.uwatering.com/#richardhua.dev"
          target="_blank"
          rel="noreferrer"
          class="webring-link"
          aria-label="UW CS Webring"
        >
          <canvas class="webring-dither-canvas" aria-hidden="true"></canvas>
        </a>
        <a href="https://cs.uwatering.com/#richardhua.dev?nav=next" class="webring-arrow">
          &rarr;
        </a>
      </section>
    </div>
  )
}

Landing.css = `
/* ── Landing — layout ────────────────────────────────────────── */
@keyframes fadeIn {
  to { opacity: 1; }
}

.landing {
  width: 100%;
  padding: 0;
}

/* ── Hero ──────────────────────────────────────────────────── */
.landing-hero {
  padding: 16px 0 48px;
}

.landing-name {
  margin: 0 0 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--border);
  opacity: 0;
  animation: fadeIn 0.8s cubic-bezier(0.0, 0, 0.2, 1) 0.1s forwards;
}

.dot-name {
  display: block;
  width: 100%;
  margin: 0 !important;
  padding: 0 !important;
  background: none !important;
  border: none !important;
  border-radius: 0 !important;
  box-shadow: none !important;
}

.landing-subtitle {
  font-family: var(--font-sans);
  font-size: 1.05rem;
  font-weight: 400;
  line-height: 1.65;
  color: var(--darkgray);
  margin: 0 0 0.5rem;
  opacity: 0;
  animation: fadeIn 0.8s cubic-bezier(0.0, 0, 0.2, 1) 0.35s forwards;
}

.landing-bio {
  font-size: 0.88rem;
  color: var(--gray);
  margin: 0 0 1.25rem;
  opacity: 0;
  animation: fadeIn 0.8s cubic-bezier(0.0, 0, 0.2, 1) 0.5s forwards;
}

.landing-links {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  opacity: 0;
  animation: fadeIn 0.8s cubic-bezier(0.0, 0, 0.2, 1) 0.6s forwards;
}

.landing-links a {
  font-family: var(--font-sans);
  font-size: 0.88rem;
  font-weight: 500;
  color: var(--secondary);
  text-decoration: none;
  transition: color 0.3s var(--ease);
}
.landing-links a:hover { color: var(--dark); }

.landing-links .dot {
  color: var(--gray);
  font-size: 0.75rem;
  user-select: none;
  opacity: 0.4;
}

/* ── Webring ───────────────────────────────────────────────── */
.landing-webring {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem 0 4rem;
}
.webring-arrow {
  font-size: 0.88rem;
  color: var(--gray);
  text-decoration: none !important;
  transition: color 0.3s var(--ease);
}
.webring-arrow:hover {
  color: var(--dark);
}
.webring-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
}
.webring-dither-canvas {
  width: 22px;
  height: 22px;
  image-rendering: pixelated;
}

/* ── Section headings ──────────────────────────────────────── */
.landing-section-heading {
  font-family: var(--font-sans);
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--gray);
  margin: 0 0 1rem;
}

.landing-section-desc {
  font-size: 0.9rem;
  color: var(--darkgray);
  line-height: 1.6;
  margin: -0.5rem 0 1rem;
}

/* ── Education ─────────────────────────────────────────────── */
.landing-education {
  padding: 2rem 0;
}

.landing-edu-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.edu-item {
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: start;
  column-gap: 0.75rem;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid var(--border);
  background: var(--surface);
  position: relative;
  overflow: hidden;
  transition: border-color 1.2s var(--ease), box-shadow 1.2s var(--ease), background 1.2s var(--ease);
}
.edu-item::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: var(--card-shine);
  opacity: 0;
  transition: opacity 1.2s cubic-bezier(0.0, 0, 0.2, 1);
  pointer-events: none;
  z-index: 0;
}
.edu-item:hover::before {
  opacity: 1;
}
.edu-item > * {
  position: relative;
  z-index: 1;
}
.edu-item:hover {
  border-color: var(--border-hover);
  background: var(--surface-hover);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15), 0 0 0 1px var(--border);
}

.edu-logo {
  width: clamp(48px, 6vw, 64px);
  height: clamp(48px, 6vw, 64px);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: var(--surface);
  border: 1px solid var(--border);
  overflow: hidden;
}

.edu-logo img {
  width: clamp(32px, 4.5vw, 44px);
  height: clamp(32px, 4.5vw, 44px);
  object-fit: contain;
  margin: 0;
  border-radius: 0;
}

.edu-content {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.edu-title {
  font-family: var(--font-sans);
  font-weight: 600;
  font-size: 0.95rem;
  line-height: 1.2;
  color: var(--dark);
}

.edu-meta {
  font-size: 0.85rem;
  color: var(--darkgray);
  margin-top: 1px;
}

.edu-courses {
  margin-top: 0.5rem;
  font-size: 0.85rem;
  color: var(--darkgray);
}

.edu-courses-label {
  font-size: 0.68rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-weight: 600;
  color: var(--gray);
}

.edu-courses ul {
  margin: 0.35rem 0 0;
  padding-left: 1.1rem;
  list-style: disc;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.edu-courses li {
  font-size: 0.82rem;
  line-height: 1.4;
  color: var(--darkgray);
}

@media (max-width: 520px) {
  .edu-item {
    grid-template-columns: 1fr;
    row-gap: 0.5rem;
  }
  .edu-logo {
    justify-self: start;
  }
}

/* ── Projects ──────────────────────────────────────────────── */
.landing-projects {
  padding: 2rem 0;
}

.landing-project-grid {
  display: grid;
  gap: 1rem;
}

.lp-card {
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 1.5rem;
  background: var(--surface);
  position: relative;
  overflow: hidden;
  transition: border-color 1.2s var(--ease), box-shadow 1.2s var(--ease), background 1.2s var(--ease);
}
.lp-card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: var(--card-shine);
  opacity: 0;
  transition: opacity 1.2s cubic-bezier(0.0, 0, 0.2, 1);
  pointer-events: none;
  z-index: 0;
}
.lp-card:hover::before {
  opacity: 1;
}
.lp-card > * {
  position: relative;
  z-index: 1;
}
.lp-card:hover {
  border-color: var(--border-hover);
  background: var(--surface-hover);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15), 0 0 0 1px var(--border);
}

.lp-card-eyebrow {
  margin: 0 0 0.25rem;
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--gray);
}

.lp-card-title {
  margin: 0 0 0.5rem;
  font-family: var(--font-sans);
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: var(--dark);
}

.lp-card-desc {
  margin: 0 0 0.75rem;
  font-family: var(--font-sans);
  font-size: 0.88rem;
  font-weight: 400;
  line-height: 1.65;
  color: var(--gray);
}

.lp-card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 1rem;
}
.lp-card-tags span {
  font-family: var(--font-sans);
  font-size: 0.7rem;
  font-weight: 500;
  padding: 0.2rem 0.65rem;
  border-radius: 100px;
  background: var(--surface);
  color: var(--gray);
  border: 1px solid var(--border);
}

.lp-card-links {
  display: flex;
  gap: 1rem;
}
.lp-card-links a {
  font-family: var(--font-sans);
  font-size: 0.82rem;
  font-weight: 500;
  color: var(--secondary);
  text-decoration: none;
  transition: color 0.3s var(--ease);
}
.lp-card-links a::after {
  content: '→';
  display: inline-block;
  margin-left: 0.2em;
  transition: transform 0.3s var(--ease);
}
.lp-card-links a:hover {
  color: var(--dark);
}
.lp-card-links a:hover::after {
  transform: translateX(3px);
}

.lp-link-demo {
  display: inline-flex !important;
  align-items: center;
  gap: 0.4em;
}

@keyframes pulse-ring {
  0% { transform: scale(1); opacity: 0.5; }
  70% { transform: scale(2.2); opacity: 0; }
  100% { transform: scale(2.2); opacity: 0; }
}
.lp-live-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #4a9a7e;
  box-shadow: 0 0 4px rgba(74, 154, 126, 0.6), 0 0 10px rgba(74, 154, 126, 0.3);
  flex-shrink: 0;
  position: relative;
}
.lp-live-dot::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: #4a9a7e;
  animation: pulse-ring 1.8s ease-out infinite;
}

/* ── Explorations ──────────────────────────────────────────── */
.landing-explorations {
  padding: 2rem 0 4rem;
}

.landing-explore-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.explore-pill {
  font-family: var(--font-sans);
  font-size: 0.82rem;
  font-weight: 500;
  padding: 0.4rem 1rem;
  border-radius: 100px;
  border: 1px solid var(--border);
  color: var(--darkgray);
  text-decoration: none;
  background: transparent;
  transition: border-color 0.3s var(--ease), color 0.3s var(--ease), background 0.3s var(--ease), box-shadow 0.3s var(--ease);
}
.explore-pill:hover {
  border-color: var(--border-hover);
  color: var(--dark);
  background: var(--surface);
  box-shadow: 0 0 0 3px var(--surface);
}

/* ── Card reveal animation ─────────────────────────────────── */
@keyframes revealUp {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.reveal-card {
  opacity: 0;
  animation: revealUp 0.7s cubic-bezier(0.0, 0, 0.2, 1) forwards;
}

.edu-item.reveal-card:nth-child(1) { animation-delay: 0.35s; }
.edu-item.reveal-card:nth-child(2) { animation-delay: 0.47s; }
.edu-item.reveal-card:nth-child(3) { animation-delay: 0.59s; }

.explore-pill.reveal-card:nth-child(1) { animation-delay: 0.35s; }
.explore-pill.reveal-card:nth-child(2) { animation-delay: 0.47s; }

.landing-webring.reveal-card { animation-delay: 0.59s; }

/* ── Homepage overrides ─────────────────────────────────────── */
.page[data-slug="index"] .page-header {
  margin-top: 0;
}
.page[data-slug="index"] .center > article > *:not(.landing) {
  display: none;
}

/* ── Mobile ────────────────────────────────────────────────── */
@media (max-width: 800px) {
  .landing-hero { padding: 8px 0 24px; }
  .landing-subtitle { font-size: 0.95rem; }

  .landing-education,
  .landing-projects,
  .landing-explorations { padding: 1.5rem 0; }

  .landing-edu-list { gap: 0.75rem; }
  .edu-item { padding: 1rem; }
  .lp-card { padding: 1rem; }

  .landing-project-grid { gap: 0.75rem; }
}

@media (max-width: 520px) {
  .landing-hero { padding: 32px 0 20px; }
  .landing-subtitle { font-size: 0.9rem; }
  .landing-bio { font-size: 0.82rem; }
  .landing-links a { font-size: 0.82rem; }
  .landing-section-heading { font-size: 0.72rem; }
}

/* ── Reduced motion ────────────────────────────────────────── */
@media (prefers-reduced-motion: reduce) {
  .landing-name,
  .landing-subtitle,
  .landing-bio,
  .landing-links {
    opacity: 1;
    animation: none;
  }
  .reveal-card {
    opacity: 1;
    animation: none;
  }
}
`

Landing.afterDOMLoaded = `
  // Shared pixel data so hover redraws are instant
  var _dotData = null;

  function _sampleText(containerW) {
    var text = 'RICHARD HUA';
    var offscreen = document.createElement('canvas');
    var fontSize = Math.round(containerW * 0.08);
    var offW = containerW;
    var offH = fontSize * 1.4;
    offscreen.width = offW;
    offscreen.height = offH;
    var offCtx = offscreen.getContext('2d');
    if (!offCtx) return null;
    offCtx.font = '700 ' + fontSize + 'px -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif';
    offCtx.fillStyle = '#000';
    offCtx.textBaseline = 'top';
    offCtx.fillText(text, 0, fontSize * 0.15);
    var pixels = offCtx.getImageData(0, 0, offW, offH).data;
    var step = 1.5;
    var dotR = 0.55;
    var gridCols = Math.floor(offW / step);
    var gridRows = Math.floor(offH / step);
    return { pixels: pixels, offW: offW, offH: offH, step: step, dotR: dotR, gridCols: gridCols, gridRows: gridRows };
  }

  function _setupCanvas(canvas, d) {
    var dpr = window.devicePixelRatio || 1;
    var canvasW = d.gridCols * d.step;
    var canvasH = d.gridRows * d.step;
    canvas.width = Math.round(canvasW * dpr);
    canvas.height = Math.round(canvasH * dpr);
    canvas.style.width = canvasW + 'px';
    canvas.style.height = canvasH + 'px';
    var ctx = canvas.getContext('2d');
    if (!ctx) return null;
    ctx.scale(dpr, dpr);
    return ctx;
  }

  // ── Animated hover state ──
  // t goes 0 → 1 on enter (ramps up over ~800ms), 1 → 0 on leave (fades over ~600ms)
  var _hoverT = 0;
  var _hoverTarget = 0;    // 0 = idle, 1 = hovering
  var _hoverRafId = null;
  var _hoverLastTime = 0;
  var RAMP_UP = 800;   // ms to reach full intensity
  var RAMP_DOWN = 600;  // ms to fade back to normal

  function _easeOut(t) { return 1 - Math.pow(1 - t, 3); }
  function _easeIn(t) { return t * t; }

  function drawFrame(canvas, t) {
    var containerW = canvas.parentElement ? canvas.parentElement.clientWidth : 680;
    var d;
    if (_dotData && _dotData.containerW === containerW) {
      d = _dotData;
    } else {
      d = _sampleText(containerW);
      if (!d) return;
      d.containerW = containerW;
      _dotData = d;
    }
    var ctx = _setupCanvas(canvas, d);
    if (!ctx) return;

    var isDark = document.documentElement.getAttribute('saved-theme') === 'dark';
    var style = getComputedStyle(document.documentElement);
    var baseColor = style.getPropertyValue('--darkgray').trim() || '#888';

    // Parse base color to RGB (cached on d to avoid creating canvas each frame)
    if (d._baseColor !== baseColor) {
      var tmp = document.createElement('canvas'); tmp.width = 1; tmp.height = 1;
      var tmpCtx = tmp.getContext('2d');
      tmpCtx.fillStyle = baseColor;
      tmpCtx.fillRect(0, 0, 1, 1);
      var bc = tmpCtx.getImageData(0, 0, 1, 1).data;
      d._baseColor = baseColor;
      d._baseR = bc[0]; d._baseG = bc[1]; d._baseB = bc[2];
    }
    var baseR = d._baseR, baseG = d._baseG, baseB = d._baseB;

    // Interpolate brightness: base → brighter
    var brightMul = 1 + t * (isDark ? 0.6 : 0.35);
    var mainR = Math.min(255, Math.round(baseR * brightMul));
    var mainG = Math.min(255, Math.round(baseG * brightMul));
    var mainB = Math.min(255, Math.round(baseB * brightMul));
    var mainColor = 'rgb(' + mainR + ',' + mainG + ',' + mainB + ')';

    // Fringe parameters scaled by t
    var fringeAlpha = t * 0.35;
    var fringeOffset = t * 1.5;

    var channels = [
      { color: '#ff4040', dx: -fringeOffset },
      { color: '#40ff40', dx:  0 },
      { color: '#4060ff', dx:  fringeOffset },
    ];

    // Draw fringe channels (only when t > 0)
    if (t > 0.01) {
      ctx.globalCompositeOperation = 'lighter';
      for (var c = 0; c < channels.length; c++) {
        var ch = channels[c];
        for (var gy = 0; gy < d.gridRows; gy++) {
          for (var gx = 0; gx < d.gridCols; gx++) {
            var px = gx * d.step;
            var py = gy * d.step;
            var idx = (Math.round(py) * d.offW + Math.round(px)) * 4;
            var alpha = d.pixels[idx + 3];
            if (alpha > 40) {
              ctx.globalAlpha = (alpha / 255) * fringeAlpha;
              ctx.fillStyle = ch.color;
              ctx.beginPath();
              ctx.arc(px + d.step / 2 + ch.dx, py + d.step / 2, d.dotR, 0, Math.PI * 2);
              ctx.fill();
            }
          }
        }
      }
    }

    // Main dots on top
    ctx.globalCompositeOperation = 'source-over';
    var mainDotAlpha = 1 - t * 0.15;  // slightly more transparent at peak so fringe peeks through
    for (var gy = 0; gy < d.gridRows; gy++) {
      for (var gx = 0; gx < d.gridCols; gx++) {
        var px = gx * d.step;
        var py = gy * d.step;
        var idx = (Math.round(py) * d.offW + Math.round(px)) * 4;
        var alpha = d.pixels[idx + 3];
        if (alpha > 40) {
          ctx.globalAlpha = (alpha / 255) * mainDotAlpha;
          ctx.fillStyle = mainColor;
          ctx.beginPath();
          ctx.arc(px + d.step / 2, py + d.step / 2, d.dotR, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }
    ctx.globalAlpha = 1;
  }

  function _hoverTick(now) {
    if (!_hoverLastTime) _hoverLastTime = now;
    var dt = now - _hoverLastTime;
    _hoverLastTime = now;

    if (_hoverTarget === 1) {
      _hoverT = Math.min(1, _hoverT + dt / RAMP_UP);
    } else {
      _hoverT = Math.max(0, _hoverT - dt / RAMP_DOWN);
    }

    var easedT = _hoverTarget === 1 ? _easeOut(_hoverT) : _easeIn(_hoverT);

    if (_dotNameEl) drawFrame(_dotNameEl, easedT);

    // Keep ticking until we reach the target
    if ((_hoverTarget === 1 && _hoverT < 1) || (_hoverTarget === 0 && _hoverT > 0)) {
      _hoverRafId = requestAnimationFrame(_hoverTick);
    } else {
      _hoverRafId = null;
      _hoverLastTime = 0;
    }
  }

  function _startHoverAnim(target) {
    _hoverTarget = target;
    _hoverLastTime = 0;
    if (!_hoverRafId) {
      _hoverRafId = requestAnimationFrame(_hoverTick);
    }
  }

  var _dotResizeTimer;
  function _handleDotResize() {
    clearTimeout(_dotResizeTimer);
    _dotResizeTimer = setTimeout(function() {
      var el = document.querySelector('.dot-name');
      if (el) {
        _dotData = null;
        drawFrame(el, _hoverTarget === 1 ? _easeOut(_hoverT) : _easeIn(_hoverT));
      }
    }, 150);
  }

  var _dotNameEl = null;
  var _nameWrap = null;

  function _onNameEnter() { _startHoverAnim(1); }
  function _onNameLeave() { _startHoverAnim(0); }

  // ── Dithered webring icon ──
  var _bayer4 = [
    [0,8,2,10],[12,4,14,6],[3,11,1,9],[15,7,13,5]
  ];
  var WR_GRID = 32;
  var _wrCanvas = null;
  var _wrPixels = null;   // cached Uint8ClampedArray
  var _wrBlobUrl = null;

  // Hover state
  var _wrHoverT = 0;
  var _wrTarget = 0;
  var _wrRafId = null;
  var _wrLastTime = 0;
  var WR_UP = 400;
  var WR_DOWN = 600;

  function _wrDraw(t) {
    if (!_wrCanvas || !_wrPixels) return;
    var G = WR_GRID;
    var dpr = window.devicePixelRatio || 1;
    var cell = dpr;
    var ctx = _wrCanvas.getContext('2d');
    if (!ctx) return;

    var isDark = document.documentElement.getAttribute('saved-theme') === 'dark';
    ctx.clearRect(0, 0, _wrCanvas.width, _wrCanvas.height);

    // idle: muted; hover: only the icon pixels brighten
    var alpha = 0.4 + t * 0.25;
    ctx.fillStyle = isDark
      ? 'rgba(255,255,255,' + alpha + ')'
      : 'rgba(0,0,0,' + alpha + ')';

    for (var y = 0; y < G; y++) {
      for (var x = 0; x < G; x++) {
        var a = _wrPixels[(y * G + x) * 4 + 3] / 255;
        if (a > _bayer4[y % 4][x % 4] / 16) {
          ctx.fillRect(x * cell, y * cell, cell, cell);
        }
      }
    }
  }

  function _wrTick(now) {
    if (!_wrLastTime) _wrLastTime = now;
    var dt = now - _wrLastTime;
    _wrLastTime = now;
    if (_wrTarget === 1) {
      _wrHoverT = Math.min(1, _wrHoverT + dt / WR_UP);
    } else {
      _wrHoverT = Math.max(0, _wrHoverT - dt / WR_DOWN);
    }
    var et = _wrTarget === 1 ? _easeOut(_wrHoverT) : _easeIn(_wrHoverT);
    _wrDraw(et);
    if ((_wrTarget === 1 && _wrHoverT < 1) || (_wrTarget === 0 && _wrHoverT > 0)) {
      _wrRafId = requestAnimationFrame(_wrTick);
    } else {
      _wrRafId = null;
      _wrLastTime = 0;
    }
  }

  function _wrStartAnim(target) {
    _wrTarget = target;
    _wrLastTime = 0;
    if (!_wrRafId) _wrRafId = requestAnimationFrame(_wrTick);
  }

  function _wrEnter() { _wrStartAnim(1); }
  function _wrLeave() { _wrStartAnim(0); }

  var _wrSection = null;

  function _initWebring(canvas) {
    _wrCanvas = canvas;
    var G = WR_GRID;
    var dpr = window.devicePixelRatio || 1;
    var cell = dpr;
    canvas.width = G * cell;
    canvas.height = G * cell;
    canvas.style.width = '22px';
    canvas.style.height = '22px';

    function onPixels(img) {
      var PAD = 4;
      var off = document.createElement('canvas');
      off.width = G; off.height = G;
      var oc = off.getContext('2d');
      oc.drawImage(img, PAD, PAD, G - PAD * 2, G - PAD * 2);
      _wrPixels = oc.getImageData(0, 0, G, G).data;
      _wrDraw(_wrTarget === 1 ? _easeOut(_wrHoverT) : _easeIn(_wrHoverT));
    }

    if (_wrBlobUrl) {
      var img = new Image();
      img.onload = function() { onPixels(img); };
      img.src = _wrBlobUrl;
      return;
    }
    fetch('https://cs.uwatering.com/icon.black.svg')
      .then(function(r) { return r.text(); })
      .then(function(svg) {
        var blob = new Blob([svg], { type: 'image/svg+xml' });
        _wrBlobUrl = URL.createObjectURL(blob);
        var img = new Image();
        img.onload = function() { onPixels(img); };
        img.src = _wrBlobUrl;
      })
      .catch(function() {});
  }

  document.addEventListener("nav", function() {
    // Restart reveal-card animations on SPA navigation
    var cards = document.querySelectorAll('.reveal-card');
    if (cards.length) {
      cards.forEach(function(el) { el.style.animation = 'none'; });
      void document.body.offsetHeight;
      cards.forEach(function(el) { el.style.animation = ''; });
    }

    // Clean up old listeners
    if (_nameWrap) {
      _nameWrap.removeEventListener('mouseenter', _onNameEnter);
      _nameWrap.removeEventListener('mouseleave', _onNameLeave);
    }

    _dotNameEl = document.querySelector('.dot-name');
    _nameWrap = document.querySelector('.landing-name');

    // Reset hover state on nav
    _hoverT = 0;
    _hoverTarget = 0;
    if (_hoverRafId) { cancelAnimationFrame(_hoverRafId); _hoverRafId = null; }
    _hoverLastTime = 0;
    _dotData = null;

    if (_dotNameEl) {
      document.fonts.ready.then(function() {
        drawFrame(_dotNameEl, 0);
      });
    }

    if (_nameWrap) {
      _nameWrap.addEventListener('mouseenter', _onNameEnter);
      _nameWrap.addEventListener('mouseleave', _onNameLeave);
    }

    window.removeEventListener('resize', _handleDotResize);
    window.addEventListener('resize', _handleDotResize);

    // Webring dither setup
    if (_wrSection) {
      _wrSection.removeEventListener('mouseenter', _wrEnter);
      _wrSection.removeEventListener('mouseleave', _wrLeave);
    }
    _wrHoverT = 0; _wrTarget = 0;
    if (_wrRafId) { cancelAnimationFrame(_wrRafId); _wrRafId = null; }
    _wrLastTime = 0; _wrPixels = null;

    var dc = document.querySelector('.webring-dither-canvas');
    _wrSection = document.querySelector('.webring-link');
    if (dc) _initWebring(dc);
    if (_wrSection) {
      _wrSection.addEventListener('mouseenter', _wrEnter);
      _wrSection.addEventListener('mouseleave', _wrLeave);
    }
  });

  document.addEventListener("themechange", function() {
    _dotData = null;
    if (_dotNameEl) drawFrame(_dotNameEl, _hoverTarget === 1 ? _easeOut(_hoverT) : _easeIn(_hoverT));
    _wrPixels = null;
    if (_wrCanvas) _initWebring(_wrCanvas);
  });
`

export default (() => Landing) satisfies QuartzComponentConstructor
