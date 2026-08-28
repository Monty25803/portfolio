import { projects } from "../data/profile";
import AnimatedContent from "./reactbits/AnimatedContent";

export default function WorkShowcase() {
  const featured = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <div>
      <AnimatedContent distance={28} duration={0.5}>
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="display-lg text-4xl sm:text-5xl">Featured Projects</h2>
          <a href="#github" className="link-arrow shrink-0">View all work</a>
        </div>
      </AnimatedContent>

      <div className="grid gap-6 sm:grid-cols-2">
        {featured.map((project, i) => (
          <AnimatedContent key={project.id} distance={24} duration={0.4} delay={i * 0.05}>
            <ProjectCard project={project} />
          </AnimatedContent>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  const initials = project.title
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

  return (
    <article className="card group p-4 sm:p-5">
      <div className="project-card-visual">
        <span>{initials}</span>
      </div>
      <div className="px-1">
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
