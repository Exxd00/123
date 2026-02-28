"use client";

import { useEffect, useMemo, useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { track } from "@/lib/tracking";

const KEY = "blx_exit_intent_seen_v1";

export function ExitIntentPopup() {
  const [open, setOpen] = useState(false);
  const isMobile = useMemo(() => (typeof window !== "undefined" ? window.matchMedia("(max-width: 768px)").matches : false), []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const seen = window.sessionStorage.getItem(KEY);
    if (seen) return;

    const trigger = () => {
      window.sessionStorage.setItem(KEY, "1");
      setOpen(true);
      track("cta_click", { action: "exit_intent_open" });
    };

    let scrollTriggered = false;

    const onMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) trigger();
    };

    const onScroll = () => {
      if (scrollTriggered) return;
      const scrolled = window.scrollY / Math.max(1, document.body.scrollHeight - window.innerHeight);
      if (scrolled > 0.55) {
        scrollTriggered = true;
        trigger();
      }
    };

    if (!isMobile) {
      window.addEventListener("mouseout", onMouseLeave);
    }
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("mouseout", onMouseLeave);
      window.removeEventListener("scroll", onScroll);
    };
  }, [isMobile]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Before you go—grab the 30‑Day Launch Plan</DialogTitle>
          <DialogDescription>
            We’ll send the PDF instantly (double opt‑in enabled). No hype—just a practical roadmap.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-3">
          <Button
            onClick={() => {
              track("cta_click", { location: "exit_popup", action: "free_guide" });
              window.location.href = "/free-guide";
            }}
          >
            Get the Free Guide
          </Button>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Not now
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
