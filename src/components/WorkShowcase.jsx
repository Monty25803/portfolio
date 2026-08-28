import { projects } from "../data/profile";
import { BracketLabel, SectionLink } from "./ui/SectionLabels";
import AnimatedContent from "./reactbits/AnimatedContent";

const statusStyles = {
  Ongoing: "border-[var(--color-accent)]/40 bg-[var(--color-accent)]/10 text-[var(--color-accent)]",
  Completed: "border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-muted)]",
};

export default function WorkShowcase() {
  const featured = projects.find((p) => p.featured) || projects[0];
  const others = projects.filter((p) => p.id !== featured?.id).sort((a, b) => (a.number || "").localeCompare(b.number || ""));

  return (
    <div className="mb-16 sm:mb-20">
      <AnimatedContent distance={40} duration={0.6}>
        <BracketLabel className="mb-4">Selected case studies</BracketLabel>
        <div className="mb-10 flex flex-col gap-4 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="editorial-title max-w-3xl text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
            Backend systems, healthcare platforms, and production software — from vision to deployment.
          </h2>
          <a href="#github" className="text-sm text-[var(--color-accent)] hover:underline">
            All GitHub repos →
          </a>
        </div>
      </AnimatedContent>

      {featured && (
        <AnimatedContent distance={50} duration={0.7}>
          <FeaturedCaseStudy project={featured} />
        </AnimatedContent>
      )}

      <div className="mt-4 divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
        {others.map((project, i) => (
          <AnimatedContent key={project.id} distance={40} duration={0.6} delay={i * 0.06}>
            <CompactCaseStudy project={project} />
          </AnimatedContent>
        ))}
      </div>
    </div>
  );
}

function FeaturedCaseStudy({ project }) {
  return (
    <article className="work-featured group">
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <span className="font-mono text-3xl font-bold text-[var(--color-border)] sm:text-4xl">
          {project.number}
        </span>
        {project.badge && (
          <span className="rounded-sm border border-[var(--color-accent)]/40 bg-[var(--color-accent)]/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[var(--color-accent)] sm:text-xs">
            {project.badge}
          </span>
        )}
        <span
          className={`rounded-sm border px-2.5 py-0.5 text-[10px] font-medium sm:text-xs ${statusStyles[project.status]}`}
        >
          {project.status}
        </span>
      </div>

      <h3 className="mb-2 text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">{project.title}</h3>
      <p className="mb-5 text-sm text-[var(--color-muted)]">
        {project.client} · {project.role} · {project.period}
      </p>

      <p className="mb-8 max-w-3xl text-base leading-relaxed text-[var(--color-text)]/90 sm:text-lg">
        {project.overview}
      </p>

      {project.metrics && (
        <div className="mb-8 grid grid-cols-3 gap-3 sm:max-w-xl">
          {project.metrics.map((m) => (
            <div key={m.label} className="metric-cell px-2 py-3 text-center sm:px-4">
              <p className="text-xl font-bold text-[var(--color-accent)] sm:text-2xl">{m.value}</p>
              <p className="text-[10px] leading-tight text-[var(--color-muted)] sm:text-xs">{m.label}</p>
            </div>
          ))}
        </div>
      )}

      <div className="mb-6 flex flex-wrap gap-2">
        {project.techStack.slice(0, 5).map((tech) => (
          <span key={tech} className="tag-chip">
            {tech}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-5">
        {project.url && <SectionLink href={project.url}>View live platform</SectionLink>}
        {project.githubUrl && <SectionLink href={project.githubUrl}>View on GitHub</SectionLink>}
        <a href={`#case-${project.id}`} className="text-sm text-[var(--color-muted)] hover:text-[var(--color-text)]">
          Full case study ↓
        </a>
      </div>
    </article>
  );
}

function CompactCaseStudy({ project }) {
  return (
    <article className="work-row group py-6 sm:py-8">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex min-w-0 gap-4 sm:gap-6">
          <span className="font-mono text-2xl font-bold text-[var(--color-border)] sm:text-3xl">
            {project.number}
          </span>
          <div className="min-w-0">
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <span
                className={`rounded-sm border px-2 py-0.5 text-[10px] font-medium ${statusStyles[project.status]}`}
              >
                {project.status}
              </span>
            </div>
            <h3 className="mb-1 text-lg font-bold tracking-tight transition group-hover:text-[var(--color-accent)] sm:text-xl">
              {project.title}
            </h3>
            <p className="text-sm text-[var(--color-muted)]">
              {project.client} · {project.period}
            </p>
            <p className="mt-3 line-clamp-2 max-w-2xl text-sm leading-relaxed text-[var(--color-muted)]">
              {project.overview}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:items-end lg:text-right">
          {project.metrics && (
            <div className="flex flex-wrap gap-4 lg:justify-end">
              {project.metrics.slice(0, 2).map((m) => (
                <div key={m.label}>
                  <p className="text-lg font-bold text-[var(--color-accent)]">{m.value}</p>
                  <p className="text-[10px] text-[var(--color-muted)]">{m.label}</p>
                </div>
              ))}
            </div>
          )}
          <div className="flex flex-wrap gap-2 lg:justify-end">
            {project.techStack.slice(0, 3).map((tech) => (
              <span key={tech} className="tag-chip text-[10px]">
                {tech}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            {project.url && (
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--color-accent)] hover:underline">
                Live ↗
              </a>
            )}
            <a href={`#case-${project.id}`} className="text-sm text-[var(--color-muted)] hover:text-[var(--color-text)]">
              Case study ↓
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
