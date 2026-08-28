import { clientPlatforms } from "../data/profile";
import { BracketLabel } from "./ui/SectionLabels";

export default function ClientMarquee() {
  const items = [...clientPlatforms, ...clientPlatforms];

  return (
    <div className="my-16 border-y border-[var(--color-border)] py-8">
      <BracketLabel className="section-shell mb-4">Clients & platforms</BracketLabel>
      <div className="marquee-mask overflow-hidden">
        <div className="marquee-track flex w-max gap-3 px-4">
          {items.map((name, i) => (
            <span key={`${name}-${i}`} className="tag shrink-0 px-4 py-2 text-sm">
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
