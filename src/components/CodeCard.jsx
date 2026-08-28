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
  kw: "text-[#c678dd]",
  cls: "text-[#61afef]",
  fn: "text-[#61afef]",
  str: "text-[#98c379]",
  acc: "text-[#e5c07b]",
  muted: "text-[#5c6370]",
};

export default function CodeCard() {
  return (
    <div className="relative w-full min-w-0 max-w-full">
      <div className="absolute -inset-px rounded-xl bg-gradient-to-br from-blue-500/20 via-violet-500/10 to-transparent blur-sm" />
      <div className="relative w-full min-w-0 overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-card)] shadow-2xl">
        <div className="flex items-center gap-2 border-b border-[var(--color-border)] px-4 py-3">
          <span className="h-3 w-3 flex-shrink-0 rounded-full bg-red-500/80" />
          <span className="h-3 w-3 flex-shrink-0 rounded-full bg-yellow-500/80" />
          <span className="h-3 w-3 flex-shrink-0 rounded-full bg-green-500/80" />
          <span className="ml-2 truncate font-mono text-xs text-[var(--color-muted)]">developer.py</span>
        </div>
        <pre className="overflow-hidden px-4 py-4 font-mono text-[11px] leading-relaxed sm:text-xs">
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
