import { useCallback, useEffect, useState } from "react";
import { profile } from "../data/profile";

const USERNAME = profile.github.split("/").pop();

async function fetchPublicFallback() {
  const res = await fetch(
    `https://api.github.com/users/${USERNAME}/repos?per_page=100&sort=pushed&type=public`,
  );
  if (!res.ok) throw new Error("Public GitHub API failed");
  const raw = await res.json();

  const repos = raw
    .filter((r) => !r.fork && r.name !== "portfolio" && !r.private)
    .map((r) => ({
      id: r.id,
      name: r.name,
      fullName: r.full_name,
      description: r.description || "",
      language: r.language,
      url: r.html_url,
      homepage: r.homepage || null,
      stars: r.stargazers_count,
      forks: r.forks_count,
      topics: r.topics || [],
      pushedAt: r.pushed_at,
      updatedAt: r.updated_at,
      latestRelease: null,
    }));

  return {
    username: USERNAME,
    repos,
    releases: [],
    source: "public-fallback",
    fetchedAt: new Date().toISOString(),
  };
}

export function useGitHub() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/github");
      if (res.ok) {
        setData(await res.json());
      } else {
        setData(await fetchPublicFallback());
      }
    } catch (err) {
      try {
        setData(await fetchPublicFallback());
      } catch {
        setError(err.message || "Could not load GitHub data");
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  return { data, loading, error, refresh: load };
}

export function formatRepoDate(iso) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

export function inferCategory(repo) {
  const topics = repo.topics || [];
  const name = repo.name.toLowerCase();
  const desc = (repo.description || "").toLowerCase();

  if (topics.includes("portfolio") || name.includes("portfolio")) return "Portfolio";
  if (name.includes("onboarding") || desc.includes("medall")) return "Enterprise";
  if (name.includes("metropolis") || desc.includes("procurement") || desc.includes("scm"))
    return "Enterprise";
  if (desc.includes("django") && desc.includes("portal")) return "Web App";
  if (desc.includes("desktop") || desc.includes("windows") || desc.includes("electron"))
    return "Desktop";
  if (desc.includes("game") || name.includes("ring")) return "Game";
  if (desc.includes("ai") || desc.includes("intent")) return "AI / Backend";
  if (desc.includes("security") || desc.includes("hardware")) return "Security";
  if (desc.includes("rfid") || desc.includes("armoury")) return "IoT / Desktop";
  return "Open Source";
}
