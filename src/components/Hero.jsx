import { profile } from "../data/profile";
import ProfilePhoto from "./ProfilePhoto";
import AnimatedContent from "./reactbits/AnimatedContent";

export default function Hero() {
  return (
    <section id="home" className="section-padding pt-28 sm:pt-32 lg:pt-36">
      <div className="section-shell">
        <div className="grid min-w-0 items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <AnimatedContent distance={24} duration={0.5}>
              <div className="mb-6 flex flex-wrap items-center gap-3">
                {profile.openToWork && <span className="badge-live">Open to work</span>}
                <span className="tag">{profile.location}</span>
              </div>
            </AnimatedContent>

            <AnimatedContent distance={32} duration={0.6} delay={0.05}>
              <p className="bracket-label mb-4">{profile.title} · Remote & freelance</p>
              <h1 className="heading-xl mb-6 text-[clamp(2.5rem,7.5vw,5rem)] font-semibold">
                {profile.givenName}
                <span className="block text-[var(--color-highlight)]">{profile.familyName}</span>
              </h1>
            </AnimatedContent>

            <AnimatedContent distance={32} duration={0.6} delay={0.1}>
              <p className="mb-4 max-w-lg text-lg leading-relaxed sm:text-xl">{profile.tagline}</p>
              <p className="mb-8 max-w-lg text-base text-[var(--color-muted)]">
                Building production systems at {profile.company} — Django backends, Angular dashboards,
                and enterprise platforms for healthcare & diagnostics.
              </p>
            </AnimatedContent>

            <AnimatedContent distance={24} duration={0.5} delay={0.12}>
              <div className="stat-strip mb-10 max-w-md">
                {profile.heroStats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-lg font-semibold text-[var(--color-highlight)]">{stat.value}</p>
                    <p className="text-[11px] text-[var(--color-muted)]">{stat.label}</p>
                  </div>
                ))}
              </div>
            </AnimatedContent>

            <AnimatedContent distance={24} duration={0.5} delay={0.15}>
              <div className="flex flex-wrap gap-3">
                <a href="#work" className="btn-primary px-7 py-3">View work</a>
                <a href="#contact" className="btn-outline px-7 py-3">Get in touch</a>
                <a href={profile.resumeUrl} download className="btn-outline px-7 py-3">Resume</a>
              </div>
            </AnimatedContent>
          </div>

          <AnimatedContent distance={40} duration={0.7} delay={0.1} className="mx-auto w-full max-w-sm lg:max-w-none">
            <div className="card-elevated p-3 sm:p-4">
              <ProfilePhoto showCaption={false} />
              <div className="mt-4 flex flex-wrap gap-2 px-1 pb-1">
                {profile.primaryStack.slice(0, 4).map((s) => (
                  <span key={s} className="tag-accent tag text-[11px]">{s}</span>
                ))}
              </div>
            </div>
          </AnimatedContent>
        </div>
      </div>
    </section>
  );
}
