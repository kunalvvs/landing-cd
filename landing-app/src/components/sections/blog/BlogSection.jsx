import Link from "next/link";
import styles from "./BlogSection.module.css";
import { connectDB } from "@/lib/mongodb";
import Guide from "@/lib/models/Guide";
import { GUIDES } from "@/app/style-guide/guidesData";

async function getFeaturedGuides() {
  try {
    await connectDB();
    const guides = await Guide.find({ published: true })
      .sort({ createdAt: -1 })
      .limit(3)
      .lean();
    if (guides.length > 0) return guides;
  } catch {
    // fall through to static data
  }
  return GUIDES.slice(0, 3);
}

export default async function BlogSection() {
  const featured = await getFeaturedGuides();

  return (
    <section className={styles.section} aria-labelledby="blog-title">
      <div className={styles.inner}>
        <h2 id="blog-title" className={styles.title}>
          Master Instagram DM Automation
        </h2>
        <p className={styles.subtitle}>
          Connect your Instagram, pick a keyword, write one message. That&apos;s it.
        </p>

        <div className={styles.grid}>
          {featured.map((guide, i) => {
            const tags = [guide.category ?? "Financial", "DM Automation", guide.category ?? "Financial"];
            const desc = guide.description ?? "";
            const shortDesc = desc.length > 90 ? desc.slice(0, 90) + "...." : desc;

            return (
              <article key={guide._id?.toString() ?? guide.id ?? i} className={styles.card}>
                {/* Top: date, title, description, tags */}
                <div className={styles.cardBody}>
                  <p className={styles.date}>{guide.date ?? "03rd June, 2026"}</p>
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

                {/* Thumbnail */}
                <div className={styles.thumbnail}>
                  <Link href={`/style-guide/${guide.slug}`} className={styles.thumbnailLink}>
                    <img
                      src={guide.image}
                      alt={guide.imageAlt || guide.title}
                      className={styles.thumbnailImage}
                    />
                  </Link>
                </div>

                {/* Bottom CTA */}
                <div className={styles.cardFooter}>
                  <Link href={`/style-guide/${guide.slug}`} className={styles.readMoreBtn}>
                    Read More
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
