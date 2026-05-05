"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

/* ─────────────────────────────────────────────────────────────
   GSAP Landing Page Animation Engine
   Covers: Hero, HowItWorks, FeaturesAutomation, FeaturesOverview,
           SecurityWorkflow, Testimonials, Blog, FAQ, Footer
───────────────────────────────────────────────────────────── */

function registerPlugins() {
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
}

/* ── Utility: observe elements into view then animate ── */
function scrollReveal(selector, vars = {}, triggerVars = {}) {
  const els = gsap.utils.toArray(selector);
  if (!els.length) return [];
  return els.map((el, i) =>
    gsap.fromTo(
      el,
      { opacity: 0, y: vars.y ?? 48, scale: vars.scale ?? 1, ...vars.from },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: vars.duration ?? 0.75,
        ease: vars.ease ?? "power3.out",
        delay: (vars.stagger ?? 0.1) * i + (vars.delay ?? 0),
        scrollTrigger: {
          trigger: el,
          start: triggerVars.start ?? "top 88%",
          toggleActions: "play none none none",
          ...triggerVars,
        },
      }
    )
  );
}

/* ─────────────────────────────────────────────────────────────
   1. HERO — continuous floating dashboard + entrance animation
───────────────────────────────────────────────────────────── */
function animateHero() {
  // Entrance: announcement bar slides down
  gsap.fromTo(
    "[class*='announcementBar']",
    { y: -40, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
  );

  // Nav shell fades in
  gsap.fromTo(
    "[class*='navShell']",
    { y: -30, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.7, delay: 0.15, ease: "power2.out" }
  );

  // Badge pops in
  gsap.fromTo(
    "[class*='heroBadge']",
    { scale: 0.7, opacity: 0 },
    { scale: 1, opacity: 1, duration: 0.65, delay: 0.3, ease: "back.out(1.7)" }
  );

  // Hero title — words stagger up
  gsap.fromTo(
    "[id='hero-title']",
    { opacity: 0, y: 60 },
    { opacity: 1, y: 0, duration: 0.8, delay: 0.45, ease: "power3.out" }
  );

  // Subtitle
  gsap.fromTo(
    "[class*='subtitle']:not([class*='how-it'])",
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.7, delay: 0.6, ease: "power2.out" }
  );

  // CTA button pops
  gsap.fromTo(
    "[class*='ctaButton']",
    { scale: 0.8, opacity: 0 },
    { scale: 1, opacity: 1, duration: 0.6, delay: 0.75, ease: "back.out(1.5)" }
  );

  // Brand strip fades
  gsap.fromTo(
    "[class*='brandStrip']",
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.7, delay: 0.9, ease: "power2.out" }
  );

  // Hero dashboard preview — slide up + continuous infinite float
  const preview = document.querySelector("[class*='heroPreview']");
  if (preview) {
    gsap.fromTo(
      preview,
      { opacity: 0, y: 100, scale: 0.92 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.1,
        delay: 0.8,
        ease: "power3.out",
        onComplete() {
          // Continuous floating animation after entrance
          gsap.to(preview, {
            y: -18,
            duration: 3.2,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
          });
        },
      }
    );
  }

  // Parallax on hero section bg on scroll
  ScrollTrigger.create({
    trigger: "[class*='heroSection']",
    start: "top top",
    end: "bottom top",
    scrub: 1.5,
    onUpdate(self) {
      const heroContent = document.querySelector("[class*='contentWrap']");
      if (heroContent) {
        gsap.set(heroContent, { y: self.progress * 60 });
      }
    },
  });
}

/* ─────────────────────────────────────────────────────────────
   2. HOW IT WORKS
───────────────────────────────────────────────────────────── */
function animateHowItWorks() {
  // Badge
  scrollReveal("[class*='how-it-works'] [class*='badge']", {
    scale: 0.8,
    y: 20,
    duration: 0.6,
  });

  // Section title
  scrollReveal("[id='how-it-works-title']", { y: 60, duration: 0.8 });

  // Preview frame slides in from left
  gsap.utils.toArray("[class*='previewFrame']").forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, x: -80, scale: 0.95 },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 85%" },
      }
    );
    // Continuous slow float
    gsap.to(el, {
      y: -10,
      duration: 4,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
      delay: 1,
    });
  });

  // Steps stagger from right
  gsap.utils.toArray("[class*='step'], [class*='stepHighlight']").forEach((el, i) => {
    gsap.fromTo(
      el,
      { opacity: 0, x: 60 },
      {
        opacity: 1,
        x: 0,
        duration: 0.7,
        delay: i * 0.15,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 88%" },
      }
    );
  });
}

/* ─────────────────────────────────────────────────────────────
   3. FEATURES AUTOMATION
───────────────────────────────────────────────────────────── */
function animateFeaturesAutomation() {
  // Panel entrance
  scrollReveal("[data-gsap-section='features'] [class*='brandRow']", {
    y: 40,
    scale: 0.9,
    duration: 0.7,
  });

  scrollReveal("[id='automation-title']", { y: 50, duration: 0.8 });

  // Top 3 cards stagger with scale
  gsap.utils.toArray("[data-gsap-section='features'] [class*='card']").forEach((el, i) => {
    gsap.fromTo(
      el,
      { opacity: 0, y: 70, scale: 0.93 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.75,
        delay: i * 0.13,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 90%" },
      }
    );

    // Hover tilt
    el.addEventListener("mouseenter", () => {
      gsap.to(el, { y: -6, scale: 1.02, duration: 0.3, ease: "power2.out" });
    });
    el.addEventListener("mouseleave", () => {
      gsap.to(el, { y: 0, scale: 1, duration: 0.4, ease: "power2.inOut" });
    });
  });

  // Big card
  scrollReveal("[class*='bigCard']", {
    y: 60,
    scale: 0.96,
    duration: 0.9,
    delay: 0.1,
  });

  // Big image subtle float
  gsap.utils.toArray("[class*='bigImage']").forEach((el) => {
    gsap.to(el, {
      y: -12,
      duration: 3.8,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });
  });

  // Bottom feature cards
  gsap.utils.toArray("[class*='bottomCard']").forEach((el, i) => {
    gsap.fromTo(
      el,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.65,
        delay: i * 0.12,
        ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 90%" },
      }
    );
  });
}

/* ─────────────────────────────────────────────────────────────
   4. FEATURES OVERVIEW
───────────────────────────────────────────────────────────── */
function animateFeaturesOverview() {
  scrollReveal("[id='features-overview-title']", { y: 50 });

  gsap.utils.toArray("[class*='card'], [class*='cardTall'], [class*='wideCard']").forEach((el, i) => {
    gsap.fromTo(
      el,
      { opacity: 0, y: 60, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        delay: i * 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 88%" },
      }
    );
    el.addEventListener("mouseenter", () => {
      gsap.to(el, { y: -5, duration: 0.3, ease: "power2.out" });
    });
    el.addEventListener("mouseleave", () => {
      gsap.to(el, { y: 0, duration: 0.4, ease: "power2.inOut" });
    });
  });
}

/* ─────────────────────────────────────────────────────────────
   5. SECURITY / WORKFLOW
───────────────────────────────────────────────────────────── */
function animateSecurityWorkflow() {
  // Security section heading
  scrollReveal("[id='security-title']", { y: 50 });

  // Badge hexes pop in
  gsap.utils.toArray("[class*='badgeHex']").forEach((el, i) => {
    gsap.fromTo(
      el,
      { opacity: 0, scale: 0.5, rotation: -20 },
      {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 0.6,
        delay: i * 0.12,
        ease: "back.out(2)",
        scrollTrigger: { trigger: el, start: "top 88%" },
      }
    );
  });

  // Stat cards
  gsap.utils.toArray("[class*='statCard']").forEach((el, i) => {
    gsap.fromTo(
      el,
      { opacity: 0, y: 40, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.7,
        delay: i * 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 90%" },
      }
    );
  });

  // Orbit center box — spin + scale in
  gsap.utils.toArray("[class*='centerBox']").forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, scale: 0.3, rotation: -90 },
      {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 1.1,
        ease: "back.out(1.6)",
        scrollTrigger: { trigger: el, start: "top 85%" },
      }
    );
  });

  // Orbit nodes stagger pop
  gsap.utils.toArray("[class*='orbitNode']").forEach((el, i) => {
    gsap.fromTo(
      el,
      { opacity: 0, scale: 0 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        delay: 0.3 + i * 0.15,
        ease: "back.out(2.5)",
        scrollTrigger: { trigger: el, start: "top 88%" },
      }
    );
  });

  // Workflow heading
  scrollReveal("[id='workflow-title']", { y: 50 });
}

/* ─────────────────────────────────────────────────────────────
   6. TESTIMONIALS
───────────────────────────────────────────────────────────── */
function animateTestimonials() {
  scrollReveal("[class*='testimonials'] h2, [class*='testimonials'] [class*='title']", {
    y: 50,
  });

  gsap.utils.toArray("[class*='testimonial'], [class*='TestiCard'], [class*='quote']").forEach((el, i) => {
    gsap.fromTo(
      el,
      { opacity: 0, y: 50, scale: 0.96 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.7,
        delay: i * 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 88%" },
      }
    );
  });
}

/* ─────────────────────────────────────────────────────────────
   7. BLOG / FAQ / FOOTER
───────────────────────────────────────────────────────────── */
function animateOtherSections() {
  // Blog cards
  gsap.utils.toArray("[class*='blogCard'], [class*='BlogCard'], [class*='post']").forEach((el, i) => {
    gsap.fromTo(
      el,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.65,
        delay: i * 0.09,
        ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 90%" },
      }
    );
  });

  // FAQ items
  gsap.utils.toArray("[class*='faqItem'], [class*='FaqItem'], [class*='accordion']").forEach((el, i) => {
    gsap.fromTo(
      el,
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.55,
        delay: i * 0.07,
        ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 90%" },
      }
    );
  });

  // Footer
  gsap.fromTo(
    "[class*='footer'], footer",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: { trigger: "footer", start: "top 95%" },
    }
  );
}

/* ─────────────────────────────────────────────────────────────
   8. GLOBAL — section headings reveal
───────────────────────────────────────────────────────────── */
function animateGlobalHeadings() {
  // All h2 that don't have a specific handler
  gsap.utils.toArray("h2:not([id='hero-title']):not([id='automation-title'])").forEach((el) => {
    if (el._gsapAnimated) return;
    el._gsapAnimated = true;
    gsap.fromTo(
      el,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 88%" },
      }
    );
  });

  // General badges / pills
  gsap.utils.toArray("[class*='badge']:not([class*='badgeHex']), [class*='pill']").forEach((el, i) => {
    gsap.fromTo(
      el,
      { opacity: 0, scale: 0.85, y: 15 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.55,
        delay: 0.1,
        ease: "back.out(1.5)",
        scrollTrigger: { trigger: el, start: "top 90%" },
      }
    );
  });
}

/* ─────────────────────────────────────────────────────────────
   MAIN
───────────────────────────────────────────────────────────── */
export default function PageAnimations() {
  useEffect(() => {
    // Respect user's motion preferences
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    registerPlugins();

    // Run all animation groups
    animateHero();
    animateHowItWorks();
    animateFeaturesAutomation();
    animateFeaturesOverview();
    animateSecurityWorkflow();
    animateTestimonials();
    animateOtherSections();
    animateGlobalHeadings();

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      gsap.killTweensOf("*");
    };
  }, []);

  return null;
}
