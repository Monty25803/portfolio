import { projects, certifications, education } from "../data/profile";
import { SectionHeader } from "./About";
import WorkShowcase from "./WorkShowcase";
import ClientMarquee from "./ClientMarquee";
import GitHubLive from "./GitHubLive";
import { BracketLabel } from "./ui/SectionLabels";
import AnimatedContent from "./reactbits/AnimatedContent";

export default function Projects() {
  return (
    <>
      <section id="work" className="section-padding pt-0">
        <div className="section-shell">
          <WorkShowcase />
          <ClientMarquee />
          <GitHubLive />
        </div>
      </section>

      <section className="section-padding section-alt">
        <div className="section-shell">
          <SectionHeader
            label="Deep dives"
            title="Full project breakdown"
            subtitle="Responsibilities, features, and impact for each system."
          />
          <div className="space-y-6">
            {projects.map((project, i) => (
              <AnimatedContent key={project.id} distance={32} duration={0.5} delay={i * 0.05}>
                <CaseDetail project={project} />
              </AnimatedContent>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="section-shell">
          <SectionHeader label="Education" title="Academic background" />
          <div className="mb-16 grid gap-4 md:grid-cols-3">
            {education.map((edu) => (
              <div key={edu.school} className="card p-5">
                <p className="mb-1 text-xs font-medium uppercase tracking-wider text-[var(--color-highlight)]">
                  {edu.period}
                </p>
                <h3 className="mb-2 font-semibold">{edu.degree}</h3>
                <p className="text-sm text-[var(--color-muted)]">{edu.school}</p>
              </div>
            ))}
          </div>

          <SectionHeader label="Certifications" title="Continuous learning" />
          <ul className="grid gap-3 sm:grid-cols-2">
            {certifications.map((cert) => (
              <li key={cert.name}>
                {cert.url ? (
                  <a href={cert.url} target="_blank" rel="noopener noreferrer" className="card flex justify-between gap-4 p-4 transition hover:shadow-md">
                    <CertContent cert={cert} />
                    <span>↗</span>
                  </a>
                ) : (
                  <div className="card p-4">
                    <CertContent cert={cert} />
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

function CaseDetail({ project }) {
  return (
    <article id={`case-${project.id}`} className="card scroll-mt-28 p-6 sm:p-8">
      <BracketLabel>{project.number} · {project.status}</BracketLabel>
      <h3 className="heading-lg mb-1 text-2xl font-semibold">{project.title}</h3>
      <p className="mb-6 text-sm text-[var(--color-muted)]">
        {project.client} · {project.role} · {project.period}
      </p>

      <div className="grid gap-8 lg:grid-cols-2">
        <DetailBlock title="Responsibilities" items={project.responsibilities} />
        <DetailBlock title="Features" items={project.features} />
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <div>
          <p className="bracket-label mb-3">Tech stack</p>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>
        </div>
        <div>
          <p className="bracket-label mb-3">Impact</p>
          <ul className="space-y-2 text-sm text-[var(--color-muted)]">
            {project.outcomes.map((o) => (
              <li key={o}>{o}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 flex gap-4">
        {project.url && (
          <a href={project.url} target="_blank" rel="noopener noreferrer" className="link-arrow">
            Live platform
          </a>
        )}
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="link-arrow">
            GitHub
          </a>
        )}
      </div>
    </article>
  );
}

function DetailBlock({ title, items }) {
  return (
    <div>
      <p className="bracket-label mb-3">{title}</p>
      <ul className="space-y-2 text-sm leading-relaxed text-[var(--color-muted)]">
        {items.map((item) => (
          <li key={item}>{item}</li>
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
