import { skillGroups, projectSkillsUsed, profile, skillProficiencies } from "../data/profile";
import { SectionHeader } from "./About";
import AnimatedContent from "./reactbits/AnimatedContent";

const levelStyles = {
  Primary: "border-[var(--color-accent)]/50 bg-[var(--color-accent)]/10 text-[var(--color-accent)]",
  Advanced: "border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)]",
};

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="section-shell">
        <SectionHeader
          label="Skills"
          title="Tech stack & tools"
          subtitle="Technologies I use daily to design, build, and ship production software — including agentic AI for faster development."
        />

        <AnimatedContent distance={40} duration={0.6}>
          <div className="card mb-10 p-5 sm:mb-12 sm:p-8">
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-[var(--color-accent)]">
              Primary Stack
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {profile.primaryStack.map((skill) => (
                <span
                  key={skill}
                  className="rounded-sm border border-[var(--color-accent)]/40 bg-[var(--color-accent)]/10 px-3 py-1.5 text-xs font-semibold text-[var(--color-accent)] sm:px-4 sm:py-2 sm:text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </AnimatedContent>

        <AnimatedContent distance={40} duration={0.6}>
          <div className="card mb-10 p-5 sm:mb-12 sm:p-8">
            <p className="mb-2 font-mono text-xs uppercase tracking-widest text-[var(--color-accent)]">
              Core Proficiencies
            </p>
            <p className="mb-6 text-sm text-[var(--color-muted)]">
              Hands-on depth across the stack I use to build production systems.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {skillProficiencies.map((skill) => (
                <div key={skill.name}>
                  <div className="mb-1.5 flex items-center justify-between text-sm">
                    <span className="font-medium text-[var(--color-text)]">{skill.name}</span>
                    <span className="font-mono text-xs text-[var(--color-accent)]">{skill.percent}%</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-sm bg-[var(--color-surface)]">
                    <div
                      className="h-full rounded-sm bg-[var(--color-accent)] transition-all duration-1000"
                      style={{ width: `${skill.percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedContent>

        <div className="mb-10 grid min-w-0 gap-4 sm:mb-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <AnimatedContent key={group.label} distance={40} duration={0.6} delay={i * 0.06}>
              <div className="card flex h-full flex-col p-5 transition hover:border-[var(--color-accent)]/25">
                <div className="mb-4 flex items-start gap-3">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-sm border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/10 font-mono text-xs font-bold text-[var(--color-accent)]">
                    {group.icon}
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-[var(--color-text)]">{group.label}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-[var(--color-muted)]">
                      {group.description}
                    </p>
                  </div>
                </div>
                <div className="mt-auto flex flex-wrap gap-1.5 sm:gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill.name}
                      title={skill.level}
                      className={`rounded-sm border px-2 py-1 text-[11px] font-medium sm:text-xs ${levelStyles[skill.level]}`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedContent>
          ))}
        </div>

        <AnimatedContent distance={40} duration={0.6}>
          <div className="card p-5 sm:p-8">
            <p className="mb-2 font-mono text-xs uppercase tracking-widest text-[var(--color-accent)]">
              Skills by Project
            </p>
            <p className="mb-6 text-sm text-[var(--color-muted)]">
              How each technology maps to the systems I&apos;ve built.
            </p>
            <div className="space-y-4">
              {projectSkillsUsed.map((entry) => (
                <div
                  key={entry.project}
                  className="flex min-w-0 flex-col gap-2 border-b border-[var(--color-border)] pb-4 last:border-0 last:pb-0 sm:flex-row sm:items-center sm:gap-4"
                >
                  <p className="min-w-0 text-sm font-medium text-[var(--color-text)] sm:min-w-[200px] sm:flex-shrink-0">
                    {entry.project}
                  </p>
                  <div className="flex min-w-0 flex-wrap gap-1.5 sm:gap-2">
                    {entry.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-sm border border-[var(--color-border)] bg-[var(--color-surface)] px-2 py-0.5 text-[11px] text-[var(--color-muted)] sm:text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}
