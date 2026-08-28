import { m } from "motion/react";
import { useIsMobile } from "../hooks/useMediaQuery";

const FONT_SERIF = '"Playfair Display", Georgia, serif';
const FONT_MONO = '"DM Mono", monospace';
const FONT_SANS = '"DM Sans", sans-serif';

const C = {
  lang: "#a78bfa",
  backend: "#10b981",
  frontend: "#f472b6",
  ai: "#f5ca40",
  data: "#60a5fa",
  cloud: "#22d3ee",
};

const CATEGORIES = [
  {
    label: "Languages",
    color: C.lang,
    techs: [
      { n: "Python", f: "python.svg" },
      { n: "JavaScript", text: "JS" },
      {
        n: "SQL",
        parts: [{ f: "postgresql.svg" }, { f: "mysql.svg" }],
        brk: "PostgreSQL, MySQL",
      },
      { n: "Bash", f: "gnubash.svg" },
    ],
  },
  {
    label: "Backend & Systems",
    color: C.backend,
    techs: [
      { n: "Django", f: "python.svg" },
      { n: "REST / OpenAPI", f: "swagger.svg" },
      { n: "PostgreSQL", f: "postgresql.svg" },
      { n: "Redis", f: "redis.svg" },
    ],
  },
  {
    label: "Frontend",
    color: C.frontend,
    techs: [
      { n: "Angular", f: "tb-components.svg" },
      { n: "HTML / CSS", text: "HTML" },
    ],
  },
  {
    label: "AI & Development",
    color: C.ai,
    techs: [
      { n: "Agentic", f: "tb-brain.svg" },
      { n: "Cursor AI", text: "Cr" },
    ],
  },
  {
    label: "Data & Infra",
    color: C.data,
    techs: [
      { n: "PostgreSQL", f: "postgresql.svg" },
      { n: "AWS", f: "aws.svg", filter: true },
    ],
  },
  {
    label: "Cloud & DevOps",
    color: C.cloud,
    techs: [
      { n: "AWS", f: "aws.svg", filter: true },
      { n: "Docker", f: "docker.svg" },
      { n: "Git", f: "github.svg" },
      { n: "Linux", f: "ubuntu.svg" },
    ],
  },
];

function Icon({ u, size }) {
  if (!u.f) {
    return (
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: `${size}px`,
          height: `${size}px`,
          fontFamily: FONT_MONO,
          fontSize: `${Math.round(size * 0.32)}px`,
          letterSpacing: "0.02em",
          color: "rgba(255,255,255,0.55)",
          border: "1px solid rgba(255,255,255,0.15)",
          borderRadius: "6px",
        }}
      >
        {u.text}
      </span>
    );
  }

  if (u.chip) {
    return (
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#fff",
          borderRadius: "6px",
          padding: "3px",
          width: `${size}px`,
          height: `${size}px`,
        }}
      >
        <img
          src={`/logos/${u.f}`}
          alt=""
          loading="lazy"
          decoding="async"
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            objectFit: "contain",
            display: "block",
          }}
        />
      </span>
    );
  }

  return (
    <img
      src={`/logos/${u.f}`}
      alt=""
      loading="lazy"
      decoding="async"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        objectFit: "contain",
        display: "block",
        filter: u.filter ? "brightness(0) invert(1)" : undefined,
      }}
    />
  );
}

function Tile({ t, isMobile }) {
  const units =
    t.parts ??
    (t.f
      ? [{ f: t.f, chip: t.chip, filter: t.filter }]
      : [{ text: t.text }]);
  const size = t.parts ? 30 : 38;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "9px",
        width: isMobile ? "80px" : "94px",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "7px",
          alignItems: "center",
          justifyContent: "center",
          height: "40px",
        }}
      >
        {units.map((u, i) => (
          <Icon key={i} u={u} size={size} />
        ))}
      </div>
      <div
        style={{
          fontFamily: FONT_SANS,
          fontSize: "0.72rem",
          color: "rgba(255,255,255,0.55)",
          textAlign: "center",
          lineHeight: 1.3,
        }}
      >
        {t.n}
        {t.brk && (
          <span
            style={{
              display: "block",
              color: "rgba(255,255,255,0.3)",
              fontSize: "0.62rem",
              marginTop: "2px",
            }}
          >
            ({t.brk})
          </span>
        )}
      </div>
    </div>
  );
}

export default function SkillsAshwin() {
  const isMobile = useIsMobile();

  return (
    <section
      id="stack"
      style={{
        padding: isMobile ? "4rem 4vw" : "4rem 6vw 10rem",
        background: "transparent",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          marginBottom: isMobile ? "3rem" : "5rem",
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
          Stack
        </span>
        <div
          style={{
            flex: 1,
            height: "1px",
            background: "rgba(255,255,255,0.07)",
          }}
        />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 2fr",
          gap: isMobile ? "5rem" : "8vw",
          alignItems: "start",
        }}
      >
        <div
          style={{
            position: isMobile ? "relative" : "sticky",
            top: isMobile ? "0" : "6rem",
            marginBottom: isMobile ? "2rem" : "0",
          }}
        >
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
                margin: "0 0 1.2rem",
              }}
            >
              What I run in production.
            </m.h2>
          </div>
          <m.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{
              fontFamily: FONT_SANS,
              fontSize: "0.88rem",
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.48)",
              maxWidth: "260px",
            }}
          >
            Profiled under load. Not just imported.
          </m.p>
        </div>

        <div>
          {CATEGORIES.map((cat, ci) => (
            <div
              key={cat.label}
              style={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                gap: isMobile ? "1.3rem" : "24px",
                alignItems: "center",
                padding: ci === 0 ? "0 0 24px" : "24px 0",
                borderTop:
                  ci === 0 ? "none" : "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <div
                style={{
                  fontFamily: FONT_MONO,
                  fontSize: "0.62rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: cat.color,
                  width: isMobile ? "100%" : "118px",
                  flexShrink: 0,
                  lineHeight: 1.5,
                  textAlign: isMobile ? "center" : "left",
                }}
              >
                {cat.label}
              </div>
              <div
                style={
                  isMobile
                    ? {
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        gap: "22px 14px",
                        width: "100%",
                      }
                    : { display: "flex", flexWrap: "wrap", gap: "22px 24px" }
                }
              >
                {cat.techs.map((t) => (
                  <Tile key={t.n} t={t} isMobile={isMobile} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
