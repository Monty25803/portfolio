import { profile } from "../data/profile";
import ProfilePhoto from "./ProfilePhoto";
import AnimatedContent from "./reactbits/AnimatedContent";

export default function Hero() {
  const year = new Date().getFullYear();

  return (
    <section id="home" className="section-padding pt-28 sm:pt-32 lg:pt-36">
      <div className="section-shell">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <AnimatedContent distance={20} duration={0.5}>
            <h1 className="display-xl text-[clamp(2.5rem,10vw,6.5rem)]">
              Software
              <br />
              Developer
            </h1>
          </AnimatedContent>
          <AnimatedContent distance={20} duration={0.5} delay={0.05}>
            <div className="text-right">
              <p className="display-lg text-2xl sm:text-3xl">©{year}</p>
              <p className="slash-label mt-2">/Building since {profile.creatingSince}</p>
            </div>
          </AnimatedContent>
        </div>

        <AnimatedContent distance={32} duration={0.6} delay={0.1}>
          <div className="hero-photo-stack mb-16 lg:mb-20">
            <div className="hero-photo-back">
              <ProfilePhoto variant="heroBack" showCaption={false} className="h-full w-full" />
            </div>
            <div className="hero-photo-front">
              <ProfilePhoto variant="heroFront" showCaption={false} className="h-full w-full" />
            </div>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}
