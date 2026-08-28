import { profile, expertiseAreas, experience } from "../data/profile";
import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section id="about" className="section-shell section-padding">
      <div className="section-rule" />
      <ScrollReveal distance={36} duration={1}>
        <p className="mono-label mb-4">01 · About</p>
        <h2 className="serif-display mb-8 max-w-4xl text-[clamp(2rem,5vw,3.5rem)] leading-tight">
          Production systems where reliability and clarity come first.
        </h2>
      </ScrollReveal>

      <div className="grid gap-12 lg:grid-cols-2">
        <ScrollReveal distance={32} duration={1} delay={0.08}>
          <div className="body-copy space-y-5">
            <p className="text-[var(--color-text)]">{profile.summary}</p>
            <p>{profile.philosophy}</p>
            <p>{profile.workPreference}</p>
          </div>
        </ScrollReveal>

        <ScrollReveal distance={32} duration={1} delay={0.12}>
          <div className="space-y-0">
            {experience.map((job) => (
              <div key={job.period} className="timeline-item">
                <p className="mono-label">{job.period}</p>
                <h3 className="font-medium text-[var(--color-text)]">{job.role}</h3>
                <p className="text-sm text-[var(--color-muted)]">{job.company}</p>
                <p className="text-sm leading-relaxed text-[var(--color-muted)]">{job.points[0]}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal distance={32} duration={1} delay={0.1}>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {expertiseAreas.map((area, i) => (
            <article key={area.title} className="glass-panel p-5">
              <p className="mono-label mb-3">0{i + 1}</p>
              <h3 className="mb-2 font-medium text-[var(--color-text)]">{area.title}</h3>
              <p className="text-sm leading-relaxed text-[var(--color-muted)]">{area.description}</p>
            </article>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}

export function SectionHeader({ label, title, subtitle }) {
  return (
    <ScrollReveal distance={36} duration={1}>
      <p className="mono-label mb-4">{label}</p>
      <h2 className="serif-display mb-4 text-[clamp(2rem,5vw,3.25rem)]">{title}</h2>
      {subtitle && <p className="body-copy max-w-2xl">{subtitle}</p>}
    </ScrollReveal>
  );
}
