export function BracketLabel({ children, className = "" }) {
  return (
    <p className={`font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-accent)] ${className}`}>
      [ {children} ]
    </p>
  );
}

export function SectionLink({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-accent)] transition hover:underline"
    >
      {children}
      <span className="transition group-hover:translate-x-0.5">↗</span>
    </a>
  );
}
