export default function PrivateRepoModal({ repo, onClose }) {
  if (!repo) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" role="dialog" aria-modal="true">
      <button type="button" className="absolute inset-0 bg-black/40 backdrop-blur-sm" aria-label="Close" onClick={onClose} />
      <div className="relative w-full max-w-md rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-xl">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-surface-alt)]">
          <svg className="h-6 w-6 text-[var(--color-text)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>
        <h3 className="heading-lg mb-2 text-xl font-semibold">Private repository</h3>
        <p className="mb-1 font-mono text-sm text-[var(--color-highlight)]">{repo.name}</p>
        <p className="mb-6 text-sm leading-relaxed text-[var(--color-muted)]">
          This repository is private and not publicly accessible. Only authorized collaborators can view it on GitHub.
        </p>
        <button type="button" className="btn-primary w-full px-6 py-3" onClick={onClose}>
          Understood
        </button>
      </div>
    </div>
  );
}
