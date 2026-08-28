import { useState } from "react";
import { profile } from "../data/profile";

const variants = {
  heroFront: {
    style: {
      objectPosition: "50% 16%",
      transform: "scale(1.48)",
      transformOrigin: "50% 14%",
    },
  },
  heroBack: {
    style: {
      objectPosition: "42% 38%",
      transform: "scale(1.28)",
      transformOrigin: "42% 32%",
    },
  },
  sidebar: {
    ring: "h-32 w-32 sm:h-36 sm:w-36 rounded-2xl",
    style: {
      objectPosition: "50% 20%",
      transform: "scale(1.38)",
      transformOrigin: "50% 18%",
    },
    name: "text-xs",
    role: "text-[11px]",
  },
};

export default function ProfilePhoto({ className = "", variant = "heroFront", showCaption = true }) {
  const [sourceIndex, setSourceIndex] = useState(0);
  const config = variants[variant] || variants.heroFront;
  const sources = [profile.photo, profile.photoFallback].filter(Boolean);
  const isStacked = variant === "heroFront" || variant === "heroBack";

  const handleError = () => {
    if (sourceIndex < sources.length - 1) setSourceIndex((i) => i + 1);
    else setSourceIndex(sources.length);
  };

  const showInitials = sourceIndex >= sources.length;

  if (isStacked) {
    return (
      <div className={`h-full w-full ${className}`}>
        {!showInitials ? (
          <img
            src={sources[sourceIndex]}
            alt={variant === "heroBack" ? `${profile.name} — back view` : `${profile.name} — front view`}
            className="h-full w-full object-cover"
            style={config.style}
            loading="eager"
            decoding="async"
            onError={handleError}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-[var(--color-surface)]">
            <span className="display-lg text-4xl">DPM</span>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`relative mx-auto ${className}`}>
      <div
        className={`relative mx-auto overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface-alt)] ${config.ring}`}
      >
        {!showInitials ? (
          <img
            src={sources[sourceIndex]}
            alt={profile.name}
            className="h-full w-full object-cover"
            style={config.style}
            loading="lazy"
            onError={handleError}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <span className="display-lg text-2xl">DPM</span>
          </div>
        )}
      </div>
      {showCaption && (
        <>
          <p className={`mt-4 text-center font-medium ${config.name}`}>{profile.name}</p>
          <p className={`text-center text-[var(--color-muted)] ${config.role}`}>{profile.title}</p>
        </>
      )}
    </div>
  );
}
