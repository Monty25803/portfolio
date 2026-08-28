import { profile } from "../data/profile";
import { useGitHub, formatRepoDate, inferCategory } from "../hooks/useGitHub";
import { BracketLabel, SectionLink } from "./ui/SectionLabels";
import AnimatedContent from "./reactbits/AnimatedContent";

const langColors = {
  Python: "#0a0a0a",
  JavaScript: "#6b6560",
  TypeScript: "#3d3d3d",
  "C++": "#8a8580",
};

export default function GitHubLive() {
  const { data, loading, error, refresh } = useGitHub();

  return (
    <section id="github" className="pb-4">
      <AnimatedContent distance={32} duration={0.5}>
        <BracketLabel>Live from GitHub</BracketLabel>
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="display-lg text-3xl sm:text-4xl">Open source & side projects</h2>
            <p className="mt-3 max-w-xl text-[var(--color-muted)]">
              Public repositories auto-synced from GitHub — new repos and releases appear here automatically.
              {data?.fetchedAt && (
                <span className="mt-1 block font-mono text-xs opacity-70">
                  Last synced {new Date(data.fetchedAt).toLocaleString()}
                </span>
              )}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button type="button" onClick={refresh} className="btn-outline px-4 py-2 text-sm" disabled={loading}>
              {loading ? "Syncing…" : "Refresh"}
            </button>
            <SectionLink href={profile.github}>View profile</SectionLink>
          </div>
        </div>
      </AnimatedContent>

      {error && <p className="mb-6 rounded-xl bg-[var(--color-surface-alt)] px-4 py-3 text-sm text-[var(--color-muted)]">{error}</p>}

      {data?.releases?.length > 0 && (
        <div className="mb-12">
          <p className="bracket-label mb-4">Recent releases</p>
          <div className="grid gap-4 sm:grid-cols-2">
            {data.releases.map((release, i) => (
              <AnimatedContent key={release.id} distance={24} duration={0.4} delay={i * 0.04}>
                <ReleaseCard release={release} />
              </AnimatedContent>
            ))}
          </div>
        </div>
      )}

      <p className="bracket-label mb-4">
        Public repositories {data ? `(${data.repos.length})` : ""}
      </p>

      {loading && !data ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="skeleton-card h-40" />
          ))}
        </div>
      ) : data?.repos.length === 0 ? (
        <p className="text-sm text-[var(--color-muted)]">No public repositories found.</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data?.repos.map((repo, i) => (
            <AnimatedContent key={repo.id} distance={24} duration={0.4} delay={i * 0.03}>
              <RepoCard repo={repo} />
            </AnimatedContent>
          ))}
        </div>
      )}
    </section>
  );
}

function ReleaseCard({ release }) {
  return (
    <a
      href={release.url}
      target="_blank"
      rel="noopener noreferrer"
      className="release-card group block p-5 sm:p-6"
    >
      <span className="font-mono text-xs font-medium text-[var(--color-highlight)]">{release.tag}</span>
      <h3 className="mt-2 font-semibold transition group-hover:text-[var(--color-highlight)]">{release.name}</h3>
      <p className="mt-1 text-xs text-[var(--color-muted)]">{release.repo}</p>
      {release.description && (
        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-[var(--color-muted)]">{release.description}</p>
      )}
      <p className="mt-4 text-xs text-[var(--color-muted)]">{formatRepoDate(release.publishedAt)}</p>
    </a>
  );
}

function RepoCard({ repo }) {
  const langColor = langColors[repo.language] || "var(--color-muted)";

  return (
    <a
      href={repo.homepage || repo.url}
      target="_blank"
      rel="noopener noreferrer"
      className="repo-card group flex h-full flex-col p-5 sm:p-6"
    >
      <div className="mb-3 flex items-start justify-between gap-2">
        <span className="tag text-[10px]">{inferCategory(repo)}</span>
        {repo.latestRelease && (
          <span className="tag-accent tag text-[10px]">{repo.latestRelease.tag}</span>
        )}
      </div>
      <h3 className="font-semibold transition group-hover:text-[var(--color-highlight)]">{repo.name}</h3>
      <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-[var(--color-muted)]">
        {repo.description || "No description provided."}
      </p>
      <div className="mt-4 flex items-center justify-between border-t border-[var(--color-border)] pt-3 text-xs text-[var(--color-muted)]">
        <span className="flex items-center gap-2">
          {repo.language && (
            <>
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: langColor }} />
              {repo.language}
            </>
          )}
          {repo.stars > 0 && <span>· ★ {repo.stars}</span>}
        </span>
        <span className="opacity-0 transition group-hover:opacity-100">Open ↗</span>
      </div>
    </a>
  );
}
