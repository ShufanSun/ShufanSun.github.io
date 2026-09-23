import React, { useEffect, useState } from 'react';

// Cached per repo for the page's lifetime so multiple cards don't refetch
// (GitHub's unauthenticated API allows 60 req/hour per IP).
const cache = {};

// Live GitHub star count shown as a small "★ N" badge next to a Code link.
// Renders nothing until the count loads, and stays hidden if the repo is
// private/unavailable (API 404) so it never shows a broken state.
const GithubStars = ({ repoUrl, className = '' }) => {
  const [stars, setStars] = useState(null);

  useEffect(() => {
    if (!repoUrl) return;
    const m = repoUrl.match(/github\.com\/([^/]+)\/([^/#?]+)/);
    if (!m) return;
    const key = `${m[1]}/${m[2].replace(/\.git$/, '')}`;
    if (key in cache) { setStars(cache[key]); return; }

    let alive = true;
    fetch(`https://api.github.com/repos/${key}`)
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        if (alive && d && typeof d.stargazers_count === 'number') {
          cache[key] = d.stargazers_count;
          setStars(d.stargazers_count);
        }
      })
      .catch(() => {});
    return () => { alive = false; };
  }, [repoUrl]);

  if (stars === null) return null;

  return (
    <a
      href={repoUrl}
      target='_blank'
      rel='noopener noreferrer'
      title={`${stars} stars on GitHub`}
      className={`inline-flex items-center gap-1 align-middle text-[13px] font-serif text-black dark:text-secondary hover:text-black/60 dark:hover:text-white transition-colors ${className}`}
    >
      <svg viewBox='0 0 16 16' width='12' height='12' fill='currentColor' aria-hidden='true'>
        <path d='M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z' />
      </svg>
      {stars}
    </a>
  );
};

export default GithubStars;
