"use client";

import { useEffect } from "react";

export default function SpeakerBioTapHandler() {
  useEffect(() => {
    const cards = document.querySelectorAll(".rer-page .speaker-card");
    const handleTap = (e: Event) => {
      const card = e.currentTarget as HTMLElement;
      const isActive = card.classList.contains("bio-active");
      cards.forEach((c) => c.classList.remove("bio-active"));
      if (!isActive) card.classList.add("bio-active");
    };
    cards.forEach((card) => card.addEventListener("click", handleTap));
    return () =>
      cards.forEach((card) => card.removeEventListener("click", handleTap));
  }, []);

  return null;
}
