import { experience, profile } from "../data/profile";
import { SectionHeader } from "./About";
import AnimatedContent from "./reactbits/AnimatedContent";

const jobStatusStyles = {
  Ongoing: "bg-[var(--color-accent)]/15 text-[var(--color-accent)] border-[var(--color-accent)]/30",
  Completed: "bg-[var(--color-muted)]/10 text-[var(--color-muted)] border-[var(--color-border)]",
};

export default function Experience() {
  return (
    <section id="experience" className="section-padding border-t border-[var(--color-border)] bg-[var(--color-surface-raised)]">
      <div className="section-shell">
        <SectionHeader
          label="Experience"
          title="Where I've shipped"
          subtitle={`${profile.experienceYears} of impact across backend development, healthcare systems, and enterprise platforms.`}
        />
        <div className="relative space-y-0">
          <div className="absolute left-[7px] top-2 bottom-2 hidden w-px bg-[var(--color-border)] md:block" />
          {experience.map((job, i) => (
            <AnimatedContent key={`${job.role}-${job.period}`} distance={50} duration={0.7} delay={i * 0.1}>
              <article className="relative pb-10 pl-0 md:pb-12 md:pl-10">
                <div className="absolute left-0 top-2 hidden h-3.5 w-3.5 rounded-full border-2 border-[var(--color-accent)] bg-[var(--color-surface-raised)] md:block" />
                <div className="card p-5 transition hover:border-[var(--color-accent)]/30 sm:p-6">
                  <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div className="min-w-0">
                      <div className="mb-2 flex flex-wrap items-center gap-2">
                        <h3 className="text-lg font-semibold sm:text-xl">{job.role}</h3>
                        {job.category && (
                          <span className="rounded-sm border border-[var(--color-border)] bg-[var(--color-surface)] px-2.5 py-0.5 text-xs font-medium text-[var(--color-muted)]">
                            {job.category}
                          </span>
                        )}
                        <span
                          className={`rounded-sm border px-2.5 py-0.5 text-xs font-medium ${jobStatusStyles[job.status]}`}
                        >
                          {job.status}
                        </span>
                      </div>
                      <a
                        href={job.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--color-accent)] hover:underline"
                      >
                        {job.company}
                      </a>
                    </div>
                    <div className="text-sm text-[var(--color-muted)] sm:text-right">
                      <p>{job.period}</p>
                      <p>
                        {job.location} · {job.type}
                      </p>
                    </div>
                  </div>
                  {job.metrics && (
                    <div className="mb-5 grid grid-cols-3 gap-2 sm:gap-3">
                      {job.metrics.map((metric) => (
                        <div
                          key={metric.label}
                          className="rounded-sm border border-[var(--color-border)] bg-[var(--color-surface)] px-2 py-2 text-center sm:px-3 sm:py-3"
                        >
                          <p className="text-base font-bold text-[var(--color-accent)] sm:text-lg">{metric.value}</p>
                          <p className="text-[10px] text-[var(--color-muted)] sm:text-xs">{metric.label}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  <ul className="space-y-2.5 text-sm leading-relaxed text-[var(--color-muted)] sm:text-base">
                    {job.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--color-accent)]" />
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
