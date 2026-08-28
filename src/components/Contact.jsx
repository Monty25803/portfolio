import { useState } from "react";
import { profile } from "../data/profile";
import { SectionHeader } from "./About";
import AnimatedContent from "./reactbits/AnimatedContent";

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
    <section id="contact" className="section-padding section-alt">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <AnimatedContent distance={32} duration={0.5}>
            <SectionHeader
              compact
              label="Contact"
              title={<>Let's build something <span className="gradient-text">great</span></>}
              subtitle="Open to remote roles, freelance projects, and collaborations."
            />
            <div className="space-y-5 text-sm">
              <ContactItem label="Email" href={`mailto:${profile.email}`} value={profile.email} />
              <ContactItem label="Website" href={profile.website} value={profile.website.replace("https://", "")} external />
              <div>
                <p className="mb-1 text-xs uppercase tracking-wider text-[var(--color-muted)]">Location</p>
                <p className="text-[var(--color-text)]">{profile.location}</p>
              </div>
              <div>
                <p className="mb-1 text-xs uppercase tracking-wider text-[var(--color-muted)]">Availability</p>
                <p className="text-[var(--color-text)]">{profile.availability}</p>
              </div>
            </div>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-8 inline-flex px-6 py-3"
            >
              Connect on LinkedIn →
            </a>
          </AnimatedContent>

          <AnimatedContent distance={32} duration={0.5} delay={0.1}>
            <form onSubmit={handleSubmit} className="card space-y-4 p-6 sm:p-8">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-xs uppercase tracking-wider text-[var(--color-muted)]">
                  Full name
                </label>
                <input id="name" name="name" type="text" required className="input-field" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-xs uppercase tracking-wider text-[var(--color-muted)]">
                  Email
                </label>
                <input id="email" name="email" type="email" required className="input-field" placeholder="you@email.com" />
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-xs uppercase tracking-wider text-[var(--color-muted)]">
                  Message
                </label>
                <textarea id="message" name="message" required rows={4} className="input-field resize-y" placeholder="Tell me about the opportunity…" />
              </div>
              <button type="submit" className="btn-primary w-full px-6 py-3 sm:w-auto">
                Send message →
              </button>
              {sent && <p className="text-sm text-[var(--color-highlight)]">Opening your email client…</p>}
            </form>
          </AnimatedContent>
        </div>
      </div>
    </section>
  );
}

function ContactItem({ label, href, value, external }) {
  return (
    <div>
      <p className="mb-1 text-xs uppercase tracking-wider text-[var(--color-muted)]">{label}</p>
      <a
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="link-arrow"
      >
        {value}
      </a>
    </div>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[var(--color-border)] py-8">
      <div className="section-shell flex flex-col items-center justify-between gap-4 text-sm text-[var(--color-muted)] sm:flex-row">
        <p>© {year} {profile.name}</p>
        <div className="flex gap-6">
          <a href="#home" className="transition hover:text-[var(--color-text)]">Top</a>
          <a href={profile.resumeUrl} download className="transition hover:text-[var(--color-text)]">Resume</a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="transition hover:text-[var(--color-text)]">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
