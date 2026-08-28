import { expertiseAreas } from "../data/profile";
import { BracketLabel } from "./ui/SectionLabels";
import AnimatedContent from "./reactbits/AnimatedContent";

export function SectionHeader({ label, title, subtitle, compact = false }) {
  return (
    <AnimatedContent distance={28} duration={0.5}>
      <div className={compact ? "mb-6" : "mb-8"}>
        {label && <BracketLabel>{label}</BracketLabel>}
        <h2 className="display-lg text-3xl sm:text-4xl">{title}</h2>
        {subtitle && <p className="mt-3 max-w-2xl text-base text-[var(--color-muted)]">{subtitle}</p>}
      </div>
    </AnimatedContent>
  );
}

// Kept for backward compatibility if imported elsewhere
export default function About() {
  return null;
}
