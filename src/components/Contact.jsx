import { useState } from "react";
import { profile } from "../data/profile";
import { SectionHeader } from "./About";
import AnimatedContent from "./reactbits/AnimatedContent";
import BlurText from "./reactbits/BlurText";
import ProfilePhoto from "./ProfilePhoto";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="section-shell">
        <AnimatedContent distance={50} duration={0.7}>
          <div className="card relative overflow-hidden px-5 py-12 sm:px-10 sm:py-16 lg:px-16">
            <div className="pointer-events-none absolute inset-0 glow-orb opacity-50" />
            <div className="relative">
              <SectionHeader
                compact
                label="Contact"
                title="Let's build something that lasts"
                subtitle="Open to remote roles, freelance projects, and collaborations — hybrid only when work-from-home is allowed."
              />

              <ProfilePhoto variant="sidebar" className="mb-8 lg:hidden" showCaption={false} />

              <BlurText
                text="Ready to connect? Send a message or reach out directly."
                className="mx-auto mb-8 max-w-lg justify-center text-base text-[var(--color-muted)] sm:text-lg"
                delay={80}
              />

              <div className="mx-auto mb-10 max-w-lg text-left">
                <p className="mb-1 text-sm text-[var(--color-muted)]">Email</p>
                <a href={`mailto:${profile.email}`} className="mb-4 block text-[var(--color-accent)] hover:underline">
                  {profile.email}
                </a>
                <p className="mb-1 text-sm text-[var(--color-muted)]">Website</p>
                <a
                  href={profile.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-4 block text-[var(--color-accent)] hover:underline"
                >
                  {profile.website.replace("https://", "")}
                </a>
                <p className="text-sm text-[var(--color-muted)]">
                  📍 {profile.location} · {profile.availability}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="mx-auto max-w-lg space-y-4 text-left">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm text-[var(--color-muted)]">
                    Full name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full rounded-sm border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2.5 text-sm text-[var(--color-text)] outline-none transition focus:border-[var(--color-accent)]"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm text-[var(--color-muted)]">
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-sm border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2.5 text-sm text-[var(--color-text)] outline-none transition focus:border-[var(--color-accent)]"
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm text-[var(--color-muted)]">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full resize-y rounded-sm border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2.5 text-sm text-[var(--color-text)] outline-none transition focus:border-[var(--color-accent)]"
                    placeholder="Tell me about the opportunity or project..."
                  />
                </div>
                <button type="submit" className="btn-primary w-full px-6 py-3 text-sm sm:w-auto">
                  Send message
                </button>
                {sent && (
                  <p className="text-sm text-[var(--color-accent)]">
                    Opening your email client…
                  </p>
                )}
              </form>

              <div className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline inline-flex items-center justify-center gap-2 px-6 py-3 text-sm"
                >
                  <LinkedInIcon />
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[var(--color-border)] py-6 sm:py-8">
      <div className="section-shell flex flex-col items-center justify-between gap-4 text-sm text-[var(--color-muted)] sm:flex-row">
        <p className="text-center sm:text-left">
          © {year} {profile.name}. Built with React &amp; Vite.
        </p>
        <div className="flex items-center gap-6">
          <a href="#about" className="hover:text-[var(--color-accent)]">
            Back to top
          </a>
          <a href={profile.resumeUrl} download className="hover:text-[var(--color-accent)]">
            Resume
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--color-accent)]"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

function LinkedInIcon() {
  return (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
