import { useState } from "react";
import { profile } from "../data/profile";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);

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

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignore */
    }
  };

  return (
    <section id="contact" className="section-shell section-padding">
      <div className="section-rule" />
      <ScrollReveal distance={36} duration={1}>
        <p className="mono-label mb-4">04 · Contact</p>
        <h2 className="serif-display mb-4 text-[clamp(2rem,5vw,3.25rem)]">Let&apos;s build something that lasts.</h2>
        <p className="body-copy mb-8 max-w-xl">{profile.availability}</p>
      </ScrollReveal>

      <div className="grid gap-12 lg:grid-cols-2">
        <ScrollReveal distance={28} duration={1} delay={0.08}>
          <div className="space-y-5">
            <button type="button" onClick={copyEmail} className="block text-left">
              <p className="mono-label mb-1">Email</p>
              <p className="text-[var(--color-text)] hover:text-[var(--color-accent)]">{profile.email}</p>
              {copied && <p className="mt-1 text-xs text-[var(--color-green)]">Copied!</p>}
            </button>
            <div>
              <p className="mono-label mb-1">Links</p>
              <div className="flex flex-wrap gap-3">
                <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn-pill">GitHub</a>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn-pill">LinkedIn</a>
                <a href={profile.resumeUrl} download className="btn-pill">Resume</a>
              </div>
            </div>
            <span className="tag tag-live inline-flex">Open to opportunities</span>
          </div>
        </ScrollReveal>

        <ScrollReveal distance={28} duration={1} delay={0.12}>
          <form onSubmit={handleSubmit} className="glass-panel space-y-4 p-6">
            <div>
              <label htmlFor="name" className="mono-label mb-2 block">Name</label>
              <input id="name" name="name" required className="input-field" placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="email" className="mono-label mb-2 block">Email</label>
              <input id="email" name="email" type="email" required className="input-field" placeholder="you@email.com" />
            </div>
            <div>
              <label htmlFor="message" className="mono-label mb-2 block">Your project</label>
              <textarea id="message" name="message" required rows={4} className="input-field resize-y" placeholder="Tell me about the opportunity…" />
            </div>
            <button type="submit" className="btn-primary">Submit</button>
            {sent && <p className="text-sm text-[var(--color-muted)]">Opening your email client…</p>}
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="section-shell border-t border-[var(--color-border)] py-10">
      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="mono-label">© {new Date().getFullYear()} {profile.name}</p>
        <a href="#home" className="mono-label hover:text-[var(--color-text)]">Back to top ↑</a>
      </div>
      <p className="serif-display mt-10 text-center text-[clamp(3rem,12vw,8rem)] leading-none opacity-[0.07]">DPM</p>
    </footer>
  );
}
