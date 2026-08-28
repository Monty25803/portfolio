import { experience, profile } from "../data/profile";
import { BracketLabel } from "./ui/SectionLabels";
import AnimatedContent from "./reactbits/AnimatedContent";

export default function Experience() {
  return (
    <section id="journey" className="section-padding">
      <div className="section-shell">
        <AnimatedContent distance={32} duration={0.5}>
          <BracketLabel>My journey</BracketLabel>
          <h2 className="heading-lg mb-3 text-3xl font-semibold sm:text-4xl">Where I have worked</h2>
          <p className="mb-12 max-w-2xl text-[var(--color-muted)]">
            {profile.experienceYears} at {profile.company} — backend development, healthcare systems, and
            enterprise platforms.
          </p>
        </AnimatedContent>

        <div className="space-y-10">
          {experience.map((job, i) => (
            <AnimatedContent key={`${job.role}-${job.period}`} distance={32} duration={0.5} delay={i * 0.06}>
              <article className="work-divider grid gap-4 pb-10 sm:grid-cols-[200px_1fr] sm:gap-10">
                <div>
                  <p className="text-sm font-medium text-[var(--color-text)]">{job.period}</p>
                  <p className="mt-1 text-sm text-[var(--color-muted)]">{job.company}</p>
                  <p className="mt-2 text-xs text-[var(--color-highlight)]">{job.status}</p>
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-semibold">{job.role}</h3>
                  {job.category && <p className="mb-4 text-sm text-[var(--color-muted)]">{job.category}</p>}
                  {job.metrics && (
                    <div className="mb-4 flex flex-wrap gap-6">
                      {job.metrics.map((m) => (
                        <div key={m.label}>
                          <p className="font-semibold text-[var(--color-highlight)]">{m.value}</p>
                          <p className="text-xs text-[var(--color-muted)]">{m.label}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  <ul className="space-y-2 text-sm leading-relaxed text-[var(--color-muted)]">
                    {job.points.slice(0, 4).map((point) => (
                      <li key={point}>{point}</li>
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
