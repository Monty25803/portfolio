import { useState } from "react";
import { profile } from "../data/profile";

const variants = {
  heroFront: {
    style: {
      objectPosition: "50% 20%",
      transform: "scale(1.12)",
      transformOrigin: "50% 18%",
    },
  },
  heroBack: {
    style: {
      objectPosition: "52% 32%",
      transform: "scale(1.05)",
      transformOrigin: "50% 28%",
    },
  },
  sidebar: {
    ring: "h-32 w-32 sm:h-36 sm:w-36 rounded-2xl",
    style: {
      objectPosition: "50% 18%",
      transform: "scale(1.15)",
      transformOrigin: "50% 16%",
    },
    name: "text-xs",
    role: "text-[11px]",
  },
};

export default function ProfilePhoto({ className = "", variant = "heroFront", showCaption = true }) {
  const [sourceIndex, setSourceIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const config = variants[variant] || variants.heroFront;
  const sources = [profile.photo, profile.photoFallback].filter(Boolean);
  const isStacked = variant === "heroFront" || variant === "heroBack";

  const handleError = () => {
    if (sourceIndex < sources.length - 1) {
      setSourceIndex((i) => i + 1);
      setLoaded(false);
    } else {
      setSourceIndex(sources.length);
    }
  };

  const showInitials = sourceIndex >= sources.length;

  if (isStacked) {
    return (
      <div className={`relative h-full w-full ${className}`}>
        {!showInitials ? (
          <>
            {!loaded && <div className="photo-skeleton absolute inset-0" aria-hidden />}
            <img
              src={sources[sourceIndex]}
              alt={variant === "heroBack" ? `${profile.name} — back view` : `${profile.name} — front view`}
              className={`h-full w-full object-cover transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
              style={config.style}
              loading="eager"
              decoding="async"
              fetchPriority="high"
              onLoad={() => setLoaded(true)}
              onError={handleError}
            />
          </>
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
