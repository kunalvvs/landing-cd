"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import styles from "./TestimonialsSection.module.css";

const TESTIMONIALS = [
  {
    id: "john-david",
    name: "John David",
    avatar: "/images/Hero section/avatar1.png",
    date: "August 29, 2024",
    quote:
      "As an active investor, I've struggled to keep track of my diverse portfolio. This platform changed everything. The investment tracking and performance analytics are incredibly detailed, giving me the insights I need to make smarter decisions. I've seen real growth since using this tool.",
    highlight: true,
  },
  {
    id: "john-clayton",
    name: "John Clayton",
    avatar: "/images/Hero section/avatar3.png",
    date: "",
    quote:
      "Before using [Product Name], managing our financial processes was a constant headache. We struggled with manual data entry, scattered reports, and a lack of real-time visibility into our financial health.",
     highlight:true,
    },
    {
    id: "john-david",
    name: "John David",
    avatar: "/images/Hero section/avatar1.png",
    date: "August 29, 2024",
    quote:
      "As an active investor, I've struggled to keep track of my diverse portfolio. This platform changed everything. The investment tracking and performance analytics are incredibly detailed, giving me the insights I need to make smarter decisions. I've seen real growth since using this tool.",
    highlight: true,
  },

];

export default function TestimonialsSection() {
  const wrapperRef = useRef(null);
  const trackRef = useRef(null);
  const tweenRef = useRef(null);

  const loopedTestimonials = useMemo(
    () => [...TESTIMONIALS, ...TESTIMONIALS],
    []
  );

  useEffect(() => {
    if (!wrapperRef.current || !trackRef.current) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const track = trackRef.current;
    const wrapper = wrapperRef.current;
    const loopDistance = track.scrollHeight / 2;
    if (!loopDistance) return;

    tweenRef.current = gsap.to(track, {
      y: -loopDistance,
      duration: 16,
      ease: "linear",
      repeat: -1,
    });

    const handleEnter = () => tweenRef.current?.pause();
    const handleLeave = () => tweenRef.current?.resume();

    wrapper.addEventListener("mouseenter", handleEnter);
    wrapper.addEventListener("mouseleave", handleLeave);

    return () => {
      wrapper.removeEventListener("mouseenter", handleEnter);
      wrapper.removeEventListener("mouseleave", handleLeave);
      tweenRef.current?.kill();
    };
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

        <div className={styles.rightColumn} ref={wrapperRef}>
          <div className={styles.cardsTrack} ref={trackRef}>
            {loopedTestimonials.map((item, index) => (
              <article
                key={`${item.id}-${index}`}
                className={item.highlight ? styles.card : styles.cardMuted}
                aria-hidden={index >= TESTIMONIALS.length}
              >
                <div className={styles.cardHeader}>
                  <div className={styles.avatar} aria-hidden="true">
                    <Image
                      src={item.avatar}
                      alt=""
                      width={46}
                      height={46}
                      className={styles.avatarImage}
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <p className={styles.name}>{item.name}</p>
                    <div className={styles.stars} aria-hidden="true">
                      {Array.from({ length: 5 }).map((_, starIndex) => (
                        <span key={`${item.id}-star-${index}-${starIndex}`} />
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
      </div>
    </section>
  );
}
