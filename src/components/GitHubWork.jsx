import { githubProjects, profile } from "../data/profile";
import { BracketLabel, SectionLink } from "./ui/SectionLabels";
import AnimatedContent from "./reactbits/AnimatedContent";

const langColors = {
  Python: "#dc2626",
  JavaScript: "#facc15",
  TypeScript: "#60a5fa",
  "C++": "#a78bfa",
  MATLAB: "#fb923c",
};

export default function GitHubWork() {
  return (
    <section id="github" className="mb-20">
      <AnimatedContent distance={40} duration={0.6}>
        <BracketLabel className="mb-4">GitHub repositories</BracketLabel>
        <div className="mb-8 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="jp-section-title text-2xl font-bold tracking-tight sm:text-3xl">
              All work on GitHub
            </h2>
            <p className="mt-2 max-w-xl text-sm text-[var(--color-muted)] sm:text-base">
              Enterprise platforms, open-source tools, desktop apps, and portfolio builds — pulled from{" "}
              <span className="text-[var(--color-text)]">@{profile.github.split("/").pop()}</span>.
            </p>
          </div>
          <SectionLink href={profile.github}>github.com/Monty25803</SectionLink>
        </div>
      </AnimatedContent>

      <div className="grid min-w-0 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {githubProjects.map((repo, i) => (
          <AnimatedContent key={repo.id} distance={35} duration={0.5} delay={i * 0.04}>
            <RepoCard repo={repo} />
          </AnimatedContent>
        ))}
      </div>
    </section>
  );
}

function RepoCard({ repo }) {
  const langColor = langColors[repo.language] || "var(--color-muted)";

  return (
    <a
      href={repo.homepage || repo.url}
      target="_blank"
      rel="noopener noreferrer"
      className="github-card group flex h-full flex-col p-4 sm:p-5"
    >
      <div className="mb-3 flex items-start justify-between gap-2">
        <span className="rounded-sm border border-[var(--color-border)] bg-[var(--color-surface)] px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-[var(--color-muted)]">
          {repo.category}
        </span>
        {repo.releaseTag && (
          <span className="rounded-sm border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/10 px-2 py-0.5 font-mono text-[10px] text-[var(--color-accent)]">
            {repo.releaseTag}
          </span>
        )}
      </div>

      <h3 className="mb-1 font-semibold text-[var(--color-text)] transition group-hover:text-[var(--color-accent)]">
        {repo.title}
      </h3>
      <p className="mb-4 flex-1 text-xs leading-relaxed text-[var(--color-muted)] sm:text-sm">
        {repo.description}
      </p>

      <div className="mt-auto flex flex-wrap items-center justify-between gap-2 border-t border-[var(--color-border)] pt-3">
        <div className="flex items-center gap-2 text-xs text-[var(--color-muted)]">
          <span className="h-2 w-2 rounded-full" style={{ backgroundColor: langColor }} />
          {repo.language}
          {repo.stars > 0 && <span>· ★ {repo.stars}</span>}
        </div>
        <span className="font-mono text-[10px] text-[var(--color-muted)] opacity-0 transition group-hover:opacity-100">
          {repo.name} ↗
        </span>
      </div>
    </a>
  );
}
