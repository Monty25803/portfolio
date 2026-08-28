import { projects } from "../data/profile";
import ProjectScreenshot from "./ProjectScreenshot";
import ScrollReveal, { ScrollRevealGroup } from "./ScrollReveal";

export default function WorkShowcase() {
  const featured = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <div>
      <ScrollReveal distance={36} duration={1}>
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="display-lg text-4xl sm:text-5xl">Featured Projects</h2>
          <a href="#github" className="link-arrow shrink-0">View all work</a>
        </div>
      </ScrollReveal>

      <ScrollRevealGroup className="grid gap-8 sm:grid-cols-2" stagger={0.12}>
        {featured.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ScrollRevealGroup>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="card group overflow-hidden p-0">
      <a
        href={project.url || `#case-${project.id}`}
        target={project.url ? "_blank" : undefined}
        rel={project.url ? "noopener noreferrer" : undefined}
        className="block"
      >
        <ProjectScreenshot project={project} className="rounded-t-[calc(1.25rem-1px)]" />
      </a>
      <div className="p-5 sm:p-6">
        <div className="mb-2 flex flex-wrap gap-2">
          {project.badge && <span className="tag-accent tag text-[10px]">{project.badge}</span>}
          <span className="tag text-[10px]">{project.status}</span>
        </div>
        <h3 className="display-lg mb-2 text-xl">
          {project.url ? (
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="transition hover:opacity-70">
              {project.title}
            </a>
          ) : (
            project.title
          )}
        </h3>
        <p className="mb-3 text-sm text-[var(--color-muted)]">{project.client} · {project.period}</p>
        <p className="line-clamp-2 text-sm leading-relaxed text-[var(--color-muted)]">{project.overview}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.techStack.slice(0, 4).map((t) => (
            <span key={t} className="tag text-[10px]">{t}</span>
          ))}
        </div>
        <a href={`#case-${project.id}`} className="link-arrow mt-4 inline-flex text-sm">
          Full breakdown
        </a>
      </div>
    </article>
  );
}
