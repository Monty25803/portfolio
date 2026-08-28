import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProfilePhoto from "./ProfilePhoto";

gsap.registerPlugin(ScrollTrigger);

export default function HeroPhotos() {
  const stackRef = useRef(null);
  const frontRef = useRef(null);
  const backRef = useRef(null);

  useEffect(() => {
    const stack = stackRef.current;
    const front = frontRef.current;
    const back = backRef.current;
    if (!stack || !front || !back) return;

    const triggers = [];
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const onMove = (e) => {
      if (prefersReduced) return;
      const rect = stack.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      gsap.to(front, { x: x * 14, y: y * 10, duration: 0.6, ease: "power2.out" });
      gsap.to(back, { x: x * -10, y: y * -6, duration: 0.6, ease: "power2.out" });
    };

    const onLeave = () => {
      gsap.to([front, back], { x: 0, y: 0, duration: 0.8, ease: "power3.out" });
    };

    stack.addEventListener("mousemove", onMove);
    stack.addEventListener("mouseleave", onLeave);

    if (!prefersReduced) {
      gsap.fromTo(
        front,
        { opacity: 0, y: 60, rotate: -6, scale: 0.92 },
        { opacity: 1, y: 0, rotate: -2.5, scale: 1, duration: 1.2, delay: 0.2, ease: "power4.out" }
      );
      gsap.fromTo(
        back,
        { opacity: 0, y: 40, rotate: 8, scale: 0.9 },
        { opacity: 1, y: 0, rotate: 4, scale: 1, duration: 1.2, delay: 0.05, ease: "power4.out" }
      );

      triggers.push(
        ScrollTrigger.create({
          trigger: stack,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
          animation: gsap.to(stack, { y: -40, ease: "none" }),
        })
      );
    }

    return () => {
      stack.removeEventListener("mousemove", onMove);
      stack.removeEventListener("mouseleave", onLeave);
      triggers.forEach((st) => st.kill());
    };
  }, []);

  return (
    <div ref={stackRef} className="hero-photo-stack mx-auto">
      <div ref={backRef} className="hero-photo-back">
        <ProfilePhoto variant="heroBack" showCaption={false} className="h-full w-full" />
        <span className="hero-photo-label">Back view</span>
      </div>
      <div ref={frontRef} className="hero-photo-front">
        <ProfilePhoto variant="heroFront" showCaption={false} className="h-full w-full" />
        <span className="hero-photo-label hero-photo-label-front">Front view</span>
      </div>
    </div>
  );
}
