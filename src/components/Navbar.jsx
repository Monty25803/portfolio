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
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled || open
          ? "nav-blur border-[var(--color-border)]"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav className="section-shell flex items-center justify-between py-4">
        <a
          href="#home"
          className="font-serif text-lg font-semibold text-[var(--color-text)]"
          onClick={() => setOpen(false)}
        >
          DPM
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-[var(--color-muted)] transition hover:text-[var(--color-text)]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary hidden px-5 py-2 text-sm md:inline-flex"
        >
          LinkedIn
        </a>

        <button
          type="button"
          className="p-2 md:hidden"
          aria-label="Toggle menu"
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
          <ul className="section-shell flex flex-col gap-4 py-5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block text-[var(--color-text)]"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex px-5 py-2 text-sm"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
