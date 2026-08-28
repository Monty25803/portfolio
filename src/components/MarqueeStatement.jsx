import { profile } from "../data/profile";

export default function MarqueeStatement() {
  const text = profile.marqueeText.replace(/\s+/g, "");
  const items = Array(4).fill(text);

  return (
    <div className="marquee-border">
      <div className="overflow-hidden">
        <div className="marquee-track flex w-max items-center gap-12">
          {items.map((item, i) => (
            <span key={i} className="marquee-text px-4">
              {item}
              <span className="mx-8 text-[var(--color-muted)]">·</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
