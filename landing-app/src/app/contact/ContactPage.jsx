import Navbar from "@/components/ui/Navbar";
import FAQSection from "@/components/sections/faq/FAQSection";
import FooterSection from "@/components/sections/footer/FooterSection";
import styles from "./page.module.css";

const CONTACT_CARDS = [
  {
    id: "email",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="3" />
        <polyline points="2,4 12,13 22,4" />
      </svg>
    ),
    title: "Customer Support",
    description:
      "Account issues, billing questions, technical help, or getting started with Creatordesks.",
    action: "Email Support",
    href: "mailto:contact@creatordesks.com",
  },
  {
    id: "chat",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: "Sales & Enterprise",
    description:
      "Custom plans, volume pricing, enterprise features, or schedule a product demo.",
    action: "Email Sales",
    href: "#",
  },
  {
    id: "docs",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
    title: "Partnerships & Agencies",
    description:
      "Agency programs, reseller opportunities, integrations, or collaboration requests.",
    action: "Email Partnerships",
    href: "/style-guide",
  },
];

export default function ContactPage() {
  return (
    <main className={styles.page}>
      {/* ── Hero ── */}
      <div className={styles.heroWrap}>
        <div className={styles.navShell}>
          <Navbar />
        </div>

        <div className={styles.heroContent}>
          <span className={styles.contactBadge}>Contact Us</span>
          <h1 className={styles.heroTitle}>How can we help?</h1>
          <p className={styles.heroSubtitle}>
            Everything you need to master Instagram DM automation.
          </p>
        </div>
      </div>

      {/* ── Contact Cards ── */}
      <section className={styles.cardsSection} aria-label="Contact options">
        <div className={styles.shell}>
          <div className={styles.cardsGrid}>
            {CONTACT_CARDS.map((card) => (
              <a
                key={card.id}
                href={card.href}
                className={styles.card}
              >
                <div className={styles.cardIconWrap} aria-hidden="true">
                  {card.icon}
                </div>
                <h2 className={styles.cardTitle}>{card.title}</h2>
                <p className={styles.cardDescription}>{card.description}</p>
                <span className={styles.cardAction}>{card.action} →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <FAQSection />
      <FooterSection />
    </main>
  );
}
