"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/* ─────────────────────────────────────────────────────────────
   GSAP Landing Page Animation Engine  — FAST / IMMEDIATE
   Animations fire the instant an element enters the viewport.
───────────────────────────────────────────────────────────── */

function registerPlugins() {
  gsap.registerPlugin(ScrollTrigger);
}

/* ──────────────────────────────────────────────────────────
   UTILITY — batch reveal
   Groups elements so they all animate together when the
   PARENT enters the viewport, not each one individually.
   This eliminates the "I have to scroll deep" problem.
────────────────────────────────────────────────────────── */
function batchReveal(selector, fromVars = {}, toVars = {}) {
  const els = gsap.utils.toArray(selector);
  if (!els.length) return;

  // Use the first element's nearest section as the trigger
  ScrollTrigger.batch(els, {
    // Fire the moment the top of any element touches the bottom of the viewport
    start: "top bottom",
    onEnter: (batch) => {
      gsap.fromTo(
        batch,
        { opacity: 0, y: fromVars.y ?? 30, scale: fromVars.scale ?? 1, x: fromVars.x ?? 0 },
        {
          opacity: 1,
          y: 0,
          x: 0,
          scale: 1,
          duration: toVars.duration ?? 0.45,
          ease: toVars.ease ?? "power2.out",
          stagger: toVars.stagger ?? 0.06,
          overwrite: "auto",
        }
      );
    },
  });
}

/* Single-element scroll reveal — triggers the moment element enters viewport */
function reveal(selector, fromVars = {}, toVars = {}, triggerEl = null) {
  const els = gsap.utils.toArray(selector);
  if (!els.length) return;
  els.forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, y: fromVars.y ?? 30, scale: fromVars.scale ?? 1, x: fromVars.x ?? 0, rotation: fromVars.rotation ?? 0 },
      {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        rotation: 0,
        duration: toVars.duration ?? 0.45,
        ease: toVars.ease ?? "power2.out",
        delay: toVars.delay ?? 0,
        overwrite: "auto",
        scrollTrigger: {
          trigger: triggerEl || el,
          // "top bottom" = fires the instant the TOP of the element reaches the BOTTOM of the viewport
          start: "top bottom",
          toggleActions: "play none none none",
        },
      }
    );
  });
}

/* ─────────────────────────────────────────────────────────────
   1. HERO — immediate entrance (no scroll trigger needed)
───────────────────────────────────────────────────────────── */
function animateHero() {
  if (!document.getElementById("hero-title")) return;

  const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

  tl.fromTo("[class*='heroStrip']", { y: -30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4 })
    .fromTo("[class*='navShell']",        { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4 }, "-=0.2")
    .fromTo("[class*='heroBadge']",       { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.35, ease: "back.out(1.6)" }, "-=0.1")
    .fromTo("[id='hero-title']",          { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.45 }, "-=0.15")
    .fromTo("[class*='subtitle']",        { opacity: 0, y: 25 }, { opacity: 1, y: 0, duration: 0.4 }, "-=0.2")
    .fromTo("[class*='ctaButton']",       { scale: 0.85, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.35, ease: "back.out(1.5)" }, "-=0.15")
    // .fromTo("[class*='brandMarquee'], [class*='brandStrip']", { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.35 }, "-=0.1");

  // Dashboard preview entrance + then infinite float
  const preview = document.querySelector("[class*='heroPreview']");
  if (preview) {
    gsap.fromTo(
      preview,
      { opacity: 0, scale: 1.06, y: 120 },
      {
        opacity: 1, scale: 1, y: 0, duration: 0.9, ease: "power3.out",
        scrollTrigger: {
          trigger: preview,
          start: "top 70%",
          toggleActions: "play none none none",
        },
        onComplete() {
          gsap.to(preview, {
            y: -16, duration: 3, ease: "sine.inOut", yoyo: true, repeat: -1,
          });
        },
      }
    );
  }

}

/* ─────────────────────────────────────────────────────────────
   2. HOW IT WORKS
───────────────────────────────────────────────────────────── */
function animateHowItWorks() {
  reveal("[class*='HowItWorks'] [class*='badge'], section [class*='badge']",
    { scale: 0.85, y: 15 }, { duration: 0.35, ease: "back.out(1.5)" }
  );

  reveal("[id='how-it-works-title']", { y: 35 }, { duration: 0.45 });

  // Preview frame — slides from left
  gsap.utils.toArray("[class*='previewFrame']").forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, x: -50, scale: 0.97 },
      {
        opacity: 1, x: 0, scale: 1, duration: 0.55, ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top bottom" },
        onComplete() {
          gsap.to(el, { y: -10, duration: 3.5, ease: "sine.inOut", yoyo: true, repeat: -1 });
        },
      }
    );
  });

  // Steps — batch so they all pop in together when first one enters
  batchReveal(
    "[class*='step'], [class*='stepHighlight']",
    { x: 40, y: 0 },
    { duration: 0.4, ease: "power2.out", stagger: 0.07 }
  );
}

/* ─────────────────────────────────────────────────────────────
   3. FEATURES AUTOMATION
───────────────────────────────────────────────────────────── */
function animateFeaturesAutomation() {
  reveal("[data-gsap-section='features'] [class*='brandRow']",
    { scale: 0.9, y: 20 }, { duration: 0.4, ease: "back.out(1.4)" }
  );

  reveal("[id='automation-title']", { y: 35 }, { duration: 0.45 });

  // Top 3 cards — batch
  const cards = gsap.utils.toArray("[data-gsap-section='features'] [class*='topCards'] [class*='card']");
  if (cards.length) {
    ScrollTrigger.batch(cards, {
      start: "top bottom",
      onEnter: (batch) => {
        gsap.fromTo(batch,
          { opacity: 0, y: 50, scale: 0.94 },
          { opacity: 1, y: 0, scale: 1, duration: 0.45, ease: "power3.out", stagger: 0.08 }
        );
      },
    });

    cards.forEach((el) => {
      el.addEventListener("mouseenter", () => gsap.to(el, { y: -6, scale: 1.02, duration: 0.25, ease: "power2.out" }));
      el.addEventListener("mouseleave", () => gsap.to(el, { y: 0, scale: 1, duration: 0.3, ease: "power2.inOut" }));
    });
  }

  // Big card
  reveal("[class*='bigCard']", { y: 40, scale: 0.97 }, { duration: 0.5 });

  // Big image float
  gsap.utils.toArray("[class*='bigImage']").forEach((el) => {
    gsap.to(el, { y: -10, duration: 3.5, ease: "sine.inOut", yoyo: true, repeat: -1 });
  });

  // Bottom feature cards — batch
  batchReveal(
    "[class*='bottomCard']",
    { y: 30 },
    { duration: 0.4, stagger: 0.07 }
  );
}

/* ─────────────────────────────────────────────────────────────
   4. FEATURES OVERVIEW
───────────────────────────────────────────────────────────── */
function animateFeaturesOverview() {
  reveal("[id='features-overview-title']", { y: 35 }, { duration: 0.45 });

  const cards = gsap.utils.toArray("[data-gsap-section='features-overview'] [data-gsap='fo-card']");

  if (cards.length) {
    // Scroll-triggered entry — batch so all visible cards pop in together
    ScrollTrigger.batch(cards, {
      start: "top bottom",
      onEnter: (batch) => {
        gsap.fromTo(
          batch,
          { opacity: 0, y: 45, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "power3.out", stagger: 0.09 }
        );
      },
    });

    // Hover — lift + subtle scale (shadow handled by CSS transition)
    cards.forEach((el) => {
      const isWide = el.dataset.wide === "true" || el.classList.toString().includes("wideCard");
      el.addEventListener("mouseenter", () =>
        gsap.to(el, { y: -8, scale: isWide ? 1.012 : 1.025, duration: 0.28, ease: "power2.out" })
      );
      el.addEventListener("mouseleave", () =>
        gsap.to(el, { y: 0, scale: 1, duration: 0.35, ease: "power2.inOut" })
      );
    });
  }
}

/* ─────────────────────────────────────────────────────────────
   5. SECURITY / WORKFLOW
───────────────────────────────────────────────────────────── */
function animateSecurityWorkflow() {
  reveal("[id='security-title']", { y: 35 }, { duration: 0.45 });

  // Compliance hex badges — batch
  batchReveal(
    "[class*='badgeHex']",
    { scale: 0.5, y: 0, rotation: -15 },
    { duration: 0.4, ease: "back.out(2)", stagger: 0.07 }
  );

  // Stat cards — batch
  batchReveal(
    "[class*='statCard']",
    { y: 30, scale: 0.96 },
    { duration: 0.4, stagger: 0.07 }
  );

  // Center orbit — spins in
  reveal(
    "[class*='centerBox']",
    { scale: 0.4, rotation: -90 },
    { duration: 0.55, ease: "back.out(1.8)" }
  );

  // Orbit nodes — batch, tight stagger
  batchReveal(
    "[class*='orbitNode']",
    { scale: 0, y: 0 },
    { duration: 0.35, ease: "back.out(2.5)", stagger: 0.06 }
  );

  reveal("[id='workflow-title']", { y: 35 }, { duration: 0.45 });
}

/* ─────────────────────────────────────────────────────────────
   6. TESTIMONIALS
───────────────────────────────────────────────────────────── */
function animateTestimonials() {
  reveal(
    "[class*='testimonials'] h2, [class*='testimonials'] [class*='title']",
    { y: 35 }, { duration: 0.45 }
  );

  batchReveal(
    "[class*='testimonial'], [class*='TestiCard'], [class*='quote']",
    { y: 35, scale: 0.97 },
    { duration: 0.4, stagger: 0.07 }
  );
}

/* ─────────────────────────────────────────────────────────────
   7. BLOG / FAQ / FOOTER
───────────────────────────────────────────────────────────── */
function animateOtherSections() {
  batchReveal(
    "[class*='blogCard'], [class*='BlogCard'], [class*='post']",
    { y: 30 },
    { duration: 0.4, stagger: 0.07 }
  );

  batchReveal(
    "[class*='faqItem'], [class*='FaqItem'], [class*='accordion']",
    { x: -25, y: 0 },
    { duration: 0.35, ease: "power2.out", stagger: 0.05 }
  );

  reveal(
    "[class*='footer'], footer",
    { y: 25 },
    { duration: 0.4 }
  );
}

/* ─────────────────────────────────────────────────────────────
   8. GLOBAL headings + badges (catch-all)
───────────────────────────────────────────────────────────── */
function animateGlobalHeadings() {
  gsap.utils.toArray(
    "h2:not([id='hero-title']):not([id='automation-title']):not([id='how-it-works-title']):not([id='security-title']):not([id='features-overview-title']):not([id='workflow-title'])"
  ).forEach((el) => {
    if (el._gsapDone) return;
    el._gsapDone = true;
    gsap.fromTo(
      el,
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 0.45, ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top bottom" },
      }
    );
  });

  batchReveal(
    "[class*='badge']:not([class*='badgeHex']):not([class*='heroBadge'])",
    { scale: 0.85, y: 12 },
    { duration: 0.35, ease: "back.out(1.5)", stagger: 0.05 }
  );
}

/* ─────────────────────────────────────────────────────────────
   MAIN
───────────────────────────────────────────────────────────── */
export default function PageAnimations() {
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    // Skip all GSAP on mobile — scroll listeners and infinite tweens
    // are the #1 cause of jank on low-powered touch devices.
    if (window.innerWidth <= 768) return;

    registerPlugins();

    // Delay ensures DOM is painted and Lenis is initialized before GSAP measures
    const timer = setTimeout(() => {
      animateHero();
      animateHowItWorks();
      animateFeaturesAutomation();
      animateFeaturesOverview();
      animateSecurityWorkflow();
      animateTestimonials();
      animateOtherSections();
      animateGlobalHeadings();

      ScrollTrigger.refresh();
    }, 150);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach((t) => t.kill());
      gsap.killTweensOf("*");
    };
  }, []);

  return null;
}
