"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Navbar from "@/components/ui/Navbar";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  const marqueeRef = useRef(null);

  useEffect(() => {
    if (!marqueeRef.current) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const tween = gsap.to(marqueeRef.current, {
      xPercent: -50,
      duration: 60,
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
        <Navbar />

        {/* Hero content */}
        <div className={styles.heroBadge}>
          <span className={styles.metaBadge}>
            <Image
              className={styles.metaIcon}
              src="/images/Hero section/metaicon.png"
              alt=""
              width={16}
              height={16}
              aria-hidden="true"
            />
            Meta Tech Provider
          </span>
          <span className={styles.avatarStack} aria-hidden="true">
            <span>
              <Image
                className={styles.avatarImg}
                src="/images/Hero section/avatar1.png"
                alt=""
                width={20}
                height={20}
                aria-hidden="true"
              />
            </span>
            <span>
              <Image
                className={styles.avatarImg}
                src="/images/Hero section/avatar3.png"
                alt=""
                width={20}
                height={20}
                aria-hidden="true"
              />
            </span>
            <span>
              <Image
                className={styles.avatarImg}
                src="/images/Hero section/avatar2.png"
                alt=""
                width={20}
                height={20}
                aria-hidden="true"
              />
            </span>
          </span>
          <span>
            Trusted by <strong className={styles.metaText}>10,000+ creators &amp; brands</strong>
          </span>
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
