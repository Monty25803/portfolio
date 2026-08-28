import { useRef, useCallback } from "react";
import { profile } from "../data/profile";
import ScrollReveal from "./ScrollReveal";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Stack" },
  { href: "#projects", label: "Projects" },
  { href: "#github", label: "GitHub" },
  { href: "#contact", label: "Contact" },
];

export default function Hero() {
  const layerText = useRef(null);
  const layerPhoto = useRef(null);

  const onMouseMove = useCallback((e) => {
    const W = window.innerWidth;
    const H = window.innerHeight;
    const x = (e.clientX / W - 0.5) * 2;
    const y = (e.clientY / H - 0.5) * 2;
    if (layerText.current) {
      layerText.current.style.transform = `translate(${x * 8}px, ${y * 5}px)`;
    }
    if (layerPhoto.current) {
      layerPhoto.current.style.transform = `perspective(1000px) rotateY(${x * 6}deg) rotateX(${-y * 4}deg) translate(${x * 14}px, ${y * 10}px)`;
    }
  }, []);

  const onMouseLeave = useCallback(() => {
    [layerText, layerPhoto].forEach((ref) => {
      if (ref.current) {
        ref.current.style.transform = "none";
        ref.current.style.transition = "transform 0.9s cubic-bezier(0.23,1,0.32,1)";
      }
    });
  }, []);

  const onMouseEnter = useCallback(() => {
    [layerText, layerPhoto].forEach((ref) => {
      if (ref.current) ref.current.style.transition = "transform 0.08s ease-out";
    });
  }, []);

  return (
    <section
      id="home"
      className="section-shell section-padding min-h-screen pt-28 lg:pt-32"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
    >
      <div className="section-rule" />

      <nav className="hero-nav" aria-label="Primary">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href}>{link.label}</a>
        ))}
      </nav>

      <div className="hero-grid">
        <div ref={layerText}>
          <ScrollReveal distance={28} duration={1} blur={8}>
            <p className="mono-label mb-6 max-w-md leading-relaxed">
              {profile.tagline}
            </p>
          </ScrollReveal>

          <div className="overflow-hidden">
            <ScrollReveal distance={40} duration={1.1} delay={0.05}>
              <h1 className="serif-display text-[clamp(2.8rem,9vw,7rem)]">{profile.givenName}</h1>
            </ScrollReveal>
          </div>
          <div className="overflow-hidden">
            <ScrollReveal distance={40} duration={1.1} delay={0.12}>
              <h1 className="serif-display mt-1 text-[clamp(2.8rem,9vw,7rem)]">{profile.familyName}</h1>
            </ScrollReveal>
          </div>

          <ScrollReveal distance={24} duration={1} delay={0.2}>
            <div className="mt-8 flex flex-wrap gap-8 sm:gap-12">
              <div>
                <p className="mono-label mb-1">Role</p>
                <p className="text-sm text-[var(--color-text)]">{profile.title}</p>
              </div>
              <div>
                <p className="mono-label mb-1">Company</p>
                <p className="text-sm text-[var(--color-text)]">{profile.company}</p>
                <p className="mono-label mt-1">{profile.experienceYears}</p>
              </div>
              <div>
                <p className="mono-label mb-1">Location</p>
                <p className="text-sm text-[var(--color-text)]">{profile.location.split(",")[0]}</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal distance={20} duration={1} delay={0.28}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href={`mailto:${profile.email}`} className="btn-icon" aria-label="Email">✉</a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn-icon" aria-label="GitHub">GH</a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn-icon" aria-label="LinkedIn">in</a>
              <a href={profile.resumeUrl} download className="btn-pill">↓ Resume</a>
              <a href="#projects" className="btn-pill">View work</a>
            </div>
            {profile.openToWork && (
              <p className="tag tag-live mt-5 inline-flex">Available · Remote & freelance</p>
            )}
          </ScrollReveal>
        </div>

        <div ref={layerPhoto} className="hero-photo-wrap">
          <div className="hero-photo-red" aria-hidden>
            <img src={profile.photoAlt} alt="" loading="eager" />
          </div>
          <div className="hero-photo-main">
            <img
              src={profile.photo}
              alt={profile.name}
              loading="eager"
              style={{ objectPosition: "50% 18%" }}
            />
            <div className="hero-photo-fade" />
            <div className="hero-photo-caption">
              <p className="mono-label text-[var(--color-text)]">{profile.primaryStack.slice(0, 3).join(" · ")}</p>
              <p className="mono-label mt-1">{profile.primaryStack.slice(3).join(" · ")}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 flex justify-center">
        <a href="#about" className="mono-label hover:text-[var(--color-text)]">Scroll ↓</a>
      </div>
    </section>
  );
}
