import { useState } from "react";
import { profile } from "../data/profile";

const sizes = {
  hero: {
    ring: "h-44 w-44 sm:h-52 sm:w-52 lg:h-56 lg:w-56",
    style: {
      objectPosition: "50% 28%",
      transform: "scale(1.38)",
      transformOrigin: "50% 26%",
    },
    name: "text-sm",
    role: "text-xs",
  },
  sidebar: {
    ring: "h-36 w-36 sm:h-40 sm:w-40",
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
    <div className={`relative mx-auto ${className}`}>
      <div
        className={`relative mx-auto overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-lg ${config.ring}`}
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
            <span className="font-serif text-3xl font-semibold text-[var(--color-text)]">DPM</span>
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
