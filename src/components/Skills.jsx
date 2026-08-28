import { skillGroups, projectSkillsUsed, profile, skillProficiencies } from "../data/profile";
import { SectionHeader } from "./About";
import AnimatedContent from "./reactbits/AnimatedContent";

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="section-shell">
        <SectionHeader
          label="Skills"
          title="Tech stack & tools"
          subtitle="Technologies I use to design, build, and ship production software."
        />

        <AnimatedContent distance={24} duration={0.5}>
          <div className="card mb-6 p-6 sm:p-8">
            <p className="slash-label mb-4">Primary stack</p>
            <div className="flex flex-wrap gap-2">
              {profile.primaryStack.map((skill) => (
                <span key={skill} className="tag-accent tag font-medium">{skill}</span>
              ))}
            </div>
          </div>
        </AnimatedContent>

        <AnimatedContent distance={24} duration={0.5}>
          <div className="card mb-6 p-6 sm:p-8">
            <p className="slash-label mb-4">Core proficiencies</p>
            <div className="grid gap-5 sm:grid-cols-2">
              {skillProficiencies.map((skill) => (
                <div key={skill.name}>
                  <div className="mb-2 flex justify-between text-sm">
                    <span className="font-medium">{skill.name}</span>
                    <span className="font-mono text-xs text-[var(--color-muted)]">{skill.percent}%</span>
                  </div>
                  <div className="h-1 overflow-hidden rounded-full bg-[var(--color-surface)]">
                    <div className="h-full rounded-full bg-[var(--color-text)]" style={{ width: `${skill.percent}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedContent>

        <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <AnimatedContent key={group.label} distance={24} duration={0.4} delay={i * 0.04}>
              <div className="card flex h-full flex-col p-5">
                <h3 className="display-lg mb-1 text-lg">{group.label}</h3>
                <p className="mb-4 text-xs leading-relaxed text-[var(--color-muted)]">{group.description}</p>
                <div className="mt-auto flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <span key={skill.name} className="tag text-[11px]" title={skill.level}>{skill.name}</span>
                  ))}
                </div>
              </div>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
}
