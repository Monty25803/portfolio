import { services } from "../data/profile";
import ScrollReveal, { ScrollRevealGroup } from "./ScrollReveal";

export default function Services() {
  return (
    <section id="services" className="section-padding section-alt">
      <div className="section-shell">
        <ScrollReveal distance={36} duration={1}>
          <h2 className="display-lg mb-12 text-4xl sm:text-5xl">Services</h2>
        </ScrollReveal>

        <ScrollRevealGroup className="grid gap-4 sm:grid-cols-2" stagger={0.1}>
          {services.map((service) => (
            <article key={service.title} className="service-card h-full">
              <h3 className="display-lg mb-5 text-xl sm:text-2xl">{service.title}</h3>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </ScrollRevealGroup>
      </div>
    </section>
  );
}
