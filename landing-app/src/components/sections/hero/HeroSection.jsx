"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Navbar from "@/components/ui/Navbar";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  const previewRef = useRef(null);

  useEffect(() => {
    const el = previewRef.current;
    if (!el) return;

    let observer;

    import("gsap").then(({ default: gsap }) => {
      gsap.set(el, {
        opacity: 0,
        rotateX: -72,
        y: 80,
        scale: 0.92,
        transformPerspective: 1400,
        transformOrigin: "center bottom",
      });

      observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              gsap.to(el, {
                opacity: 1,
                rotateX: 0,
                y: 0,
                scale: 1,
                duration: 1.4,
                ease: "power3.out",
              });
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15 }
      );

      observer.observe(el);
    });

    return () => observer?.disconnect();
  }, []);

  return (
    <section className={styles.heroSection} aria-labelledby="hero-title">
      <div className={styles.contentWrap}>
        <Navbar />

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

        <a href="#" className={styles.ctaButton}>
          <Image src="/images/Hero section/stars.png" className={styles.starIcon} width={25} height={25} alt="" />
          TRY FOR FREE
        </a>
      </div>

      {/* Dashboard preview — outside contentWrap so it overflows below hero bg */}
      <div ref={previewRef} className={styles.heroPreview}>
        <Image
          src="/images/Hero section/dash.webp"
          alt="Creatordesks dashboard preview"
          width={1087}
          height={765}
          className={styles.previewImage}
          priority
        />
      </div>

      {/* Brand trust strip */}
      <div className={styles.heroStrip}>
        <Image
          src="/images/Hero section/strip.png"
          alt="Trusted by Trustpilot, Meta, G2, Product Hunt and DPIIT"
          width={1440}
          height={100}
          className={styles.stripImage}
          priority
        />
      </div>
    </section>
  );
}
