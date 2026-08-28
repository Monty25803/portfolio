const GITHUB_API = "https://api.github.com";

function headers(token) {
  const h = {
    Accept: "application/vnd.github+json",
    "User-Agent": "deviprasana-portfolio",
    "X-GitHub-Api-Version": "2022-11-28",
  };
  if (token) h.Authorization = `Bearer ${token}`;
  return h;
}

async function fetchAllRepos(username, token) {
  const repos = [];
  let page = 1;

  while (page <= 5) {
    const res = await fetch(
      `${GITHUB_API}/users/${username}/repos?per_page=100&page=${page}&sort=pushed&type=all`,
      { headers: headers(token) },
    );
    if (!res.ok) throw new Error(`GitHub repos error: ${res.status}`);
    const batch = await res.json();
    if (!batch.length) break;
    repos.push(...batch);
    if (batch.length < 100) break;
    page += 1;
  }

  return repos
    .filter((r) => !r.fork && r.name !== "portfolio" && !r.private)
    .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at));
}

async function fetchLatestRelease(fullName, token) {
  try {
    const res = await fetch(`${GITHUB_API}/repos/${fullName}/releases?per_page=1`, {
      headers: headers(token),
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data[0] || null;
  } catch {
    return null;
  }
}

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Cache-Control", "s-maxage=300, stale-while-revalidate=600");

  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const token = process.env.GITHUB_TOKEN;
  const username = process.env.GITHUB_USERNAME || "Monty25803";

  try {
    const rawRepos = await fetchAllRepos(username, token);

    const releaseResults = await Promise.allSettled(
      rawRepos.slice(0, 20).map(async (repo) => {
        const release = await fetchLatestRelease(repo.full_name, token);
        if (!release) return null;
        return {
          id: release.id,
          tag: release.tag_name,
          name: release.name || release.tag_name,
          repo: repo.full_name,
          repoName: repo.name,
          url: release.html_url,
          publishedAt: release.published_at,
          description: (release.body || "").slice(0, 200).replace(/\r?\n/g, " "),
        };
      }),
    );

    const releases = releaseResults
      .filter((r) => r.status === "fulfilled" && r.value)
      .map((r) => r.value)
      .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
      .slice(0, 12);

    const repos = rawRepos.map((r) => ({
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
      latestRelease: releases.find((rel) => rel.repoName === r.name) || null,
    }));

    return res.status(200).json({
      username,
      repos,
      releases,
      fetchedAt: new Date().toISOString(),
    });
  } catch (err) {
    return res.status(500).json({ error: err.message || "Failed to fetch GitHub data" });
  }
}
