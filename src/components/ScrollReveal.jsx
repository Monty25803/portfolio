import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Framer-style scroll reveal: fade, lift, and de-blur on enter.
 */
export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  duration = 1.1,
  distance = 48,
  blur = 12,
  scale = 0.96,
  threshold = 0.15,
  as: Tag = "div",
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      gsap.set(el, { opacity: 1, y: 0, filter: "blur(0px)", scale: 1 });
      return;
    }

    gsap.set(el, {
      opacity: 0,
      y: distance,
      scale,
      filter: `blur(${blur}px)`,
      willChange: "transform, opacity, filter",
    });

    const tween = gsap.to(el, {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      duration,
      delay,
      ease: "power4.out",
      scrollTrigger: {
        trigger: el,
        start: `top ${100 - threshold * 100}%`,
        once: true,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [delay, duration, distance, blur, scale, threshold]);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}

/**
 * Stagger children inside a container on scroll.
 */
export function ScrollRevealGroup({
  children,
  className = "",
  stagger = 0.1,
  childSelector = ":scope > *",
}) {
  const ref = useRef(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const items = container.querySelectorAll(childSelector);
    if (!items.length) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    gsap.set(items, {
      opacity: 0,
      y: 40,
      filter: "blur(8px)",
    });

    const tween = gsap.to(items, {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 0.9,
      stagger,
      ease: "power4.out",
      scrollTrigger: {
        trigger: container,
        start: "top 82%",
        once: true,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [stagger, childSelector]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
