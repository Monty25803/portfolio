import { useState } from "react";
import { profile } from "../data/profile";
import { useGitHub, formatRepoDate, inferCategory } from "../hooks/useGitHub";
import { BracketLabel, SectionLink } from "./ui/SectionLabels";
import PrivateRepoModal from "./PrivateRepoModal";
import AnimatedContent from "./reactbits/AnimatedContent";

const langColors = {
  Python: "#0f766e",
  JavaScript: "#b45309",
  TypeScript: "#1d4ed8",
  "C++": "#7c3aed",
};

export default function GitHubLive() {
  const { data, loading, error, refresh } = useGitHub();
  const [privateRepo, setPrivateRepo] = useState(null);

  const openRepo = (repo) => {
    if (repo.private) {
      setPrivateRepo(repo);
      return;
    }
    window.open(repo.homepage || repo.url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <section id="github" className="pb-4">
        <AnimatedContent distance={32} duration={0.5}>
          <BracketLabel>Live from GitHub</BracketLabel>
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="heading-lg text-3xl font-semibold sm:text-4xl">Repositories & releases</h2>
              <p className="mt-3 max-w-xl text-[var(--color-muted)]">
                Auto-synced from GitHub — updates when you push new repos or releases.
                {data?.fetchedAt && (
                  <span className="mt-1 block font-mono text-xs">
                    Synced {new Date(data.fetchedAt).toLocaleString()}
                  </span>
                )}
              </p>
            </div>
            <div className="flex gap-3">
              <button type="button" onClick={refresh} className="btn-outline px-4 py-2 text-sm" disabled={loading}>
                {loading ? "Syncing…" : "Refresh"}
              </button>
              <SectionLink href={profile.github}>GitHub profile</SectionLink>
            </div>
          </div>
        </AnimatedContent>

        {error && <p className="mb-6 text-sm text-[var(--color-muted)]">{error}</p>}

        {data?.releases?.length > 0 && (
          <div className="mb-12">
            <p className="bracket-label mb-4">Recent releases</p>
            <div className="grid gap-4 sm:grid-cols-2">
              {data.releases.map((release) => (
                <ReleaseCard key={release.id} release={release} onPrivate={() => setPrivateRepo({ name: release.repoName, private: true })} />
              ))}
            </div>
          </div>
        )}

        <p className="bracket-label mb-4">All repositories {data ? `(${data.repos.length})` : ""}</p>

        {loading && !data ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="repo-card h-36 animate-pulse bg-[var(--color-surface-alt)]" />
            ))}
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {data?.repos.map((repo) => (
              <RepoCard key={repo.id} repo={repo} onClick={() => openRepo(repo)} />
            ))}
          </div>
        )}

        {data && !data.hasToken && (
          <p className="mt-6 text-xs text-[var(--color-muted)]">
            Public repos only. Add <code className="font-mono">GITHUB_TOKEN</code> on Vercel to show private repos.
          </p>
        )}
      </section>

      <PrivateRepoModal repo={privateRepo} onClose={() => setPrivateRepo(null)} />
    </>
  );
}

function ReleaseCard({ release, onPrivate }) {
  const handleClick = () => {
    if (release.private) onPrivate();
    else window.open(release.url, "_blank", "noopener,noreferrer");
  };

  return (
    <button type="button" onClick={handleClick} className="release-card w-full p-5 text-left">
      <div className="mb-2 flex justify-between gap-2">
        <span className="font-mono text-xs text-[var(--color-highlight)]">{release.tag}</span>
        {release.private && <span className="tag text-[10px]">Private</span>}
      </div>
      <h3 className="font-semibold">{release.name}</h3>
      <p className="mt-1 text-xs text-[var(--color-muted)]">{release.repo}</p>
      {release.description && (
        <p className="mt-3 line-clamp-2 text-sm text-[var(--color-muted)]">{release.description}</p>
      )}
      <p className="mt-3 text-xs text-[var(--color-muted)]">{formatRepoDate(release.publishedAt)}</p>
    </button>
  );
}

function RepoCard({ repo, onClick }) {
  const langColor = langColors[repo.language] || "var(--color-muted)";

  return (
    <button type="button" onClick={onClick} className="repo-card w-full p-5 text-left">
      <div className="mb-3 flex justify-between gap-2">
        <span className="tag text-[10px]">{inferCategory(repo)}</span>
        <div className="flex gap-1">
          {repo.private && <span className="tag text-[10px]">Private</span>}
          {repo.latestRelease && (
            <span className="tag-accent tag text-[10px]">{repo.latestRelease.tag}</span>
          )}
        </div>
      </div>
      <h3 className="font-semibold">{repo.name}</h3>
      <p className="mt-2 line-clamp-2 text-sm text-[var(--color-muted)]">
        {repo.description || "No description"}
      </p>
      <div className="mt-4 flex items-center justify-between text-xs text-[var(--color-muted)]">
        <span className="flex items-center gap-2">
          {repo.language && (
            <>
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: langColor }} />
              {repo.language}
            </>
          )}
        </span>
        <span>{repo.private ? "Not accessible" : "Open ↗"}</span>
      </div>
    </button>
  );
}
