import { experience, profile } from "../data/profile";
import { BracketLabel } from "./ui/SectionLabels";
import AnimatedContent from "./reactbits/AnimatedContent";

const jobStatusStyles = {
  Ongoing: "text-[var(--color-accent)]",
  Completed: "text-[var(--color-muted)]",
};

export default function Experience() {
  return (
    <section id="journey" className="section-padding border-t border-[var(--color-border)]">
      <div className="section-shell">
        <AnimatedContent distance={40} duration={0.6}>
          <BracketLabel className="mb-4">My journey</BracketLabel>
          <h2 className="editorial-title mb-3 text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
            Where I have worked
          </h2>
          <p className="mb-12 max-w-2xl text-sm text-[var(--color-muted)] sm:text-base">
            {profile.experienceYears} across backend development, healthcare systems, and enterprise platforms at
            PDCloudEx — from internship to production software.
          </p>
        </AnimatedContent>

        <div className="relative">
          <div className="absolute bottom-0 left-[7px] top-0 hidden w-px bg-[var(--color-border)] md:block" />
          <div className="space-y-0">
            {experience.map((job, i) => (
              <AnimatedContent key={`${job.role}-${job.period}`} distance={40} duration={0.6} delay={i * 0.08}>
                <article className="journey-item relative pb-12 pl-0 md:pl-12 md:pb-14">
                  <div className="absolute left-0 top-1.5 hidden h-3.5 w-3.5 rounded-full border-2 border-[var(--color-accent)] bg-[var(--color-surface)] md:block" />
                  <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[var(--color-muted)] sm:text-sm">
                    <span className="font-medium text-[var(--color-text)]">
                      {job.role} · {job.company}
                    </span>
                    <span>·</span>
                    <span>{job.period}</span>
                    <span className={`font-medium ${jobStatusStyles[job.status]}`}>{job.status}</span>
                  </div>
                  <h3 className="mb-3 text-lg font-semibold sm:text-xl">{job.category || job.role}</h3>
                  {job.metrics && (
                    <div className="mb-4 flex flex-wrap gap-6">
                      {job.metrics.map((m) => (
                        <div key={m.label}>
                          <p className="text-base font-bold text-[var(--color-accent)]">{m.value}</p>
                          <p className="text-[10px] text-[var(--color-muted)]">{m.label}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  <ul className="space-y-2 text-sm leading-relaxed text-[var(--color-muted)]">
                    {job.points.slice(0, 4).map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-[var(--color-accent)]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </AnimatedContent>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
