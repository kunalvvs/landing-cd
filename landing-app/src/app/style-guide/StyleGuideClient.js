"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/ui/Navbar";
import FooterSection from "@/components/sections/footer/FooterSection";

import styles from "./page.module.css";

const TABS = [
  "All Guides",
  "Getting Started",
  "Strategy",
  "Advanced",
  "How-To",
  "Niche Guides",
];

const FAQS = [
  {
    id: "faq-1",
    question: "What is Instagram DM automation?",
    answer:
      "Instagram DM automation allows you to automatically send messages based on triggers like comments, story replies, or keywords using Meta-approved APIs.",
  },
  {
    id: "faq-2",
    question: "Is Instagram DM automation safe?",
    answer:
      "Yes. When you use Meta's official API, automation is compliant and safe. Avoid third-party bots that violate platform policies.",
  },
  {
    id: "faq-3",
    question: "How is DM automation different from spam bots?",
    answer:
      "Legit automation follows opt-in, approved messaging windows, and platform policies. Spam bots bypass rules and put accounts at risk.",
  },
  {
    id: "faq-4",
    question: "What can I automate with Instagram DMs?",
    answer:
      "You can automate replies for comments, story interactions, keyword triggers, lead capture, and follow-up sequences.",
  },
  {
    id: "faq-5",
    question: "Do I need technical skills to set up DM automation?",
    answer:
      "No. Modern tools provide templates and guided steps so you can launch automations without code.",
  },
  {
    id: "faq-6",
    question: "What's the best DM automation tool for Instagram?",
    answer:
      "The best tool is one that uses Meta's official API, offers templates, analytics, and makes setup simple for your workflow.",
  },
  {
    id: "faq-7",
    question: "How much does Instagram DM automation cost?",
    answer:
      "Costs vary by provider and message volume, but most plans start with affordable monthly tiers and scale with usage.",
  },
  {
    id: "faq-8",
    question: "Can DM automation collect emails?",
    answer:
      "Yes. Many tools can collect emails with consent and pass them into your CRM or email platform.",
  },
  {
    id: "faq-9",
    question: "What's the difference between comment-to-DM and keyword automation?",
    answer:
      "Comment-to-DM triggers when someone comments on a post. Keyword automation triggers when a specific word is used in comments or DMs.",
  },
  {
    id: "faq-10",
    question: "Do I need a business or creator account for DM automation?",
    answer:
      "Yes. Meta requires a Business or Creator account to access the official messaging API.",
  },
  {
    id: "faq-11",
    question: "How do I get started with DM automation?",
    answer:
      "Pick a goal, connect your account, choose a trigger, write your DM message, and launch your automation in minutes.",
  },
];

export default function StyleGuidePage({ initialGuides = [] }) {
  const [activeTab, setActiveTab] = useState(TABS[0]);
  const [openFaq, setOpenFaq] = useState(FAQS[0].id);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredGuides = useMemo(() => {
    let result = initialGuides;
    if (activeTab !== "All Guides") {
      result = result.filter((g) => g.category === activeTab);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (g) =>
          g.title.toLowerCase().includes(q) ||
          g.description.toLowerCase().includes(q)
      );
    }
    return result;
  }, [activeTab, searchQuery]);

  return (
    <main className={styles.page}>
      {/* ── Hero with bg.png ── */}
      <div className={styles.heroWrap}>
        <div className={styles.shell}>
          <span className={styles.navBar}>
            <Navbar />
          </span>
        </div>

        <section className={styles.hero}>
          <span className={styles.blogsBadge}>Blogs</span>
          <h1 className={styles.title}>Latest News &amp; Resources</h1>
          <p className={styles.subtitle}>
            Everything you need to master Instagram DM automation. From beginner
            fundamentals to advanced strategies for turning engagement into
            revenue.
          </p>

          <div className={styles.searchWrap} role="search">
            <input
              type="text"
              className={styles.searchInput}
              placeholder="Search for resources"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search guides"
            />
            <button
              type="button"
              className={styles.searchButton}
              aria-label="Search"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
          </div>
        </section>
      </div>

      {/* ── Guides ── */}
      <section id="guides" className={styles.guidesSection}>
        <div className={styles.guidesInner}>
          {/* Category tabs */}
          <div className={styles.tabs} role="tablist" aria-label="Guide filters">
            {TABS.map((tab) => (
              <button
                key={tab}
                type="button"
                role="tab"
                aria-selected={activeTab === tab}
                className={`${styles.tab} ${
                  activeTab === tab ? styles.tabActive : ""
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Grid */}
          {filteredGuides.length > 0 ? (
            <div className={styles.guidesGrid}>
              {filteredGuides.map((guide) => (
                <Link
                  key={guide.id}
                  href={`/style-guide/${guide.slug}`}
                  className={styles.guideCard}
                >
                  <div className={styles.cardTop}>
                    <img
                      src={guide.image}
                      alt={guide.title}
                      className={styles.cardImage}
                    />
                  </div>
                  <div className={styles.cardBody}>
                    <span className={styles.cardTag}>{guide.category}</span>
                    <h3 className={styles.cardTitle}>{guide.title}</h3>
                    <p className={styles.cardDescription}>{guide.description}</p>
                    <div className={styles.cardMeta}>
                      <span>{guide.readTime}</span>
                      <span className={styles.cardCta}>Read Guide</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className={styles.noResults}>
              <p>No guides found for &ldquo;{searchQuery}&rdquo;</p>
            </div>
          )}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
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
                  onClick={() =>
                    setOpenFaq((current) =>
                      current === item.id ? "" : item.id
                    )
                  }
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  <span className={styles.faqIcon} aria-hidden="true">
                    +
                  </span>
                </button>
                <div className={styles.faqContent} aria-hidden={!isOpen}>
                  <p>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.ctaCard}>
          <div className={styles.ctaContent}>
            <h2>
              Get started with <span>Creatordesks</span> today
            </h2>
            <p>
              Join 14,000+ creators and brands using Creatordesks to turn every
              comment into a conversation. Get started in under 5 minutes.
            </p>
            <a href="#" className={styles.ctaButton}>
              Start for Free
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
