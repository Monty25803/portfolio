export function BracketLabel({ children, className = "" }) {
  return <p className={`slash-label mb-3 ${className}`}>{children}</p>;
}

export function SectionLink({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="link-arrow">
      {children}
    </a>
  );
}
