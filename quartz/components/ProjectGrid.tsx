import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

interface ProjectFrontmatter {
  title?: string
  description?: string
  eyebrow?: string
  github?: string
  demo?: string
  features?: string[]
}

const ProjectGrid: QuartzComponent = ({ allFiles }: QuartzComponentProps) => {
  const projects = allFiles
    .filter((f) => f.slug?.startsWith("Projects/") && f.slug !== "Projects/index")
    .map((f) => ({
      slug: f.slug!,
      ...(f.frontmatter as unknown as ProjectFrontmatter),
    }))

  if (projects.length === 0) return null

  return (
    <div class="project-grid">
      {projects.map((p) => (
        <article class="project-card">
          <div class="project-card-header">
            {p.eyebrow && <p class="project-card-eyebrow">{p.eyebrow}</p>}
            <h3>{p.title}</h3>
          </div>
          {p.description && <p>{p.description}</p>}
          {p.features && p.features.length > 0 && (
            <ul class="project-feature-list">
              {p.features.map((feature) => (
                <li>{feature}</li>
              ))}
            </ul>
          )}
          <div class="project-links">
            <a class="project-link project-link-primary" href={`/${p.slug}`}>
              Read writeup
            </a>
            {p.github && (
              <a class="project-link" href={p.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            )}
            {p.demo && (
              <a class="project-link" href={p.demo} target="_blank" rel="noreferrer">
                Live demo
              </a>
            )}
          </div>
        </article>
      ))}
    </div>
  )
}

export default (() => ProjectGrid) satisfies QuartzComponentConstructor
