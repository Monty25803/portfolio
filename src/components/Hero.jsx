import { profile } from "../data/profile";
import BlurText from "./reactbits/BlurText";
import AnimatedContent from "./reactbits/AnimatedContent";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] overflow-x-hidden pt-28 sm:pt-32">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-10" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[var(--color-accent)]/30 to-transparent" />

      <div className="section-shell relative pb-20 pt-6 sm:pb-28 sm:pt-10">
        <AnimatedContent distance={30} duration={0.5}>
          <div className="mb-8 flex flex-wrap items-center gap-2 text-xs text-[var(--color-muted)] sm:text-sm">
            <span className="rounded-sm border border-[var(--color-border)] px-3 py-1">{profile.location}</span>
            <span className="hidden sm:inline">·</span>
            <span>{profile.title}</span>
            <span className="hidden sm:inline">·</span>
            <span>Python · Django · Angular · Agentic AI</span>
          </div>
        </AnimatedContent>

        <AnimatedContent distance={40} duration={0.6} delay={0.05}>
          <h1 className="editorial-hero mb-6 max-w-4xl text-4xl font-bold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
            <BlurText
              as="span"
              text={profile.givenName.replace(" ", "")}
              delay={40}
              animateBy="chars"
              className="text-[var(--color-text)]"
            />
            <BlurText
              as="span"
              text={profile.familyName}
              delay={45}
              animateBy="chars"
              className="text-[var(--color-accent)]"
            />
          </h1>
        </AnimatedContent>

        <AnimatedContent distance={40} duration={0.6} delay={0.1}>
          <p className="mb-4 max-w-2xl text-lg font-medium leading-snug text-[var(--color-text)] sm:text-xl lg:text-2xl">
            {profile.tagline}
          </p>
          <p className="mb-10 max-w-2xl text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
            Software Developer at {profile.company} building scalable backend systems, Angular dashboards,
            and production platforms for healthcare and enterprise clients — with {profile.experienceYears} of
            experience and agentic AI–assisted development workflows.
          </p>
        </AnimatedContent>

        <AnimatedContent distance={30} duration={0.5} delay={0.15}>
          <div className="flex flex-wrap gap-3 sm:gap-4">
            <a href="#projects" className="btn-primary px-6 py-3 text-sm">
              View work
            </a>
            <a href="#contact" className="btn-outline px-6 py-3 text-sm">
              Get in touch
            </a>
            <a href={profile.resumeUrl} download className="btn-outline px-6 py-3 text-sm">
              Resume
            </a>
          </div>
          <a
            href="#projects"
            className="mt-8 inline-block text-sm text-[var(--color-muted)] transition hover:text-[var(--color-accent)]"
          >
            View my case studies ↓
          </a>
        </AnimatedContent>
      </div>
    </section>
  );
}
