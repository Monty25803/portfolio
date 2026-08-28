import { useEffect, useRef, useState } from "react";

const FONT_MONO = "var(--font-mono)";

function exploredColor(pct) {
  const stops = [
    { at: 0, r: 239, g: 68, b: 68 },
    { at: 20, r: 234, g: 179, b: 8 },
    { at: 60, r: 59, g: 130, b: 246 },
    { at: 100, r: 74, g: 222, b: 128 },
  ];
  const p = Math.max(0, Math.min(100, pct));
  for (let i = 0; i < stops.length - 1; i++) {
    const a = stops[i];
    const b = stops[i + 1];
    if (p >= a.at && p <= b.at) {
      const t = (p - a.at) / (b.at - a.at);
      return {
        r: Math.round(a.r + (b.r - a.r) * t),
        g: Math.round(a.g + (b.g - a.g) * t),
        b: Math.round(a.b + (b.b - a.b) * t),
      };
    }
  }
  const last = stops[stops.length - 1];
  return { r: last.r, g: last.g, b: last.b };
}

function fmtElapsed(secs) {
  const h = Math.floor(secs / 3600);
  const m = Math.floor((secs % 3600) / 60);
  const s = secs % 60;
  const mm = String(m).padStart(2, "0");
  const ss = String(s).padStart(2, "0");
  return h > 0 ? `${String(h).padStart(2, "0")}:${mm}:${ss}` : `${mm}:${ss}`;
}

function fmtCoord(n) {
  const fixed = n.toFixed(4);
  return (parseFloat(fixed) > 0 ? "+" : "") + fixed;
}

function getScrollEl() {
  return document.querySelector(".hologram-interface");
}

export default function BottomRightHUD() {
  const [elapsed, setElapsed] = useState(0);
  const [explored, setExplored] = useState(0);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [showTop, setShowTop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const progressRef = useRef(null);
  const maxDepth = useRef(0);

  const btnSize = isMobile ? 34 : 46;
  const btnR = btnSize / 2 - 2;
  const btnCirc = 2 * Math.PI * btnR;

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const key = "__portfolio_session_start";
    const stored = sessionStorage.getItem(key);
    const start = stored
      ? parseInt(stored, 10)
      : (() => {
          const t = Date.now();
          sessionStorage.setItem(key, String(t));
          return t;
        })();

    setElapsed(Math.floor((Date.now() - start) / 1000));
    const id = setInterval(() => {
      setElapsed(Math.floor((Date.now() - start) / 1000));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const onMove = (e) => {
      setCoords({
        x: (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2),
        y: -(e.clientY - window.innerHeight / 2) / (window.innerHeight / 2),
      });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useEffect(() => {
    const scrollEl = getScrollEl();
    if (!scrollEl) return;

    const onScroll = () => {
      const max = scrollEl.scrollHeight - scrollEl.clientHeight;
      const p = max > 0 ? scrollEl.scrollTop / max : 0;
      if (p > maxDepth.current) {
        maxDepth.current = p;
        setExplored(Math.round(p * 100));
      }
      setShowTop(scrollEl.scrollTop > scrollEl.clientHeight * 0.6);
      if (progressRef.current) {
        progressRef.current.style.strokeDashoffset = String(btnCirc * (1 - p));
      }
    };

    onScroll();
    scrollEl.addEventListener("scroll", onScroll, { passive: true });
    return () => scrollEl.removeEventListener("scroll", onScroll);
  }, [btnCirc]);

  const scrollToTop = () => {
    if (window.__portfolioScrollTop) {
      window.__portfolioScrollTop(0);
      return;
    }
    getScrollEl()?.scrollTo({ top: 0, behavior: "smooth" });
  };

  const { r, g, b } = exploredColor(explored);
  const strokeColor = `rgb(${r},${g},${b})`;
  const fillColor = `rgba(${r},${g},${b},0.13)`;
  const ringSize = isMobile ? 34 : 40;
  const ringR = ringSize / 2 - 2;
  const ringCirc = 2 * Math.PI * ringR;
  const ringOffset = ringCirc * (1 - explored / 100);

  return (
    <div className="bottom-right-hud" aria-hidden>
      <div className="hud-top-slot">
        {showTop && (
          <button type="button" className="hud-scroll-top" onClick={scrollToTop} aria-label="Scroll to top">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
            <svg className="hud-progress-ring" width={btnSize} height={btnSize} viewBox={`0 0 ${btnSize} ${btnSize}`}>
              <circle
                ref={progressRef}
                cx={btnSize / 2}
                cy={btnSize / 2}
                r={btnR}
                fill="none"
                stroke="rgba(255,255,255,0.25)"
                strokeWidth="2"
                strokeDasharray={btnCirc}
                strokeDashoffset={btnCirc}
                transform={`rotate(-90 ${btnSize / 2} ${btnSize / 2})`}
              />
            </svg>
          </button>
        )}
      </div>

      <div className="hud-widgets">
        <div className="hud-widget hud-timer">
          <span className="hud-widget-icon">⏱</span>
          <span className="hud-widget-value" style={{ fontFamily: FONT_MONO }}>
            {fmtElapsed(elapsed)}
          </span>
        </div>

        <div className="hud-widget hud-explored">
          <svg width={ringSize} height={ringSize} viewBox={`0 0 ${ringSize} ${ringSize}`}>
            <circle cx={ringSize / 2} cy={ringSize / 2} r={ringR} fill={fillColor} stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" />
            <circle
              cx={ringSize / 2}
              cy={ringSize / 2}
              r={ringR}
              fill="none"
              stroke={strokeColor}
              strokeWidth="1.5"
              strokeDasharray={ringCirc}
              strokeDashoffset={ringOffset}
              transform={`rotate(-90 ${ringSize / 2} ${ringSize / 2})`}
            />
          </svg>
          <span className="hud-explored-pct" style={{ fontFamily: FONT_MONO, color: strokeColor }}>
            {explored}%
          </span>
        </div>

        {!isMobile && (
          <div className="hud-widget hud-coords">
            <div className="hud-coord-row">
              <span className="hud-coord-label">X</span>
              <span className="hud-coord-value">{fmtCoord(coords.x)}</span>
            </div>
            <div className="hud-coord-row">
              <span className="hud-coord-label">Y</span>
              <span className="hud-coord-value">{fmtCoord(coords.y)}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
