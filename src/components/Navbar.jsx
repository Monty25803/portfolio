import { useState, useEffect } from "react";
import { profile } from "../data/profile";

const navLinks = [
  { href: "#projects", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#journey", label: "Journey" },
  { href: "#github", label: "GitHub" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-[var(--color-border)] bg-[var(--color-surface)]/95 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="section-shell flex items-center justify-between py-4">
        <a
          href="#home"
          className="font-mono text-sm font-medium tracking-tight text-[var(--color-text)] transition hover:text-[var(--color-accent)]"
          onClick={() => setOpen(false)}
        >
          {profile.givenName.split(" ")[0]}
          <span className="text-[var(--color-accent)]">{profile.familyName}</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-text)]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn-outline px-4 py-2 text-sm">
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-4 py-2 text-sm"
          >
            LinkedIn
          </a>
        </div>

        <button
          type="button"
          className="flex flex-col gap-1.5 p-1 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span className={`block h-0.5 w-6 bg-[var(--color-text)] transition ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 bg-[var(--color-text)] transition ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-[var(--color-text)] transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </nav>

      {open && (
        <div className="border-t border-[var(--color-border)] bg-[var(--color-surface-raised)] md:hidden">
          <ul className="section-shell flex flex-col gap-4 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block py-1 text-[var(--color-muted)] hover:text-[var(--color-accent)]"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="flex gap-3 pt-2">
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn-outline flex-1 py-2 text-center text-sm">
                GitHub
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn-primary flex-1 py-2 text-center text-sm">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
