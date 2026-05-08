"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Navbar from "@/components/ui/Navbar";
import FooterSection from "@/components/sections/footer/FooterSection";
import styles from "./guide.module.css";

export default function GuideView({ guide, related }) {
  const [activeId, setActiveId] = useState(guide.sections[0]?.id ?? "");
  const [tocOpen, setTocOpen] = useState(false);
  const observerRef = useRef(null);

  useEffect(() => {
    const headings = guide.sections.map((s) =>
      document.getElementById(s.id)
    ).filter(Boolean);

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );

    headings.forEach((el) => observerRef.current.observe(el));
    return () => observerRef.current?.disconnect();
  }, [guide.sections]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setTocOpen(false);
  };

  return (
    <main className={styles.page}>
      <div className={styles.navWrap}>
        <Navbar />
      </div>

      {/* ── Hero ── */}
      <header className={styles.hero}>
        <div className={styles.shell}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/style-guide">Resources</Link>
            <span aria-hidden="true">/</span>
            <span>{guide.title}</span>
          </nav>

          <span className={styles.categoryBadge}>{guide.category}</span>
          <h1 className={styles.heroTitle}>{guide.title}</h1>
          <p className={styles.heroSubtitle}>{guide.description}</p>

          <div className={styles.heroMeta}>
            <div className={styles.authorAvatar} aria-hidden="true">CD</div>
            <span className={styles.authorName}>Creatordesks Team</span>
            <span className={styles.metaDot} aria-hidden="true">·</span>
            <span>{guide.date}</span>
            <span className={styles.metaDot} aria-hidden="true">·</span>
            <span>{guide.readTime}</span>
          </div>
        </div>
      </header>

      {/* ── Featured Image ── */}
      <div className={styles.featuredImageWrap}>
        <div className={styles.shell}>
          <div className={styles.featuredImageInner}>
            <img
              src={guide.image}
              alt={guide.title}
              className={styles.featuredImage}
            />
          </div>
        </div>
      </div>

      {/* ── Body ── */}
      <div className={styles.body}>
        <div className={styles.shell}>
          <div className={styles.bodyGrid}>
            {/* ── Article ── */}
            <article className={styles.article}>
              {/* Key Takeaways */}
              <div className={styles.takeaways} aria-label="Key takeaways">
                <h2 className={styles.takeawaysHeading}>
                  <span className={styles.takeawaysIcon} aria-hidden="true">★</span>
                  Key Takeaways
                </h2>
                <ul className={styles.takeawaysList}>
                  {guide.takeaways.map((t, i) => (
                    <li key={i}>{t}</li>
                  ))}
                </ul>
              </div>

              {/* Sections */}
              {guide.sections.map((section) => (
                <section key={section.id} className={styles.section}>
                  <h2
                    id={section.id}
                    className={styles.sectionHeading}
                  >
                    {section.heading}
                  </h2>
                  <p className={styles.sectionBody}>{section.body}</p>
                </section>
              ))}

              {/* CTA block */}
              <div className={styles.inlineCta}>
                <p className={styles.inlineCtaText}>
                  Ready to set up your first DM automation?
                </p>
                <a href="#" className={styles.inlineCtaButton}>
                  Start for Free →
                </a>
              </div>
            </article>

            {/* ── TOC Sidebar ── */}
            <aside className={styles.tocSidebar} aria-label="Table of contents">
              <button
                className={styles.tocToggle}
                onClick={() => setTocOpen((v) => !v)}
                aria-expanded={tocOpen}
              >
                In This Guide
                <span className={`${styles.tocChevron} ${tocOpen ? styles.tocChevronOpen : ""}`} aria-hidden="true">
                  ›
                </span>
              </button>

              <nav
                className={`${styles.tocNav} ${tocOpen ? styles.tocNavOpen : ""}`}
                aria-label="Article sections"
              >
                <p className={styles.tocLabel}>Table of Content</p>
                <ul className={styles.tocList}>
                  {guide.sections.map((section) => (
                    <li key={section.id}>
                      <button
                        type="button"
                        className={`${styles.tocItem} ${
                          activeId === section.id ? styles.tocItemActive : ""
                        }`}
                        onClick={() => scrollTo(section.id)}
                      >
                        {section.heading}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>
          </div>
        </div>
      </div>

      {/* ── Related Guides ── */}
      {related.length > 0 && (
        <section className={styles.relatedSection} aria-labelledby="related-heading">
          <div className={styles.shell}>
            <h2 id="related-heading" className={styles.relatedHeading}>
              Read Next
            </h2>
            <div className={styles.relatedGrid}>
              {related.map((g) => (
                <Link
                  key={g.id}
                  href={`/style-guide/${g.slug}`}
                  className={styles.relatedCard}
                >
                  <div className={styles.relatedImageWrap}>
                    <img
                      src={g.image}
                      alt={g.title}
                      className={styles.relatedImage}
                    />
                  </div>
                  <div className={styles.relatedBody}>
                    <span className={styles.relatedTag}>{g.category}</span>
                    <h3 className={styles.relatedTitle}>{g.title}</h3>
                    <span className={styles.relatedMeta}>{g.readTime}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section className={styles.ctaSection}>
        <div className={styles.shell}>
          <div className={styles.ctaCard}>
            <div className={styles.ctaContent}>
              <h2>
                Get started with <span>Creatordesks</span> today
              </h2>
              <p>
                Join 14,000+ creators and brands turning every comment into a
                conversation. Set up your first automation in under 5 minutes.
              </p>
              <a href="#" className={styles.ctaButton}>
                Start for Free <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
