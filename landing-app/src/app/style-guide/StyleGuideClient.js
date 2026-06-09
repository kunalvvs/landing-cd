"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/ui/Navbar";
import FooterSection from "@/components/sections/footer/FooterSection";
import FAQSection from "@/components/sections/faq/FAQSection";

import styles from "./page.module.css";

const TABS = [
  "All Guides",
  "Getting Started",
  "Strategy",
  "Advanced",
  "How-To",
  "Niche Guides",
];


export default function StyleGuidePage({ initialGuides = [] }) {
  const [activeTab, setActiveTab] = useState(TABS[0]);
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
              {filteredGuides.map((guide) => {
                const tags = [guide.category, ...(guide.keywords ?? [])].filter(Boolean).slice(0, 3);
                const desc = guide.description ?? "";
                const shortDesc = desc.length > 90 ? desc.slice(0, 90) + "...." : desc;
                return (
                  <article key={guide._id ?? guide.id ?? guide.slug} className={styles.guideCard}>
                    <div className={styles.cardBody}>
                      {guide.date && <p className={styles.cardDate}>{guide.date}</p>}
                      <h3 className={styles.cardTitle}>{guide.title}</h3>
                      <p className={styles.cardDesc}>
                        {shortDesc}
                        <Link href={`/style-guide/${guide.slug}`} className={styles.readMoreInline}>
                          Read More
                        </Link>
                      </p>
                      <div className={styles.tags}>
                        {tags.map((tag, ti) => (
                          <span key={ti} className={styles.tag}>{tag}</span>
                        ))}
                      </div>
                    </div>

                    <div className={styles.thumbnail}>
                      <Link href={`/style-guide/${guide.slug}`} className={styles.thumbnailLink}>
                        <img
                          src={guide.image}
                          alt={guide.imageAlt || guide.title}
                          className={styles.thumbnailImage}
                        />
                      </Link>
                    </div>

                    <div className={styles.cardFooter}>
                      <Link href={`/style-guide/${guide.slug}`} className={styles.readMoreBtn}>
                        Read More
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className={styles.noResults}>
              <p>No guides found for &ldquo;{searchQuery}&rdquo;</p>
            </div>
          )}
        </div>
      </section>

      {/* ── FAQ ── */}
      <FAQSection />

      {/* <section className={styles.ctaSection}>
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
      </section> */}

      <FooterSection />
    </main>
  );
}
