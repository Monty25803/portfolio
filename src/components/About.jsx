import { profile, expertiseAreas } from "../data/profile";
import { BracketLabel } from "./ui/SectionLabels";
import AnimatedContent from "./reactbits/AnimatedContent";
import ProfilePhoto from "./ProfilePhoto";

export default function About() {
  return (
    <section id="about" className="section-padding border-t border-[var(--color-border)] bg-[var(--color-surface-raised)]">
      <div className="section-shell">
        <div className="grid min-w-0 gap-12 lg:grid-cols-[1fr_280px] lg:gap-16">
          <div>
            <AnimatedContent distance={40} duration={0.6}>
              <BracketLabel className="mb-4">About</BracketLabel>
              <h2 className="editorial-title mb-6 text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
                I build systems teams rely on in production
              </h2>
            </AnimatedContent>

            <AnimatedContent distance={50} duration={0.7}>
              <div className="space-y-5 text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
                <p>{profile.summary}</p>
                <p className="border-l-2 border-[var(--color-accent)] pl-5 italic text-[var(--color-text)]/90">
                  &ldquo;{profile.philosophy}&rdquo;
                </p>
                <p>{profile.workPreference}</p>
              </div>
            </AnimatedContent>

            <AnimatedContent distance={40} duration={0.6} delay={0.1}>
              <div className="mt-10 flex flex-wrap gap-2">
                {profile.primaryStack.map((skill) => (
                  <span key={skill} className="tag-chip font-medium text-[var(--color-accent)]">
                    {skill}
                  </span>
                ))}
              </div>
            </AnimatedContent>
          </div>

          <AnimatedContent distance={50} duration={0.7} delay={0.1}>
            <aside>
              <ProfilePhoto variant="sidebar" showCaption={false} />
              <dl className="mt-6 space-y-4 text-sm">
                <Fact label="Location" value={profile.location} />
                <Fact label="Company" value={profile.company} />
                <Fact label="Experience" value={profile.experienceYears} />
                <Fact label="Website" value={profile.website.replace("https://", "")} />
              </dl>
            </aside>
          </AnimatedContent>
        </div>

        <AnimatedContent distance={40} duration={0.6}>
          <div className="mt-16 border-t border-[var(--color-border)] pt-12">
            <p className="mb-6 font-mono text-xs uppercase tracking-widest text-[var(--color-muted)]">
              Engineering focus
            </p>
            <div className="grid min-w-0 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {expertiseAreas.map((area) => (
                <div key={area.title} className="card p-5 transition hover:border-[var(--color-accent)]/25">
                  <h3 className="mb-2 font-semibold">{area.title}</h3>
                  <p className="text-sm leading-relaxed text-[var(--color-muted)]">{area.description}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}

function Fact({ label, value }) {
  return (
    <div>
      <dt className="text-[var(--color-muted)]">{label}</dt>
      <dd className="font-medium text-[var(--color-text)]">{value}</dd>
    </div>
  );
}

export function SectionHeader({ label, title, subtitle, compact = false }) {
  return (
    <AnimatedContent distance={40} duration={0.6}>
      <div className={compact ? "mb-8" : "mb-10 sm:mb-12"}>
        {label && <BracketLabel className="mb-3">{label}</BracketLabel>}
        <h2 className="editorial-title text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
        {subtitle && (
          <p className="mt-3 max-w-2xl text-sm text-[var(--color-muted)] sm:text-base">{subtitle}</p>
        )}
      </div>
    </AnimatedContent>
  );
}
