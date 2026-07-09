import { profile } from "../data/profile";
import Particles from "./reactbits/Particles";
import BlurText from "./reactbits/BlurText";
import ShinyText from "./reactbits/ShinyText";
import TextType from "./reactbits/TextType";
import AnimatedContent from "./reactbits/AnimatedContent";
import ProfilePhoto from "./ProfilePhoto";
import CodeCard from "./CodeCard";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-x-hidden pt-24">
      <Particles
        particleCount={160}
        particleSpread={12}
        speed={0.06}
        moveParticlesOnHover
        particleHoverFactor={0.8}
        alphaParticles
        particleBaseSize={70}
        particleColors={["#ffffff", "#fafafa", "#dc2626"]}
        className="opacity-50"
      />
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-15" />
      <div className="pointer-events-none absolute right-0 top-1/4 h-px w-1/3 bg-gradient-to-l from-[var(--color-accent)]/40 to-transparent" />
      <div className="pointer-events-none absolute bottom-1/4 left-0 h-px w-1/4 bg-gradient-to-r from-[var(--color-accent)]/30 to-transparent" />

      <div className="section-shell relative flex min-w-0 flex-col gap-10 pb-24 pt-10 sm:pt-14 lg:flex-row lg:items-center lg:gap-12 lg:pt-20">
        <div className="min-w-0 flex-1 text-left">
          <AnimatedContent distance={40} duration={0.6} delay={0.1}>
            {profile.openToWork && (
              <p className="mb-3 inline-flex items-center gap-2 rounded-sm border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/10 px-3 py-1 font-mono text-xs text-[var(--color-accent)]">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--color-accent)]" />
                Open to opportunities
              </p>
            )}
            <p className="mb-4 flex items-center font-mono text-sm text-[var(--color-muted)]">
              <span className="jp-red-bar" />
              {profile.location}
            </p>
          </AnimatedContent>

          <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            <span className="mb-2 block text-base font-normal leading-normal text-[var(--color-muted)] sm:text-xl">
              Hi, I&apos;m
            </span>
            <span className="flex flex-col leading-none">
              <BlurText
                as="span"
                text={profile.givenName}
                delay={50}
                animateBy="words"
                className="text-[var(--color-text)]"
              />
              <BlurText
                as="span"
                text={profile.familyName}
                delay={60}
                animateBy="chars"
                className="text-[var(--color-accent)]"
              />
            </span>
          </h1>

          <TextType
            as="p"
            text={[
              profile.title,
              "Agentic AI–Assisted Development",
              "Python · Django · Angular",
              "Metropolis Procurement System",
            ]}
            typingSpeed={55}
            deletingSpeed={35}
            pauseDuration={2200}
            loop
            className="mb-2 text-lg font-medium text-[var(--color-text)] sm:text-2xl"
            cursorCharacter="|"
            cursorClassName="text-[var(--color-accent)]"
          />

          <AnimatedContent distance={50} duration={0.7} delay={0.2}>
            <p className="mb-8 max-w-xl text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
              <ShinyText
                text={profile.tagline}
                color="#a3a3a3"
                shineColor="#ffffff"
                speed={3}
                className="font-medium"
              />
              . Currently at{" "}
              <span className="text-[var(--color-accent)]">{profile.company}</span> with{" "}
              {profile.experienceYears} of experience.
            </p>
          </AnimatedContent>

          <AnimatedContent distance={40} duration={0.6} delay={0.3}>
            <div className="mb-6 flex flex-wrap gap-2 sm:mb-8 sm:gap-3">
              {profile.heroStats.map((stat) => (
                <span
                  key={stat.label}
                  className="rounded-sm border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/10 px-3 py-1.5 text-xs font-medium text-[var(--color-text)] sm:px-4 sm:text-sm"
                >
                  <span className="text-[var(--color-accent)]">{stat.value}</span>
                  <span className="mx-1.5 text-[var(--color-muted)]">·</span>
                  {stat.label}
                </span>
              ))}
            </div>
            <div className="mb-10 flex flex-wrap gap-2 sm:gap-3">
              {profile.highlights.map((item) => (
                <span
                  key={item}
                  className="rounded-sm border border-[var(--color-border)] bg-[var(--color-surface-card)]/80 px-3 py-1.5 text-xs text-[var(--color-muted)] backdrop-blur-sm sm:px-4 sm:text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </AnimatedContent>

          <AnimatedContent distance={30} duration={0.5} delay={0.4}>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <a href="#projects" className="btn-primary px-5 py-2.5 text-sm sm:px-6 sm:py-3">
                View projects
              </a>
              <a href={profile.resumeUrl} download className="btn-outline px-5 py-2.5 text-sm sm:px-6 sm:py-3">
                Download resume
              </a>
              <a href="#contact" className="btn-outline px-5 py-2.5 text-sm sm:px-6 sm:py-3">
                Contact me
              </a>
            </div>
          </AnimatedContent>
        </div>

        <AnimatedContent
          distance={60}
          direction="horizontal"
          duration={0.8}
          delay={0.2}
          className="w-full min-w-0 lg:w-auto lg:max-w-md lg:flex-shrink-0"
        >
          <div className="mx-auto flex w-full min-w-0 max-w-sm flex-col items-center gap-6 sm:max-w-md lg:items-stretch">
            <ProfilePhoto />
            <CodeCard />
          </div>
        </AnimatedContent>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-xs text-[var(--color-muted)] transition hover:text-[var(--color-accent)]"
        aria-label="Scroll to about section"
      >
        <span>Scroll</span>
        <span className="block h-8 w-px bg-gradient-to-b from-[var(--color-accent)] to-transparent animate-float" />
      </a>
    </section>
  );
}
