import { m } from "motion/react";
import { useState } from "react";
import {
  useIsMobile,
  useIsTablet,
  useIsDesktop,
} from "../hooks/useMediaQuery";
import { useEqualRows } from "../hooks/useCollageGrid";
import { EqualGridRenderer } from "./CollageRenderer";
import { projects, githubProjects } from "../data/profile";

const FONT_SERIF = '"Playfair Display", Georgia, serif';
const FONT_MONO = '"DM Mono", monospace';
const FONT_SANS = '"DM Sans", sans-serif';
const GITHUB_LOGO = "/logos/github.svg";

export function renderBullet(text) {
  const parts = String(text).split(/\*\*(.+?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} style={{ color: "#e8e0d0", fontWeight: 600 }}>
        {part}
      </strong>
    ) : (
      part
    ),
  );
}

const SUMMARY_LABELS = ["Problem", "System", "Design", "Outcome"];

function mapProfileProject(p) {
  const impact =
    p.metrics?.map((m) => `${m.value} ${m.label}`).join(" · ") ?? "";
  return {
    slug: p.id,
    title: p.title,
    company: p.client,
    logo: p.image ?? GITHUB_LOGO,
    logoHeight: 22,
    status:
      p.status === "Ongoing"
        ? "Client Delivery"
        : p.status === "Completed"
          ? "Shipped"
          : p.status,
    devStatus: p.status === "Completed" ? "completed" : undefined,
    tags: p.techStack ?? p.tags ?? [],
    impact,
    summary: [
      p.overview,
      p.responsibilities?.[0] ?? p.features?.[0] ?? "",
      p.responsibilities?.[1] ?? p.features?.[1] ?? "",
      p.outcomes?.[0] ?? impact,
    ],
    href: p.url || p.githubUrl,
    github: p.githubUrl,
  };
}

function mapGithubProject(g) {
  const impact = g.description;
  return {
    slug: `gh-${g.id}`,
    title: g.title,
    company: g.category,
    logo: GITHUB_LOGO,
    logoHeight: 18,
    status: g.releaseTag ? `Released ${g.releaseTag}` : "Open Source",
    devStatus: "completed",
    tags: g.topics ?? [],
    impact,
    summary: [
      g.description,
      g.language ? `Primary stack: ${g.language}` : "",
      g.homepage
        ? `Live at ${g.homepage.replace(/^https?:\/\//, "")}`
        : "Source available on GitHub",
      g.stars != null ? `${g.stars} GitHub stars` : "Open source repository",
    ],
    href: g.homepage || g.url,
    github: g.url,
  };
}

const profileProjectUrls = new Set(
  projects.flatMap((p) => [p.githubUrl, p.url].filter(Boolean)),
);

const allCards = [
  ...projects.map(mapProfileProject),
  ...githubProjects
    .filter((g) => !profileProjectUrls.has(g.url))
    .map(mapGithubProject),
];

function ProjectCard({ p }) {
  const [hovered, setHovered] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const isMobile = useIsMobile();
  const isDesktop = useIsDesktop();
  const showOutcome = hovered || revealed;

  const isAward = p.status.includes("Award");
  const statusColor = isAward
    ? "#facc15"
    : p.status === "Client Delivery"
      ? "#22d3ee"
      : p.devStatus === "completed"
        ? "#4ade80"
        : "#facc15";
  const statusBorder = isAward
    ? "rgba(250,204,21,0.35)"
    : p.status === "Client Delivery"
      ? "rgba(34,211,238,0.4)"
      : p.devStatus === "completed"
        ? "rgba(74,222,128,0.35)"
        : "rgba(250,204,21,0.35)";
  const statusBg = isAward
    ? "rgba(250,204,21,0.06)"
    : p.status === "Client Delivery"
      ? "rgba(34,211,238,0.08)"
      : p.devStatus === "completed"
        ? "rgba(74,222,128,0.06)"
        : "rgba(250,204,21,0.06)";

  const openLink = () => {
    if (p.href) {
      window.open(p.href, "_blank", "noopener,noreferrer");
    } else if (p.github) {
      window.open(p.github, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <m.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4, scale: 1.015 }}
      transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => {
        if (isMobile && !revealed) {
          setRevealed(true);
          return;
        }
        openLink();
      }}
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        padding: "1.4rem",
        borderRadius: "8px",
        border: `1px solid ${hovered ? "rgba(255,255,255,0.28)" : "rgba(255,255,255,0.1)"}`,
        background: "transparent",
        transition: "border-color 0.2s",
        cursor: "pointer",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.85rem",
          overflow: "hidden",
          maxHeight: showOutcome ? "1000px" : "14rem",
          minHeight: showOutcome ? undefined : "14rem",
          transition: "max-height 0.5s cubic-bezier(0.76, 0, 0.24, 1)",
          ...(!showOutcome
            ? {
                WebkitMaskImage:
                  "linear-gradient(to bottom, black 75%, transparent 100%)",
                maskImage:
                  "linear-gradient(to bottom, black 75%, transparent 100%)",
              }
            : {}),
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: isDesktop ? "row" : "column",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "0.5rem",
          }}
        >
          <p
            style={{
              fontFamily: FONT_SERIF,
              fontWeight: 800,
              fontSize: "1.35rem",
              color: "#fafaf8",
              lineHeight: 1.2,
              margin: 0,
              flex: 1,
            }}
          >
            {p.title}
          </p>
          <span
            style={{
              fontFamily: FONT_MONO,
              fontSize: "0.5rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
              padding: "3px 8px",
              borderRadius: "20px",
              flexShrink: 0,
              alignSelf: "flex-start",
              color: statusColor,
              border: `1px solid ${statusBorder}`,
              background: statusBg,
            }}
          >
            {p.status}
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <img
            src={p.logo}
            alt={p.company}
            loading="lazy"
            decoding="async"
            style={{
              height: `${Math.min(p.logoHeight, 32)}px`,
              width: "auto",
              maxWidth: "56px",
              objectFit: "contain",
              opacity: 0.8,
            }}
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
          <span
            style={{
              fontFamily: FONT_MONO,
              fontSize: "0.62rem",
              letterSpacing: "0.09em",
              color: "rgba(255,255,255,0.3)",
            }}
          >
            {p.company}
          </span>
        </div>

        <div style={{ height: "1px", background: "rgba(255,255,255,0.05)" }} />

        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
        >
          {p.summary.map((bullet, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: "0.55rem",
                alignItems: "flex-start",
              }}
            >
              <span
                style={{
                  fontFamily: FONT_MONO,
                  fontSize: "0.56rem",
                  color: "rgba(255,255,255,0.2)",
                  marginTop: "3px",
                  flexShrink: 0,
                  letterSpacing: "0.07em",
                  textTransform: "uppercase",
                  width: "58px",
                }}
              >
                {SUMMARY_LABELS[i]}
              </span>
              <span
                style={{
                  fontFamily: FONT_SANS,
                  fontSize: "0.82rem",
                  lineHeight: 1.55,
                  color: "rgba(255,255,255,0.5)",
                  textAlign: "justify",
                  textJustify: "inter-word",
                }}
              >
                {renderBullet(bullet)}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          gap: "5px",
          flexWrap: "wrap",
          marginTop: "1rem",
          paddingTop: "1rem",
          borderTop: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        {p.tags.slice(0, 6).map((t) => (
          <span
            key={t}
            style={{
              fontFamily: FONT_MONO,
              fontSize: "0.52rem",
              letterSpacing: "0.07em",
              color: "rgba(255,255,255,0.35)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: "2px",
              padding: "3px 7px",
            }}
          >
            {t}
          </span>
        ))}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "auto",
          paddingTop: "0.5rem",
        }}
      >
        <span
          style={{
            fontFamily: FONT_MONO,
            fontSize: "0.65rem",
            color: hovered ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.3)",
            transition: "color 0.2s",
          }}
        >
          ↗
        </span>
      </div>
    </m.div>
  );
}

export default function ProjectsAshwin() {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const maxPerRow = isMobile ? 1 : isTablet ? 2 : 3;
  const rows = useEqualRows(allCards.length, maxPerRow);

  return (
    <section
      id="projects"
      style={{
        position: "relative",
        background: "transparent",
        padding: isMobile ? "5rem 4vw" : "4rem 0",
      }}
    >
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
              Projects & Open Source
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
                lineHeight: 1.1,
                letterSpacing: "0.02em",
                color: "#fafaf8",
                margin: 0,
              }}
            >
              Systems that had to hold.
            </m.h2>
          </div>
        </div>

        <div style={{ padding: isMobile ? "2rem 0 0" : "1.5rem 6vw 4rem" }}>
          <EqualGridRenderer
            rows={rows}
            renderCard={(idx) => <ProjectCard p={allCards[idx]} />}
          />
        </div>
      </div>
    </section>
  );
}
