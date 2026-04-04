"use client";

import { useEffect } from "react";

export default function RevealInit() {
  useEffect(() => {
    const reveals = document.querySelectorAll<HTMLElement>(".reveal");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(
              () => entry.target.classList.add("visible"),
              i * 80
            );
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    reveals.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return null;
}
