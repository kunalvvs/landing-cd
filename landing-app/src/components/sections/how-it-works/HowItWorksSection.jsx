"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./HowItWorksSection.module.css";

const STEPS = [
  {
    id: "01",
    title: "Connect Instagram",
    description:
      "One-click Meta login. No passwords, no browser extensions. Works with Business and Creator accounts.",
    image: "/images/dashboard preview/stepimg1.png",
    imageAlt: "Instagram login setup preview",
    imageWidth: 617,
    imageHeight: 193,
  },
  {
    id: "02",
    title: "Pick a Keyword & write a DM",
    description:
      'Choose a trigger word like "LINK." Write the message your followers get. Add your link, freebie, or discount code.',
    image: "/images/dashboard preview/stepimg2.png",
    imageAlt: "Keyword DM setup preview",
    imageWidth: 617,
    imageHeight: 193,
  },
  {
    id: "03",
    title: "Every comment becomes a conversation",
    description:
      "Someone comments your keyword? Creatordesks sends your DM in seconds. Works on Reels, Stories, and feed posts. Runs 24/7.",
    image: "/images/dashboard preview/stepimg3.png",
    imageAlt: "Comment to DM automation preview",
    imageWidth: 617,
    imageHeight: 193,
  },
];

export default function HowItWorksSection() {
  const [openStep, setOpenStep] = useState(STEPS[0].id);

  return (
    <section className={styles.section} aria-labelledby="how-it-works-title">
      <div className={styles.inner}>
        {/* Badge */}
        <span className={styles.badge}>
          <Image
            className={styles.metabadge}
            src="/images/Hero section/metaicon.png"
            alt=""
            width={15}
            height={11}
            aria-hidden="true"
          />
          How it works
        </span>

        {/* Heading */}
        <h2 id="how-it-works-title" className={styles.title}>
          Setup in under <span>2 Minutes</span>
        </h2>

        <p className={styles.subtitle}>
          Connect your Instagram, pick a keyword, write one message. That&apos;s
          it.
        </p>

        {/* 2-column grid: left dashboard preview | right accordion steps */}
        <div className={styles.contentGrid}>

          {/* LEFT — dashboard screenshot in purple bg card */}
          <figure className={styles.previewFrame}>
            <Image
              src="/images/Hero section/dash.webp"
              alt="Creatordesks dashboard preview"
              width={1087}
              height={765}
              className={styles.previewImage}
              priority
            />
          </figure>

          {/* RIGHT — accordion steps */}
          <ol className={styles.steps} aria-label="How it works steps">
            {STEPS.map((step) => {
              const isOpen = openStep === step.id;
              return (
                <li
                  key={step.id}
                  className={`${styles.stepItem} ${isOpen ? styles.stepItemOpen : ""}`}
                >
                  {/* Always-visible header: number bullet + title + description */}
                  <button
                    type="button"
                    className={styles.stepHeader}
                    onClick={() =>
                      setOpenStep((cur) => (cur === step.id ? "" : step.id))
                    }
                    aria-expanded={isOpen}
                  >
                    {/* Number bullet — outlined when closed, solid when open */}
                    <span
                      className={`${styles.stepNumber} ${isOpen ? styles.stepNumberActive : ""}`}
                    >
                      {step.id}
                    </span>

                    {/* Title + description — always visible */}
                    <div className={styles.stepText}>
                      <span className={styles.stepTitle}>{step.title}</span>
                      <span className={styles.stepDesc}>{step.description}</span>
                    </div>
                  </button>

                  {/* Expandable image panel with radial gradient */}
                  <div
                    className={`${styles.stepImagePanel} ${isOpen ? styles.stepImagePanelOpen : ""}`}
                    aria-hidden={!isOpen}
                  >
                    <div className={styles.stepImageWrap}>
                      <Image
                        src={step.image}
                        alt={step.imageAlt}
                        width={step.imageWidth}
                        height={step.imageHeight}
                        className={styles.stepImage}
                      />
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
