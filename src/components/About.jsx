import { profile, expertiseAreas } from "../data/profile";
import { BracketLabel } from "./ui/SectionLabels";
import AnimatedContent from "./reactbits/AnimatedContent";
import ProfilePhoto from "./ProfilePhoto";

export default function About() {
  return (
    <section id="about" className="section-padding section-alt">
      <div className="section-shell">
        <div className="grid min-w-0 gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
          <div>
            <AnimatedContent distance={32} duration={0.5}>
              <BracketLabel>About</BracketLabel>
              <h2 className="heading-lg mb-6 text-3xl font-semibold sm:text-4xl">
                I build software teams can trust in production
              </h2>
              <div className="space-y-5 text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
                <p className="text-[var(--color-text)]">{profile.summary}</p>
                <p>{profile.philosophy}</p>
                <p>{profile.workPreference}</p>
              </div>
            </AnimatedContent>

            <AnimatedContent distance={32} duration={0.5} delay={0.1}>
              <div className="mt-8 flex flex-wrap gap-2">
                {profile.primaryStack.map((skill) => (
                  <span key={skill} className="tag-accent tag font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </AnimatedContent>
          </div>

          <AnimatedContent distance={32} duration={0.5} delay={0.1}>
            <div className="card p-6">
              <ProfilePhoto variant="sidebar" showCaption={false} />
              <dl className="mt-6 space-y-4 text-sm">
                <Fact label="Location" value={profile.location} />
                <Fact label="Company" value={profile.company} />
                <Fact label="Experience" value={profile.experienceYears} />
                <Fact label="Website" value={profile.website.replace("https://", "")} />
              </dl>
            </div>
          </AnimatedContent>
        </div>

        <AnimatedContent distance={32} duration={0.5}>
          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {expertiseAreas.map((area) => (
              <div key={area.title} className="card p-5">
                <h3 className="mb-2 font-semibold">{area.title}</h3>
                <p className="text-sm leading-relaxed text-[var(--color-muted)]">{area.description}</p>
              </div>
            ))}
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}

function Fact({ label, value }) {
  return (
    <div>
      <dt className="text-[var(--color-muted)]">{label}</dt>
      <dd className="font-medium text-[var(--color-text)]">{value}</dd>
    </div>
  );
}

export function SectionHeader({ label, title, subtitle, compact = false }) {
  return (
    <AnimatedContent distance={32} duration={0.5}>
      <div className={compact ? "mb-8" : "mb-10"}>
        {label && <BracketLabel>{label}</BracketLabel>}
        <h2 className="heading-lg text-3xl font-semibold sm:text-4xl">{title}</h2>
        {subtitle && (
          <p className="mt-3 max-w-2xl text-base text-[var(--color-muted)]">{subtitle}</p>
        )}
      </div>
    </AnimatedContent>
  );
}
