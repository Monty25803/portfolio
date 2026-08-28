import { profile } from "../data/profile";
import ProfilePhoto from "./ProfilePhoto";
import AnimatedContent from "./reactbits/AnimatedContent";

export default function Hero() {
  return (
    <section id="home" className="section-padding pt-32 sm:pt-36">
      <div className="section-shell">
        <div className="grid min-w-0 items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-16">
          <div>
            <AnimatedContent distance={24} duration={0.5}>
              <p className="mb-6 flex flex-wrap items-center gap-2 text-sm text-[var(--color-muted)]">
                <span className="tag">{profile.location}</span>
                <span>{profile.title}</span>
                <span className="hidden sm:inline">·</span>
                <span className="hidden sm:inline">Remote & freelance</span>
              </p>
            </AnimatedContent>

            <AnimatedContent distance={32} duration={0.6} delay={0.05}>
              <h1 className="heading-xl mb-6 text-[clamp(2.75rem,8vw,5.5rem)] font-semibold text-[var(--color-text)]">
                {profile.givenName}
                <span className="block text-[var(--color-highlight)]">{profile.familyName}</span>
              </h1>
            </AnimatedContent>

            <AnimatedContent distance={32} duration={0.6} delay={0.1}>
              <p className="mb-4 max-w-xl text-lg leading-relaxed text-[var(--color-text)] sm:text-xl">
                {profile.tagline}
              </p>
              <p className="mb-10 max-w-xl text-base leading-relaxed text-[var(--color-muted)]">
                Software Developer at {profile.company} with {profile.experienceYears} of experience
                building production backend systems, Angular dashboards, and enterprise platforms for
                healthcare and diagnostics clients.
              </p>
            </AnimatedContent>

            <AnimatedContent distance={24} duration={0.5} delay={0.15}>
              <div className="flex flex-wrap gap-3">
                <a href="#work" className="btn-primary px-6 py-3">
                  View work
                </a>
                <a href="#contact" className="btn-outline px-6 py-3">
                  Get in touch
                </a>
                <a href={profile.resumeUrl} download className="btn-outline px-6 py-3">
                  Resume
                </a>
              </div>
              <a href="#work" className="link-arrow mt-8 inline-flex">
                View my case studies
              </a>
            </AnimatedContent>
          </div>

          <AnimatedContent distance={40} duration={0.7} delay={0.1} className="mx-auto lg:mx-0">
            <ProfilePhoto showCaption={false} />
          </AnimatedContent>
        </div>
      </div>
    </section>
  );
}
