"use client";

import { useEffect } from "react";
import { track } from "@/lib/tracking";

export function ThankYouTracker() {
  useEffect(() => {
    track("thank_you_visit", { page: "thank-you" });
  }, []);
  return null;
}
