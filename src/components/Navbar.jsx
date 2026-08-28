import { useState, useEffect } from "react";
import { profile } from "../data/profile";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "Works" },
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
      <nav className="section-shell flex items-center justify-between py-5">
        <a
          href="#home"
          className="display-lg text-lg tracking-tight"
          onClick={() => setOpen(false)}
        >
          {profile.givenName.split(" ")[0]}
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[var(--color-muted)] transition hover:text-[var(--color-text)]"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href={`mailto:${profile.email}`}
          className="hidden text-sm text-[var(--color-muted)] transition hover:text-[var(--color-text)] md:block"
        >
          {profile.email}
        </a>

        <button
          type="button"
          className="p-2 md:hidden"
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
        <div className="border-t border-[var(--color-border)] bg-[var(--color-surface-alt)] md:hidden">
          <ul className="section-shell flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-lg px-3 py-2.5 hover:bg-[var(--color-surface)]"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-2 px-3 text-sm text-[var(--color-muted)]">{profile.email}</li>
          </ul>
        </div>
      )}
    </header>
  );
}
