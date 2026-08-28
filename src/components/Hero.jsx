import { profile } from "../data/profile";
import HeroPhotos from "./HeroPhotos";
import ScrollReveal from "./ScrollReveal";

export default function Hero() {
  const year = new Date().getFullYear();

  return (
    <section id="home" className="section-padding pt-28 sm:pt-32 lg:pt-36">
      <div className="section-shell">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6 lg:mb-16">
          <ScrollReveal distance={32} duration={1} blur={8}>
            <h1 className="display-xl text-[clamp(2.5rem,10vw,6.5rem)]">
              Software
              <br />
              Developer
            </h1>
          </ScrollReveal>
          <ScrollReveal distance={24} duration={1} delay={0.08} blur={6}>
            <div className="text-right">
              <p className="display-lg text-2xl sm:text-3xl">©{year}</p>
              <p className="slash-label mt-2">/Building since {profile.creatingSince}</p>
            </div>
          </ScrollReveal>
        </div>

        <HeroPhotos />
      </div>
    </section>
  );
}
