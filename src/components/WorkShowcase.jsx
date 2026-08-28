import { projects } from "../data/profile";
import { SectionHeader } from "./About";
import { BracketLabel, SectionLink } from "./ui/SectionLabels";
import AnimatedContent from "./reactbits/AnimatedContent";
import SpotlightCard from "./reactbits/SpotlightCard";

const statusStyles = {
  Ongoing: "border-[var(--color-accent)]/40 bg-[var(--color-accent)]/10 text-[var(--color-accent)]",
  Completed: "border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-muted)]",
};

export default function WorkShowcase() {
  const sorted = [...projects].sort((a, b) => (a.number || "").localeCompare(b.number || ""));

  return (
    <div className="mb-20">
      <AnimatedContent distance={40} duration={0.6}>
        <BracketLabel className="mb-4">Selected case studies</BracketLabel>
        <SectionHeader
          compact
          label="Work"
          title="Systems I've built"
          subtitle="Production platforms, healthcare backends, and client onboarding — from architecture to live deployment."
        />
      </AnimatedContent>

      <div className="space-y-6 sm:space-y-8">
        {sorted.map((project, i) => (
          <AnimatedContent key={project.id} distance={50} duration={0.7} delay={i * 0.08}>
            <CaseStudyCard project={project} />
          </AnimatedContent>
        ))}
      </div>
    </div>
  );
}

function CaseStudyCard({ project }) {
  const isFeatured = project.featured;

  return (
    <SpotlightCard
      className={`work-card group overflow-hidden ${
        isFeatured ? "border-[var(--color-accent)]/35 ring-1 ring-[var(--color-accent)]/10" : ""
      }`}
      spotlightColor="rgba(220, 38, 38, 0.12)"
    >
      <article className="grid min-w-0 gap-6 p-5 sm:p-7 lg:grid-cols-[auto_1fr] lg:gap-10 lg:p-8">
        <div className="flex lg:flex-col lg:items-start lg:gap-4">
          <span className="work-index font-mono text-4xl font-bold text-[var(--color-border)] sm:text-5xl">
            {project.number}
          </span>
        </div>

        <div className="min-w-0">
          <div className="mb-4 flex flex-wrap items-center gap-2">
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

          <h3 className="mb-1 text-xl font-bold tracking-tight sm:text-2xl lg:text-3xl">{project.title}</h3>
          <p className="mb-4 text-sm text-[var(--color-muted)]">
            {project.client} · {project.role} · {project.period}
          </p>

          <p className="mb-6 max-w-3xl text-sm leading-relaxed text-[var(--color-text)]/90 sm:text-base">
            {project.overview}
          </p>

          {project.metrics && (
            <div className="mb-6 grid grid-cols-3 gap-2 sm:gap-3">
              {project.metrics.map((m) => (
                <div
                  key={m.label}
                  className="rounded-sm border border-[var(--color-border)] bg-[var(--color-surface)] px-2 py-3 text-center sm:px-3"
                >
                  <p className="text-lg font-bold text-[var(--color-accent)] sm:text-xl">{m.value}</p>
                  <p className="text-[10px] leading-tight text-[var(--color-muted)] sm:text-xs">{m.label}</p>
                </div>
              ))}
            </div>
          )}

          {project.architectureFlow && (
            <div className="mb-6">
              <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-[var(--color-accent)] sm:text-xs">
                Architecture flow
              </p>
              <div className="flex min-w-0 flex-wrap items-center gap-1.5">
                {project.architectureFlow.map((step, idx) => (
                  <span key={step} className="flex items-center gap-1.5">
                    <span className="rounded-sm border border-[var(--color-border)] bg-[var(--color-surface)] px-2 py-1 font-mono text-[10px] text-[var(--color-muted)] sm:text-xs">
                      {step}
                    </span>
                    {idx < project.architectureFlow.length - 1 && (
                      <span className="text-[var(--color-accent)]">→</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="mb-6 flex flex-wrap gap-2">
            {project.techStack.slice(0, 6).map((tech) => (
              <span
                key={tech}
                className="rounded-sm border border-[var(--color-border)] px-2 py-0.5 text-[11px] text-[var(--color-muted)] sm:text-xs"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4 border-t border-[var(--color-border)] pt-5">
            {project.url && (
              <SectionLink href={project.url}>View live platform</SectionLink>
            )}
            {project.githubUrl && (
              <SectionLink href={project.githubUrl}>View on GitHub</SectionLink>
            )}
            <a
              href={`#case-${project.id}`}
              className="text-sm text-[var(--color-muted)] transition hover:text-[var(--color-text)]"
            >
              Full case study ↓
            </a>
          </div>
        </div>
      </article>
    </SpotlightCard>
  );
}
