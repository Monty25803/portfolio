import { clientPlatforms } from "../data/profile";
import { BracketLabel } from "./ui/SectionLabels";
import AnimatedContent from "./reactbits/AnimatedContent";

export default function ClientMarquee() {
  const items = [...clientPlatforms, ...clientPlatforms];

  return (
    <AnimatedContent distance={30} duration={0.5}>
      <div className="mb-16 border-y border-[var(--color-border)] py-6">
        <BracketLabel className="section-shell mb-4">Clients & platforms</BracketLabel>
        <div className="marquee-mask overflow-hidden">
          <div className="marquee-track flex w-max gap-2 px-4 sm:gap-3">
            {items.map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="flex-shrink-0 rounded-sm border border-[var(--color-border)] bg-[var(--color-surface-card)] px-4 py-2 text-xs text-[var(--color-muted)] transition hover:border-[var(--color-accent)]/40 hover:text-[var(--color-text)] sm:text-sm"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </AnimatedContent>
  );
}
