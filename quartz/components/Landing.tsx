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
  const featuredProjects = projects.filter((p) => p.demo)

  return (
    <div class="landing">
      {/* ── Hero ── */}
      <section class="landing-hero">
        <div class="landing-namerow">
          <h1 class="landing-name">{cfg.pageTitle}</h1>
          <a href="/Blog" class="landing-name-blog">
            Blog
          </a>
        </div>
        <div class="landing-project-quicklinks">
          <span class="landing-sublabel">About</span>
          <p class="landing-subtitle">
            Full-stack engineer interested in machine learning, systems, and product design.
          </p>
          <p class="landing-bio">
            Waterloo CS &middot; UBC MDS &middot; Based in Canada &middot; Open to software engineer
            roles.
          </p>
        </div>
        {featuredProjects.length > 0 && (
          <div class="landing-project-quicklinks">
            <span class="landing-sublabel">Featured Projects</span>
            <div class="landing-featured-grid">
              {featuredProjects.map((p) => {
                const techStack = (p.tags ?? []).filter((t) => t !== "projects").slice(0, 3)
                return (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    class="lp-featured-card"
                    aria-label={`${p.title} — live demo`}
                  >
                    <div class="lp-featured-card-top">
                      <span class="lp-live-dot" aria-hidden="true"></span>
                      <span class="lp-featured-title">{p.title ?? "Project"}</span>
                      <span class="lp-featured-arrow" aria-hidden="true">
                        ↗
                      </span>
                    </div>
                    {p.description && <p class="lp-featured-desc">{p.description}</p>}
                    {techStack.length > 0 && (
                      <p class="lp-featured-tech">{techStack.join(" · ")}</p>
                    )}
                  </a>
                )
              })}
            </div>
          </div>
        )}

        <div class="landing-project-quicklinks">
          <span class="landing-sublabel">Contact</span>
          <div class="landing-links">
            <a href="mailto:hua.richard0@gmail.com">
              <svg
                class="landing-link-icon"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z" />
                <path d="m19 8.839-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z" />
              </svg>
              Email
            </a>
            <a href="https://github.com/hua0-richard" target="_blank" rel="noreferrer">
              <svg
                class="landing-link-icon"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/richard0hua/" target="_blank" rel="noreferrer">
              <svg
                class="landing-link-icon"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
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
              <span
                class="edu-logo-chalmers"
                role="img"
                aria-label="Chalmers University of Technology"
              ></span>
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
                class="edu-logo-ubc"
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
                        <span class="lp-live-dot" aria-hidden="true"></span>
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
  padding: 18px 0 2.15rem;
}

/* Name + Blog quicklink row. The row carries the underline and bottom
   spacing so the rule spans the full content width even though
   .landing-name shrinks to its text width as a flex item. */
.landing-namerow {
  position: relative;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
  margin: 0 0 1.65rem;
  padding-bottom: 1.35rem;
  opacity: 0;
  animation: fadeIn 0.8s cubic-bezier(0.0, 0, 0.2, 1) 0.1s forwards;
}

.landing-name {
  margin: 0;
  font-family: var(--font-sans);
  /* Matches the header type system (.article-title): same weight, tracking
     and line-height, sized one clear step above content-page titles since
     this is the homepage's lead heading. One fixed size per breakpoint —
     overrides below at 800px and 520px. */
  font-size: 2.4rem;
  font-weight: 640;
  letter-spacing: -0.022em;
  line-height: 1.14;
  color: var(--dark);
}

/* Blog quicklink — sits opposite the name, baseline-aligned with it.
   A trailing arrow reads as 'navigate' and slides right on hover. */
.landing-name-blog {
  flex-shrink: 0;
  white-space: nowrap;
  font-family: var(--font-sans);
  font-size: 0.74rem;
  font-weight: 500;
  letter-spacing: 0.06em;
  line-height: 1.2;
  text-transform: uppercase;
  color: color-mix(in oklab, var(--gray) 86%, var(--bg));
  text-decoration-line: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 0.18em;
  text-decoration-color: transparent;
  transition:
    color 0.2s var(--ease),
    text-decoration-color 0.2s var(--ease);
}

.landing-name-blog::after {
  content: "↗";
  display: inline-block;
  margin-left: 0.3em;
  font-size: 0.94em;
  color: var(--gray);
  transition: color 0.18s var(--ease);
}

.landing-name-blog:hover {
  color: var(--darkgray);
  text-decoration-color: color-mix(in oklab, var(--darkgray) 45%, transparent);
}

.landing-name-blog:hover::after {
  color: var(--darkgray);
}

.landing-name-blog:focus-visible {
  text-decoration-line: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 0.18em;
  text-decoration-color: color-mix(in oklab, var(--darkgray) 45%, transparent);
}

/* Underline below the name row. Spans .center's content width by default;
   extended 2rem on each side on desktop to reach the vertical divider
   (matches .page-header::after and footer::before behavior across widths). */
.landing-namerow::after {
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
  .landing-namerow::after {
    left: -2rem;
    right: -2rem;
  }
}


.landing-subtitle {
  font-family: var(--font-sans);
  font-size: 0.98rem;
  font-weight: 400;
  line-height: 1.62;
  letter-spacing: -0.01em;
  color: var(--dark);
  max-width: 48ch;
  margin: 0 0 0.5rem;
}

.landing-bio {
  font-size: 0.78rem;
  line-height: 1.6;
  color: var(--gray);
  opacity: 0.86;
  margin: 0;
}

.landing-links {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  flex-wrap: wrap;
  opacity: 0;
  animation: fadeIn 0.8s cubic-bezier(0.0, 0, 0.2, 1) 0.6s forwards;
}

.landing-links a {
  display: inline-flex;
  align-items: center;
  gap: 0.34rem;
  font-family: var(--font-sans);
  font-size: 0.8rem;
  font-weight: 500;
  line-height: 1.3;
  padding: 0.34rem 0.62rem;
  border-radius: 6px;
  border: 1px solid color-mix(in oklab, var(--border) 84%, var(--bg));
  background: color-mix(in oklab, var(--surface) 70%, transparent);
  color: var(--darkgray);
  text-decoration: none;
  transition:
    color 0.2s var(--ease),
    border-color 0.2s var(--ease),
    background-color 0.2s var(--ease);
}

.landing-links a:hover {
  color: var(--dark);
  border-color: var(--border-hover);
  background: color-mix(in oklab, var(--surface-hover) 88%, var(--surface));
}

.landing-link-icon {
  width: 0.74rem;
  height: 0.74rem;
  flex-shrink: 0;
  opacity: 0.55;
  transition: opacity 0.2s var(--ease);
}

.landing-links a:hover .landing-link-icon {
  opacity: 0.8;
}

/* ── Hero subsections (About, Featured Projects, Contact) ───── */
.landing-project-quicklinks {
  opacity: 0;
  animation: fadeIn 0.8s cubic-bezier(0.0, 0, 0.2, 1) 0.35s forwards;
  margin-bottom: 1.35rem;
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
  font-size: 0.58rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: color-mix(in oklab, var(--gray) 82%, var(--bg));
  margin-bottom: 0.42rem;
}

.landing-featured-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 0.6rem;
  opacity: 0;
  animation: fadeIn 0.8s cubic-bezier(0.0, 0, 0.2, 1) 0.6s forwards;
}

.lp-featured-card {
  display: block;
  text-decoration: none;
  padding: 0.68rem 0.78rem 0.72rem;
  min-height: 92px;
  border-radius: 8px;
  border: 1px solid color-mix(in oklab, var(--border) 90%, var(--bg));
  background: color-mix(in oklab, var(--surface) 92%, transparent);
  transition: var(--card-transition);
}

.lp-featured-card-top {
  display: flex;
  align-items: center;
  gap: 0.36rem;
  margin-bottom: 0.28rem;
}

.lp-featured-title {
  font-family: var(--font-sans);
  font-size: 0.83rem;
  font-weight: 540;
  line-height: 1.35;
  letter-spacing: -0.01em;
  color: var(--dark);
}

.lp-featured-arrow {
  margin-left: auto;
  font-size: 0.78rem;
  color: var(--darkgray);
  opacity: 0.55;
  transition:
    transform 0.18s var(--ease),
    color 0.18s var(--ease),
    opacity 0.18s var(--ease);
}

.lp-featured-desc {
  margin: 0;
  font-family: var(--font-sans);
  font-size: 0.75rem;
  line-height: 1.45;
  color: var(--darkgray);
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.lp-featured-tech {
  margin: 0.25rem 0 0;
  font-family: var(--font-mono);
  font-size: 0.64rem;
  letter-spacing: 0.012em;
  color: var(--gray);
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.lp-featured-card:hover {
  border-color: var(--border-hover);
  background: color-mix(in oklab, var(--surface-hover) 92%, var(--surface));
}

.lp-featured-card:hover .lp-featured-arrow {
  opacity: 1;
  transform: translate(1px, -1px);
}

.lp-featured-card .lp-live-dot {
  width: 6px;
  height: 6px;
}

.landing-name-blog:focus-visible,
.landing-links a:focus-visible,
.lp-featured-card:focus-visible,
.lp-filter-pill:focus-visible,
.lp-sort-select:focus-visible,
.lp-card-links a:focus-visible,
.explore-pill:focus-visible {
  outline: 2px solid color-mix(in oklab, var(--secondary) 50%, transparent);
  outline-offset: 2px;
}

@media (max-width: 720px) {
  .landing-featured-grid {
    grid-template-columns: 1fr;
  }
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
  font-size: 1.14rem;
  font-weight: 620;
  letter-spacing: -0.018em;
  line-height: 1.3;
  color: var(--dark);
  margin: 0 0 1.05rem;
}

.landing-section-desc {
  font-size: 0.84rem;
  color: var(--gray);
  line-height: 1.6;
  max-width: 36rem;
  margin: -0.4rem 0 1.1rem;
}

/* ── Education ─────────────────────────────────────────────── */
.landing-education {
  padding: 2.15rem 0;
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
  border: 1px solid color-mix(in oklab, var(--border) 88%, var(--bg));
  background: color-mix(in oklab, var(--surface) 95%, transparent);
  position: relative;
  transition: var(--card-transition);
}
.edu-item:hover {
  border-color: var(--border-hover);
  background: color-mix(in oklab, var(--surface-hover) 92%, var(--surface));
}

.edu-logo {
  width: clamp(36px, 4.5vw, 44px);
  height: clamp(36px, 4.5vw, 44px);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  /* satin aluminum plate — smooth cool color gradient (sheen overlaid via ::after) */
  background: linear-gradient(
    135deg,
    #e8ebee 0%,
    #d4d8dd 45%,
    #e0e4e8 65%,
    #ccd1d6 100%
  );
  border: none;
}

:root[saved-theme="dark"] .edu-logo {
  /* satin space black — smooth graphite (sheen overlaid via ::after) */
  background: linear-gradient(
    135deg,
    #2a2a2c 0%,
    #1e1d1f 45%,
    #232224 65%,
    #171618 100%
  );
}

/* shared satin sheen painted over the whole tile — logo catches the same
   highlight as the metal, so it reads as painted on rather than pasted on */
.edu-logo::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
  z-index: 2;
  background:
    radial-gradient(circle at 27% 20%, rgba(255, 255, 255, 0.42), transparent 45%),
    linear-gradient(
      120deg,
      rgba(255, 255, 255, 0.42) 0%,
      rgba(255, 255, 255, 0.08) 20%,
      transparent 42%,
      transparent 62%,
      rgba(255, 255, 255, 0.18) 84%,
      rgba(255, 255, 255, 0.34) 100%
    );
}

:root[saved-theme="dark"] .edu-logo::after {
  background:
    radial-gradient(circle at 27% 20%, rgba(255, 255, 255, 0.18), transparent 45%),
    linear-gradient(
      120deg,
      rgba(255, 255, 255, 0.13) 0%,
      rgba(255, 255, 255, 0.03) 20%,
      transparent 42%,
      transparent 62%,
      rgba(255, 255, 255, 0.06) 84%,
      rgba(255, 255, 255, 0.11) 100%
    );
}

/* logos sit on a brand-colored disc inside the metal rim; sheen overlays so
   they read as painted onto the medallion */
/* Waterloo seal paints straight onto the metal — no disc */
.edu-logo img {
  width: clamp(22px, 3vw, 28px);
  height: clamp(22px, 3vw, 28px);
  object-fit: contain;
  margin: 0;
  box-sizing: border-box;
  border-radius: 50%;
  /* desaturated — colors still read, but muted for the metal palette */
  filter: grayscale(0.55) saturate(0.9);
  opacity: 1;
}

/* Chalmers — teal disc is drawn as ::before on the tile; the black seal sits on
   top at reduced opacity so it picks up the teal behind it, landing on a deep
   teal that's legible but neither pure black nor white. */
.edu-logo:has(.edu-logo-chalmers)::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: clamp(22px, 3vw, 28px);
  height: clamp(22px, 3vw, 28px);
  border-radius: 50%;
  background: #5cbbb5;
  filter: grayscale(0.5) saturate(0.85);
  z-index: 0;
}

.edu-logo .edu-logo-chalmers {
  width: clamp(22px, 3vw, 28px);
  height: clamp(22px, 3vw, 28px);
  position: relative;
  z-index: 1;
  /* render the seal artwork in a flat colour via mask, so the tint is exact */
  background-color: #f3efe4; /* soft off-white — warm, pairs cleanly with the teal */
  -webkit-mask: url(/static/chalmers-emblem.png) center / auto 86% no-repeat;
  mask: url(/static/chalmers-emblem.png) center / auto 86% no-repeat;
  /* hairline dark halo so the fine off-white strokes separate from the teal */
  filter: drop-shadow(0 0 0.4px rgba(0, 40, 38, 0.7));
}

/* UBC Okanagan — sky-blue field with soft clouds, shield inscribed */
.edu-logo img.edu-logo-ubc {
  background:
    radial-gradient(ellipse 55% 32% at 32% 78%, rgba(255, 255, 255, 0.95), transparent 60%),
    radial-gradient(ellipse 48% 30% at 68% 86%, rgba(255, 255, 255, 0.85), transparent 58%),
    radial-gradient(ellipse 60% 34% at 52% 93%, rgba(255, 255, 255, 0.8), transparent 60%),
    linear-gradient(180deg, #79c4ee 0%, #a6d9f1 100%);
  padding: 6%;
  filter: grayscale(0.5) saturate(0.85);
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
  font-size: 0.75rem;
  color: var(--gray);
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
  padding: 2.15rem 0;
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
  font-size: 0.73rem;
  font-weight: 500;
  padding: 0.32rem 0.78rem;
  border-radius: 4px;
  border: 1px solid var(--border);
  background: color-mix(in oklab, var(--surface) 70%, transparent);
  color: var(--gray);
  cursor: pointer;
  transition:
    border-color 0.18s var(--ease),
    color 0.18s var(--ease),
    background-color 0.18s var(--ease);
}
.lp-filter-pill:hover {
  border-color: var(--border-hover);
  color: var(--dark);
}
.lp-filter-pill.is-active {
  border-color: color-mix(in oklab, var(--border-hover) 85%, var(--secondary));
  background: color-mix(in oklab, var(--secondary) 12%, var(--surface));
  color: var(--dark);
}

.lp-sort {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.lp-sort-label {
  font-family: var(--font-sans);
  font-size: 0.62rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: color-mix(in oklab, var(--gray) 86%, var(--bg));
}

.lp-sort-select {
  font-family: var(--font-sans);
  font-size: 0.78rem;
  font-weight: 500;
  padding: 0.3rem 1.8rem 0.3rem 0.75rem;
  border-radius: 4px;
  border: 1px solid color-mix(in oklab, var(--border) 86%, var(--bg));
  background: color-mix(in oklab, var(--surface) 72%, transparent);
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
  gap: 0.72rem;
  grid-template-columns: repeat(1, minmax(0, 1fr));
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
  border: 1px solid color-mix(in oklab, var(--border) 86%, var(--bg));
  border-radius: 8px;
  padding: 0.92rem 1rem 0.96rem;
  min-height: 154px;
  background: color-mix(in oklab, var(--surface) 92%, transparent);
  position: relative;
  transition: var(--card-transition);
}
.lp-card:hover {
  border-color: var(--border-hover);
  background: color-mix(in oklab, var(--surface-hover) 92%, var(--surface));
}

.lp-card-eyebrow {
  margin: 0 0 0.2rem;
  font-size: 0.58rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--gray);
}

.lp-card-title {
  margin: 0 0 0.32rem;
  font-family: var(--font-sans);
  font-size: 0.98rem;
  font-weight: 620;
  letter-spacing: -0.012em;
  line-height: 1.26;
  color: var(--dark);
}

.lp-card-desc {
  margin: 0 0 0.62rem;
  font-family: var(--font-sans);
  font-size: 0.8rem;
  font-weight: 400;
  line-height: 1.52;
  color: var(--darkgray);
}

.lp-card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
  margin-bottom: 0.6rem;
}
.lp-card-tags span {
  font-family: var(--font-sans);
  font-size: 0.62rem;
  font-weight: 500;
  padding: 0.1rem 0.45rem;
  border-radius: 4px;
  background: color-mix(in oklab, var(--surface) 75%, transparent);
  color: var(--gray);
  border: 1px solid color-mix(in oklab, var(--border) 78%, var(--bg));
}
.lp-card-tags span::before {
  content: "#";
  margin-right: 0.1em;
  color: color-mix(in oklab, var(--gray) 60%, transparent);
}

.lp-card-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.95rem;
  align-items: center;
  margin-top: 0.25rem;
}
/* Plain text links — no chrome, so the card border is the only enclosed box.
   External links get a trailing ↗ as the affordance. */
.lp-card-links a {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  font-family: var(--font-sans);
  font-size: 0.76rem;
  font-weight: 500;
  line-height: 1.3;
  color: var(--darkgray);
  text-decoration: none;
  transition: color 0.18s var(--ease);
}
.lp-card-links a:hover {
  color: var(--dark);
}
.lp-card-links a[target="_blank"]::after {
  content: '↗';
  display: inline-block;
  margin-left: 0.05em;
  color: currentColor;
  opacity: 0.55;
  transition:
    transform 0.25s var(--ease),
    opacity 0.25s var(--ease);
}
.lp-card-links a[target="_blank"]:hover::after {
  opacity: 0.95;
  transform: translate(1px, -1px);
}

.lp-link-demo {
  display: inline-flex !important;
  align-items: center;
  gap: 0.4em;
}

@keyframes live-breathe {
  0%, 100% { box-shadow: 0 0 2px rgba(92, 155, 130, 0.4), 0 0 5px rgba(92, 155, 130, 0.18); }
  50%      { box-shadow: 0 0 4px rgba(92, 155, 130, 0.65), 0 0 11px rgba(92, 155, 130, 0.36); }
}
.lp-live-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #5C9B82; /* verdigris — oxidized-copper green */
  /* static fallback glow — kept when motion is reduced */
  box-shadow: 0 0 3px rgba(92, 155, 130, 0.5), 0 0 8px rgba(92, 155, 130, 0.25);
  flex-shrink: 0;
  position: relative;
  animation: live-breathe 2.6s ease-in-out infinite;
}

/* ── Explorations ──────────────────────────────────────────── */
.landing-explorations {
  padding: 2.15rem 0 3.1rem;
}

.landing-explore-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.explore-pill {
  font-family: var(--font-sans);
  font-size: 0.76rem;
  font-weight: 500;
  padding: 0.36rem 0.88rem;
  border-radius: 100px;
  border: 1px solid color-mix(in oklab, var(--border) 82%, var(--bg));
  color: var(--darkgray);
  text-decoration: none;
  background: color-mix(in oklab, var(--surface) 68%, transparent);
  transition:
    border-color 0.18s var(--ease),
    color 0.18s var(--ease),
    background-color 0.18s var(--ease);
}
.explore-pill:hover {
  border-color: var(--border-hover);
  background: color-mix(in oklab, var(--surface-hover) 85%, var(--surface));
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
  .landing-name { font-size: 2.25rem; }
  .landing-hero { padding: 14px 0 28px; }
  .landing-subtitle { font-size: 0.92rem; line-height: 1.58; }
  .landing-bio { font-size: 0.76rem; }

  .landing-education,
  .landing-projects,
  .landing-explorations { padding: 1.5rem 0; }

  .landing-section-heading { font-size: 1rem; margin-bottom: 0.75rem; }
  .landing-section-desc { font-size: 0.82rem; margin-bottom: 0.85rem; }

  .landing-edu-list { gap: 0.5rem; }
  .edu-item { padding: 0.8rem 0.9rem; }
  .lp-card { padding: 0.9rem 1rem; }
  .landing-featured-grid { gap: 0.5rem; }

  .landing-project-grid { gap: 0.55rem; }
  .lp-card { min-height: 0; }
}

@media (max-width: 520px) {
  .landing-name { font-size: 1.82rem; }
  .landing-hero { padding: 16px 0 22px; }
  .landing-subtitle { font-size: 0.86rem; }
  .landing-bio { font-size: 0.73rem; }
  .landing-links a { font-size: 0.78rem; }
  .landing-section-heading { font-size: 0.95rem; }
}

/* ── Reduced motion ────────────────────────────────────────── */
@media (prefers-reduced-motion: reduce) {
  .landing-namerow,
  .landing-subtitle,
  .landing-bio,
  .landing-links,
  .landing-project-quicklinks {
    opacity: 1;
    animation: none;
  }
  .lp-live-dot {
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
