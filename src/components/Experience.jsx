import { experience, profile } from "../data/profile";
import ScrollReveal from "./ScrollReveal";

export default function Experience() {
  return (
    <section id="journey" className="section-padding section-alt">
      <div className="section-shell">
        <ScrollReveal distance={36} duration={1}>
          <h2 className="display-lg mb-3 text-4xl sm:text-5xl">My journey</h2>
          <p className="mb-12 max-w-2xl text-[var(--color-muted)]">
            {profile.experienceYears} at {profile.company} — backend development, healthcare systems, and enterprise platforms.
          </p>
        </ScrollReveal>

        <div className="space-y-6">
          {experience.map((job, i) => (
            <ScrollReveal key={`${job.role}-${job.period}`} distance={32} duration={1} delay={i * 0.08}>
              <article className="card p-6 sm:p-8">
                <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="display-lg text-xl">{job.role}</h3>
                    <p className="text-sm text-[var(--color-muted)]">{job.company}</p>
                  </div>
                  <div className="text-right">
                    <p className="slash-label">{job.period}</p>
                    {job.status && <p className="mt-1 text-xs text-[var(--color-muted)]">{job.status}</p>}
                  </div>
                </div>
                {job.category && <p className="mb-4 text-sm text-[var(--color-muted)]">{job.category}</p>}
                <ul className="space-y-2 text-sm leading-relaxed text-[var(--color-muted)]">
                  {job.points.slice(0, 4).map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
