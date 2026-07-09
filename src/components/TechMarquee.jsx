import { profile } from "../data/profile";

export default function TechMarquee({ label = "Featured Tech" }) {
  const items = [...profile.featuredTech, ...profile.featuredTech];

  return (
    <section className="border-y border-[var(--color-border)] bg-[var(--color-surface-raised)] py-5">
      <div className="section-shell mb-3">
        <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-accent)]">{label}</p>
      </div>
      <div className="marquee-mask overflow-hidden">
        <div className="marquee-track flex w-max gap-3 px-4 sm:gap-4">
          {items.map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="flex-shrink-0 rounded-sm border border-[var(--color-border)] bg-[var(--color-surface-card)] px-4 py-2 font-mono text-xs text-[var(--color-muted)] sm:text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
