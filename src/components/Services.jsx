import { services } from "../data/profile";
import AnimatedContent from "./reactbits/AnimatedContent";

export default function Services() {
  return (
    <section id="services" className="section-padding section-alt">
      <div className="section-shell">
        <AnimatedContent distance={28} duration={0.5}>
          <h2 className="display-lg mb-12 text-4xl sm:text-5xl">Services</h2>
        </AnimatedContent>

        <div className="grid gap-4 sm:grid-cols-2">
          {services.map((service, i) => (
            <AnimatedContent key={service.title} distance={24} duration={0.4} delay={i * 0.05}>
              <article className="service-card h-full">
                <h3 className="display-lg mb-5 text-xl sm:text-2xl">{service.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
}
