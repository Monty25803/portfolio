import { projects } from "../data/profile";
import { BracketLabel, SectionLink } from "./ui/SectionLabels";
import AnimatedContent from "./reactbits/AnimatedContent";

export default function WorkShowcase() {
  const featured = projects.find((p) => p.featured) || projects[0];
  const others = projects.filter((p) => p.id !== featured?.id);

  return (
    <div>
      <AnimatedContent distance={32} duration={0.5}>
        <BracketLabel>Selected work</BracketLabel>
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="heading-lg max-w-xl text-3xl sm:text-4xl">
            Enterprise systems shipped to <span className="gradient-text">production</span>
          </h2>
          <a href="#github" className="link-arrow shrink-0">All repositories →</a>
        </div>
      </AnimatedContent>

      <div className="bento-grid">
        {featured && (
          <AnimatedContent distance={40} duration={0.6} className="bento-featured">
            <FeaturedCase project={featured} />
          </AnimatedContent>
        )}
        {others.map((project, i) => (
          <AnimatedContent key={project.id} distance={24} duration={0.4} delay={i * 0.05}>
            <CompactCase project={project} />
          </AnimatedContent>
        ))}
      </div>
    </div>
  );
}

function FeaturedCase({ project }) {
  return (
    <article className="card-featured flex h-full flex-col p-6 sm:p-8 lg:p-10">
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <span className="font-mono text-xs text-[var(--color-muted)]">{project.number}</span>
        {project.badge && <span className="tag-accent tag">{project.badge}</span>}
        <span className="tag">{project.status}</span>
      </div>

      <h3 className="heading-lg mb-2 text-2xl sm:text-3xl">{project.title}</h3>
      <p className="mb-4 text-sm text-[var(--color-muted)]">
        {project.client} · {project.role} · {project.period}
      </p>
      <p className="mb-6 max-w-2xl flex-1 text-sm leading-relaxed text-[var(--color-muted)] sm:text-base">
        {project.overview}
      </p>

      {project.metrics && (
        <div className="mb-6 flex flex-wrap gap-3">
          {project.metrics.map((m) => (
            <div key={m.label} className="stat-pill">
              <span className="text-lg font-bold text-[var(--color-highlight)]">{m.value}</span>
              <span className="text-[10px] uppercase tracking-wider text-[var(--color-muted)]">{m.label}</span>
            </div>
          ))}
        </div>
      )}

      <div className="mb-6 flex flex-wrap gap-2">
        {project.techStack.map((t) => (
          <span key={t} className="tag">{t}</span>
        ))}
      </div>

      <div className="flex flex-wrap gap-4 border-t border-[var(--color-border)] pt-5">
        {project.url && <SectionLink href={project.url}>Live platform →</SectionLink>}
        {project.githubUrl && <SectionLink href={project.githubUrl}>GitHub →</SectionLink>}
        <a href={`#case-${project.id}`} className="text-sm text-[var(--color-muted)] hover:text-[var(--color-text)]">
          Full breakdown ↓
        </a>
      </div>
    </article>
  );
}

function CompactCase({ project }) {
  return (
    <article className="card-glow group flex h-full flex-col p-5 sm:p-6">
      <div className="mb-3 flex items-center justify-between">
        <span className="font-mono text-sm text-[var(--color-muted)]">{project.number}</span>
        {project.metrics?.[0] && (
          <span className="text-xs font-semibold text-[var(--color-highlight)]">{project.metrics[0].value}</span>
        )}
      </div>
      <h3 className="mb-2 text-lg font-semibold transition group-hover:text-[var(--color-highlight)]">
        {project.title}
      </h3>
      <p className="mb-3 text-xs text-[var(--color-muted)]">{project.client} · {project.period}</p>
      <p className="mb-4 line-clamp-2 flex-1 text-sm leading-relaxed text-[var(--color-muted)]">
        {project.overview}
      </p>
      <div className="mb-4 flex flex-wrap gap-1.5">
        {project.techStack.slice(0, 3).map((t) => (
          <span key={t} className="tag text-[10px]">{t}</span>
        ))}
      </div>
      <a href={`#case-${project.id}`} className="link-arrow text-sm">Case study →</a>
    </article>
  );
}
