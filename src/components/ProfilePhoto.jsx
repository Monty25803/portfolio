import { useState } from "react";
import { profile } from "../data/profile";

const sizes = {
  hero: {
    ring: "h-40 w-40 sm:h-44 sm:w-44",
    style: {
      objectPosition: "50% 28%",
      transform: "scale(1.38)",
      transformOrigin: "50% 26%",
    },
    name: "text-sm",
    role: "text-xs",
  },
  sidebar: {
    ring: "h-32 w-32 sm:h-36 sm:w-36",
    style: {
      objectPosition: "50% 26%",
      transform: "scale(1.32)",
      transformOrigin: "50% 24%",
    },
    name: "text-xs",
    role: "text-[11px]",
  },
};

export default function ProfilePhoto({ className = "", variant = "hero", showCaption = true }) {
  const [sourceIndex, setSourceIndex] = useState(0);
  const config = sizes[variant] || sizes.hero;
  const sources = [profile.photo, profile.photoFallback].filter(Boolean);

  const handleError = () => {
    if (sourceIndex < sources.length - 1) setSourceIndex((i) => i + 1);
    else setSourceIndex(sources.length);
  };

  const showInitials = sourceIndex >= sources.length;

  return (
    <div className={`relative ${className}`}>
      <div
        className={`relative overflow-hidden rounded-[calc(1.25rem-3px)] bg-[var(--color-surface)] ${config.ring}`}
      >
        {!showInitials ? (
          <img
            src={sources[sourceIndex]}
            alt={profile.name}
            className="h-full w-full object-cover"
            style={config.style}
            loading="eager"
            onError={handleError}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-[var(--color-surface-alt)]">
            <span className="text-2xl font-bold gradient-text">DPM</span>
          </div>
        )}
      </div>
      {showCaption && (
        <>
          <p className={`mt-4 text-center font-semibold ${config.name}`}>{profile.name}</p>
          <p className={`text-center text-[var(--color-muted)] ${config.role}`}>{profile.title}</p>
        </>
      )}
    </div>
  );
}
