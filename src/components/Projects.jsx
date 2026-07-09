import { projects, certifications, education } from "../data/profile";
import { SectionHeader } from "./About";
import AnimatedContent from "./reactbits/AnimatedContent";
import SpotlightCard from "./reactbits/SpotlightCard";

const statusStyles = {
  Ongoing: "bg-[var(--color-accent)]/15 text-[var(--color-accent)] border-[var(--color-accent)]/30",
  Completed: "bg-[var(--color-muted)]/10 text-[var(--color-muted)] border-[var(--color-border)]",
};

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section-padding border-t border-[var(--color-border)] bg-[var(--color-surface-raised)]">
      <div className="section-shell">
        <SectionHeader
          label="Work"
          title="Projects in detail"
          subtitle="End-to-end systems I've built and maintained — from recent client onboarding to healthcare inventory platforms."
        />

        <div className="mb-12 space-y-8">
          {featured.map((project, i) => (
            <AnimatedContent key={project.id} distance={50} duration={0.7} delay={i * 0.1}>
              <ProjectDetailCard project={project} featured />
            </AnimatedContent>
          ))}
        </div>

        <div className="mb-20 space-y-8">
          {others.map((project, i) => (
            <AnimatedContent key={project.id} distance={50} duration={0.7} delay={i * 0.1}>
              <ProjectDetailCard project={project} />
            </AnimatedContent>
          ))}
        </div>

        <SectionHeader label="Education" title="Academic background" />
        <div className="mb-20 grid gap-4 md:grid-cols-3">
          {education.map((edu, i) => (
            <AnimatedContent key={edu.school} distance={40} duration={0.6} delay={i * 0.08}>
              <div className="card p-5 sm:p-6">
                <p className="mb-1 text-xs font-medium uppercase tracking-wider text-[var(--color-accent)]">
                  {edu.period}
                </p>
                <h3 className="mb-2 font-semibold">{edu.degree}</h3>
                <p className="text-sm text-[var(--color-muted)]">{edu.school}</p>
              </div>
            </AnimatedContent>
          ))}
        </div>

        <SectionHeader label="Certifications" title="Continuous learning" />
        <ul className="grid gap-3 sm:grid-cols-2">
          {certifications.map((cert, i) => (
            <AnimatedContent key={cert.name} distance={30} duration={0.5} delay={i * 0.05}>
              <li>
                {cert.url ? (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card flex items-start justify-between gap-4 p-4 transition hover:border-[var(--color-accent)]/40"
                  >
                    <CertContent cert={cert} />
                    <span className="text-[var(--color-accent)]">↗</span>
                  </a>
                ) : (
                  <div className="card p-4">
                    <CertContent cert={cert} />
                  </div>
                )}
              </li>
            </AnimatedContent>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ProjectDetailCard({ project, featured = false }) {
  return (
    <SpotlightCard
      className={`card p-5 sm:p-6 lg:p-8 ${
        featured ? "border-[var(--color-accent)]/40 ring-1 ring-[var(--color-accent)]/10" : ""
      }`}
      spotlightColor="rgba(220, 38, 38, 0.15)"
    >
      <div className="relative min-w-0">
        <div className="mb-5 flex flex-col gap-3 sm:mb-6">
          <div className="min-w-0 flex-1">
            <div className="mb-3 flex flex-wrap items-center gap-2">
              {featured && project.status === "Ongoing" && (
                <span className="rounded-sm border border-[var(--color-accent)]/40 bg-[var(--color-accent)]/10 px-3 py-0.5 text-xs font-semibold uppercase tracking-wide text-[var(--color-accent)]">
                  Current Focus
                </span>
              )}
              <span
                className={`rounded-sm border px-3 py-0.5 text-xs font-medium ${statusStyles[project.status]}`}
              >
                {project.status}
              </span>
            </div>
            <h3 className="mb-1 text-xl font-bold tracking-tight sm:text-2xl lg:text-3xl">{project.title}</h3>
            <p className="text-sm text-[var(--color-muted)]">
              {project.client} · {project.role} · {project.period}
            </p>
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1 text-sm text-[var(--color-accent)] hover:underline"
              >
                View live platform ↗
              </a>
            )}
          </div>
        </div>

        <p className="mb-6 text-sm leading-relaxed text-[var(--color-text)]/90 sm:mb-8 sm:text-base">{project.overview}</p>

        {project.architectureFlow && (
          <div className="mb-6 sm:mb-8">
            <h4 className="mb-3 font-mono text-xs font-semibold uppercase tracking-wider text-[var(--color-accent)]">
              Architecture Flow
            </h4>
            <div className="flex min-w-0 flex-wrap items-center gap-1.5 sm:gap-2">
              {project.architectureFlow.map((step, i) => (
                <span key={step} className="flex min-w-0 items-center gap-1.5 sm:gap-2">
                  <span className="rounded-sm border border-[var(--color-border)] bg-[var(--color-surface)] px-2 py-1 font-mono text-[10px] text-[var(--color-muted)] sm:px-2.5 sm:text-xs">
                    {step}
                  </span>
                  {i < project.architectureFlow.length - 1 && (
                    <span className="text-[var(--color-accent)]">→</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="mb-6 grid min-w-0 gap-5 sm:mb-8 lg:grid-cols-2 lg:gap-6">
          <DetailBlock title="My Responsibilities" items={project.responsibilities} />
          <DetailBlock title="Key Features" items={project.features} />
        </div>

        <div className="mb-8 grid gap-6 sm:grid-cols-2">
          <div>
            <h4 className="mb-3 font-mono text-xs font-semibold uppercase tracking-wider text-[var(--color-accent)]">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-sm border border-[var(--color-border)] bg-[var(--color-surface)] px-2.5 py-1 text-xs sm:px-3 sm:py-1.5 sm:text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="mb-3 font-mono text-xs font-semibold uppercase tracking-wider text-[var(--color-accent)]">
              Impact
            </h4>
            <ul className="space-y-2">
              {project.outcomes.map((outcome) => (
                <li key={outcome} className="flex gap-2 text-sm text-[var(--color-muted)]">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--color-accent)]" />
                  {outcome}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 border-t border-[var(--color-border)] pt-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-sm bg-[var(--color-accent)]/10 px-2.5 py-0.5 text-[11px] font-medium text-[var(--color-accent)] sm:text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </SpotlightCard>
  );
}

function DetailBlock({ title, items }) {
  return (
    <div>
      <h4 className="mb-3 font-mono text-xs font-semibold uppercase tracking-wider text-[var(--color-accent)]">
        {title}
      </h4>
      <ul className="space-y-2.5">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-relaxed text-[var(--color-muted)]">
            <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--color-accent)]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CertContent({ cert }) {
  return (
    <div>
      <p className="font-medium">{cert.name}</p>
      <p className="text-sm text-[var(--color-muted)]">
        {cert.issuer} · {cert.year}
      </p>
    </div>
  );
}
