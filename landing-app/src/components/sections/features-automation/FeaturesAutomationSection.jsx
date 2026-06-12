import Image from "next/image";
import styles from "./FeaturesAutomationSection.module.css";

const TOP_FEATURES = [
  {
    id: "creator-agent",
    label: "CREATOR STUDIO+",
    title: "Studio+ for Creators to Create the Tomorrow",
    image: "https://ik.imagekit.io/Creatordesks/CD%20Landing%20Page/images/features%20automation%20section%20img/auto-img.png?updatedAt=1781235152138",
    imageAlt: "Creator agent chat preview",
    comingSoon: true,
  },
  {
    id: "audience-engagement",
    label: "AUDIENCE ENGAGEMENT",
    title: "Never miss a Potential Customer",
    image: "https://ik.imagekit.io/Creatordesks/CD%20Landing%20Page/images/features%20automation%20section%20img/auto-img2.png?updatedAt=1781235138542",
    imageAlt: "Audience engagement conversation preview",
  },
  {
    id: "comment-to-dm",
    label: "COMMENT TO DM",
    title: "Turn comment into conversations",
    image: "https://ik.imagekit.io/Creatordesks/CD%20Landing%20Page/images/features%20automation%20section%20img/auto-img3.png?updatedAt=1781235138377",
    imageAlt: "Comment to DM automation preview",
  },
];

const BOTTOM_FEATURES = [
  {
    id: "audience",
    image: "https://ik.imagekit.io/Creatordesks/CD%20Landing%20Page/images/features%20automation%20section%20img/search%20mask.png?updatedAt=1781235140509",
    imageAlt: "Understands your audience",
    title: "Creator-Focused AI",
    description:
      "Built to understand your audience, your content style, and your creator business.",
  },
  {
    id: "connected",
    image: "https://ik.imagekit.io/Creatordesks/CD%20Landing%20Page/images/features%20automation%20section%20img/social%20icons%20mask.png?updatedAt=1781235144422",
    imageAlt: "Connected social icons",
    title: "Connected to Instagram",
    description:
      "Automate comments, DMs, lead capture, and audience engagement from one dashboard.",
  },
  {
    id: "powered",
    image: "https://ik.imagekit.io/Creatordesks/CD%20Landing%20Page/images/features%20automation%20section%20img/othermask.png?updatedAt=1781235150572",
    imageAlt: "Powered by Engage AI",
    title: "Powered by Studio+",
    description:
      "Create scroll-stopping thumbnails, scripts, captions, hooks, and content ideas in one intelligent workspace built for creators.",
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
                    width={317}
                    height={238}
                    className={styles.cardImage}
                  />
                </div>
              </article>
            ))}
          </div>

          

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
          
          <span className={styles.effects2} ><img className={styles.effect3} src="https://ik.imagekit.io/Creatordesks/CD%20Landing%20Page/images/features%20automation%20section%20img/effect3.png?updatedAt=1781235148962" alt="effects" /></span>

            <span className={styles.effects} ><img className={styles.effect1} src="https://ik.imagekit.io/Creatordesks/CD%20Landing%20Page/images/features%20automation%20section%20img/effect1.png?updatedAt=1781235149587" alt="effects" /></span>

      </div>
    </section>
  );
}
