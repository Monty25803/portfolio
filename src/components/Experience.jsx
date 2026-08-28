import { experience, profile } from "../data/profile";
import { BracketLabel } from "./ui/SectionLabels";
import AnimatedContent from "./reactbits/AnimatedContent";

export default function Experience() {
  return (
    <section id="journey" className="section-padding">
      <div className="section-shell">
        <AnimatedContent distance={32} duration={0.5}>
          <BracketLabel>Career</BracketLabel>
          <h2 className="heading-lg mb-3 text-3xl sm:text-4xl">
            My <span className="gradient-text">journey</span>
          </h2>
          <p className="mb-12 max-w-2xl text-[var(--color-muted)]">
            {profile.experienceYears} at {profile.company} — backend development, healthcare systems, and enterprise platforms.
          </p>
        </AnimatedContent>

        <div className="relative space-y-0">
          {experience.map((job, i) => (
            <AnimatedContent key={`${job.role}-${job.period}`} distance={32} duration={0.5} delay={i * 0.06}>
              <article className="relative flex gap-6 pb-12 last:pb-0">
                <div className="flex flex-col items-center">
                  <div className="timeline-dot" />
                  {i < experience.length - 1 && (
                    <div className="mt-2 w-px flex-1 bg-gradient-to-b from-[var(--color-accent)]/50 to-transparent" />
                  )}
                </div>
                <div className="card flex-1 p-5 sm:p-6">
                  <div className="mb-4 flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-semibold">{job.role}</h3>
                      <p className="text-sm text-[var(--color-muted)]">{job.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-mono text-xs text-[var(--color-highlight)]">{job.period}</p>
                      {job.status && <p className="mt-1 text-xs text-[var(--color-muted)]">{job.status}</p>}
                    </div>
                  </div>
                  {job.category && <p className="mb-3 text-sm text-[var(--color-muted)]">{job.category}</p>}
                  {job.metrics && (
                    <div className="mb-4 flex flex-wrap gap-4">
                      {job.metrics.map((m) => (
                        <div key={m.label} className="stat-pill py-2">
                          <span className="text-sm font-semibold text-[var(--color-highlight)]">{m.value}</span>
                          <span className="text-[10px] text-[var(--color-muted)]">{m.label}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  <ul className="space-y-2 text-sm leading-relaxed text-[var(--color-muted)]">
                    {job.points.slice(0, 4).map((point) => (
                      <li key={point} className="flex gap-2">
                        <span className="text-[var(--color-accent)]">▸</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
}
