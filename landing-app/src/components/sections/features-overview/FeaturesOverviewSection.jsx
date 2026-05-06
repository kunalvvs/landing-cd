import Image from "next/image";
import styles from "./FeaturesOverviewSection.module.css";

const FEATURE_CARDS = [
  {
    id: "comment-to-dm",
    title: "Comment-to-DM Automation",
    description:
      "Trigger automatic DM replies when someone comments specific keywords on your posts, reels, or campaigns.",
    image: "/images/features card/feature-card1.png",
    imageAlt: "Task progress automation preview",
  },
  {
    id: "smart-workflows",
    title: "Smart Automation Workflows",
    description:
      "Set up simple automation rules for comments, DMs, lead capture, product links, and follow-up messages.",
    image: "/images/features card/feature-card2.png",
    imageAlt: "Assignments workflow preview",
  },
  {
    id: "audience-management",
    title: `Audience & Conversation Management`,
    description:
      "Track conversations, replies, interested users, and leads so you never miss an opportunity to convert.",
    image: "/images/features card/Background.png",
    imageAlt: "Audience conversation inbox preview",
    tall: true,
  },
];

export default function FeaturesOverviewSection() {
  return (
    <section className={styles.section} aria-labelledby="features-overview-title">
      <div className={styles.inner}>
        <div className={styles.badge} > <img src="/images/Hero section/metaicon.png" alt="" className={styles.metaIcon} /> How it works</div>

        <h2 id="features-overview-title" className={styles.title}>
          Features that makes your creator <br /> journey powerful
        </h2>

        <p className={styles.subtitle}>
          Connect your Instagram, pick a keyword, write one message. That&apos;s it.
        </p>

        <div className={styles.grid}>
          {FEATURE_CARDS.map((card) => (
            <article
              key={card.id}
              className={card.tall ? styles.cardTall : styles.card}
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

          <article className={styles.wideCard}>
            <div className={styles.wideText}>
              <h3>Real-Time Growth Tracking</h3>
              <p>
                Monitor leads captured, automated replies, campaign performance,
                and audience engagement in real time.
              </p>
            </div>

            <div className={styles.wideMedia}>
              <div className={styles.projectCard}>
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
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
