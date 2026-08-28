import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [thumbRatio, setThumbRatio] = useState(0.2);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const max = el.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
      setThumbRatio(el.scrollHeight > 0 ? window.innerHeight / el.scrollHeight : 1);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="scroll-progress" aria-hidden>
      <div
        className="scroll-progress-thumb"
        style={{
          height: `${Math.max(thumbRatio * 100, 8)}%`,
          top: `${progress * (100 - Math.max(thumbRatio * 100, 8))}%`,
        }}
      />
    </div>
  );
}
