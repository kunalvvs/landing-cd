import Image from "next/image";
import styles from "./HowItWorksSection.module.css";

const STEPS = [
  {
    id: "01",
    title: "Connect Instagram",
    description:
      "One-click Meta login. No passwords, no browser extensions. Works with Business and Creator accounts.",
    highlighted: true,
  },
  {
    id: "02",
    title: "Pick a Keyword & write a DM",
    description:
      'Choose a trigger word like "LINK." Write the message your followers get. Add your link, freebie, or discount code.',
  },
  {
    id: "03",
    title: "Every comment becomes a conversation",
    description:
      "Someone comments your keyword? Creatordesks sends your DM in seconds. Works on Reels, Stories, and feed posts. Runs 24/7.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className={styles.section} aria-labelledby="how-it-works-title">
      <div className={styles.inner}>
        <span className={styles.badge}>How it works</span>

        <h2 id="how-it-works-title" className={styles.title}>
          Setup in under <span>2 Minutes</span>
        </h2>

        <p className={styles.subtitle}>
          Connect your Instagram, pick a keyword, write one message. That&apos;s
          it.
        </p>

        <div className={styles.contentGrid}>
          <figure className={styles.previewFrame}>
            <Image
              src="/images/dashboard preview/section.webp.png"
              alt="Dashboard preview"
              width={553}
              height={522}
              className={styles.previewImage}
            />
          </figure>

          <ol className={styles.steps} aria-label="How it works steps">
            {STEPS.map((step) => (
              <li
                key={step.id}
                className={step.highlighted ? styles.stepHighlight : styles.step}
              >
                <span className={styles.stepNumber}>{step.id}</span>
                <div className={styles.stepContent}>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                  {step.highlighted ? (
                    <Image
                      src="/images/dashboard preview/sign-image.webp.png"
                      alt="Instagram login setup preview"
                      width={617}
                      height={193}
                      className={styles.signPreview}
                    />
                  ) : null}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
