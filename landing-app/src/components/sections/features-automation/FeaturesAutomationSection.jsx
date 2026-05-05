import Image from "next/image";
import styles from "./FeaturesAutomationSection.module.css";

const TOP_FEATURES = [
  {
    id: "creator-agent",
    label: "CREATOR AGENT",
    title: "Use our 24/7 intelligent Instagram AI assistant.",
    image: "/images/features automation section img/auto-img1.png",
    imageAlt: "Creator agent chat preview",
    comingSoon: true,
  },
  {
    id: "audience-engagement",
    label: "AUDIENCE ENGAGEMENT",
    title: "Never miss a Potential Customer",
    image: "/images/features automation section img/auto-img2.png",
    imageAlt: "Audience engagement conversation preview",
  },
  {
    id: "comment-to-dm",
    label: "COMMENT TO DM",
    title: "Turn comment into conversations",
    image: "/images/features automation section img/auto-img3.png",
    imageAlt: "Comment to DM automation preview",
  },
];

const BOTTOM_FEATURES = [
  {
    id: "audience",
    image: "/images/features automation section img/search mask.png",
    imageAlt: "Understands your audience",
    title: "Creator-Focused AI",
    description:
      "Built to understand your audience, your content style, and your creator business.",
  },
  {
    id: "connected",
    image: "/images/features automation section img/social icons mask.png",
    imageAlt: "Connected social icons",
    title: "Connected to Instagram",
    description:
      "Automate comments, DMs, lead capture, and audience engagement from one dashboard.",
  },
  {
    id: "powered",
    image: "/images/features automation section img/other mask.png",
    imageAlt: "Powered by Engage AI",
    title: "Powered by Engage AI",
    description:
      "Our upcoming AI model designed to create smarter replies, detect intent, and personalize conversations.",
  },
];

export default function FeaturesAutomationSection() {
  return (
    <section
      className={styles.section}
      aria-labelledby="automation-title"
      data-gsap-section="features"
    >
      <div className={styles.panel}>
        <div className={styles.bgWords} aria-hidden="true">
          <span className={styles.wordA}>CREATE EVENT</span>
          <span className={styles.wordB}>UPDATE TASK</span>
          <span className={styles.wordC}>SEND EMAIL</span>
          <span className={styles.wordD}>COMPLETE TASK</span>
        </div>

        <div className={styles.inner}>
          {/* Brand row */}
          <div className={styles.brandRow} data-gsap="fade-up">
            <Image
              src="/images/features automation section img/ClickUp Brain icon.png"
              alt="Creatordesks AI"
              width={64}
              height={64}
              className={styles.brandIcon}
              priority
            />
            <p className={styles.brandText}>Creatordesks AI</p>
          </div>

          <h2
            id="automation-title"
            className={styles.title}
            data-gsap="fade-up"
          >
            <span className={styles.titleStrong}>The Smartest AI Social</span>
            <span className={styles.titleMuted}>Media Automation</span>
          </h2>

          {/* Top 3 feature cards */}
          <div className={styles.topCards}>
            {TOP_FEATURES.map((feature, i) => (
              <article
                key={feature.id}
                className={styles.card}
                data-gsap="card"
                data-gsap-delay={i * 0.12}
              >
                <div className={styles.cardTop}>
                  <span className={styles.cardLabel}>{feature.label}</span>
                  {feature.comingSoon ? (
                    <span className={styles.comingSoon}>Coming Soon</span>
                  ) : null}
                </div>

                <h3 className={styles.cardTitle}>{feature.title}</h3>

                <div className={styles.cardMedia}>
                  <Image
                    src={feature.image}
                    alt={feature.imageAlt}
                    width={680}
                    height={520}
                    className={styles.cardImage}
                  />
                </div>
              </article>
            ))}
          </div>

          {/* Big card — Engage AI */}
          <article
            className={styles.bigCard}
            aria-label="Engage AI overview"
            data-gsap="fade-up"
          >
            <div className={styles.bigLeft}>
              <div className={styles.engageRow}>
                <Image
                  src="/images/features automation section img/ClickUp Brain icon.png"
                  alt="Engage"
                  width={22}
                  height={22}
                  className={styles.engageIcon}
                />
                <span className={styles.engageName}>Engage</span>
              </div>

              <h3 className={styles.bigTitle}>
                Meet Engage AI : The Creator Focused AI Model Built to Understand
                Your Audience.
              </h3>

              <p className={styles.bigDescription}>
                Built to save hours, boost engagement, and help creators grow
                even while they sleep.
              </p>

              <p className={styles.bigMeta}>
                Coming Soon &nbsp;•&nbsp; Windows &nbsp;•&nbsp; Chrome and
                &nbsp;•&nbsp; Mac
              </p>

              <a href="#" className={styles.bigButton}>
                Sign Up for Early Access
              </a>
            </div>

            <div className={styles.bigRight}>
              <Image
                src="/images/features automation section img/Mask Group.png"
                alt="Engage AI intent and response map"
                width={938}
                height={596}
                className={styles.bigImage}
              />

              <div
                className={styles.productHuntPill}
                aria-label="Product Hunt badge"
              >
                <span className={styles.phIcon} aria-hidden="true">
                  P
                </span>
                <span className={styles.phText}>#1 Product of the Week</span>
              </div>
            </div>
          </article>

          {/* Bottom 3 feature items — FIXED structure for mobile */}
          <div className={styles.bottomGrid}>
            {BOTTOM_FEATURES.map((feature, i) => (
              <article
                key={feature.id}
                className={styles.bottomCard}
                data-gsap="card"
                data-gsap-delay={i * 0.1}
              >
                {/* Image + Title header row */}
                <div className={styles.bottomHeader}>
                  <div className={styles.bottomMedia}>
                    <Image
                      src={feature.image}
                      alt={feature.imageAlt}
                      width={760}
                      height={420}
                      className={styles.bottomImage}
                    />
                  </div>
                  <h3 className={styles.bottomTitle}>{feature.title}</h3>
                </div>
                {/* Description below — always full width */}
                <p className={styles.bottomDescription}>{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
