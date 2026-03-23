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
          Full-stack engineer building AI-powered products — RAG systems, LLM
          pipelines, and the interfaces on top of them.
        </p>
        <p class="landing-bio">
          Waterloo CS &middot; UBC MDS &middot; Based in Canada &middot; Open to
          full-stack and AI engineer roles.
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
              <div class="edu-meta">Jan &ndash; May 2025 &middot; Exchange term in Computer Science</div>
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
          Study notes and technical explorations — machine learning, statistics,
          and systems. Linked through Quartz's knowledge graph.
        </p>
        <div class="landing-explore-links">
          <a href="/Machine-Learning/Supervised-Learning/Supervised-Learning" class="explore-pill reveal-card">
            Machine Learning
          </a>
          <a href="/Statistics/Fundamentals/Random-Variables" class="explore-pill reveal-card">
            Statistics
          </a>
        </div>
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
  max-width: 680px;
  margin: 0 auto;
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
  transition: filter 0.5s var(--ease), opacity 0.5s var(--ease);
}

.landing-name:hover .dot-name {
  filter: brightness(1.4);
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
  function generateDotName(canvas) {
    var text = 'RICHARD HUA';
    var containerW = canvas.parentElement ? canvas.parentElement.clientWidth : 680;
    var dpr = window.devicePixelRatio || 1;

    // Render text to an offscreen canvas to sample its shape
    var offscreen = document.createElement('canvas');
    var fontSize = Math.round(containerW * 0.08);
    var offW = containerW;
    var offH = fontSize * 1.4;
    offscreen.width = offW;
    offscreen.height = offH;
    var offCtx = offscreen.getContext('2d');
    if (!offCtx) return;

    offCtx.font = '700 ' + fontSize + 'px -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif';
    offCtx.fillStyle = '#000';
    offCtx.textBaseline = 'top';
    offCtx.fillText(text, 0, fontSize * 0.15);

    var imageData = offCtx.getImageData(0, 0, offW, offH);
    var pixels = imageData.data;

    // Determine dot grid spacing
    var step = 1.5;
    var dotR = 0.55;
    var gridCols = Math.floor(offW / step);
    var gridRows = Math.floor(offH / step);

    // Size the visible canvas
    var canvasW = gridCols * step;
    var canvasH = gridRows * step;
    canvas.width = Math.round(canvasW * dpr);
    canvas.height = Math.round(canvasH * dpr);
    canvas.style.width = canvasW + 'px';
    canvas.style.height = canvasH + 'px';

    var ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.scale(dpr, dpr);

    var style = getComputedStyle(document.documentElement);
    var color = style.getPropertyValue('--darkgray').trim() || '#888';
    ctx.fillStyle = color;

    // Sample offscreen pixels and draw a dot where the font is filled
    for (var gy = 0; gy < gridRows; gy++) {
      for (var gx = 0; gx < gridCols; gx++) {
        var px = gx * step;
        var py = gy * step;
        var idx = (Math.round(py) * offW + Math.round(px)) * 4;
        if (pixels[idx + 3] > 200) {
          ctx.beginPath();
          ctx.arc(px + step / 2, py + step / 2, dotR, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }
  }

  var _dotResizeTimer;
  function _handleDotResize() {
    clearTimeout(_dotResizeTimer);
    _dotResizeTimer = setTimeout(function() {
      var el = document.querySelector('.dot-name');
      if (el) generateDotName(el);
    }, 150);
  }

  document.addEventListener("nav", function() {
    // Restart reveal-card animations on SPA navigation
    var cards = document.querySelectorAll('.reveal-card');
    if (cards.length) {
      cards.forEach(function(el) { el.style.animation = 'none'; });
      void document.body.offsetHeight;
      cards.forEach(function(el) { el.style.animation = ''; });
    }

    // Generate dot-dithered name
    var dotEl = document.querySelector('.dot-name');
    if (dotEl) {
      document.fonts.ready.then(function() {
        generateDotName(dotEl);
      });
    }

    // Regenerate on resize so dot grid adapts to viewport
    window.removeEventListener('resize', _handleDotResize);
    window.addEventListener('resize', _handleDotResize);
  });

  // Redraw when theme changes so dot color matches
  document.addEventListener("themechange", function() {
    var dotEl = document.querySelector('.dot-name');
    if (dotEl) generateDotName(dotEl);
  });
`

export default (() => Landing) satisfies QuartzComponentConstructor
