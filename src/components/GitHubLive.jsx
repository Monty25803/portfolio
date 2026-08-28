import { profile } from "../data/profile";
import { useGitHub, formatRepoDate, inferCategory } from "../hooks/useGitHub";
import ScrollReveal from "./ScrollReveal";

export default function GitHubLive() {
  const { data, loading, error, refresh } = useGitHub();

  return (
    <div>
      <ScrollReveal distance={32} duration={1}>
        <p className="mono-label mb-4">Open source</p>
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="serif-display text-3xl sm:text-4xl">GitHub & side projects</h2>
          <div className="flex gap-3">
            <button type="button" onClick={refresh} className="btn-pill" disabled={loading}>
              {loading ? "Syncing…" : "Refresh"}
            </button>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn-pill">Profile ↗</a>
          </div>
        </div>
      </ScrollReveal>

      {error && <p className="mb-6 text-sm text-[var(--color-muted)]">{error}</p>}

      {loading && !data ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="repo-card h-32 animate-pulse opacity-40" />
          ))}
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data?.repos.map((repo, i) => (
            <ScrollReveal key={repo.id} distance={20} duration={0.8} delay={i * 0.03}>
              <a href={repo.homepage || repo.url} target="_blank" rel="noopener noreferrer" className="repo-card block h-full p-4">
                <p className="mono-label mb-2">{inferCategory(repo)}</p>
                <h3 className="mb-2 font-medium text-[var(--color-text)]">{repo.name}</h3>
                <p className="line-clamp-2 text-sm text-[var(--color-muted)]">{repo.description || "No description."}</p>
                <p className="mono-label mt-3">{repo.language} {repo.stars > 0 && `· ★ ${repo.stars}`}</p>
              </a>
            </ScrollReveal>
          ))}
        </div>
      )}

      {data?.releases?.length > 0 && (
        <div className="mt-12">
          <p className="mono-label mb-4">Recent releases</p>
          <div className="grid gap-4 sm:grid-cols-2">
            {data.releases.map((release) => (
              <a key={release.id} href={release.url} target="_blank" rel="noopener noreferrer" className="repo-card block p-4">
                <p className="mono-label">{release.tag}</p>
                <h3 className="font-medium">{release.name}</h3>
                <p className="text-sm text-[var(--color-muted)]">{formatRepoDate(release.publishedAt)}</p>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
