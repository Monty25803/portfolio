import { profile } from "../data/profile";
import { SectionHeader } from "./About";
import AnimatedContent from "./reactbits/AnimatedContent";

export default function Resume() {
  return (
    <section id="resume" className="section-padding border-t border-[var(--color-border)] bg-[var(--color-surface-raised)]">
      <div className="section-shell">
        <AnimatedContent distance={50} duration={0.7}>
          <div className="card relative overflow-hidden p-6 sm:p-10 lg:p-12">
            <div className="pointer-events-none absolute inset-0 glow-orb opacity-40" />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <SectionHeader
                  compact
                  label="Resume"
                  title="Download my resume"
                  subtitle={`Software Developer with ${profile.experienceYears} of experience in Python, Django, Angular, and agentic AI–assisted development. Last updated: ${profile.resumeUpdated}.`}
                />
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {profile.heroStats.map((stat) => (
                    <span
                      key={stat.label}
                      className="rounded-sm border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1.5 text-xs text-[var(--color-muted)] sm:text-sm"
                    >
                      {stat.value} · {stat.label}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <a href={profile.resumeUrl} download className="btn-primary px-6 py-3 text-center text-sm">
                  Download Resume
                </a>
                <a href="#contact" className="btn-outline px-6 py-3 text-center text-sm">
                  Hire Me
                </a>
              </div>
            </div>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}
