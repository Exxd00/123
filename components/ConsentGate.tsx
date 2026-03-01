"use client";

import { useEffect, useState } from "react";
import { Analytics } from "@/components/Analytics";

const KEY = "blx_cookie_consent_v1";

export function ConsentGate() {
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    const v = window.localStorage.getItem(KEY);
    setAccepted(v === "accepted");
  }, []);

  if (!accepted) return null;
  return <Analytics />;
}
