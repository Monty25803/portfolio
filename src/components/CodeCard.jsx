import { profile } from "../data/profile";

const codeLines = [
  { indent: 0, parts: [{ t: "class", c: "kw" }, { t: " Developer", c: "cls" }, { t: ":", c: "muted" }] },
  { indent: 1, parts: [{ t: "def", c: "kw" }, { t: " __init__", c: "fn" }, { t: "(self):", c: "muted" }] },
  { indent: 2, parts: [{ t: "self.name = ", c: "muted" }, { t: `"${profile.name}"`, c: "str" }] },
  { indent: 2, parts: [{ t: "self.role = ", c: "muted" }, { t: `"${profile.title}"`, c: "str" }] },
  { indent: 2, parts: [{ t: "self.stack = [", c: "muted" }] },
  { indent: 3, parts: [{ t: '"Python", "Django",', c: "str" }] },
  { indent: 3, parts: [{ t: '"Angular", "Agentic AI"', c: "acc" }, { t: "]", c: "muted" }] },
  { indent: 0, parts: [] },
  { indent: 1, parts: [{ t: "def", c: "kw" }, { t: " build", c: "fn" }, { t: "(self):", c: "muted" }] },
  { indent: 2, parts: [{ t: "return ", c: "kw" }, { t: '"scalable backends"', c: "acc" }] },
];

const colorMap = {
  kw: "text-[var(--color-text)]",
  cls: "text-[var(--color-accent)]",
  fn: "text-[var(--color-muted)]",
  str: "text-white",
  acc: "text-[var(--color-accent)]",
  muted: "text-[var(--color-muted)]",
};

export default function CodeCard() {
  return (
    <div className="relative w-full min-w-0 max-w-full">
      <div className="absolute -inset-1 rounded-sm bg-gradient-to-br from-[var(--color-accent)]/20 to-transparent blur-xl" />
      <div className="relative w-full min-w-0 overflow-hidden rounded-sm border border-[var(--color-border)] bg-[var(--color-surface-card)]/95 shadow-2xl backdrop-blur-sm">
        <div className="flex items-center gap-2 border-b border-[var(--color-border)] px-4 py-3">
          <span className="h-2.5 w-2.5 flex-shrink-0 rounded-full bg-[var(--color-accent)]" />
          <span className="h-2.5 w-2.5 flex-shrink-0 rounded-full bg-[var(--color-muted)]/40" />
          <span className="h-2.5 w-2.5 flex-shrink-0 rounded-full bg-[var(--color-muted)]/40" />
          <span className="ml-1 truncate font-mono text-xs text-[var(--color-muted)]">developer.py</span>
        </div>
        <pre className="overflow-hidden px-4 py-4 font-mono text-[11px] leading-relaxed sm:text-xs md:text-sm">
          <code className="block whitespace-pre-wrap break-words">
            {codeLines.map((line, i) => (
              <span key={i} className="block">
                {"    ".repeat(line.indent)}
                {line.parts.map((part, j) => (
                  <span key={j} className={colorMap[part.c]}>
                    {part.t}
                  </span>
                ))}
              </span>
            ))}
          </code>
        </pre>
      </div>
    </div>
  );
}
