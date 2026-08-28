import { useEffect, useRef, useState } from "react";
import { LazyMotion, domAnimation, m, AnimatePresence } from "motion/react";
import PageBackground from "./components/PageBackground";
import HeroAshwin from "./components/HeroAshwin";
import AboutAshwin from "./components/AboutAshwin";
import { ExperienceTimeline } from "./components/ExperienceTimeline";
import Impact from "./components/Impact";
import Featured from "./components/Featured";
import ProjectsAshwin from "./components/ProjectsAshwin";
import SkillsAshwin from "./components/SkillsAshwin";
import ContactAshwin from "./components/ContactAshwin";
import ClockWidget from "./components/ClockWidget";
import BottomRightHUD from "./components/BottomRightHUD";
import { useHashScroll } from "./hooks/useHashScroll";
import { useIsMobile } from "./hooks/useMediaQuery";

export default function App() {
  const isMobile = useIsMobile();
  const [showThankYou, setShowThankYou] = useState(false);
  const [countdown, setCountdown] = useState(10);
  const thankYouFired = useRef(false);
  useHashScroll();

  useEffect(() => {
    const el = document.querySelector(".hologram-interface");
    if (!el) return;

    const thumb = document.querySelector(".scroll-progress-thumb");

    const onScroll = () => {
      const max = el.scrollHeight - el.clientHeight;
      const progress = max > 0 ? el.scrollTop / max : 0;
      const ratio = el.scrollHeight > 0 ? el.clientHeight / el.scrollHeight : 1;
      const thumbH = Math.max(ratio * 100, 8);
      if (thumb) {
        thumb.style.height = `${thumbH}%`;
        thumb.style.top = `${progress * (100 - thumbH)}%`;
      }
      if (progress >= 0.98 && !thankYouFired.current) {
        thankYouFired.current = true;
        setShowThankYou(true);
        setTimeout(() => setShowThankYou(false), 10000);
      }
    };

    window.__portfolioScrollTop = (top) => {
      el.scrollTo({ top, behavior: "smooth" });
    };

    onScroll();
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      el.removeEventListener("scroll", onScroll);
      delete window.__portfolioScrollTop;
    };
  }, []);

  useEffect(() => {
    if (!showThankYou) {
      setCountdown(10);
      return;
    }
    const id = setInterval(() => {
      setCountdown((n) => {
        if (n <= 1) {
          clearInterval(id);
          return 0;
        }
        return n - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [showThankYou]);

  return (
    <LazyMotion features={domAnimation}>
      <PageBackground />
      <ClockWidget />
      <BottomRightHUD />

      <div
        className="spatial-scene"
        style={{
          filter: showThankYou ? "blur(4px) brightness(0.7)" : "none",
          transition: "filter 0.5s ease",
        }}
      >
        <div className="hologram-interface">
          <div className="hologram-content">
            <HeroAshwin />
            <AboutAshwin />
            <ExperienceTimeline />
            <Impact />
            <Featured />
            <ProjectsAshwin />
            <SkillsAshwin />
            <ContactAshwin />
          </div>
        </div>
      </div>

      <div className="scroll-progress" aria-hidden style={{ zIndex: 998 }}>
        <div className="scroll-progress-thumb" />
      </div>

      <div className="spatial-bottom-fade" aria-hidden />

      <AnimatePresence>
        {showThankYou && (
          <m.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 200,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              pointerEvents: "none",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1.2rem",
                padding: isMobile ? "2.5rem 2rem" : "3.5rem 5rem",
                background: "transparent",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "8px",
                backdropFilter: "blur(18px)",
                WebkitBackdropFilter: "blur(18px)",
                pointerEvents: "auto",
              }}
            >
              <span
                style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontSize: isMobile ? "1.3rem" : "1.75rem",
                  fontWeight: 700,
                  color: "rgba(255,255,255,0.9)",
                  letterSpacing: "0.01em",
                  textAlign: "center",
                  lineHeight: 1.3,
                }}
              >
                Somewhere between the hero and here, you decided to keep going.
                <br />
                <br />
                Thank you for taking the time to know me a little more than you already did.
              </span>
              <span
                style={{
                  fontFamily: '"DM Sans", sans-serif',
                  fontSize: isMobile ? "0.85rem" : "0.95rem",
                  color: "rgba(255,255,255,0.45)",
                  textAlign: "center",
                  lineHeight: 1.6,
                }}
              >
                Open to remote roles and freelance —{" "}
                <a
                  href="#contact"
                  style={{
                    color: "#4ade80",
                    textDecoration: "none",
                    borderBottom: "1px solid rgba(74,222,128,0.4)",
                    paddingBottom: "1px",
                  }}
                >
                  get in touch.
                </a>
              </span>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "0.5rem",
                  marginTop: "0.4rem",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "52px",
                    height: "52px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    width="52"
                    height="52"
                    style={{ position: "absolute", inset: 0, transform: "rotate(-90deg)" }}
                  >
                    <circle cx="26" cy="26" r="22" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="2" />
                    <m.circle
                      cx="26"
                      cy="26"
                      r="22"
                      fill="none"
                      stroke="#4ade80"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeDasharray={2 * Math.PI * 22}
                      initial={{ strokeDashoffset: 0 }}
                      animate={{ strokeDashoffset: 2 * Math.PI * 22 }}
                      transition={{ duration: 10, ease: "linear" }}
                    />
                  </svg>
                  <span
                    style={{
                      fontFamily: '"DM Mono", monospace',
                      fontSize: "1rem",
                      color: "rgba(255,255,255,0.7)",
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    {countdown}
                  </span>
                </div>
                <span
                  style={{
                    fontFamily: '"DM Mono", monospace',
                    fontSize: "0.52rem",
                    letterSpacing: "0.18em",
                    color: "rgba(255,255,255,0.25)",
                    textTransform: "uppercase",
                  }}
                >
                  glad you stayed
                </span>
              </div>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </LazyMotion>
  );
}
