import { useMemo, useRef } from "react";

function seededRandom(seed) {
  let s = seed | 0;
  return () => {
    s = (s * 1664525 + 1013904223) | 0;
    return (s >>> 0) / 4294967296;
  };
}

function pickEqualRows(count, rand, maxPerRow) {
  const rows = [];
  let rem = count;

  while (rem > 0) {
    const r = rand();
    let n;
    if (r < 0.22) n = 1;
    else if (r < 0.58) n = 2;
    else n = Math.min(3, maxPerRow);

    const take = Math.min(n, rem);
    rows.push(take);
    rem -= take;
  }

  return rows;
}

export function useEqualRows(count, maxPerRow) {
  const seedRef = useRef(Math.floor(Math.random() * 2_147_483_647));
  return useMemo(() => {
    if (maxPerRow <= 1) return Array(count).fill(1);
    const rand = seededRandom(seedRef.current);
    return pickEqualRows(count, rand, maxPerRow);
  }, [count, maxPerRow]);
}
