"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Navbar from "@/components/ui/Navbar";
import FooterSection from "@/components/sections/footer/FooterSection";
import styles from "./pricing.module.css";
import FeaturesOverviewSection from "@/components/sections/features-overview/FeaturesOverviewSection";
import FAQSection from "@/components/sections/faq/FAQSection";

const PLANS = [
  {
    id: "free",
    title: "Free",
    subtitle: "Test the full automation flow — no card, no risk.",
    monthlyPrice: 0,
    yearlyPrice: 0,
    yearlyTotal: null,
    badge: null,
    dark: false,
    greenBorder: false,
    ctaLabel: "Start Free",
    ctaSubNote: "No credit card · 500 free DMs/month",
    featuresLabel: "INCLUDES:",
    features: [
      "1 Instagram account",
      "500 automated DMs/month",
      "Comment-to-DM automation",
      "Story reply automation",
      "Unlimited keyword triggers",
      "Done-for-you automation templates",
    ],
  },
  {
    id: "pro",
    title: "Pro",
    subtitle: "For creators turning their audience into revenue.",
    monthlyPrice: 15,
    yearlyPrice: 12,
    yearlyTotal: 144,
    badge: "MOST POPULAR",
    dark: true,
    greenBorder: false,
    ctaLabel: "Get Started",
    ctaSubNote: "14-day money-back guarantee · Cancel anytime",
    featuresLabel: "EVERYTHING IN FREE, PLUS:",
    features: [
      "2 Instagram accounts",
      "5,000 DMs/workspace/month",
      "Email gate — collect emails before sending links",
      "Follow gate — auto-grow followers with every DM",
      "Link click tracking",
      "Export contacts as CSV",
      "Geo analytics — see where your audience clicks",
      "One-time DM top-up packs — never expire, stack on top of your plan",
    ],
  },
  {
    id: "growth",
    title: "Growth",
    subtitle: "For agencies and creators managing multiple accounts.",
    monthlyPrice: 30,
    yearlyPrice: 24,
    yearlyTotal: 288,
    badge: "BEST VALUE",
    dark: false,
    greenBorder: true,
    ctaLabel: "Get Started",
    ctaSubNote: "For teams and agencies",
    featuresLabel: "EVERYTHING IN PRO, PLUS:",
    features: [
      "5 Instagram accounts",
      "10,000 DMs/workspace/month",
      "5 team seats per workspace",
      "Priority support (email)",
      "One-time DM top-up packs — never expire, stack on top of your plan",
    ],
  },
];

const WHY_FEATURES = [
  { feature: "Unlimited Automation", otherPrice: "$29 - $99 /mo." },
  { feature: "Unlimited DMs",        otherPrice: "$29 - $99 /mo." },
  { feature: "Follow-up Messages",   otherPrice: "$29 - $99 /mo." },
  { feature: "AI Conversations",     otherPrice: "$29 - $99 /mo." },
  { feature: "Reverse DM Feature",   otherPrice: "$29 - $99 /mo." },
  { feature: "Lead Generation",      otherPrice: "$29 - $99 /mo." },
  { feature: "Pricing", isPrice: true },
];

const AGENCY_FEATURES = [
  "Multiple workspaces",
  "Custom DM limits",
  "Team permissions",
  "Dedicated onboarding",
];

const FAQS = [
  {
    id: "pf-1",
    question: "How much does Creatordesks cost?",
    answer:
      "Creatordesks starts free — no credit card required. Paid plans start at $15/mo (monthly) or $12/mo (billed annually). All plans include unlimited keyword triggers and done-for-you templates.",
  },
  {
    id: "pf-2",
    question: "What's included in the free plan?",
    answer:
      "The free plan includes 1 Instagram account, 500 automated DMs/month, comment-to-DM automation, story reply automation, unlimited keyword triggers, and done-for-you templates.",
  },
  {
    id: "pf-3",
    question: "What's the difference between Pro and Growth?",
    answer:
      "Pro is designed for individual creators and small brands — 2 Instagram accounts, 5,000 DMs/month. Growth adds 5 accounts, 10,000 DMs/month, 5 team seats, and priority email support.",
  },
  {
    id: "pf-4",
    question: "How does Creatordesks pricing compare to ManyChat?",
    answer:
      "Creatordesks charges a flat monthly rate with no per-contact fees. ManyChat charges based on your subscriber count, which can get expensive fast as your audience grows.",
  },
  {
    id: "pf-5",
    question: "Can I automate Instagram DMs for free?",
    answer:
      "Yes. The free plan includes 500 DMs/month with comment-to-DM and keyword automation — enough to test your first funnel and see results before upgrading.",
  },
  {
    id: "pf-6",
    question: "What happens when I hit my monthly DM limit?",
    answer:
      "Your automations pause until the next billing cycle. You can purchase one-time DM top-up packs on Pro and Growth plans that never expire and stack on top of your plan.",
  },
  {
    id: "pf-7",
    question: "Can I buy extra DMs without upgrading?",
    answer:
      "Yes — Pro and Growth plans include one-time DM top-up packs. These never expire and stack on top of your monthly allocation.",
  },
  {
    id: "pf-8",
    question: "Can I cancel or change plans anytime?",
    answer:
      "Absolutely. You can upgrade, downgrade, or cancel at any time from your dashboard. Pro plans come with a 14-day money-back guarantee.",
  },
];

function CheckIcon({ dark }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={styles.checkIcon}
    >
      <circle cx="8" cy="8" r="8" fill={dark ? "rgba(197,237,133,0.15)" : "rgba(34,197,94,0.12)"} />
      <path
        d="M4.5 8l2.5 2.5L11.5 6"
        stroke={dark ? "#c5ed85" : "#16a34a"}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function PricingPage() {
  const [billing, setBilling] = useState("monthly");
  const [openFaq, setOpenFaq] = useState(null);
  const freePlanRef = useRef(null);

  const isYearly = billing === "yearly";

  // rotateX reveal on scroll — same motion as the hero dashboard image
  useEffect(() => {
    const el = freePlanRef.current;
    if (!el) return;

    let observer;

    import("gsap").then(({ default: gsap }) => {
      gsap.set(el, {
        opacity: 0,
        rotateX: -72,
        y: 80,
        scale: 0.92,
        transformPerspective: 1400,
        transformOrigin: "center bottom",
      });

      observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              gsap.to(el, {
                opacity: 1,
                rotateX: 0,
                y: 0,
                scale: 1,
                duration: 1.4,
                ease: "power3.out",
              });
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.25 }
      );

      observer.observe(el);
    });

    return () => observer?.disconnect();
  }, []);

  return (
    <main className={styles.page}>
      {/* ── Hero ── */}
      <div className={styles.heroWrap}>
        <div className={styles.navShell}>
          <Navbar />
        </div>
        <section className={styles.hero}>
          <span className={styles.heroBadge}>Pricing</span>
          <h1 className={styles.heroTitle}>
            All Features, All Power.<br />
            Absolutely Free Till 2026
          </h1>
          <p className={styles.heroSubtitle}>
            We believe in empowering creators. That&apos;s why Creatordesks is&nbsp;100% free till the end of 2026.
          </p>
          <a href="#" className={styles.heroCta}>
            <Image src="https://ik.imagekit.io/Creatordesks/CD%20Landing%20Page/images/Hero%20section/stars.png?updatedAt=1781235141589" className={styles.starIcon} width={25} height={25} alt="" />
            TRY FOR FREE
          </a>
        </section>

      </div>

      {/* ── Free Plan Card (overlaps hero bottom) ── */}
      <div ref={freePlanRef} className={styles.freePlanCard}>
        <span className={styles.freeBadge}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{flexShrink:0}}>
            <path d="M20 12v10H4V12M22 7H2v5h20V7zM12 22V7M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z" stroke="#7c5fe6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          100% FREE TILL THE END OF 2026
        </span>
        <h2 className={styles.freeTitle}>Absolutely Free</h2>
        <p className={styles.freeDate}>Till 31st December 2026</p>
        <p className={styles.freeDesc}>
          We are providing all our features and services{" "}
          <span className={styles.freeHighlight}>absolutely free</span>{" "}
          till the end of 2026.
        </p>
        <p className={styles.freePrice}>Rs.0</p>
        <p className={styles.freeCaption}>Free Till 2026</p>
        <a href="#" className={styles.freeBtn}>Get Started for Free</a>
        <p className={styles.freeNote}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            <circle cx="9" cy="9" r="9" fill="#22c55e"/>
            <path d="M5 9l3 3 5-5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          No Credit Card Required
        </p>
      </div>

      <FeaturesOverviewSection
        badgeIcon={
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M2.5 7l3 3 6-6" stroke="#6d4fc7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }
        badgeLabel="The Solution"
        title="All Features. All Free"
        subtitle={
          <>
            Everything you need to automate, engage and grow &mdash;{" "}
            <span style={{color:"#8267ec"}}>absolutely free till 2026</span>
          </>
        }
      />

      {/* ── Why Free Section ── */}
      <section className={styles.whySection}>
        <div className={styles.shell}>
          <div className={styles.whyCard}>

            {/* Left dark panel */}
            <div className={styles.whyLeft}>
              <div className={styles.whyLeftTop}>
                <h2 className={styles.whyTitle}>
                  Why Creatordesks is<br />
                  <span className={styles.whyTitleAccent}>Free Till 2026?</span>
                </h2>
                <ul className={styles.whyReasons}>
                  <li>
                    <img src="/images/Pricing/heart.png" alt="" className={styles.whyIcon} />
                    <span>We Believe in empowering creators with the best tools to grow faster.</span>
                  </li>
                  <li>
                    <img src="/images/Pricing/rocket.png" alt="" className={styles.whyIcon} />
                    <span>Our mission is to support every creator and business, no matter the size.</span>
                  </li>
                  <li>
                    <img src="/images/Pricing/shield.png" alt="" className={styles.whyIcon} />
                    <span>That&apos;s why we&apos;re giving full access to all premium features - for free.</span>
                  </li>
                </ul>
              </div>
              <img src="https://ik.imagekit.io/Creatordesks/CD%20Landing%20Page/images/Pricing/gift.webp?updatedAt=1781235140688" alt="gift Icon" className={styles.whyGift} />
            </div>

            {/* Right comparison table */}
            <div className={styles.whyRight}>
              <div className={styles.compTable}>

                {/* Header row */}
                <div className={styles.compHeader}>
                  <div className={styles.compColFeature}>Features</div>
                  <div className={styles.compColCreator}>
                    <span className={styles.creatorName}>Creatordesks</span>
                    <span className={styles.creatorDate}>Till Dec 31, 2026</span>
                    <span className={styles.creatorFreeBadge}>FREE</span>
                  </div>
                  <div className={styles.compColOther}>
                    <span className={styles.otherName}>Other Tools</span>
                    <span className={styles.otherSub}>Paid Plans</span>
                  </div>
                </div>

                {/* Data rows */}
                {WHY_FEATURES.map((row, i) => {
                  const isLast = i === WHY_FEATURES.length - 1;
                  return (
                    <div key={row.feature} className={styles.compRow}>
                      <div className={styles.compCellFeature}>{row.feature}</div>
                      <div className={`${styles.compCellCreator} ${isLast ? styles.compCellCreatorLast : ""}`}>
                        {row.isPrice ? (
                          <span className={styles.priceZero}>$0 <strong> <small className={styles.priceZero} >(Till 31 Dec,2026)</small></strong></span>
                        ) : (
                          <img src="/images/Pricing/righttick.png" alt="included" className={styles.tickIcon} />
                        )}
                      </div>
                      <div className={styles.compCellOther}>
                        {row.isPrice ? <strong className={styles.expensiveText}>Expensive</strong> : row.otherPrice}
                      </div>
                    </div>
                  );
                })}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Pricing Section ── */}
      {/* <section className={styles.pricingSection} aria-label="Pricing plans">
        <div className={styles.shell}>

          
          <div className={styles.toggleWrap} role="group" aria-label="Billing period">
            <button
              type="button"
              className={`${styles.toggleBtn} ${!isYearly ? styles.toggleActive : ""}`}
              onClick={() => setBilling("monthly")}
              aria-pressed={!isYearly}
            >
              Monthly
            </button>
            <button
              type="button"
              className={`${styles.toggleBtn} ${isYearly ? styles.toggleActive : ""}`}
              onClick={() => setBilling("yearly")}
              aria-pressed={isYearly}
            >
              Yearly
              <span className={styles.saveBadge}>2 months free</span>
            </button>
          </div>

          //Card
          <div className={styles.cardsGrid}>
            {PLANS.map((plan) => {
              const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
              const originalPrice = isYearly && plan.yearlyPrice !== plan.monthlyPrice
                ? plan.monthlyPrice
                : null;

              return (
                <div
                  key={plan.id}
                  className={`${styles.card} ${plan.dark ? styles.cardDark : ""} ${plan.greenBorder ? styles.cardGreen : ""}`}
                >
                  // Badge 
                  {plan.badge && (
                    <span className={`${styles.badge} ${plan.dark ? styles.badgeDark : styles.badgeLight}`}>
                      {plan.badge}
                    </span>
                  )}

                  <div className={styles.cardHeader}>
                    <h2 className={styles.planTitle}>{plan.title}</h2>
                    <p className={styles.planSubtitle}>{plan.subtitle}</p>
                  </div>

                  <hr className={`${styles.divider} ${plan.dark ? styles.dividerDark : ""}`} />

                  //Price
                  <div className={styles.priceRow}>
                    <span className={styles.currency}>$</span>
                    <span className={styles.priceNum}>{price}</span>
                    <span className={styles.pricePer}>/mo</span>
                  </div>

                  {isYearly && originalPrice ? (
                    <div className={styles.yearlyMeta}>
                      <span className={styles.strikePrice}>${originalPrice}</span>
                      <span className={styles.saveTag}>Save 2 months</span>
                      <p className={styles.billingNote}>Billed annually (${plan.yearlyTotal}/year)</p>
                    </div>
                  ) : (
                    <p className={styles.billingNote}>
                      {plan.monthlyPrice === 0 ? "No credit card required" : "Billed monthly"}
                    </p>
                  )}

                 //CTA
                  <a
                    href="#"
                    className={`${styles.ctaBtn} ${plan.dark ? styles.ctaBtnLime : styles.ctaBtnDark}`}
                  >
                    {plan.ctaLabel}
                  </a>
                  <p className={styles.ctaSubNote}>{plan.ctaSubNote}</p>

                  <hr className={`${styles.divider} ${plan.dark ? styles.dividerDark : ""}`} />

                 //Features
                  <p className={styles.featuresLabel}>{plan.featuresLabel}</p>
                  <ul className={styles.featuresList}>
                    {plan.features.map((f) => (
                      <li key={f} className={styles.featureItem}>
                        <CheckIcon dark={plan.dark} />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          //Agency Row
          <div className={styles.agencyRow}>
            <div className={styles.agencyLeft}>
              <h3 className={styles.agencyTitle}>Agency</h3>
              <p className={styles.agencyDesc}>
                For agencies managing multiple creator accounts.
              </p>
              <div className={styles.agencyFeatures}>
                {AGENCY_FEATURES.map((f) => (
                  <span key={f} className={styles.agencyFeature}>
                    <CheckIcon dark={false} />
                    {f}
                  </span>
                ))}
              </div>
            </div>
            <div className={styles.agencyRight}>
              <a href="/contact" className={styles.agencyBtn}>Contact Us</a>
              <p className={styles.agencyNote}>Custom pricing · Volume discounts</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* ── Pricing FAQ ── */}

      <FAQSection/>

      {/* <section className={styles.faqSection} aria-labelledby="pricing-faq-title">
        <div className={styles.shell}>
          <h2 id="pricing-faq-title" className={styles.faqTitle}>Pricing FAQ</h2>
          <p className={styles.faqSubtitle}>
            Common questions about Creatordesks plans and billing
          </p>
          <div className={styles.faqList}>
            {FAQS.map((item) => {
              const isOpen = openFaq === item.id;
              return (
                <div
                  key={item.id}
                  className={`${styles.faqItem} ${isOpen ? styles.faqOpen : ""}`}
                >
                  <button
                    type="button"
                    className={styles.faqButton}
                    onClick={() => setOpenFaq(isOpen ? null : item.id)}
                    aria-expanded={isOpen}
                  >
                    <span>{item.question}</span>
                    <span className={styles.faqIcon} aria-hidden="true">+</span>
                  </button>
                  <div className={styles.faqAnswer} aria-hidden={!isOpen}>
                    <p>{item.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section> */}

      {/* ── CTA ── */}
      {/* <section className={styles.ctaSection}>
        <div className={styles.shell}>
          <div className={styles.ctaCard}>
            <div className={styles.ctaContent}>
              <h2>
                Get started with <span>Creatordesks</span> today
              </h2>
              <p>
                Join 14,000+ creators and brands using Creatordesks to turn
                every comment into a conversation. Get started in under 5 minutes.
              </p>
              <a href="#" className={styles.ctaButton}>
                Start for Free →
              </a>
            </div>
          </div>
        </div>
      </section> */}

      <FooterSection />
    </main>
  );
}
