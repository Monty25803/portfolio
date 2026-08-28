import { useState } from "react";
import { profile } from "../data/profile";
import ScrollReveal from "./ScrollReveal";

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
      <div className="section-shell max-w-2xl">
        <ScrollReveal distance={36} duration={1}>
          <h2 className="display-lg mb-3 text-4xl sm:text-5xl">Let&apos;s talk.</h2>
          <p className="mb-10 text-[var(--color-muted)]">
            Have a project or need help? Fill out the form, and I&apos;ll get back to you soon.
          </p>
        </ScrollReveal>

        <ScrollReveal distance={32} duration={1} delay={0.1}>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium">Name</label>
              <input id="name" name="name" type="text" required className="input-field" placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium">Email</label>
              <input id="email" name="email" type="email" required className="input-field" placeholder="you@email.com" />
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium">Your Project</label>
              <textarea id="message" name="message" required rows={4} className="input-field resize-y" placeholder="Tell me about your project…" />
            </div>
            <button type="submit" className="btn-primary w-full sm:w-auto">
              Submit
            </button>
            {sent && <p className="text-sm text-[var(--color-muted)]">Opening your email client…</p>}
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}

export function Footer() {
  const footerLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Me" },
    { href: "#services", label: "Services" },
    { href: "#work", label: "Works" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg)]">
      <div className="section-shell section-padding pt-16 pb-8">
        <div className="mb-16 grid gap-12 lg:grid-cols-2">
          <div>
            <h3 className="display-lg mb-2 text-3xl sm:text-4xl">
              Building reliable
              <br />
              software at scale.
            </h3>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <p className="slash-label mb-4">/Quick links</p>
              <ul className="space-y-2">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-sm text-[var(--color-muted)] transition hover:text-[var(--color-text)]">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="slash-label mb-4">/Contact</p>
              <a href={`mailto:${profile.email}`} className="text-sm text-[var(--color-muted)] transition hover:text-[var(--color-text)]">
                {profile.email}
              </a>
            </div>
          </div>
        </div>
        <p className="footer-brand text-center">DPM</p>
      </div>
    </footer>
  );
}
