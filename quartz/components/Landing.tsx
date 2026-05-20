import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const Landing: QuartzComponent = ({ fileData, allFiles, cfg }: QuartzComponentProps) => {
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
        <h1 class="landing-name">{cfg.pageTitle}</h1>
        <div class="landing-project-quicklinks">
          <span class="landing-sublabel">About</span>
          <p class="landing-subtitle">
            Full-stack engineer building AI-powered products — RAG systems, LLM pipelines, and the
            interfaces on top of them.
          </p>
          <p class="landing-bio">
            Waterloo CS &middot; UBC MDS &middot; Based in Canada &middot; Open to full-stack and AI
            engineer roles.
          </p>
        </div>
        {projects.filter((p) => p.demo).length > 0 && (
          <div class="landing-project-quicklinks">
            <span class="landing-sublabel">Featured Projects</span>
            <div class="landing-featured-pills">
              {projects
                .filter((p) => p.demo)
                .map((p) => (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    class="lp-featured-pill"
                    aria-label={`${p.title} — live demo`}
                  >
                    <span class="lp-live-dot"></span>
                    <span class="quicklink-name">{p.title}</span>
                  </a>
                ))}
            </div>
          </div>
        )}

        <div class="landing-project-quicklinks">
          <span class="landing-sublabel">Contact</span>
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
          {(() => {
            const allTags = Array.from(
              new Set(projects.flatMap((p) => p.tags ?? []).filter((t) => t && t !== "projects")),
            ).sort()
            return (
              <div class="lp-controls reveal-card" style="animation-delay: 0.3s">
                <div class="lp-filters" role="group" aria-label="Filter projects by tag">
                  <button
                    type="button"
                    class="lp-filter-pill is-active"
                    data-filter="all"
                    aria-pressed="true"
                  >
                    All
                  </button>
                  {allTags.map((t) => (
                    <button
                      type="button"
                      class="lp-filter-pill"
                      data-filter={t}
                      aria-pressed="false"
                    >
                      {t}
                    </button>
                  ))}
                </div>
                <div class="lp-sort">
                  <label for="lp-sort-select" class="lp-sort-label">
                    Sort
                  </label>
                  <select id="lp-sort-select" class="lp-sort-select" aria-label="Sort projects">
                    <option value="featured">Featured</option>
                    <option value="az">A → Z</option>
                    <option value="za">Z → A</option>
                  </select>
                </div>
              </div>
            )
          })()}
          <div class="landing-project-grid">
            {projects.map((p, idx) => {
              const cleanTags = (p.tags ?? []).filter((t) => t !== "projects")
              return (
                <div
                  class="lp-card reveal-card"
                  style={`animation-delay: ${0.4 + idx * 0.12}s`}
                  data-tags={cleanTags.join(",")}
                  data-title={(p.title ?? "").toLowerCase()}
                  data-featured={p.demo ? "1" : "0"}
                  data-order={idx}
                >
                  {p.eyebrow && <p class="lp-card-eyebrow">{p.eyebrow}</p>}
                  <h3 class="lp-card-title">{p.title}</h3>
                  {p.description && <p class="lp-card-desc">{p.description}</p>}
                  {cleanTags.length > 0 && (
                    <div class="lp-card-tags">
                      {cleanTags.map((t) => (
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
              )
            })}
            <p class="lp-empty" hidden>
              No projects match this filter.
            </p>
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
  padding: 12px 0 36px;
}

.landing-name {
  position: relative;
  margin: 0 0 1.25rem;
  padding-bottom: 1.25rem;
  opacity: 0;
  animation: fadeIn 0.8s cubic-bezier(0.0, 0, 0.2, 1) 0.1s forwards;
  font-family: var(--font-sans);
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.2;
  color: var(--dark);
}

/* Underline below the name. Spans .center's content width by default;
   extended 2rem on each side on desktop to reach the vertical divider
   (matches .page-header::after and footer::before behavior across widths). */
.landing-name::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 1px;
  background: var(--border);
  pointer-events: none;
}

@media (min-width: 1200px) {
  .landing-name::after {
    left: -2rem;
    right: -2rem;
  }
}


.landing-subtitle {
  font-family: var(--font-sans);
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 1.55;
  letter-spacing: -0.005em;
  color: var(--darkgray);
  margin: 0 0 0.4rem;
}

.landing-bio {
  font-size: 0.82rem;
  line-height: 1.55;
  color: var(--gray);
  margin: 0;
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

/* ── Hero subsections (About, Featured Projects, Contact) ───── */
.landing-project-quicklinks {
  opacity: 0;
  animation: fadeIn 0.8s cubic-bezier(0.0, 0, 0.2, 1) 0.35s forwards;
  margin-bottom: 1.25rem;
}

.landing-project-quicklinks + .landing-project-quicklinks {
  animation-delay: 0.5s;
}

.landing-project-quicklinks + .landing-project-quicklinks + .landing-project-quicklinks {
  animation-delay: 0.65s;
  margin-bottom: 0;
}

.landing-project-quicklinks .landing-links {
  opacity: 1;
  animation: none;
  flex-wrap: wrap;
  row-gap: 0.4rem;
}

.landing-sublabel {
  display: block;
  font-family: var(--font-sans);
  font-size: 0.62rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--gray);
  margin-bottom: 0.3rem;
}

.landing-featured-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  opacity: 0;
  animation: fadeIn 0.8s cubic-bezier(0.0, 0, 0.2, 1) 0.6s forwards;
}

.lp-featured-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.5em;
  font-family: var(--font-sans);
  font-size: 0.78rem;
  font-weight: 500;
  padding: 0.35rem 0.7rem;
  border-radius: 6px;
  border: 1px solid var(--border);
  color: var(--darkgray);
  text-decoration: none;
  background: var(--surface);
  transition:
    border-color 0.18s var(--ease),
    color 0.18s var(--ease);
}

.lp-featured-pill:hover {
  border-color: var(--border-hover);
  color: var(--dark);
}

.lp-featured-pill .lp-live-dot {
  width: 7px;
  height: 7px;
}

.lp-featured-pill::after {
  content: '↗';
  display: inline-block;
  margin-left: 0.05em;
  font-size: 0.95em;
  color: var(--gray);
  transition:
    transform 0.18s var(--ease),
    color 0.18s var(--ease);
}

.lp-featured-pill:hover::after {
  color: var(--dark);
  transform: translate(1px, -1px);
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
  font-size: 1.05rem;
  font-weight: 600;
  letter-spacing: -0.015em;
  line-height: 1.3;
  color: var(--dark);
  margin: 0 0 0.85rem;
}

.landing-section-desc {
  font-size: 0.85rem;
  color: var(--gray);
  line-height: 1.55;
  max-width: 36rem;
  margin: -0.5rem 0 1rem;
}

/* ── Education ─────────────────────────────────────────────── */
.landing-education {
  padding: 2rem 0;
}

.landing-edu-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.edu-item {
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  column-gap: 0.9rem;
  padding: 0.85rem 1rem;
  border-radius: 8px;
  border: 1px solid var(--border);
  background: var(--surface);
  position: relative;
  transition: border-color 0.18s var(--ease);
}
.edu-item:hover {
  border-color: var(--border-hover);
}

.edu-logo {
  width: clamp(36px, 4.5vw, 44px);
  height: clamp(36px, 4.5vw, 44px);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  background: var(--surface);
  border: 1px solid var(--border);
  overflow: hidden;
}

.edu-logo img {
  width: clamp(24px, 3.2vw, 30px);
  height: clamp(24px, 3.2vw, 30px);
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
  font-size: 0.88rem;
  letter-spacing: -0.005em;
  line-height: 1.25;
  color: var(--dark);
}

.edu-meta {
  font-size: 0.78rem;
  color: var(--darkgray);
  margin-top: 1px;
}

.edu-courses {
  margin-top: 0.4rem;
  font-size: 0.78rem;
  color: var(--darkgray);
}

.edu-courses-label {
  font-size: 0.62rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-weight: 600;
  color: var(--gray);
}

.edu-courses ul {
  margin: 0.25rem 0 0;
  padding-left: 1rem;
  list-style: disc;
  display: flex;
  flex-direction: column;
  gap: 1px;
}

.edu-courses li {
  font-size: 0.76rem;
  line-height: 1.4;
  color: var(--gray);
}

.edu-courses li::marker {
  color: var(--border);
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

.lp-controls {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem 0.75rem;
  margin: 0 0 0.9rem;
}

.lp-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.lp-filter-pill {
  font-family: var(--font-sans);
  font-size: 0.75rem;
  font-weight: 500;
  padding: 0.3rem 0.75rem;
  border-radius: 100px;
  border: 1px solid var(--border);
  background: transparent;
  color: var(--gray);
  cursor: pointer;
  transition:
    border-color 0.18s var(--ease),
    color 0.18s var(--ease);
}
.lp-filter-pill:hover {
  border-color: var(--border-hover);
  color: var(--dark);
}
.lp-filter-pill.is-active {
  border-color: var(--border-hover);
  color: var(--dark);
}

.lp-sort {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.lp-sort-label {
  font-family: var(--font-sans);
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--gray);
}

.lp-sort-select {
  font-family: var(--font-sans);
  font-size: 0.78rem;
  font-weight: 500;
  padding: 0.3rem 1.8rem 0.3rem 0.75rem;
  border-radius: 100px;
  border: 1px solid var(--border);
  background: transparent;
  color: var(--darkgray);
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;
  background-image: linear-gradient(45deg, transparent 50%, currentColor 50%),
    linear-gradient(135deg, currentColor 50%, transparent 50%);
  background-position: calc(100% - 14px) 50%, calc(100% - 10px) 50%;
  background-size: 4px 4px, 4px 4px;
  background-repeat: no-repeat;
  transition:
    border-color 0.18s var(--ease),
    color 0.18s var(--ease);
}
.lp-sort-select:hover {
  border-color: var(--border-hover);
  color: var(--dark);
}

.landing-project-grid {
  display: grid;
  gap: 0.65rem;
}

.lp-card.is-hidden {
  display: none;
}

.lp-empty {
  font-family: var(--font-sans);
  font-size: 0.88rem;
  color: var(--gray);
  text-align: center;
  padding: 1.5rem 0;
  margin: 0;
}

.lp-card {
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 1rem 1.15rem;
  background: var(--surface);
  position: relative;
  transition: border-color 0.18s var(--ease);
}
.lp-card:hover {
  border-color: var(--border-hover);
}

.lp-card-eyebrow {
  margin: 0 0 0.2rem;
  font-size: 0.62rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--gray);
}

.lp-card-title {
  margin: 0 0 0.3rem;
  font-family: var(--font-sans);
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: -0.005em;
  line-height: 1.3;
  color: var(--dark);
}

.lp-card-desc {
  margin: 0 0 0.6rem;
  font-family: var(--font-sans);
  font-size: 0.82rem;
  font-weight: 400;
  line-height: 1.5;
  color: var(--gray);
}

.lp-card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
  margin-bottom: 0.6rem;
}
.lp-card-tags span {
  font-family: var(--font-sans);
  font-size: 0.65rem;
  font-weight: 500;
  padding: 0.12rem 0.5rem;
  border-radius: 100px;
  background: var(--surface);
  color: var(--gray);
  border: 1px solid var(--border);
}

.lp-card-links {
  display: flex;
  gap: 0.85rem;
}
.lp-card-links a {
  font-family: var(--font-sans);
  font-size: 0.78rem;
  font-weight: 500;
  color: var(--secondary);
  text-decoration: none;
  transition: color 0.3s var(--ease);
}
.lp-card-links a::after {
  content: '↗';
  display: inline-block;
  margin-left: 0.2em;
  transition: transform 0.3s var(--ease);
}
.lp-card-links a:hover {
  color: var(--dark);
}
.lp-card-links a:hover::after {
  transform: translate(1px, -1px);
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
  padding: 2rem 0 3rem;
}

.landing-explore-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.explore-pill {
  font-family: var(--font-sans);
  font-size: 0.78rem;
  font-weight: 500;
  padding: 0.32rem 0.85rem;
  border-radius: 100px;
  border: 1px solid var(--border);
  color: var(--darkgray);
  text-decoration: none;
  background: transparent;
  transition:
    border-color 0.18s var(--ease),
    color 0.18s var(--ease);
}
.explore-pill:hover {
  border-color: var(--border-hover);
  color: var(--dark);
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
body[data-slug="index"] .page-header {
  margin-top: 0;
}
body[data-slug="index"] .center > article > *:not(.landing) {
  display: none;
}

/* ── Mobile ────────────────────────────────────────────────── */
@media (max-width: 800px) {
  .landing-name { font-size: 1.75rem; }
  .landing-hero { padding: 8px 0 24px; }
  .landing-subtitle { font-size: 0.88rem; line-height: 1.5; }
  .landing-bio { font-size: 0.8rem; }

  .landing-education,
  .landing-projects,
  .landing-explorations { padding: 1.5rem 0; }

  .landing-section-heading { font-size: 1rem; margin-bottom: 0.75rem; }
  .landing-section-desc { font-size: 0.82rem; margin-bottom: 0.85rem; }

  .landing-edu-list { gap: 0.5rem; }
  .edu-item { padding: 0.8rem 0.9rem; }
  .lp-card { padding: 0.9rem 1rem; }

  .landing-project-grid { gap: 0.55rem; }
}

@media (max-width: 520px) {
  .landing-name { font-size: 1.5rem; }
  .landing-hero { padding: 24px 0 20px; }
  .landing-subtitle { font-size: 0.85rem; }
  .landing-bio { font-size: 0.78rem; }
  .landing-links a { font-size: 0.78rem; }
  .landing-section-heading { font-size: 0.95rem; }
}

/* ── Reduced motion ────────────────────────────────────────── */
@media (prefers-reduced-motion: reduce) {
  .landing-name,
  .landing-subtitle,
  .landing-bio,
  .landing-links,
  .landing-project-quicklinks {
    opacity: 1;
    animation: none;
  }
  .lp-live-dot::after {
    animation: none;
  }
  .reveal-card {
    opacity: 1;
    animation: none;
  }
  .edu-item,
  .lp-card {
    transition: none;
  }
}
`

Landing.afterDOMLoaded = `
  function _easeOut(t) { return 1 - Math.pow(1 - t, 3); }
  function _easeIn(t) { return t * t; }

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

  // ── Project filter + sort ──
  function _initProjectControls() {
    var grid = document.querySelector('.landing-project-grid');
    var filters = document.querySelectorAll('.lp-filter-pill');
    var sortSel = document.getElementById('lp-sort-select');
    if (!grid || !filters.length) return;

    var cards = Array.prototype.slice.call(grid.querySelectorAll('.lp-card'));
    var emptyMsg = grid.querySelector('.lp-empty');
    var activeFilter = 'all';
    var activeSort = sortSel ? sortSel.value : 'featured';

    function apply() {
      // Filter
      var visibleCount = 0;
      cards.forEach(function(card) {
        var tags = (card.getAttribute('data-tags') || '').split(',');
        var match = activeFilter === 'all' || tags.indexOf(activeFilter) !== -1;
        card.classList.toggle('is-hidden', !match);
        if (match) visibleCount++;
      });
      if (emptyMsg) emptyMsg.hidden = visibleCount !== 0;

      // Sort — rewrite DOM order
      var sorted = cards.slice().sort(function(a, b) {
        if (activeSort === 'az') {
          return a.getAttribute('data-title').localeCompare(b.getAttribute('data-title'));
        }
        if (activeSort === 'za') {
          return b.getAttribute('data-title').localeCompare(a.getAttribute('data-title'));
        }
        // featured: demos first, then original order
        var fa = a.getAttribute('data-featured') === '1' ? 0 : 1;
        var fb = b.getAttribute('data-featured') === '1' ? 0 : 1;
        if (fa !== fb) return fa - fb;
        return parseInt(a.getAttribute('data-order'), 10) - parseInt(b.getAttribute('data-order'), 10);
      });
      sorted.forEach(function(card) { grid.appendChild(card); });
      if (emptyMsg) grid.appendChild(emptyMsg);
    }

    filters.forEach(function(btn) {
      btn.addEventListener('click', function() {
        activeFilter = btn.getAttribute('data-filter') || 'all';
        filters.forEach(function(b) {
          var on = b === btn;
          b.classList.toggle('is-active', on);
          b.setAttribute('aria-pressed', on ? 'true' : 'false');
        });
        apply();
      });
    });

    if (sortSel) {
      sortSel.addEventListener('change', function() {
        activeSort = sortSel.value;
        apply();
      });
    }

    apply();
  }

  document.addEventListener("nav", function() {
    // Restart reveal-card animations on SPA navigation
    var cards = document.querySelectorAll('.reveal-card');
    if (cards.length) {
      cards.forEach(function(el) { el.style.animation = 'none'; });
      void document.body.offsetHeight;
      cards.forEach(function(el) { el.style.animation = ''; });
    }

    _initProjectControls();

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
    _wrPixels = null;
    if (_wrCanvas) _initWebring(_wrCanvas);
  });
`

export default (() => Landing) satisfies QuartzComponentConstructor
