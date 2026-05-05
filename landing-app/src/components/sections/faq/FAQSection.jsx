import styles from "./FAQSection.module.css";

const FAQ_ITEMS = [
  "What is Passionfroot?",
  "What types of businesses can use Passionfroot?",
  "How does Passionfroot work?",
  "What Platforms can I use Passionfroot for?",
  "How do I discover the right creators for my brand?",
  "How are payments managed?",
  "Can I run multiple campaigns at once?",
  "How will I know whether our influencer marketing is working?",
  "How do I get started with Passionfroot?",
];

export default function FAQSection() {
  return (
    <section className={styles.section} aria-labelledby="faq-title">
      <div className={styles.inner}>
        {/* <button type="button" className={styles.learnMore}>
          Learn more
        </button> */}

        <div className={styles.grid}>
          <div className={styles.leftColumn}>
            <h2 id="faq-title">Frequently Asked Questions</h2>
            <p>
              Don&apos;t see the answer you&apos;re looking for?{" "}
              <a href="#">Get in touch</a>
            </p>
          </div>

          <div className={styles.rightColumn}>
            {FAQ_ITEMS.map((item) => (
              <button key={item} type="button" className={styles.faqRow}>
                <span>{item}</span>
                <span className={styles.plus} aria-hidden="true">
                  +
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
