import { clientPlatforms } from "../data/profile";
import { BracketLabel } from "./ui/SectionLabels";

export default function ClientMarquee() {
  const items = [...clientPlatforms, ...clientPlatforms];

  return (
    <div className="my-16 overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] py-6">
      <BracketLabel className="section-shell mb-4">Clients & platforms</BracketLabel>
      <div className="marquee-mask overflow-hidden">
        <div className="marquee-track flex w-max gap-4 px-4">
          {items.map((name, i) => (
            <span key={`${name}-${i}`} className="tag shrink-0 px-5 py-2.5 text-sm font-medium">
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
