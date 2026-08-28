import { m } from "motion/react";
import { useState } from "react";
import { useIsMobile, useIsDesktop } from "../hooks/useMediaQuery";
import { useEqualRows } from "../hooks/useCollageGrid";
import { EqualGridRenderer } from "./CollageRenderer";
import { projects as allProjects } from "../data/profile";

function renderBullet(text) {
  const parts = text.split(/\*\*(.+?)\*\*/g);
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

const FONT_SERIF = '"Playfair Display", Georgia, serif';
const FONT_MONO = '"DM Mono", monospace';
const FONT_SANS = '"DM Sans", sans-serif';

const TYPE_META = {
  production: {
    label: "Client Delivery",
    color: "#4ade80",
    border: "rgba(74,222,128,0.45)",
    bg: "rgba(74,222,128,0.10)",
    glow: "0 0 4px rgba(74,222,128,0.28)",
  },
  "open-source": {
    label: "Open Source",
    color: "#60A5FA",
    border: "rgba(96,165,250,0.45)",
    bg: "rgba(96,165,250,0.10)",
    glow: "0 0 4px rgba(96,165,250,0.28)",
  },
};

const LABELS = ["Context", "Approach", "System", "Outcome"];

function mapFeaturedProject(p) {
  const type = p.githubUrl && !p.url ? "open-source" : "production";
  const shortName = p.title.includes("(")
    ? p.title.split("(")[0].trim()
    : p.title.split("—")[0].trim();

  return {
    type,
    name: shortName,
    title: p.overview,
    subtitle: `${p.client} • ${p.period}`,
    link: p.url || p.githubUrl,
    secondaryBadge: p.badge,
    bullets: [
      p.overview,
      p.responsibilities?.[0] ?? p.features?.[0] ?? "",
      p.responsibilities?.[1] ?? p.features?.[1] ?? "",
      p.outcomes?.[0] ?? p.metrics?.map((m) => `${m.value} ${m.label}`).join(" · ") ?? "",
    ],
  };
}

const ITEMS = allProjects.filter((p) => p.featured).slice(0, 3).map(mapFeaturedProject);

function FeaturedCard({ item }) {
  const [hovered, setHovered] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const isMobile = useIsMobile();
  const isDesktop = useIsDesktop();
  const showOutcome = hovered || revealed;

  const meta = TYPE_META[item.type] ?? TYPE_META.production;
  const isLink = !!item.link;

  const inner = (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          overflow: "hidden",
          maxHeight: showOutcome ? "1000px" : "17rem",
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
              fontSize: "1.75rem",
              color: "#fafaf8",
              lineHeight: 1.2,
              margin: 0,
              minWidth: 0,
            }}
          >
            {item.name}
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.4rem",
              justifyContent: "flex-end",
              flexShrink: 0,
              alignSelf: "flex-start",
            }}
          >
            <span
              style={{
                fontFamily: FONT_MONO,
                fontSize: "0.52rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
                padding: "3px 9px",
                borderRadius: "20px",
                color: meta.color,
                border: `1px solid ${meta.border}`,
                background: meta.bg,
                boxShadow: meta.glow,
              }}
            >
              {meta.label}
            </span>
            {item.secondaryBadge && (
              <span
                style={{
                  fontFamily: FONT_MONO,
                  fontSize: "0.52rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  whiteSpace: "nowrap",
                  padding: "3px 9px",
                  borderRadius: "20px",
                  color: "#10b981",
                  border: "1px solid rgba(16,185,129,0.45)",
                  background: "rgba(16,185,129,0.08)",
                  boxShadow: "0 0 4px rgba(16,185,129,0.28)",
                }}
              >
                {item.secondaryBadge}
              </span>
            )}
          </div>
        </div>

        <p
          style={{
            fontFamily: FONT_SANS,
            fontWeight: 400,
            fontSize: "0.85rem",
            color: "rgba(255,255,255,0.55)",
            lineHeight: 1.45,
            margin: 0,
            textAlign: "justify",
            textJustify: "inter-word",
          }}
        >
          {item.title}
        </p>

        <p
          style={{
            fontFamily: FONT_MONO,
            fontSize: "0.7rem",
            color: "rgba(255,255,255,0.28)",
            margin: 0,
            letterSpacing: "0.02em",
            textAlign: "justify",
            textJustify: "inter-word",
          }}
        >
          {item.subtitle}
        </p>

        <div style={{ height: "1px", background: "rgba(255,255,255,0.06)" }} />

        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
        >
          {item.bullets.map((bullet, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: "0.65rem",
                alignItems: "flex-start",
              }}
            >
              <span
                style={{
                  fontFamily: FONT_MONO,
                  fontSize: "0.62rem",
                  color: "rgba(255,255,255,0.22)",
                  marginTop: "4px",
                  flexShrink: 0,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  width: isMobile ? "56px" : "76px",
                  lineHeight: 1.5,
                }}
              >
                {LABELS[i]}
              </span>
              <span
                style={{
                  fontFamily: FONT_SANS,
                  fontSize: "0.88rem",
                  lineHeight: 1.65,
                  color: "rgba(255,255,255,0.56)",
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

      {isLink && (
        <div
          style={{
            marginTop: "auto",
            paddingTop: "0.5rem",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <span
            style={{
              fontFamily: FONT_MONO,
              fontSize: "0.72rem",
              color: hovered
                ? "rgba(255,255,255,0.95)"
                : "rgba(255,255,255,0.35)",
              transition: "color 0.2s",
            }}
          >
            ↗
          </span>
        </div>
      )}
    </>
  );

  const sharedStyle = {
    display: "flex",
    flexDirection: "column",
    padding: "1.6rem",
    borderRadius: "8px",
    border: `1px solid ${hovered ? "rgba(255,255,255,0.35)" : "rgba(255,255,255,0.15)"}`,
    background: "transparent",
    transition: "border-color 0.2s",
    textDecoration: "none",
    color: "inherit",
    minWidth: 0,
    overflow: "hidden",
    cursor: isLink ? "pointer" : "default",
  };

  if (isLink) {
    return (
      <m.a
        href={item.link}
        target={item.link.startsWith("http") ? "_blank" : undefined}
        rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={isMobile ? { y: -4 } : { y: -6, scale: 1.025 }}
        transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1] }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={(e) => {
          if (isMobile && !revealed) {
            e.preventDefault();
            setRevealed(true);
          }
        }}
        style={sharedStyle}
      >
        {inner}
      </m.a>
    );
  }

  return (
    <m.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => {
        if (isMobile) setRevealed((r) => !r);
      }}
      style={sharedStyle}
    >
      {inner}
    </m.div>
  );
}

export default function Featured() {
  const isMobile = useIsMobile();
  const maxPerRow = isMobile ? 1 : 3;
  const rows = useEqualRows(ITEMS.length, maxPerRow);

  return (
    <section
      id="featured"
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
              Featured
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
              What the arc produced.
            </m.h2>
          </div>
        </div>

        <div style={{ padding: isMobile ? "2rem 0 0" : "1.5rem 6vw 4rem" }}>
          <EqualGridRenderer
            rows={rows}
            renderCard={(idx) => <FeaturedCard item={ITEMS[idx]} />}
          />
        </div>
      </div>
    </section>
  );
}
