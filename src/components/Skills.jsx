import { skillGroups, projectSkillsUsed, profile, skillProficiencies } from "../data/profile";
import { SectionHeader } from "./About";
import AnimatedContent from "./reactbits/AnimatedContent";

export default function Skills() {
  return (
    <section id="skills" className="section-padding section-alt">
      <div className="section-shell">
        <SectionHeader
          label="Skills"
          title="Tech stack & tools"
          subtitle="Technologies I use to design, build, and ship production software."
        />

        <AnimatedContent distance={32} duration={0.5}>
          <div className="card mb-8 p-6 sm:p-8">
            <p className="bracket-label mb-4">Primary stack</p>
            <div className="flex flex-wrap gap-2">
              {profile.primaryStack.map((skill) => (
                <span key={skill} className="tag-accent tag font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </AnimatedContent>

        <AnimatedContent distance={32} duration={0.5}>
          <div className="card mb-8 p-6 sm:p-8">
            <p className="bracket-label mb-4">Core proficiencies</p>
            <div className="grid gap-5 sm:grid-cols-2">
              {skillProficiencies.map((skill) => (
                <div key={skill.name}>
                  <div className="mb-2 flex justify-between text-sm">
                    <span className="font-medium">{skill.name}</span>
                    <span className="font-mono text-xs text-[var(--color-highlight)]">{skill.percent}%</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-[var(--color-surface-alt)]">
                    <div
                      className="h-full rounded-full bg-[var(--color-highlight)]"
                      style={{ width: `${skill.percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedContent>

        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <AnimatedContent key={group.label} distance={32} duration={0.5} delay={i * 0.04}>
              <div className="card flex h-full flex-col p-5">
                <h3 className="mb-1 font-semibold">{group.label}</h3>
                <p className="mb-4 text-xs leading-relaxed text-[var(--color-muted)]">{group.description}</p>
                <div className="mt-auto flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <span key={skill.name} className="tag text-[11px]" title={skill.level}>
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedContent>
          ))}
        </div>

        <AnimatedContent distance={32} duration={0.5}>
          <div className="card p-6 sm:p-8">
            <p className="bracket-label mb-4">Skills by project</p>
            <div className="space-y-4">
              {projectSkillsUsed.map((entry) => (
                <div key={entry.project} className="work-divider flex flex-col gap-2 pb-4 last:border-0 sm:flex-row sm:items-center sm:gap-6">
                  <p className="min-w-[180px] text-sm font-medium">{entry.project}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {entry.skills.map((skill) => (
                      <span key={skill} className="tag text-[11px]">
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
