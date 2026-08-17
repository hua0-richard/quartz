import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

// 4×3 SVGs from lipis/flag-icons (MIT): https://github.com/lipis/flag-icons
// Background-image, not <img>, so global article image margins/radius don't apply.
function EduFlag({ code, country }: { code: "ca" | "se"; country: string }) {
  return (
    <div
      class="edu-flag"
      data-flag={code}
      title={country}
      role="img"
      aria-label={country}
    />
  )
}

const Landing: QuartzComponent = ({ fileData, allFiles, cfg }: QuartzComponentProps) => {
  const isHomePage = fileData.slug === "index"
  if (!isHomePage) return null

  interface ProjectFrontmatter {
    title?: string
    description?: string
    blurb?: string
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
        {featuredProjects.length > 0 && (
          <div class="landing-project-quicklinks">
            <span class="landing-sublabel">Featured Projects</span>
            <div class="landing-featured-grid">
              {featuredProjects.map((p) => {
                const techStack = (p.tags ?? []).filter((t) => t !== "Projects").slice(0, 3)
                const featuredCopy = p.blurb ?? p.description
                return (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    class="lp-featured-card"
                    aria-label={`${p.title} — live demo`}
                  >
                    <div class="lp-featured-card-top">
                      <span class="lp-featured-title">{p.title ?? "Project"}</span>
                      <span class="lp-card-more" aria-hidden="true">
                        demo <span class="lp-featured-arrow">↗</span>
                      </span>
                    </div>
                    {featuredCopy && <p class="lp-featured-desc">{featuredCopy}</p>}
                    {techStack.length > 0 && (
                      <p class="lp-featured-tech">{techStack.join(" · ")}</p>
                    )}
                  </a>
                )
              })}
            </div>
          </div>
        )}
      </section>

      {/* ── Education ── */}
      <section class="landing-education">
        <span class="landing-sublabel">Education</span>
        <div class="landing-featured-grid landing-edu-list">
          <div class="lp-featured-card edu-item reveal-card">
            <div class="lp-featured-card-top">
              <span class="edu-identity">
                <EduFlag code="ca" country="Canada" />
                <span class="lp-featured-title">University of Waterloo</span>
              </span>
              <span class="edu-meta">
                <span class="edu-years">2020–2025</span>
              </span>
            </div>
            <p class="edu-degree">B.CS in Computer Science</p>
            <p class="edu-courses">Algorithms · Operating Systems · AI</p>
          </div>

          <div class="lp-featured-card edu-item reveal-card">
            <div class="lp-featured-card-top">
              <span class="edu-identity">
                <EduFlag code="se" country="Sweden" />
                <span class="lp-featured-title">Chalmers University of Technology</span>
              </span>
              <span class="edu-meta">
                <span class="edu-years">Jan–May 2025</span>
              </span>
            </div>
            <p class="edu-degree">Exchange term in Computer Science</p>
            <p class="edu-courses">
              Applied Machine Learning · Game Engine Architecture · Agile
            </p>
          </div>

          <div class="lp-featured-card edu-item reveal-card">
            <div class="lp-featured-card-top">
              <span class="edu-identity">
                <EduFlag code="ca" country="Canada" />
                <span class="lp-featured-title">University of British Columbia</span>
              </span>
              <span class="edu-meta">
                <span class="edu-years">2025–2026</span>
              </span>
            </div>
            <p class="edu-degree">MDS in Data Science</p>
            <p class="edu-courses">
              Statistical Learning · ML Systems · Data Visualization
            </p>
          </div>
        </div>
      </section>

      {/* ── Projects ── */}
      {projects.length > 0 && (
        <section class="landing-projects">
          <div class="landing-section-head">
            <span class="landing-sublabel">All Projects</span>
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
          <div class="landing-featured-grid landing-project-grid">
            {projects.map((p, idx) => {
              const cleanTags = (p.tags ?? []).filter((t) => t !== "Projects")
              return (
                <div
                  class="lp-featured-card lp-card reveal-card"
                  style={`animation-delay: ${0.4 + idx * 0.12}s`}
                  data-tags={cleanTags.join(",")}
                  data-title={(p.title ?? "").toLowerCase()}
                  data-featured={p.demo ? "1" : "0"}
                  data-order={idx}
                >
                  <a
                    class="lp-card-hit"
                    href={`/${p.slug}`}
                    aria-label={`${p.title} — about`}
                  ></a>
                  <div class="lp-featured-card-top">
                    <span class="lp-featured-title">{p.title}</span>
                    <span class="lp-card-more" aria-hidden="true">
                      read more <span class="lp-featured-arrow">→</span>
                    </span>
                  </div>
                  {p.description && <p class="lp-featured-desc">{p.description}</p>}
                  {cleanTags.length > 0 && (
                    <p class="lp-featured-tech">{cleanTags.join(" · ")}</p>
                  )}
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
        <span class="landing-sublabel">Explorations</span>
        <div class="landing-featured-grid landing-explore-list">
          <a
            href="/Machine-Learning/Supervised-Learning/Supervised-Learning"
            class="lp-featured-card explore-row reveal-card"
          >
            <div class="lp-featured-card-top">
              <span class="lp-featured-title">Machine Learning</span>
              <span class="lp-featured-arrow" aria-hidden="true">
                →
              </span>
            </div>
          </a>
          <a
            href="/Statistics/Fundamentals/Random-Variables"
            class="lp-featured-card explore-row reveal-card"
          >
            <div class="lp-featured-card-top">
              <span class="lp-featured-title">Statistics</span>
              <span class="lp-featured-arrow" aria-hidden="true">
                →
              </span>
            </div>
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
  padding: 1.25rem 0 0;
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
  margin: 0 0 2.25rem;
  padding-bottom: 1.25rem;
  opacity: 0;
  animation: fadeIn 0.8s cubic-bezier(0.0, 0, 0.2, 1) 0.1s forwards;
}

.landing-name {
  margin: 0;
  font-family: var(--font-sans);
  /* Display: Cursor-style weight 400 + tight tracking (not bold). */
  font-size: 2.5rem;
  font-weight: 400;
  letter-spacing: -0.038em;
  line-height: 1.06;
  color: var(--dark);
  text-wrap: balance;
}

/* Blog quicklink — sits opposite the name, baseline-aligned with it.
   A trailing arrow reads as 'navigate' and slides right on hover. */
.landing-name-blog {
  flex-shrink: 0;
  white-space: nowrap;
  font-family: var(--font-mono);
  font-size: var(--mono-label-size);
  font-weight: 400;
  letter-spacing: var(--mono-label-tracking);
  line-height: 1;
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
  font-size: 0.9375rem;
  font-weight: 400;
  line-height: 1.55;
  letter-spacing: -0.01em;
  color: var(--dark);
  max-width: 48ch;
  margin: 0 0 0.4rem;
}

.landing-bio {
  font-size: 0.78rem;
  line-height: 1.55;
  color: var(--gray);
  opacity: 0.86;
  margin: 0;
}

.landing-project-quicklinks .landing-links {
  opacity: 1;
  animation: none;
  flex-wrap: wrap;
  row-gap: 0.4rem;
  margin-top: 0.65rem;
}

.landing-links {
  display: flex;
  align-items: center;
  gap: 0.95rem;
  flex-wrap: wrap;
  opacity: 0;
  animation: fadeIn 0.8s cubic-bezier(0.0, 0, 0.2, 1) 0.6s forwards;
}

.landing-links a {
  display: inline-flex;
  align-items: center;
  gap: 0.34rem;
  font-family: var(--font-sans);
  font-size: 0.8125rem;
  font-weight: 400;
  line-height: 1.3;
  padding: 0.1rem 0;
  border-radius: 0;
  border: none;
  border-bottom: 1px solid transparent;
  background: transparent;
  color: var(--darkgray);
  text-decoration: none;
  transition:
    color 0.2s var(--ease),
    border-color 0.2s var(--ease);
}

.landing-links a:hover {
  color: var(--dark);
  border-color: color-mix(in oklab, var(--dark) 35%, transparent);
  background: transparent;
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

/* ── Hero subsections (About, Featured Projects) ───────────── */
/* Same section gap as Education / Projects / Explorations. */
.landing-project-quicklinks {
  opacity: 0;
  animation: fadeIn 0.8s cubic-bezier(0.0, 0, 0.2, 1) 0.35s forwards;
  margin: 0 0 2.35rem;
  padding: 0;
}

.landing-project-quicklinks + .landing-project-quicklinks {
  animation-delay: 0.5s;
}

.landing-project-quicklinks + .landing-project-quicklinks + .landing-project-quicklinks {
  animation-delay: 0.65s;
}

.landing-sublabel {
  display: block;
  font-family: var(--font-mono);
  font-size: var(--mono-label-size);
  font-weight: 400;
  letter-spacing: var(--mono-label-tracking);
  line-height: 1rem;
  text-transform: uppercase;
  color: color-mix(in oklab, var(--gray) 82%, var(--bg));
  margin: 0 0 0.7rem;
}

/* Beat .page article … rules. Landing rows used to be <article>, which made
   nested cards inherit article body margins/type and blow past Featured
   (Featured rows are <a>, so they never matched). Keep resets scoped to
   .landing regardless of ancestor article. */
.page .landing .lp-featured-title {
  margin: 0;
  font-family: var(--font-sans);
  font-size: 0.88rem;
  font-weight: 400;
  letter-spacing: -0.015em;
  line-height: 1.3;
  color: var(--dark);
}

.page .landing .lp-featured-desc,
.page .landing .lp-featured-tech {
  margin: 0;
  font-family: var(--font-sans);
  font-size: 0.78rem;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 1.45;
  color: var(--darkgray);
}

.page .landing .lp-featured-desc {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Featured hero rows get their own short blurbs — never clamp them. */
.page .landing .landing-hero .lp-featured-desc {
  display: block;
  -webkit-line-clamp: unset;
  overflow: visible;
}

.page .landing .landing-education .lp-featured-desc,
.page .landing .landing-projects .lp-featured-desc {
  -webkit-line-clamp: 1;
}

.page .landing .lp-featured-tech {
  margin: 0.28rem 0 0;
  font-size: 0.72rem;
  line-height: 1.35;
  color: var(--gray);
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.page .landing .lp-featured-card {
  padding: 0.72rem 0;
  margin: 0;
  max-width: none;
}

.landing-featured-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0;
  border-top: 1px solid var(--border);
}

.landing-project-quicklinks .landing-featured-grid {
  opacity: 0;
  animation: fadeIn 0.8s cubic-bezier(0.0, 0, 0.2, 1) 0.6s forwards;
}

.lp-featured-card {
  display: block;
  text-decoration: none;
  padding: 0.72rem 0;
  min-height: 0;
  border-radius: 0;
  border: none;
  border-bottom: 1px solid var(--border);
  background: transparent;
  transition: color 0.18s var(--ease);
}

.lp-featured-card-top {
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
  margin-bottom: 0.25rem;
}

.lp-featured-title {
  font-family: var(--font-sans);
  font-size: 0.88rem;
  font-weight: 400;
  line-height: 1.3;
  letter-spacing: -0.015em;
  color: var(--dark);
  text-decoration: none;
  transition: color 0.18s var(--ease);
}

a.lp-featured-title:hover {
  color: color-mix(in oklab, var(--dark) 72%, var(--gray));
}

.lp-featured-arrow {
  margin-left: auto;
  font-size: 0.78rem;
  color: var(--gray);
  opacity: 0.7;
  transition:
    transform 0.18s var(--ease),
    color 0.18s var(--ease),
    opacity 0.18s var(--ease);
}

.lp-featured-desc {
  margin: 0;
  font-family: var(--font-sans);
  font-size: 0.78rem;
  line-height: 1.45;
  color: var(--darkgray);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.landing-hero .lp-featured-desc {
  display: block;
  -webkit-line-clamp: unset;
  overflow: visible;
}

.lp-featured-tech {
  margin: 0.28rem 0 0;
  font-family: var(--font-sans);
  font-size: 0.72rem;
  font-weight: 400;
  letter-spacing: 0;
  color: var(--gray);
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.lp-featured-card:hover {
  border-color: var(--border);
  background: transparent;
}

.lp-featured-card:hover .lp-featured-title {
  color: var(--dark);
}

.lp-featured-card:hover .lp-featured-arrow {
  opacity: 1;
  color: var(--dark);
  transform: translate(1px, -1px);
}

.landing-projects .lp-featured-card {
  position: relative;
  cursor: pointer;
}

.landing-projects .lp-card-hit {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.lp-card-more {
  display: inline-flex;
  align-items: baseline;
  gap: 0.28rem;
  margin-left: auto;
  flex-shrink: 0;
  font-family: var(--font-mono);
  font-size: var(--mono-micro-size);
  font-weight: 400;
  letter-spacing: var(--mono-micro-tracking);
  line-height: 1.3;
  text-transform: uppercase;
  color: var(--gray);
  transition: color 0.18s var(--ease);
}

.landing-hero .lp-featured-arrow,
.landing-projects .lp-featured-arrow {
  margin-left: 0;
  opacity: 0.7;
}

.landing-hero .lp-featured-card:hover .lp-card-more {
  color: var(--accent);
}

.landing-hero .lp-featured-card:hover .lp-featured-arrow {
  opacity: 1;
  color: var(--accent);
}

.landing-projects .lp-featured-card:hover .lp-card-more {
  color: var(--accent);
}

.landing-projects .lp-featured-card:hover .lp-featured-title {
  color: color-mix(in oklab, var(--dark) 78%, var(--gray));
}

.landing-projects .lp-featured-card:hover .lp-featured-arrow {
  opacity: 1;
  color: var(--accent);
  transform: translateX(3px);
}

.landing-name-blog:focus-visible,
.landing-links a:focus-visible,
.lp-featured-card:focus-visible,
.lp-card-hit:focus-visible,
.lp-filter-pill:focus-visible,
.lp-sort-select:focus-visible,
a.lp-featured-title:focus-visible,
.lp-card-links a:focus-visible,
.explore-row:focus-visible {
  outline: 2px solid color-mix(in oklab, var(--accent) 50%, transparent);
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
  padding: 1rem 0 3rem;
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

/* ── Education / Projects / Explorations ───────────────────── */
/* Shared section rhythm with About / Featured above. */
.landing-education,
.landing-projects,
.landing-explorations {
  padding: 0;
  margin: 0 0 2.35rem;
}

.landing-explorations {
  margin-bottom: 0;
  padding-bottom: 2.5rem;
}

.landing-section-head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.75rem;
  margin: 0 0 0.7rem;
}

.landing-section-head .landing-sublabel {
  margin: 0;
}

.edu-years {
  margin-left: 0;
  flex-shrink: 0;
  font-family: var(--font-mono);
  font-size: var(--mono-label-size);
  font-weight: 400;
  letter-spacing: 0.02em;
  color: var(--gray);
  font-variant-numeric: tabular-nums;
}

.landing-education .lp-featured-card-top {
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  gap: 1rem;
}

.edu-identity {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  min-width: 0;
}

.edu-meta {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin-left: auto;
  flex-shrink: 0;
}

.edu-flag {
  display: block;
  width: 1.05rem;
  height: 0.7875rem;
  margin: 0;
  border-radius: 0;
  flex-shrink: 0;
  transform: translateY(1px);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  filter: sepia(0.28) saturate(0.78) hue-rotate(-10deg) brightness(0.9);
}

.edu-flag[data-flag="ca"] {
  background-image: url("/static/flags/ca.svg");
}

.edu-flag[data-flag="se"] {
  background-image: url("/static/flags/se.svg");
}

.landing-education .edu-degree,
.landing-education .edu-courses {
  padding-left: calc(1.05rem + 0.5rem);
}

.page .landing .edu-degree,
.edu-degree {
  margin: 0;
  font-family: var(--font-sans);
  font-size: 0.78rem;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 1.45;
  color: var(--darkgray);
}

.page .landing .edu-courses,
.edu-courses {
  margin: 0.28rem 0 0;
  font-family: var(--font-sans);
  font-size: 0.72rem;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 1.35;
  color: var(--gray);
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.landing-education .lp-featured-desc,
.landing-projects .lp-featured-desc {
  -webkit-line-clamp: 1;
}

.lp-card-links {
  display: flex;
  flex-wrap: nowrap;
  gap: 0.35rem;
  align-items: baseline;
  flex-shrink: 0;
  margin: 0 0 0 auto;
  padding: 0;
}
.lp-card-links a {
  display: inline-flex;
  align-items: center;
  font-family: var(--font-mono);
  font-size: var(--mono-micro-size);
  font-weight: 400;
  letter-spacing: var(--mono-micro-tracking);
  line-height: 1.3;
  text-transform: uppercase;
  color: var(--gray);
  text-decoration: none;
  transition: color 0.18s var(--ease);
}
.lp-card-links a:hover {
  color: var(--dark);
}
.lp-card-link-sep {
  font-family: var(--font-mono);
  font-size: var(--mono-micro-size);
  color: color-mix(in oklab, var(--gray) 70%, var(--bg));
  line-height: 1;
  user-select: none;
}
.lp-card-links a[target="_blank"]::after {
  content: "↗";
  display: inline-block;
  margin-left: 0.22em;
  font-size: 0.95em;
  letter-spacing: 0;
  text-transform: none;
  opacity: 0.65;
  transition:
    transform 0.18s var(--ease),
    opacity 0.18s var(--ease);
}
.lp-card-links a[target="_blank"]:hover::after {
  opacity: 1;
  transform: translate(1px, -1px);
}

.lp-sort {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
}

.lp-sort-label {
  font-family: var(--font-sans);
  font-size: 0.72rem;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 1;
  text-transform: none;
  color: var(--gray);
}

.lp-sort-select {
  font-family: var(--font-sans);
  font-size: 0.72rem;
  font-weight: 400;
  padding: 0.1rem 1.2rem 0.1rem 0;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid transparent;
  background: transparent;
  color: var(--darkgray);
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;
  background-image: linear-gradient(45deg, transparent 50%, currentColor 50%),
    linear-gradient(135deg, currentColor 50%, transparent 50%);
  background-position: calc(100% - 2px) 55%, calc(100% + 2px) 55%;
  background-size: 4px 4px, 4px 4px;
  background-repeat: no-repeat;
  transition: color 0.18s var(--ease);
}
.lp-sort-select:hover {
  color: var(--dark);
}

.lp-card.is-hidden {
  display: none;
}

.lp-empty {
  font-family: var(--font-sans);
  font-size: 0.78rem;
  color: var(--gray);
  text-align: left;
  padding: 0.85rem 0;
  margin: 0;
  border-bottom: 1px solid var(--border);
}

@media (max-width: 640px) {
  .lp-featured-card-top {
    flex-wrap: wrap;
    gap: 0.2rem 0.5rem;
  }
  .lp-card-links {
    margin-left: 0;
  }
  .edu-meta {
    margin-left: 0;
  }
}

/* ── Card reveal animation ─────────────────────────────────── */
@keyframes revealUp {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.reveal-card {
  opacity: 0;
  animation: revealUp 0.55s cubic-bezier(0.0, 0, 0.2, 1) forwards;
}

.edu-item.reveal-card:nth-child(1) { animation-delay: 0.35s; }
.edu-item.reveal-card:nth-child(2) { animation-delay: 0.47s; }
.edu-item.reveal-card:nth-child(3) { animation-delay: 0.59s; }

.explore-row.reveal-card:nth-child(1) { animation-delay: 0.35s; }
.explore-row.reveal-card:nth-child(2) { animation-delay: 0.47s; }

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
  .landing-name { font-size: 2.25rem; letter-spacing: -0.038em; line-height: 1.06; }
  .landing-hero { padding: 1rem 0 0; }
  .landing-namerow { margin-bottom: 1.85rem; padding-bottom: 1.1rem; }
  .landing-subtitle { font-size: 0.9rem; line-height: 1.55; }
  .landing-bio { font-size: 0.76rem; }
  .landing-project-quicklinks { margin-bottom: 1.85rem; }

  .landing-education,
  .landing-projects,
  .landing-explorations {
    padding: 0;
    margin-bottom: 1.85rem;
  }

  .landing-section-head {
    margin-bottom: 0.6rem;
  }

  .landing-sublabel {
    margin-bottom: 0.6rem;
  }

  .landing-featured-grid { gap: 0; }
  .lp-featured-card,
  .page .landing .lp-featured-card { padding: 0.65rem 0; }
}

@media (max-width: 520px) {
  .landing-name { font-size: 2rem; }
  .landing-hero { padding: 0.85rem 0 0; }
  .landing-subtitle { font-size: 0.86rem; }
  .landing-bio { font-size: 0.73rem; }
  .landing-links a { font-size: 0.78rem; }
  .landing-project-quicklinks,
  .landing-education,
  .landing-projects,
  .landing-explorations {
    margin-bottom: 1.65rem;
  }
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

  // ── Project sort ──
  function _initProjectControls() {
    var grid = document.querySelector('.landing-project-grid');
    var sortSel = document.getElementById('lp-sort-select');
    if (!grid) return;

    var cards = Array.prototype.slice.call(grid.querySelectorAll('.lp-card'));
    var emptyMsg = grid.querySelector('.lp-empty');
    var activeSort = sortSel ? sortSel.value : 'featured';

    function apply() {
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
      sorted.forEach(function(card) {
        card.classList.remove('is-hidden');
        grid.appendChild(card);
      });
      if (emptyMsg) {
        emptyMsg.hidden = true;
        grid.appendChild(emptyMsg);
      }
    }

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
