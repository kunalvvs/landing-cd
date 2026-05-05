"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import styles from "./HeroSection.module.css";

const NAV_ITEMS = [
  "Products",
  "Industries",
  "Newsroom",
  "Resources",
  "Documentation",
];

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);
  const marqueeRef = useRef(null);

  useEffect(() => {
    if (!marqueeRef.current) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const tween = gsap.to(marqueeRef.current, {
      xPercent: -50,
      duration: 18,
      ease: "linear",
      repeat: -1,
    });

    return () => tween.kill();
  }, []);

  return (
    <section className={styles.heroSection} aria-labelledby="hero-title">
      <p className={styles.announcementBar}>
        Creatordesks raised{" "}
        <a href="#" aria-label="Read funding announcement">
          $27M in seed funding
        </a>{" "}
        &bull;{" "}
        <a href="#" aria-label="Read Forbes mention">
          Featured on Forbes
        </a>
      </p>

      <div className={styles.contentWrap}>
        <header className={styles.navShell}>
          {/* Brand */}
          <div className={styles.brand}>
            <Image
              src="/images/icons/logo.png"
              alt="Creatordesks logo"
              width={45}
              height={45}
              priority
            />
            <span className={styles.logoText}>Creatordesks</span>
          </div>

          {/* Desktop nav */}
          <nav aria-label="Primary navigation" className={styles.desktopNav}>
            <ul className={styles.navList}>
              {NAV_ITEMS.map((item) => (
                <li key={item}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop CTA */}
          <a href="#" className={`${styles.signupButton} ${styles.desktopCta}`}>
            SIGN UP NOW
          </a>

          {/* Hamburger */}
          <button
            className={styles.hamburger}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className={`${styles.bar} ${menuOpen ? styles.barTop : ""}`} />
            <span className={`${styles.bar} ${menuOpen ? styles.barMid : ""}`} />
            <span className={`${styles.bar} ${menuOpen ? styles.barBot : ""}`} />
          </button>
        </header>

        {/* Mobile dropdown */}
        <div
          className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}
          aria-hidden={!menuOpen}
        >
          <nav aria-label="Mobile navigation">
            <ul className={styles.mobileNavList}>
              {NAV_ITEMS.map((item) => (
                <li key={item}>
                  <a href="#" onClick={() => setMenuOpen(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <a href="#" className={styles.mobileCtaButton}>
            SIGN UP NOW
          </a>
        </div>

        {/* Hero content */}
        <div className={styles.heroBadge}>
          <span className={styles.metaBadge}>Meta Tech Provider</span>
          <span className={styles.avatarStack} aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span>Trusted by 10,000+ creators &amp; brands</span>
        </div>

        <h1 id="hero-title" className={styles.title}>
          Automation That Actually Grows Your Audience &amp; Revenue.
        </h1>

        <p className={styles.subtitle}>
          Author in minutes. Execute on real devices. Ship with confidence.
        </p>

        <a href="#" className={styles.ctaButton}>
          TRY FOR FREE
        </a>

        <div className={styles.brandMarquee} aria-label="Brands that trust Creatordesks">
          <div className={styles.marqueeTrack} ref={marqueeRef}>
            <div className={styles.marqueeItem} aria-hidden="true">
              <Image
                src="/images/Hero section/Container.png"
                alt="Brands that trust Creatordesks"
                width={1440}
                height={32}
                className={styles.brandStrip}
                priority
              />
            </div>
            <div className={styles.marqueeItem} aria-hidden="true">
              <Image
                src="/images/Hero section/Container.png"
                alt=""
                width={1440}
                height={32}
                className={styles.brandStrip}
                priority
              />
            </div>
            <div className={styles.marqueeItem} aria-hidden="true">
              <Image
                src="/images/Hero section/Container.png"
                alt=""
                width={1440}
                height={32}
                className={styles.brandStrip}
                priority
              />
            </div>
            <div className={styles.marqueeItem} aria-hidden="true">
              <Image
                src="/images/Hero section/Container.png"
                alt=""
                width={1440}
                height={32}
                className={styles.brandStrip}
                priority
              />
            </div>
          </div>
        </div>

        <div className={styles.heroPreview}>
          <Image
            src="/images/Hero section/Hero-image.png"
            alt="Creatordesks dashboard preview"
            width={1087}
            height={765}
            className={styles.previewImage}
            priority
          />
        </div>
      </div>
    </section>
  );
}
