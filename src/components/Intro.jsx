import { profile } from "../data/profile";
import ScrollReveal from "./ScrollReveal";

export default function Intro() {
  return (
    <section id="about" className="section-padding pt-0">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <ScrollReveal distance={40} duration={1.1}>
            <h2 className="display-lg mb-2 text-5xl sm:text-6xl">Hey!</h2>
            {profile.openToWork && (
              <span className="badge-live mb-6 inline-flex">Open to work</span>
            )}
          </ScrollReveal>

          <ScrollReveal distance={40} duration={1.1} delay={0.1}>
            <div className="space-y-5 text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
              <p className="text-[var(--color-text)]">
                I&apos;m {profile.givenName}, a software developer based in {profile.location.split(",")[0]}, currently
                working at <strong className="font-medium text-[var(--color-text)]">{profile.company}</strong> on
                enterprise healthcare and diagnostics platforms.
              </p>
              <p>{profile.summary}</p>
              <p>{profile.philosophy}</p>
            </div>
            <a href="#work" className="btn-primary mt-8 inline-flex">
              View my work
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
