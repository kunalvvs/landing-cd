"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!isFinePointer || prefersReduced) return;

    document.body.classList.add("has-custom-cursor");

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const dotX = gsap.quickTo(dot, "x", { duration: 0.1, ease: "power3.out" });
    const dotY = gsap.quickTo(dot, "y", { duration: 0.1, ease: "power3.out" });
    const ringX = gsap.quickTo(ring, "x", { duration: 0.25, ease: "power3.out" });
    const ringY = gsap.quickTo(ring, "y", { duration: 0.25, ease: "power3.out" });

    const handleMove = (event) => {
      const { clientX, clientY } = event;
      dotX(clientX);
      dotY(clientY);
      ringX(clientX);
      ringY(clientY);
    };

    const handleDown = () => {
      gsap.to(ring, { scale: 0.85, duration: 0.2, ease: "power2.out" });
    };

    const handleUp = () => {
      gsap.to(ring, { scale: 1, duration: 0.2, ease: "power2.out" });
    };

    const handleHover = (event) => {
      const target = event.target;
      if (target.closest("a, button")) {
        gsap.to(ring, { scale: 1.4, opacity: 0.9, duration: 0.2 });
      } else {
        gsap.to(ring, { scale: 1, opacity: 0.6, duration: 0.2 });
      }
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);
    document.addEventListener("mouseover", handleHover);

    return () => {
      document.body.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
      document.removeEventListener("mouseover", handleHover);
    };
  }, []);

  return (
    <div className="custom-cursor" aria-hidden="true">
      <span ref={ringRef} className="cursor-ring" />
      <span ref={dotRef} className="cursor-dot" />
    </div>
  );
}
