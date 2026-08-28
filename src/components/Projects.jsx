import { useState } from "react";
import { projects } from "../data/profile";
import ProjectScreenshot from "./ProjectScreenshot";
import GitHubLive from "./GitHubLive";
import { SectionHeader } from "./About";
import ScrollReveal from "./ScrollReveal";

export default function Projects() {
  const [openId, setOpenId] = useState(projects[0]?.id ?? null);

  return (
    <>
      <section id="projects" className="section-shell section-padding">
        <div className="section-rule" />
        <SectionHeader
          label="03 · Selected work"
          title="Enterprise systems shipped to production"
          subtitle="Client onboarding, supply chain management, and healthcare platforms — built with Django, Angular, and agentic AI workflows."
        />

        <div className="project-accordion mt-10">
          {projects.map((project, i) => {
            const open = openId === project.id;
            return (
              <ScrollReveal key={project.id} distance={24} duration={0.9} delay={i * 0.05}>
                <div>
                  <button
                    type="button"
                    className="project-trigger"
                    aria-expanded={open}
                    onClick={() => setOpenId(open ? null : project.id)}
                  >
                    <span className="mono-label">{project.number}</span>
                    <span>
                      <span className="block font-medium text-[var(--color-text)]">{project.title}</span>
                      <span className="mono-label mt-1 block">{project.client} · {project.period}</span>
                    </span>
                    <span className={`mono-label status-${project.status === "Ongoing" ? "ongoing" : "completed"}`}>
                      {open ? "−" : "+"}
                    </span>
                  </button>
                  {open && (
                    <div className="project-panel px-0 pb-8">
                      <div className="grid gap-8 lg:grid-cols-2">
                        <div>
                          <ProjectScreenshot project={project} />
                          <div className="flex flex-wrap gap-2">
                            {project.techStack.map((t) => (
                              <span key={t} className="tag">{t}</span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <p className="body-copy mb-6">{project.overview}</p>
                          {project.metrics && (
                            <div className="mb-6 flex flex-wrap gap-4">
                              {project.metrics.map((m) => (
                                <div key={m.label}>
                                  <p className="text-lg font-medium text-[var(--color-accent)]">{m.value}</p>
                                  <p className="mono-label">{m.label}</p>
                                </div>
                              ))}
                            </div>
                          )}
                          <p className="mono-label mb-2">Impact</p>
                          <ul className="mb-6 space-y-2 text-sm text-[var(--color-muted)]">
                            {project.outcomes.map((o) => (
                              <li key={o}>— {o}</li>
                            ))}
                          </ul>
                          <div className="flex flex-wrap gap-4">
                            {project.url && (
                              <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn-pill">
                                Live platform ↗
                              </a>
                            )}
                            {project.githubUrl && (
                              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-pill">
                                GitHub ↗
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      <section id="github" className="section-shell section-padding pt-0">
        <GitHubLive />
      </section>
    </>
  );
}
