"use client";

import { useEffect, useMemo, useState } from "react";

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export function CountdownTimer({ hours = 24 }: { hours?: number }) {
  const key = useMemo(() => `blx_countdown_${hours}h_v1`, [hours]);
  const [remainingMs, setRemainingMs] = useState<number>(0);

  useEffect(() => {
    const now = Date.now();
    const existing = typeof window !== "undefined" ? window.localStorage.getItem(key) : null;
    const endAt = existing ? Number(existing) : now + hours * 60 * 60 * 1000;
    if (!existing) window.localStorage.setItem(key, String(endAt));

    const tick = () => {
      const ms = Math.max(0, endAt - Date.now());
      setRemainingMs(ms);
    };

    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, [hours, key]);

  const totalSec = Math.floor(remainingMs / 1000);
  const h = Math.floor(totalSec / 3600);
  const m = Math.floor((totalSec % 3600) / 60);
  const s = totalSec % 60;

  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(212,175,55,0.35)] bg-[rgba(212,175,55,0.08)] px-3 py-1 text-xs font-semibold text-gold-200">
      <span className="opacity-90">Limited window:</span>
      <span className="font-mono text-gold-100">{pad(h)}:{pad(m)}:{pad(s)}</span>
    </div>
  );
}
