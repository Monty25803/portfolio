import { useState, useEffect } from "react";
import { profile } from "../data/profile";

const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#journey", label: "Journey" },
  { href: "#github", label: "GitHub" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? "nav-blur border-b border-[var(--color-border)]" : ""
      }`}
    >
      <nav className="section-shell flex items-center justify-between py-4">
        <a
          href="#home"
          className="text-lg font-bold tracking-tight"
          onClick={() => setOpen(false)}
        >
          DPM<span className="gradient-text">.</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm text-[var(--color-muted)] transition hover:text-[var(--color-text)]"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn-outline px-4 py-2 text-sm">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn-primary px-4 py-2 text-sm">
            LinkedIn
          </a>
        </div>

        <button
          type="button"
          className="rounded-md p-2 md:hidden"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span className={`block h-0.5 w-5 bg-[var(--color-text)] transition ${open ? "translate-y-1.5 rotate-45" : ""}`} />
          <span className={`my-1 block h-0.5 w-5 bg-[var(--color-text)] transition ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-5 bg-[var(--color-text)] transition ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
        </button>
      </nav>

      {open && (
        <div className="border-t border-[var(--color-border)] bg-[var(--color-surface)] md:hidden">
          <ul className="section-shell flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-lg px-3 py-2.5 text-[var(--color-muted)] hover:bg-[var(--color-surface-alt)] hover:text-[var(--color-text)]"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-3 flex gap-2">
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn-outline flex-1 py-2 text-center text-sm">GitHub</a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn-primary flex-1 py-2 text-center text-sm">LinkedIn</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
