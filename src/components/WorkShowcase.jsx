import { projects } from "../data/profile";
import { BracketLabel, SectionLink } from "./ui/SectionLabels";
import AnimatedContent from "./reactbits/AnimatedContent";

export default function WorkShowcase() {
  const featured = projects.find((p) => p.featured) || projects[0];
  const others = projects.filter((p) => p.id !== featured?.id);

  return (
    <div>
      <AnimatedContent distance={32} duration={0.5}>
        <BracketLabel>Selected case studies</BracketLabel>
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="heading-lg max-w-3xl text-3xl font-semibold sm:text-4xl">
            Backend systems and production platforms — from architecture to deployment.
          </h2>
          <a href="#github" className="link-arrow shrink-0">
            All repositories
          </a>
        </div>
      </AnimatedContent>

      {featured && (
        <AnimatedContent distance={40} duration={0.6}>
          <FeaturedCase project={featured} />
        </AnimatedContent>
      )}

      <div className="mt-2">
        {others.map((project, i) => (
          <AnimatedContent key={project.id} distance={32} duration={0.5} delay={i * 0.05}>
            <CompactCase project={project} />
          </AnimatedContent>
        ))}
      </div>
    </div>
  );
}

function FeaturedCase({ project }) {
  return (
    <article className="mb-8 pb-8">
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <span className="font-mono text-sm text-[var(--color-muted)]">{project.number}</span>
        {project.badge && <span className="tag-accent tag">{project.badge}</span>}
        <span className="tag">{project.status}</span>
      </div>

      <h3 className="heading-lg mb-2 text-2xl font-semibold sm:text-3xl">{project.title}</h3>
      <p className="mb-5 text-sm text-[var(--color-muted)]">
        {project.client} · {project.role} · {project.period}
      </p>
      <p className="mb-8 max-w-3xl text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
        {project.overview}
      </p>

      {project.metrics && (
        <div className="mb-8 grid grid-cols-3 gap-3 sm:max-w-lg">
          {project.metrics.map((m) => (
            <div key={m.label} className="metric-box">
              <p className="text-xl font-semibold text-[var(--color-highlight)]">{m.value}</p>
              <p className="mt-1 text-[11px] text-[var(--color-muted)]">{m.label}</p>
            </div>
          ))}
        </div>
      )}

      <div className="mb-6 flex flex-wrap gap-2">
        {project.techStack.slice(0, 5).map((t) => (
          <span key={t} className="tag">
            {t}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-5">
        {project.url && <SectionLink href={project.url}>View live platform</SectionLink>}
        {project.githubUrl && <SectionLink href={project.githubUrl}>GitHub</SectionLink>}
        <a href={`#case-${project.id}`} className="text-sm text-[var(--color-muted)] hover:text-[var(--color-text)]">
          Full case study ↓
        </a>
      </div>
    </article>
  );
}

function CompactCase({ project }) {
  return (
    <article className="work-divider grid gap-4 py-8 sm:grid-cols-[auto_1fr_auto] sm:items-start sm:gap-8">
      <span className="font-mono text-lg text-[var(--color-muted)]">{project.number}</span>
      <div>
        <h3 className="mb-1 text-lg font-semibold sm:text-xl">{project.title}</h3>
        <p className="mb-2 text-sm text-[var(--color-muted)]">
          {project.client} · {project.period}
        </p>
        <p className="line-clamp-2 text-sm leading-relaxed text-[var(--color-muted)]">{project.overview}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.techStack.slice(0, 3).map((t) => (
            <span key={t} className="tag text-[11px]">
              {t}
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-start gap-2 sm:items-end">
        {project.metrics?.slice(0, 1).map((m) => (
          <div key={m.label} className="text-right">
            <p className="font-semibold text-[var(--color-highlight)]">{m.value}</p>
            <p className="text-[11px] text-[var(--color-muted)]">{m.label}</p>
          </div>
        ))}
        <a href={`#case-${project.id}`} className="link-arrow text-sm">
          Case study
        </a>
      </div>
    </article>
  );
}
