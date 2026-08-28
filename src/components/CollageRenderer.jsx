const GAP = "1.25rem";

export function EqualGridRenderer({ rows, renderCard, align = "start" }) {
  const alignItems = align === "stretch" ? "stretch" : "flex-start";
  let cardIdx = 0;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: GAP }}>
      {rows.map((n) => {
        const start = cardIdx;
        cardIdx += n;
        return (
          <div key={start} style={{ display: "flex", gap: GAP, alignItems }}>
            {Array.from({ length: n }, (_, i) => (
              <div key={start + i} style={{ flex: 1, minWidth: 0 }}>
                {renderCard(start + i)}
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}
