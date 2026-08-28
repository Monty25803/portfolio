import { useState } from "react";
import { profile } from "../data/profile";
import { useGitHub, formatRepoDate, inferCategory } from "../hooks/useGitHub";
import { BracketLabel, SectionLink } from "./ui/SectionLabels";
import PrivateRepoModal from "./PrivateRepoModal";
import AnimatedContent from "./reactbits/AnimatedContent";

const langColors = {
  Python: "#dc2626",
  JavaScript: "#facc15",
  TypeScript: "#60a5fa",
  "C++": "#a78bfa",
  MATLAB: "#fb923c",
  Java: "#f87171",
  HTML: "#fb923c",
};

export default function GitHubLive() {
  const { data, loading, error, refresh } = useGitHub();
  const [privateRepo, setPrivateRepo] = useState(null);

  const handleRepoClick = (repo) => {
    if (repo.private) {
      setPrivateRepo(repo);
      return;
    }
    window.open(repo.homepage || repo.url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <section id="github" className="mb-20">
        <AnimatedContent distance={40} duration={0.6}>
          <BracketLabel className="mb-4">Live from GitHub</BracketLabel>
          <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="editorial-title text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
                Repositories & releases
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--color-muted)] sm:text-base">
                Auto-synced from GitHub — new repos, releases, and updates appear here automatically.
                {data?.fetchedAt && (
                  <span className="mt-1 block font-mono text-xs text-[var(--color-muted)]/80">
                    Last synced: {new Date(data.fetchedAt).toLocaleString()}
                  </span>
                )}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={refresh}
                className="btn-outline px-4 py-2 text-xs sm:text-sm"
                disabled={loading}
              >
                {loading ? "Syncing…" : "Refresh"}
              </button>
              <SectionLink href={profile.github}>@{profile.github.split("/").pop()}</SectionLink>
            </div>
          </div>
        </AnimatedContent>

        {error && (
          <p className="mb-6 rounded-sm border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/10 px-4 py-3 text-sm text-[var(--color-muted)]">
            {error}
          </p>
        )}

        {data?.releases?.length > 0 && (
          <div className="mb-12">
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-[var(--color-muted)]">
              Recent releases
            </p>
            <div className="grid min-w-0 gap-3 sm:grid-cols-2">
              {data.releases.map((release, i) => (
                <AnimatedContent key={release.id} distance={30} duration={0.5} delay={i * 0.04}>
                  <ReleaseCard release={release} onPrivateClick={setPrivateRepo} />
                </AnimatedContent>
              ))}
            </div>
          </div>
        )}

        <p className="mb-4 font-mono text-xs uppercase tracking-widest text-[var(--color-muted)]">
          All repositories {data ? `(${data.repos.length})` : ""}
        </p>

        {loading && !data ? (
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="github-card h-40 animate-pulse p-5" />
            ))}
          </div>
        ) : (
          <div className="grid min-w-0 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {data?.repos.map((repo, i) => (
              <AnimatedContent key={repo.id} distance={30} duration={0.5} delay={i * 0.03}>
                <RepoCard repo={repo} onClick={() => handleRepoClick(repo)} />
              </AnimatedContent>
            ))}
          </div>
        )}

        {data && !data.hasToken && (
          <p className="mt-6 text-xs text-[var(--color-muted)]">
            Showing public repositories only. Private repos appear when{" "}
            <code className="text-[var(--color-accent)]">GITHUB_TOKEN</code> is set on Vercel.
          </p>
        )}
      </section>

      <PrivateRepoModal repo={privateRepo} onClose={() => setPrivateRepo(null)} />
    </>
  );
}

function ReleaseCard({ release, onPrivateClick }) {
  const isPrivate = release.private;

  const handleClick = () => {
    if (isPrivate) {
      onPrivateClick({ name: release.repoName, private: true });
      return;
    }
    window.open(release.url, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="release-card group w-full p-5 text-left sm:p-6"
    >
      <div className="mb-2 flex items-center justify-between gap-2">
        <span className="font-mono text-xs text-[var(--color-accent)]">{release.tag}</span>
        {isPrivate && <PrivateBadge />}
      </div>
      <h3 className="mb-1 font-semibold group-hover:text-[var(--color-accent)]">{release.name}</h3>
      <p className="mb-3 text-xs text-[var(--color-muted)]">{release.repo}</p>
      {release.description && (
        <p className="line-clamp-2 text-sm text-[var(--color-muted)]">{release.description}</p>
      )}
      <p className="mt-3 text-[10px] text-[var(--color-muted)]">{formatRepoDate(release.publishedAt)}</p>
    </button>
  );
}

function RepoCard({ repo, onClick }) {
  const langColor = langColors[repo.language] || "var(--color-muted)";
  const category = inferCategory(repo);

  return (
    <button type="button" onClick={onClick} className="github-card group w-full p-4 text-left sm:p-5">
      <div className="mb-3 flex items-start justify-between gap-2">
        <span className="rounded-sm border border-[var(--color-border)] bg-[var(--color-surface)] px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-[var(--color-muted)]">
          {category}
        </span>
        <div className="flex items-center gap-1.5">
          {repo.private && <PrivateBadge />}
          {repo.latestRelease && (
            <span className="rounded-sm border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/10 px-2 py-0.5 font-mono text-[10px] text-[var(--color-accent)]">
              {repo.latestRelease.tag}
            </span>
          )}
        </div>
      </div>

      <h3 className="mb-1 font-semibold transition group-hover:text-[var(--color-accent)]">{repo.name}</h3>
      <p className="mb-4 line-clamp-2 flex-1 text-xs leading-relaxed text-[var(--color-muted)] sm:text-sm">
        {repo.description || "No description provided."}
      </p>

      <div className="flex flex-wrap items-center justify-between gap-2 border-t border-[var(--color-border)] pt-3">
        <div className="flex items-center gap-2 text-xs text-[var(--color-muted)]">
          {repo.language && (
            <>
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: langColor }} />
              {repo.language}
            </>
          )}
          {repo.stars > 0 && <span>· ★ {repo.stars}</span>}
        </div>
        <span className="font-mono text-[10px] text-[var(--color-muted)]">
          {repo.private ? "Private ↗" : "Open ↗"}
        </span>
      </div>
    </button>
  );
}

function PrivateBadge() {
  return (
    <span className="inline-flex items-center gap-1 rounded-sm border border-[var(--color-border)] px-1.5 py-0.5 text-[10px] text-[var(--color-muted)]">
      <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        />
      </svg>
      Private
    </span>
  );
}
