"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import Link from "next/link";
import Navbar from "@/components/ui/Navbar";
import FooterSection from "@/components/sections/footer/FooterSection";
import styles from "./guide.module.css";

function slugify(str) {
  return str.toLowerCase().trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const DECORATIVE_IMG = "/images/blog-img/bg.webp";

// Inject decorative image after the 2nd paragraph
function injectDecorativeImage(html) {
  let pCount = 0;
  return html.replace(/<\/p>/gi, () => {
    pCount++;
    if (pCount === 2) {
      return `</p><figure style="margin:2rem 0;border-radius:1.25rem;overflow:hidden;"><img src="${DECORATIVE_IMG}" alt="" style="width:100%;height:auto;display:block;aspect-ratio:16/9;object-fit:cover;" /></figure>`;
    }
    return "</p>";
  });
}

// Parse H2s from body HTML, inject id attributes, return processed HTML + tocItems
function processBodyHtml(html) {
  const tocItems = [];
  let processed = html.replace(/<h2([^>]*)>([\s\S]*?)<\/h2>/gi, (_, attrs, content) => {
    const text = content.replace(/<[^>]+>/g, "").trim();
    const id = slugify(text) || `h2-${tocItems.length}`;
    tocItems.push({ id, text });
    if (/\bid=/.test(attrs)) return `<h2${attrs}>${content}</h2>`;
    return `<h2${attrs} id="${id}">${content}</h2>`;
  });
  processed = injectDecorativeImage(processed);
  return { processedHtml: processed, tocItems };
}

export default function GuideView({ guide, related }) {
  // Single-body format: one section with no heading (new admin form output)
  const isSingleBody = guide.sections.length === 1 && !guide.sections[0].heading;

  const { processedHtml, tocItems } = useMemo(() => {
    if (isSingleBody) {
      return processBodyHtml(guide.sections[0].body ?? "");
    }
    // Old multi-section format: derive tocItems from section headings
    return {
      processedHtml: "",
      tocItems: guide.sections.map((s) => ({ id: s.id, text: s.heading })),
    };
  }, [isSingleBody, guide.sections]);

  const [activeId, setActiveId] = useState(tocItems[0]?.id ?? "");
  const [tocOpen, setTocOpen] = useState(true);
  const observerRef = useRef(null);

  useEffect(() => {
    const headings = tocItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

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
  }, [tocItems]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setTocOpen(false);
  };

  return (
    <main className={styles.page}>
      {/* ── Hero wrapper with bg image ── */}
      <div className={styles.heroWrap}>
        <div className={styles.navShell}>
          <Navbar />
        </div>

        <header className={styles.hero}>
          {/* Left: meta + title + author */}
          <div className={styles.heroLeft}>
            <div className={styles.heroTags}>
              {guide.category && (
                <span className={styles.heroTag}>{guide.category}</span>
              )}
              {guide.keywords?.slice(0, 1).map((kw, i) => (
                <span key={i} className={styles.heroTag}>{kw}</span>
              ))}
            </div>

            <h1 className={styles.heroTitle}>{guide.title}</h1>
            <p className={styles.heroSubtitle}>{guide.description}</p>

            <div className={styles.heroFooter}>
              <div className={styles.heroAuthor}>
                <div className={styles.authorAvatarWrap}>
                  <img
                    src="/images/icons/cdlogo.png"
                    alt="Creatordesks"
                    width={48}
                    height={48}
                    className={styles.authorAvatarImg}
                  />
                </div>
                <div>
                  <span className={styles.authorLabel}>Written By</span>
                  <span className={styles.authorName}>Creatodesks Creative Team</span>
                </div>
              </div>

              <div className={styles.heroSocials}>
                <a href="#" aria-label="Instagram" className={styles.socialIcon}>
                  <img src="/images/footer/i.png" width={32} height={32} alt="Instagram" />
                </a>
                <a href="#" aria-label="X" className={styles.socialIcon}>
                  <img src="/images/footer/x.png" width={32} height={32} alt="X" />
                </a>
                <a href="#" aria-label="LinkedIn" className={styles.socialIcon}>
                  <img src="/images/footer/l.png" width={32} height={32} alt="LinkedIn" />
                </a>
              </div>
            </div>
          </div>

          {/* Right: image card */}
          <div className={styles.heroRight}>
            <div className={styles.heroImageCard}>
              <img
                src={guide.image}
                alt={guide.imageAlt || guide.title}
                className={styles.heroImage}
              />
            </div>
          </div>
        </header>
      </div>

      {/* ── Body ── */}
      <div className={styles.body}>
        <div className={styles.shell}>
          <div className={styles.bodyGrid}>
            {/* ── TOC Sidebar — LEFT ── */}
            <aside className={styles.tocSidebar} aria-label="Table of contents">
              <button
                className={styles.tocToggle}
                onClick={() => setTocOpen((v) => !v)}
                aria-expanded={tocOpen}
              >
                Table of Content
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
                  {tocItems.map((item, index) => (
                    <li key={item.id}>
                      <button
                        type="button"
                        className={`${styles.tocItem} ${
                          activeId === item.id ? styles.tocItemActive : ""
                        }`}
                        onClick={() => scrollTo(item.id)}
                      >
                        <span className={styles.tocNumber}>
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className={styles.tocText}>{item.text}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            {/* ── Article — RIGHT ── */}
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
              {isSingleBody ? (
                <div
                  className={styles.richContent}
                  dangerouslySetInnerHTML={{ __html: processedHtml }}
                />
              ) : (
                guide.sections.map((section) => (
                  <section key={section.id} className={styles.section}>
                    <h2 id={section.id} className={styles.sectionHeading}>
                      {section.heading}
                    </h2>
                    {section.body.startsWith("<") ? (
                      <div
                        className={styles.richContent}
                        dangerouslySetInnerHTML={{ __html: section.body }}
                      />
                    ) : (
                      <p className={styles.sectionBody}>{section.body}</p>
                    )}
                  </section>
                ))
              )}

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

          </div>
        </div>
      </div>

      {/* ── Decorative mid image ── */}
      <div className={styles.midImageWrap}>
        <img
          src="/images/blog-img/bg.webp"
          alt=""
          aria-hidden="true"
          className={styles.midImage}
        />
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
                  key={g._id ?? g.id ?? g.slug}
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
