import Image from "next/image";
import styles from "./HeroSection.module.css";

const NAV_ITEMS = [
  "Products",
  "Industries",
  "Newsroom",
  "Resources",
  "Documentation",
];

export default function HeroSection() {
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
        <header className={styles.navShell}>
          <div className={styles.brand}>
            <Image
              src="/images/icons/logo.png"
              alt="Creatordesks logo"
              width={45}
              height={45}
              priority
            />
            <span className={styles.logoText}>Creatordesks</span>
          </div>

          <nav aria-label="Primary navigation">
            <ul className={styles.navList}>
              {NAV_ITEMS.map((item) => (
                <li key={item}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </nav>

          <a href="#" className={styles.signupButton}>
            SIGN UP NOW
          </a>
        </header>

        <div className={styles.heroBadge}>
          <span className={styles.metaBadge}>Meta Tech Provider</span>
          <span className={styles.avatarStack} aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span>Trusted by 10,000+ creators &amp; brands</span>
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

        <Image
          src="/images/Hero section/Container.png"
          alt="Brands that trust Creatordesks"
          width={1440}
          height={32}
          className={styles.brandStrip}
          priority
        />

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
