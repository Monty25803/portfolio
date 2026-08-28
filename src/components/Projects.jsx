import { projects, certifications, education } from "../data/profile";
import { SectionHeader } from "./About";
import WorkShowcase from "./WorkShowcase";
import ClientMarquee from "./ClientMarquee";
import GitHubLive from "./GitHubLive";
import { BracketLabel } from "./ui/SectionLabels";
import AnimatedContent from "./reactbits/AnimatedContent";
import SpotlightCard from "./reactbits/SpotlightCard";

const statusStyles = {
  Ongoing: "bg-[var(--color-accent)]/15 text-[var(--color-accent)] border-[var(--color-accent)]/30",
  Completed: "bg-[var(--color-muted)]/10 text-[var(--color-muted)] border-[var(--color-border)]",
};

export default function Projects() {
  return (
    <section id="projects" className="section-padding border-t border-[var(--color-border)] bg-[var(--color-surface-raised)]">
      <div className="section-shell">
        <WorkShowcase />
        <ClientMarquee />
        <GitHubLive />

        <AnimatedContent distance={40} duration={0.6}>
          <BracketLabel className="mb-4">Deep dives</BracketLabel>
          <SectionHeader
            compact
            label="Case studies"
            title="Full project breakdown"
            subtitle="Responsibilities, features, and impact for each production system."
          />
        </AnimatedContent>

        <div className="mb-20 space-y-8">
          {projects.map((project, i) => (
            <AnimatedContent key={project.id} distance={50} duration={0.7} delay={i * 0.08}>
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

function ProjectDetailCard({ project }) {
  return (
    <div id={`case-${project.id}`} className="scroll-mt-28">
      <SpotlightCard
        className="card p-5 sm:p-6 lg:p-8"
        spotlightColor="rgba(220, 38, 38, 0.1)"
      >
      <div className="relative min-w-0">
        <div className="mb-5 flex flex-wrap items-center gap-2 sm:mb-6">
          {project.number && (
            <span className="font-mono text-sm text-[var(--color-accent)]">{project.number}</span>
          )}
          <span
            className={`rounded-sm border px-3 py-0.5 text-xs font-medium ${statusStyles[project.status]}`}
          >
            {project.status}
          </span>
        </div>

        <h3 className="mb-1 text-xl font-bold tracking-tight sm:text-2xl">{project.title}</h3>
        <p className="mb-6 text-sm text-[var(--color-muted)]">
          {project.client} · {project.role} · {project.period}
        </p>

        <div className="mb-6 grid min-w-0 gap-5 sm:mb-8 lg:grid-cols-2 lg:gap-6">
          <DetailBlock title="My Responsibilities" items={project.responsibilities} />
          <DetailBlock title="Key Features" items={project.features} />
        </div>

        <div className="mb-6 grid gap-6 sm:grid-cols-2">
          <div>
            <h4 className="mb-3 font-mono text-xs font-semibold uppercase tracking-wider text-[var(--color-accent)]">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-sm border border-[var(--color-border)] bg-[var(--color-surface)] px-2.5 py-1 text-xs"
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

        <div className="flex flex-wrap gap-3 border-t border-[var(--color-border)] pt-5">
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--color-accent)] hover:underline"
            >
              Live platform ↗
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--color-accent)] hover:underline"
            >
              GitHub ↗
            </a>
          )}
        </div>
      </div>
      </SpotlightCard>
    </div>
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
