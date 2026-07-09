import { profile, expertiseAreas } from "../data/profile";
import AnimatedContent from "./reactbits/AnimatedContent";
import ShinyText from "./reactbits/ShinyText";
import ProfilePhoto from "./ProfilePhoto";
import CodeCard from "./CodeCard";

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="section-shell">
        <SectionHeader
          label="About"
          title="Engineering software for the real world"
          subtitle="Software Developer building scalable backend systems, Angular dashboards, and production platforms for healthcare and enterprise clients."
        />

        <AnimatedContent distance={50} duration={0.7}>
          <blockquote className="card mb-10 border-l-2 border-l-[var(--color-accent)] p-5 sm:mb-12 sm:p-8">
            <p className="text-base italic leading-relaxed text-[var(--color-text)] sm:text-lg">
              &ldquo;{profile.philosophy}&rdquo;
            </p>
          </blockquote>
        </AnimatedContent>

        <div className="mb-12 grid min-w-0 gap-10 lg:mb-16 lg:grid-cols-[1fr_320px]">
          <AnimatedContent distance={60} duration={0.7}>
            <div className="space-y-5 text-base leading-relaxed text-[var(--color-muted)] sm:space-y-6 sm:text-lg">
              <p>{profile.summary}</p>
              <p>
                I enjoy solving complex backend challenges — from designing efficient data models to
                optimizing workflows that power real-world business operations. Whether it&apos;s
                healthcare procurement systems or client onboarding platforms, I focus on writing
                clean, maintainable code that scales.
              </p>
            </div>
          </AnimatedContent>
          <AnimatedContent distance={60} duration={0.7} delay={0.15}>
            <aside className="card p-5 sm:p-6">
              <div className="mb-6 hidden lg:block">
                <ProfilePhoto variant="sidebar" showCaption={false} />
              </div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[var(--color-accent)]">
                Quick facts
              </h3>
              <dl className="space-y-4 text-sm">
                <Fact label="Location" value={profile.location} />
                <Fact label="Company" value={profile.company} />
                <Fact label="Experience" value={profile.experienceYears} />
                <Fact label="Stack" value="Python · Django · Angular" />
                <Fact label="Approach" value="Agentic AI–assisted development" />
              </dl>
            </aside>
          </AnimatedContent>
        </div>

        <AnimatedContent distance={40} duration={0.6}>
          <div className="mb-8 lg:hidden">
            <CodeCard />
          </div>
        </AnimatedContent>

        <div className="mb-4">
          <p className="mb-6 font-mono text-xs uppercase tracking-widest text-[var(--color-accent)]">
            Engineering focus
          </p>
          <div className="grid min-w-0 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {expertiseAreas.map((area, i) => (
              <AnimatedContent key={area.title} distance={40} duration={0.6} delay={i * 0.05}>
                <div className="card h-full p-5 transition hover:border-[var(--color-accent)]/25 sm:p-6">
                  <h3 className="mb-2 font-semibold text-[var(--color-text)]">{area.title}</h3>
                  <p className="text-sm leading-relaxed text-[var(--color-muted)]">{area.description}</p>
                </div>
              </AnimatedContent>
            ))}
          </div>
        </div>
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
        <p className="mb-2 font-mono text-sm text-[var(--color-accent)]">
          <ShinyText text={`// ${label}`} color="#dc2626" shineColor="#ffffff" speed={4} />
        </p>
        <h2 className="jp-section-title text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-3 max-w-2xl text-sm text-[var(--color-muted)] sm:text-base">{subtitle}</p>
        )}
      </div>
    </AnimatedContent>
  );
}
