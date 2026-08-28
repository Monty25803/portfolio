import { profile } from "../data/profile";
import ProfilePhoto from "./ProfilePhoto";
import CodeCard from "./CodeCard";
import AnimatedContent from "./reactbits/AnimatedContent";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden section-padding pt-28 sm:pt-32 lg:min-h-screen lg:pt-36 lg:pb-20">
      <div className="hero-orb -left-32 top-20 h-72 w-72 bg-blue-500/20" />
      <div className="hero-orb -right-20 top-40 h-64 w-64 bg-violet-500/15" />

      <div className="section-shell relative">
        <div className="grid min-w-0 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <AnimatedContent distance={20} duration={0.5}>
              <div className="mb-6 flex flex-wrap items-center gap-3">
                {profile.openToWork && <span className="badge-live">Available for work</span>}
                <span className="tag font-mono text-[11px]">{profile.location}</span>
              </div>
            </AnimatedContent>

            <AnimatedContent distance={28} duration={0.6} delay={0.05}>
              <p className="bracket-label mb-5">{profile.title}</p>
              <h1 className="heading-xl mb-6 text-[clamp(2.75rem,8vw,4.5rem)]">
                {profile.givenName}
                <span className="gradient-text block">{profile.familyName}</span>
              </h1>
            </AnimatedContent>

            <AnimatedContent distance={28} duration={0.6} delay={0.1}>
              <p className="mb-4 max-w-lg text-lg leading-relaxed text-[var(--color-text)] sm:text-xl">
                {profile.tagline}
              </p>
              <p className="mb-8 max-w-md text-sm leading-relaxed text-[var(--color-muted)]">
                {profile.workPreference}
              </p>
            </AnimatedContent>

            <AnimatedContent distance={20} duration={0.5} delay={0.12}>
              <div className="mb-10 flex flex-wrap gap-3">
                {profile.heroStats.map((stat) => (
                  <div key={stat.label} className="stat-pill">
                    <span className="text-sm font-semibold text-[var(--color-highlight)]">{stat.value}</span>
                    <span className="text-[10px] uppercase tracking-wider text-[var(--color-muted)]">{stat.label}</span>
                  </div>
                ))}
              </div>
            </AnimatedContent>

            <AnimatedContent distance={20} duration={0.5} delay={0.15}>
              <div className="flex flex-wrap gap-3">
                <a href="#work" className="btn-primary px-6 py-3">
                  View my work
                  <span aria-hidden>→</span>
                </a>
                <a href="#contact" className="btn-outline px-6 py-3">Contact me</a>
                <a href={profile.resumeUrl} download className="btn-outline px-6 py-3">Resume</a>
              </div>
            </AnimatedContent>
          </div>

          <AnimatedContent distance={36} duration={0.7} delay={0.1} className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative">
              <div className="photo-ring mb-5 inline-block">
                <ProfilePhoto showCaption={false} />
              </div>
              <div className="mt-2" style={{ animation: "float 6s ease-in-out infinite" }}>
                <CodeCard />
              </div>
            </div>
          </AnimatedContent>
        </div>
      </div>
    </section>
  );
}
