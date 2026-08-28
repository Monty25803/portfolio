import { profile } from "../data/profile";
import { SectionHeader } from "./About";
import AnimatedContent from "./reactbits/AnimatedContent";

export default function Resume() {
  return (
    <section id="resume" className="section-padding">
      <div className="section-shell">
        <AnimatedContent distance={32} duration={0.5}>
          <div className="card-featured grid gap-8 p-6 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <SectionHeader
                compact
                label="Resume"
                title="Download my resume"
                subtitle={`${profile.experienceYears} of experience in Python, Django, Angular, and agentic AI. Updated ${profile.resumeUpdated}.`}
              />
              <div className="flex flex-wrap gap-2">
                {profile.heroStats.map((stat) => (
                  <span key={stat.label} className="tag">
                    {stat.value} · {stat.label}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a href={profile.resumeUrl} download className="btn-primary px-8 py-3 text-center">
                Download resume →
              </a>
              <a href="#contact" className="btn-outline px-8 py-3 text-center">
                Hire me
              </a>
            </div>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}
