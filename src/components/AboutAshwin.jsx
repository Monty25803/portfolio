import { Fragment } from "react";
import { m } from "motion/react";
import { useIsMobile } from "../hooks/useMediaQuery";
import { pillars, dontDo, highlights, profile } from "../data/profile";

const FONT_SERIF = '"Playfair Display", Georgia, serif';
const FONT_MONO = '"DM Mono", monospace';
const FONT_SANS = '"DM Sans", sans-serif';

const HIGHLIGHT_ICONS = [
  "/logos/tb-components.svg",
  "/logos/postgresql.svg",
  "/logos/aws.svg",
  "/logos/python.svg",
  "/logos/tb-brain.svg",
  "/logos/tb-gauge.svg",
];

const highlightsWithIcons = highlights.map((h, i) => ({
  ...h,
  icon: HIGHLIGHT_ICONS[i] ?? "/logos/tb-components.svg",
}));

const brandThesis = profile.philosophy.split("—")[0].trim() + ".";

export default function AboutAshwin() {
  const isMobile = useIsMobile();

  return (
    <section
      id="about"
      style={{
        position: "relative",
        background: "transparent",
        padding: isMobile ? "4rem 4vw" : "4rem 0 0",
      }}
    >
      <style>{`
        @keyframes highlights-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={isMobile ? {} : { padding: "0.85rem 6vw 2rem" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              marginBottom: "2rem",
            }}
          >
            <span
              style={{
                fontFamily: FONT_MONO,
                fontSize: "0.62rem",
                letterSpacing: "0.2em",
                color: "rgba(255,255,255,0.4)",
                textTransform: "uppercase",
              }}
            >
              About
            </span>
            <div
              style={{
                flex: 1,
                height: "1px",
                background: "rgba(255,255,255,0.07)",
              }}
            />
          </div>

          <div style={{ overflow: "hidden" }}>
            <m.h2
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
              style={{
                fontFamily: FONT_SERIF,
                fontSize: isMobile
                  ? "clamp(1.8rem, 7vw, 4rem)"
                  : "clamp(2.6rem, 4.5vw, 4rem)",
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: "0.02em",
                color: "#fafaf8",
                margin: 0,
              }}
            >
              Backend is easy. Everything around it isn&apos;t.
            </m.h2>
          </div>
        </div>

        <div>
          <div style={{ padding: isMobile ? "2rem 0 0" : "1.5rem 6vw 2rem" }}>
            <m.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              style={{
                fontFamily: FONT_SANS,
                fontSize: isMobile ? "1rem" : "1.05rem",
                lineHeight: 1.65,
                color: "#e8e0d0",
                marginBottom: isMobile ? "2rem" : "2.5rem",
                borderLeft: "2px solid rgba(232,224,208,0.3)",
                paddingLeft: "1rem",
                maxWidth: "520px",
              }}
            >
              {brandThesis}
            </m.p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                gap: isMobile ? "3rem" : "6vw",
                alignItems: "start",
              }}
            >
              <div style={{ alignSelf: "start" }}>
                <m.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  style={{
                    fontFamily: FONT_SANS,
                    fontSize: "0.95rem",
                    lineHeight: 1.8,
                    color: "rgba(255,255,255,0.62)",
                    marginBottom: "1.2rem",
                    maxWidth: "580px",
                    textAlign: "justify",
                    textJustify: "inter-word",
                  }}
                >
                  {profile.summary}
                </m.p>

                <m.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  style={{
                    fontFamily: FONT_SANS,
                    fontSize: "0.95rem",
                    lineHeight: 1.8,
                    color: "rgba(255,255,255,0.62)",
                    marginBottom: "1.2rem",
                    maxWidth: "580px",
                    textAlign: "justify",
                    textJustify: "inter-word",
                  }}
                >
                  {profile.philosophy}
                </m.p>

                <m.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  style={{
                    fontFamily: FONT_SANS,
                    fontSize: "0.95rem",
                    lineHeight: 1.8,
                    color: "rgba(255,255,255,0.62)",
                    marginBottom: 0,
                    maxWidth: "580px",
                    textAlign: "justify",
                    textJustify: "inter-word",
                  }}
                >
                  {profile.marqueeText}
                </m.p>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
              >
                {pillars.map(({ title, description }, i) => (
                  <m.div
                    key={title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.5 }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "1.2rem",
                        padding: "1.4rem 1.6rem",
                        borderRadius: "8px",
                        border: "1px solid rgba(255,255,255,0.15)",
                        background: "transparent",
                      }}
                    >
                      <div
                        style={{
                          width: "5px",
                          height: "5px",
                          borderRadius: "50%",
                          background: "#e8e0d0",
                          marginTop: "7px",
                          flexShrink: 0,
                          opacity: 0.6,
                        }}
                      />
                      <div>
                        <p
                          style={{
                            fontFamily: FONT_SERIF,
                            fontWeight: 800,
                            fontSize: "0.95rem",
                            color: "#fafaf8",
                            marginBottom: "6px",
                          }}
                        >
                          {title}
                        </p>
                        <p
                          style={{
                            fontFamily: FONT_SANS,
                            fontSize: "0.83rem",
                            lineHeight: 1.65,
                            color: "rgba(255,255,255,0.58)",
                            textAlign: "justify",
                            textJustify: "inter-word",
                          }}
                        >
                          {description}
                        </p>
                      </div>
                    </div>
                  </m.div>
                ))}

                <m.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.24, duration: 0.5 }}
                  style={{
                    padding: "1.2rem 1.5rem",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: "6px",
                  }}
                >
                  <p
                    style={{
                      fontFamily: FONT_MONO,
                      fontSize: "0.55rem",
                      letterSpacing: "0.18em",
                      color: "rgba(255,255,255,0.3)",
                      textTransform: "uppercase",
                      marginBottom: "0.9rem",
                    }}
                  >
                    What I don&apos;t do
                  </p>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.55rem",
                    }}
                  >
                    {dontDo.map((line) => (
                      <p
                        key={line}
                        style={{
                          fontFamily: FONT_SANS,
                          fontSize: "0.83rem",
                          lineHeight: 1.5,
                          color: "rgba(255,255,255,0.45)",
                          margin: 0,
                          textAlign: "justify",
                          textJustify: "inter-word",
                        }}
                      >
                        - {line}
                      </p>
                    ))}
                  </div>
                </m.div>
              </div>
            </div>

            <div style={{ marginTop: isMobile ? "4rem" : "6rem" }}>
              <div style={{ marginBottom: "1.5rem" }}>
                <span
                  style={{
                    fontFamily: FONT_MONO,
                    fontSize: "0.62rem",
                    letterSpacing: "0.2em",
                    color: "rgba(245,202,64,1)",
                    textTransform: "uppercase",
                  }}
                >
                  <center>• The Gold and the Glory •</center>
                </span>
              </div>
              <div style={{ overflow: "hidden" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    width: "max-content",
                    animation: "highlights-marquee 45s linear infinite",
                    willChange: "transform",
                  }}
                >
                  {[...highlightsWithIcons, ...highlightsWithIcons].map(
                    (h, i) => (
                      <Fragment key={i}>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "0.3rem",
                            width: "max-content",
                            flexShrink: 0,
                            userSelect: "none",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "0.65rem",
                            }}
                          >
                            <img
                              src={h.icon}
                              alt=""
                              aria-hidden="true"
                              loading="lazy"
                              decoding="async"
                              style={{
                                width: "28px",
                                height: "28px",
                                objectFit: "contain",
                                flexShrink: 0,
                                opacity: 0.9,
                              }}
                            />
                            <div
                              style={{
                                fontFamily: FONT_SERIF,
                                fontSize: "1rem",
                                fontWeight: 700,
                                lineHeight: 1.2,
                                color: "#f5ca40",
                                letterSpacing: "0.03em",
                                textShadow: "0 0 12px rgba(245,202,64,0.25)",
                                whiteSpace: "nowrap",
                              }}
                            >
                              {h.title}
                            </div>
                          </div>
                          <div
                            style={{
                              fontFamily: FONT_MONO,
                              fontSize: "0.58rem",
                              letterSpacing: "0.1em",
                              color: "rgba(245,202,64,0.45)",
                              textTransform: "uppercase",
                              paddingLeft: "42px",
                            }}
                          >
                            {h.time}
                          </div>
                          <div
                            style={{
                              fontFamily: FONT_SANS,
                              fontSize: "0.7rem",
                              lineHeight: 1.45,
                              color: "rgba(255,255,255,0.38)",
                              letterSpacing: "0.02em",
                              paddingLeft: "42px",
                              whiteSpace: "pre-line",
                            }}
                          >
                            {h.sub}
                          </div>
                        </div>
                        <span
                          style={{
                            fontSize: "1.6rem",
                            color: "rgba(245,202,64,0.3)",
                            margin: "0 2.2rem",
                            alignSelf: "flex-start",
                            flexShrink: 0,
                            lineHeight: 1,
                            userSelect: "none",
                          }}
                        >
                          •
                        </span>
                      </Fragment>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
