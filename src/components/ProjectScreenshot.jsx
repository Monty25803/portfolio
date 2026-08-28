import { useState } from "react";

const themes = {
  "medall-client-onboarding": {
    accent: "#2563eb",
    accentSoft: "#dbeafe",
    title: "Client Onboarding",
    subtitle: "Medall Corp · Dashboard",
    bars: [72, 48, 86, 55],
  },
  "metropolis-scm": {
    accent: "#0d9488",
    accentSoft: "#ccfbf1",
    title: "Procurement SCM",
    subtitle: "Metropolis Healthcare",
    bars: [64, 78, 52, 90],
  },
  "testcode-costing": {
    accent: "#7c3aed",
    accentSoft: "#ede9fe",
    title: "Test Code Costing",
    subtitle: "Metropolis Healthcare",
    bars: [58, 70, 44, 82],
  },
};

export default function ProjectScreenshot({ project, className = "" }) {
  const [failed, setFailed] = useState(false);
  const theme = themes[project.id] || themes["medall-client-onboarding"];

  if (project.image && !failed) {
    return (
      <div className={`project-screenshot ${className}`}>
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          className="project-screenshot-img"
          loading="lazy"
          onError={() => setFailed(true)}
        />
        <div className="project-screenshot-shine" aria-hidden />
      </div>
    );
  }

  return (
    <div className={`project-screenshot project-screenshot-mock ${className}`} style={{ "--mock-accent": theme.accent, "--mock-soft": theme.accentSoft }}>
      <div className="mock-browser">
        <div className="mock-browser-bar">
          <span /><span /><span />
          <div className="mock-browser-url" />
        </div>
        <div className="mock-browser-body">
          <div className="mock-sidebar">
            <div className="mock-logo" />
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className={`mock-nav-item ${i === 1 ? "active" : ""}`} />
            ))}
          </div>
          <div className="mock-content">
            <div className="mock-header">
              <div>
                <p className="mock-title">{theme.title}</p>
                <p className="mock-subtitle">{theme.subtitle}</p>
              </div>
              <div className="mock-avatar" />
            </div>
            <div className="mock-stats">
              {theme.bars.map((w, i) => (
                <div key={i} className="mock-stat">
                  <div className="mock-stat-bar" style={{ width: `${w}%` }} />
                </div>
              ))}
            </div>
            <div className="mock-table">
              {[1, 2, 3].map((row) => (
                <div key={row} className="mock-table-row">
                  <span /><span /><span />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
