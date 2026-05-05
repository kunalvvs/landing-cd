"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./TestimonialsSection.module.css";

const TESTIMONIALS = [
  {
    id: "john-david",
    name: "John David",
    date: "August 29, 2024",
    quote:
      "As an active investor, I've struggled to keep track of my diverse portfolio. This platform changed everything. The investment tracking and performance analytics are incredibly detailed, giving me the insights I need to make smarter decisions. I've seen real growth since using this tool.",
    highlight: true,
  },
  {
    id: "john-clayton",
    name: "John Clayton",
    date: "",
    quote:
      "Before using [Product Name], managing our financial processes was a constant headache. We struggled with manual data entry, scattered reports, and a lack of real-time visibility into our financial health.",
  },
];

export default function TestimonialsSection() {
  const cardsRef = useRef(null);

  useEffect(() => {
    if (!cardsRef.current) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.to(cardsRef.current, {
        y: 22,
        opacity: 0.92,
        filter: "drop-shadow(0 24px 40px rgba(125, 120, 255, 0.25))",
        duration: 3.2,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.section} aria-labelledby="testimonials-title">
      <div className={styles.inner}>
        <div className={styles.leftColumn}>
          <span className={styles.badge}>Testimonials</span>
          <h2 id="testimonials-title" className={styles.title}>
            What our clients are <span>saying</span>
          </h2>
          <p className={styles.subtitle}>
            Our financial management platform is transforming the way people
            manage their money. Here&apos;s what some of our users have to say
            about their experience
          </p>
          <div className={styles.trusted}>
            <strong>2k+</strong>
            <span>Trusted by users</span>
          </div>
        </div>

        <div className={styles.rightColumn} ref={cardsRef}>
          {TESTIMONIALS.map((item) => (
            <article
              key={item.id}
              className={item.highlight ? styles.card : styles.cardMuted}
            >
              <div className={styles.cardHeader}>
                <div className={styles.avatar} aria-hidden="true" />
                <div>
                  <p className={styles.name}>{item.name}</p>
                  <div className={styles.stars} aria-hidden="true">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <span key={`${item.id}-star-${index}`} />
                    ))}
                  </div>
                </div>
              </div>
              <p className={styles.quote}>{item.quote}</p>
              {item.date ? (
                <p className={styles.date}>{item.date}</p>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
