"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./TestimonialsSection.module.css";

const TESTIMONIALS = [
  {
    id: "t1",
    name: "Paritosh Anand",
    followers: "1.3M+",
    quote:
      "Before using creatordesks, managing our processes was a constant headache. We struggled with manual data entry and a lack of real-time visibility.",
  },
  {
    id: "t2",
    name: "Paritosh Anand",
    followers: "1.3M+",
    quote:
      "Creatordesks completely changed how I engage with my audience. The comment-to-DM automation alone saved me hours every single week.",
  },
  {
    id: "t3",
    name: "Paritosh Anand",
    followers: "1.3M+",
    quote:
      "I was skeptical at first, but after the first campaign I was blown away. My DM conversion rate jumped by 3x in just two weeks.",
  },
  {
    id: "t4",
    name: "Paritosh Anand",
    followers: "1.3M+",
    quote:
      "The keyword triggers are a game changer. My followers get instant replies and I get leads — all without me lifting a finger.",
  },
  {
    id: "t5",
    name: "Paritosh Anand",
    followers: "1.3M+",
    quote:
      "Setup took under 5 minutes. Within 24 hours I had over 200 automated DMs sent. The ROI is unbelievable for a free tool.",
  },
  {
    id: "t6",
    name: "Paritosh Anand",
    followers: "1.3M+",
    quote:
      "Every creator needs this. The follow gate feature helped me grow my Instagram by 4,000 followers in a single month of using it.",
  },
];

function TestimonialCard({ item }) {
  return (
    <article className={styles.card}>
      <div className={styles.cardHeader}>
        <div className={styles.avatarWrap}>
          <Image
            src="/images/testimonials/avatar.svg.png"
            alt={item.name}
            width={48}
            height={48}
            className={styles.avatar}
          />
        </div>
        <div className={styles.cardMeta}>
          <div className={styles.nameRow}>
            <span className={styles.name}>{item.name}</span>
            <Image
              src="/images/testimonials/tick.png"
              alt="Verified"
              width={16}
              height={16}
              className={styles.tick}
            />
          </div>
          <div className={styles.followRow}>
            <Image
              src="/images/testimonials/insta.png"
              alt="Instagram"
              width={14}
              height={14}
              className={styles.instaIcon}
            />
            <span className={styles.followers}>
              <strong>{item.followers}</strong> Followers
            </span>
          </div>
        </div>
      </div>
      <p className={styles.quote}>{item.quote}</p>
    </article>
  );
}

function MarqueeRow({ items, reverse = false }) {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const totalWidth = track.scrollWidth / 2;

    const tween = gsap.fromTo(
      track,
      { x: reverse ? -totalWidth : 0 },
      {
        x: reverse ? 0 : -totalWidth,
        duration: 28,
        ease: "linear",
        repeat: -1,
      }
    );

    const pause = () => tween.pause();
    const resume = () => tween.resume();
    track.addEventListener("mouseenter", pause);
    track.addEventListener("mouseleave", resume);

    return () => {
      tween.kill();
      track.removeEventListener("mouseenter", pause);
      track.removeEventListener("mouseleave", resume);
    };
  }, [reverse]);

  const doubled = [...items, ...items];

  return (
    <div className={styles.rowOuter}>
      <div className={styles.track} ref={trackRef}>
        {doubled.map((item, i) => (
          <TestimonialCard key={`${item.id}-${i}`} item={item} />
        ))}
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className={styles.section} aria-label="Testimonials">
      <div className={styles.sectionHead}>
        <h2 className={styles.sectionTitle}>
          Features that makes your creator<br />journey powerful
        </h2>
        <p className={styles.sectionSubtitle}>
          Connect your Instagram, pick a keyword, write one message. That&apos;s it.
        </p>
      </div>

      <div className={styles.rows}>
        <MarqueeRow items={TESTIMONIALS} reverse={false} />
        <MarqueeRow items={[...TESTIMONIALS].reverse()} reverse={true} />
      </div>
    </section>
  );
}
