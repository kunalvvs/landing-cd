import Image from "next/image";
import styles from "./FeaturesOverviewSection.module.css";

const FEATURE_CARDS = [
  {
    id: "comment-to-dm",
    title: "Comment-to-DM Automation",
    description:
      "Send automatic DMs when people comment keywords on your reels, posts, or campaigns.",
    image: "/images/features card/featurecard1.png",
    imageAlt: "Task progress automation preview",
  },
  {
    id: "smart-workflows",
    title: "Smart Automation Workflows",
    description:
      "Create rules for keywords, instant replies, links, freebies, and lead capture.",
    image: "/images/features card/featurecard2.png",
    imageAlt: "Assignments workflow preview",
  },
  {
    id: "audience-management",
    title: `Real-Time Growth Tracking`,
    description:
      "Monitor DMs sent, link clicks, followers gained, and automation performance in real time.",
    image: "/images/features card/Background.png",
    imageAlt: "Audience conversation inbox preview",
    tall: true,
  },
];

const DEFAULT_BADGE_ICON = (
  <img src="/images/Hero section/metaicon.png" alt="" style={{width:18,height:14,flexShrink:0}} />
);

export default function FeaturesOverviewSection({
  badgeIcon = DEFAULT_BADGE_ICON,
  badgeLabel = "How it works",
  title = <>Features that makes your creator <br /> journey powerful</>,
  subtitle = <>Connect your Instagram, pick a keyword, write one message. That&apos;s it.</>,
}) {
  return (
    <section className={styles.section} aria-labelledby="features-overview-title" data-gsap-section="features-overview">
      <div className={styles.inner}>
        {/* <div className={styles.badge}>
          {badgeIcon}
          {badgeLabel}
        </div> */}

        <h2 id="features-overview-title" className={styles.title}>
          {title}
        </h2>

        <p className={styles.subtitle}>
          {subtitle}
        </p>

        <div className={styles.grid}>
          {FEATURE_CARDS.map((card) => (
            <article
              key={card.id}
              className={card.tall ? styles.cardTall : styles.card}
              data-gsap="fo-card"
            >
              <div className={styles.cardContent}>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
              <div className={styles.cardMedia}>
                <Image
                  src={card.image}
                  alt={card.imageAlt}
                  width={720}
                  height={560}
                  className={styles.cardImage}
                />
              </div>
            </article>
          ))}

          <article className={styles.wideCard} data-gsap="fo-card">
            <div className={styles.wideText}>
              <h3>Lead Capture</h3>
              <p>
                Add buttons to your DMs, collect user details automatically, and turn every interested comment into a lead-ready conversation.
              </p>
            </div>

            <div className={styles.wideMedia}>
              <img className={styles.projectCard} src='/images/features card/featurecard3.png' />
              {/* <div className={styles.projectCard}>
                <div className={styles.projectHeader}>
                  <h4>Project Overview</h4>
                </div>
                <div className={styles.projectTable}>
                  <div className={styles.projectRow}>
                    <span>Project Name</span>
                    <span>Team</span>
                  </div>
                  <div className={styles.projectRow}>
                    <span>Support</span>
                    <span className={styles.avatarGroup}>
                      <span className={styles.avatar} ><img className={styles.avatar} src="/images/features card/Vector.png" alt="" /></span>
                      <span className={styles.avatar} aria-hidden="true">
                        P
                      </span>
                      <span className={styles.avatar} aria-hidden="true">
                        <img className={styles.avatar} src="/images/features card/Vector (1).png" alt="" />
                      </span>
                      <span className={styles.avatar} aria-hidden="true">
                        <img className={styles.avatar} src="/images/features card/Vector (2).png" alt="" />
                      </span>
                    </span>
                  </div>
                  <div className={styles.projectRow}>
                    <span>Marketing project</span>
                    <span className={styles.avatarGroup}>
                      <span className={styles.avatar} aria-hidden="true">
                        Z
                      </span>
                      <span className={styles.avatar} aria-hidden="true">
                       <img className={styles.avatar} src="/images/features card/Vector.png" alt="" />
                      </span>
                      <span className={styles.avatar} aria-hidden="true">
                        <img className={styles.avatar} src="/images/features card/Vector (3).png" alt="" />
                      </span>
                      <span className={styles.avatar} aria-hidden="true">
                        H
                      </span>
                    </span>
                  </div>
                  <div className={styles.projectRow}>
                    <span>Corlax iOS app development</span>
                    <span className={styles.avatarGroup}>
                       <span className={styles.avatar} aria-hidden="true">
                       <img className={styles.avatar} src="/images/features card/Vector (1).png" alt="" />
                      </span>
                      <span className={styles.avatar} aria-hidden="true">
                        B
                      </span>
                      <span className={styles.avatar} aria-hidden="true">
                        M
                      </span>
                       <span className={styles.avatar} aria-hidden="true">
                       <img className={styles.avatar} src="/images/features card/Vector (4).png" alt="" />
                      </span>
                    </span>
                  </div>
                </div>
              </div> */}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
