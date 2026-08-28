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
        <div className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="heading-lg max-w-2xl text-3xl font-semibold sm:text-4xl lg:text-[2.75rem]">
            Production systems from architecture to live deployment.
          </h2>
          <a href="#github" className="link-arrow shrink-0">All repositories</a>
        </div>
      </AnimatedContent>

      {featured && (
        <AnimatedContent distance={40} duration={0.6}>
          <FeaturedCase project={featured} />
        </AnimatedContent>
      )}

      <div className="mt-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 sm:px-6">
        {others.map((project, i) => (
          <AnimatedContent key={project.id} distance={24} duration={0.4} delay={i * 0.05}>
            <CompactCase project={project} isLast={i === others.length - 1} />
          </AnimatedContent>
        ))}
      </div>
    </div>
  );
}

function FeaturedCase({ project }) {
  return (
    <article className="card-elevated mb-10 p-6 sm:p-10">
      <div className="mb-5 flex flex-wrap items-center gap-2">
        <span className="font-mono text-sm text-[var(--color-muted)]">{project.number}</span>
        {project.badge && <span className="tag-accent tag">{project.badge}</span>}
        <span className="tag">{project.status}</span>
      </div>

      <h3 className="heading-lg mb-2 text-2xl font-semibold sm:text-3xl">{project.title}</h3>
      <p className="mb-6 text-sm text-[var(--color-muted)]">
        {project.client} · {project.role} · {project.period}
      </p>
      <p className="mb-8 max-w-2xl text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
        {project.overview}
      </p>

      {project.metrics && (
        <div className="mb-8 grid grid-cols-3 gap-3 sm:max-w-md">
          {project.metrics.map((m) => (
            <div key={m.label} className="metric-box">
              <p className="text-xl font-semibold text-[var(--color-highlight)]">{m.value}</p>
              <p className="mt-1 text-[11px] leading-tight text-[var(--color-muted)]">{m.label}</p>
            </div>
          ))}
        </div>
      )}

      <div className="mb-6 flex flex-wrap gap-2">
        {project.techStack.map((t) => (
          <span key={t} className="tag">{t}</span>
        ))}
      </div>

      <div className="flex flex-wrap gap-5 border-t border-[var(--color-border)] pt-6">
        {project.url && <SectionLink href={project.url}>View live platform</SectionLink>}
        {project.githubUrl && <SectionLink href={project.githubUrl}>GitHub</SectionLink>}
        <a href={`#case-${project.id}`} className="text-sm text-[var(--color-muted)] hover:text-[var(--color-text)]">
          Full breakdown ↓
        </a>
      </div>
    </article>
  );
}

function CompactCase({ project, isLast }) {
  return (
    <article className={`work-row grid gap-4 py-7 transition sm:grid-cols-[3rem_1fr_auto] sm:items-center sm:gap-8 ${!isLast ? "work-divider" : ""}`}>
      <span className="font-mono text-lg text-[var(--color-muted)]">{project.number}</span>
      <div className="min-w-0">
        <h3 className="mb-1 text-lg font-semibold sm:text-xl">{project.title}</h3>
        <p className="mb-2 text-sm text-[var(--color-muted)]">{project.client} · {project.period}</p>
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.slice(0, 4).map((t) => (
            <span key={t} className="tag text-[10px]">{t}</span>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-4 sm:flex-col sm:items-end">
        {project.metrics?.[0] && (
          <div className="text-left sm:text-right">
            <p className="font-semibold text-[var(--color-highlight)]">{project.metrics[0].value}</p>
            <p className="text-[10px] text-[var(--color-muted)]">{project.metrics[0].label}</p>
          </div>
        )}
        <a href={`#case-${project.id}`} className="link-arrow text-sm whitespace-nowrap">Case study</a>
      </div>
    </article>
  );
}
