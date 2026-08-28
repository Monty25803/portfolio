import { releases, profile } from "../data/profile";
import { BracketLabel, SectionLink } from "./ui/SectionLabels";
import AnimatedContent from "./reactbits/AnimatedContent";

export default function Releases() {
  return (
    <section id="releases" className="mb-20">
      <AnimatedContent distance={40} duration={0.6}>
        <BracketLabel className="mb-4">Recent releases</BracketLabel>
        <div className="mb-8 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="jp-section-title text-2xl font-bold tracking-tight sm:text-3xl">
              Published on GitHub
            </h2>
            <p className="mt-2 max-w-xl text-sm text-[var(--color-muted)] sm:text-base">
              Shipped desktop apps, games, and tools with tagged releases — installable builds and changelogs on GitHub.
            </p>
          </div>
          <SectionLink href={profile.github}>All repositories</SectionLink>
        </div>
      </AnimatedContent>

      <div className="grid min-w-0 gap-4 sm:grid-cols-2">
        {releases.map((release, i) => (
          <AnimatedContent key={release.id} distance={40} duration={0.6} delay={i * 0.06}>
            <a
              href={release.url}
              target="_blank"
              rel="noopener noreferrer"
              className="release-card group flex h-full flex-col p-5 sm:p-6"
            >
              <div className="mb-3 flex items-start justify-between gap-3">
                <div>
                  <span className="mb-2 inline-block rounded-sm border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent)]">
                    {release.highlight}
                  </span>
                  <h3 className="text-lg font-bold text-[var(--color-text)] group-hover:text-[var(--color-accent)]">
                    {release.title}
                  </h3>
                </div>
                <span className="flex-shrink-0 rounded-sm border border-[var(--color-border)] bg-[var(--color-surface)] px-2 py-1 font-mono text-xs text-[var(--color-accent)]">
                  {release.tag}
                </span>
              </div>

              <p className="mb-4 flex-1 text-sm leading-relaxed text-[var(--color-muted)]">
                {release.description}
              </p>

              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[var(--color-border)] pt-4">
                <div className="flex flex-wrap gap-1.5">
                  {release.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-sm bg-[var(--color-surface)] px-2 py-0.5 text-[10px] text-[var(--color-muted)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <span className="text-xs text-[var(--color-muted)]">
                  {release.date} · {release.repo}
                </span>
              </div>
            </a>
          </AnimatedContent>
        ))}
      </div>
    </section>
  );
}
