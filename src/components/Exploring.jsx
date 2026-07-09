import { exploring } from "../data/profile";
import { SectionHeader } from "./About";
import AnimatedContent from "./reactbits/AnimatedContent";

export default function Exploring() {
  return (
    <section id="exploring" className="section-padding border-t border-[var(--color-border)]">
      <div className="section-shell">
        <SectionHeader
          label="Research & Dev"
          title="Currently exploring"
          subtitle="Continuously learning modern backend patterns, agentic AI workflows, and production-grade system design."
        />
        <div className="grid min-w-0 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {exploring.map((item, i) => (
            <AnimatedContent key={item.title} distance={40} duration={0.6} delay={i * 0.06}>
              <div className="card h-full p-5 transition hover:border-[var(--color-accent)]/25 sm:p-6">
                <h3 className="mb-2 font-semibold text-[var(--color-text)]">{item.title}</h3>
                <p className="text-sm leading-relaxed text-[var(--color-muted)]">{item.description}</p>
              </div>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
}
