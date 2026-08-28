import { skillGroups, profile } from "../data/profile";
import { SectionHeader } from "./About";
import ScrollReveal, { ScrollRevealGroup } from "./ScrollReveal";

export default function Skills() {
  return (
    <section id="skills" className="section-shell section-padding">
      <div className="section-rule" />
      <SectionHeader
        label="02 · Core capabilities"
        title="Tech stack & systems thinking"
        subtitle="Technologies I use to design, build, and ship production software for healthcare and enterprise platforms."
      />

      <div className="skills-layout mt-12">
        <ScrollReveal distance={28} duration={1} className="skills-rail">
          <p className="mono-label mb-4">Primary stack</p>
          <div className="flex flex-wrap gap-2">
            {profile.primaryStack.map((s) => (
              <span key={s} className="tag">{s}</span>
            ))}
          </div>
          <p className="mono-label mb-3 mt-8">Focus</p>
          <p className="body-copy text-sm">Backend · Django APIs · Angular dashboards · Agentic AI workflows</p>
        </ScrollReveal>

        <ScrollRevealGroup className="grid gap-4" stagger={0.08}>
          {skillGroups.map((group, i) => (
            <article key={group.label} className="glass-panel p-5 sm:p-6">
              <div className="mb-3 flex items-baseline justify-between gap-4">
                <h3 className="font-medium text-[var(--color-text)]">{group.label}</h3>
                <span className="mono-label">{group.icon}</span>
              </div>
              <p className="mb-4 text-sm leading-relaxed text-[var(--color-muted)]">{group.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <span key={skill.name} className="tag">{skill.name}</span>
                ))}
              </div>
            </article>
          ))}
        </ScrollRevealGroup>
      </div>
    </section>
  );
}
