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
        <span className={styles.badge}>Blog</span>
        <h2 id="blog-title" className={styles.title}>
          Master Instagram DM <span>Automation</span>
        </h2>
        <p className={styles.subtitle}>
          Practical guides, strategies, and tutorials to turn every comment into
          a conversation.
        </p>

        <div className={styles.grid}>
          {featured.map((guide, i) => (
            <article key={guide._id?.toString() ?? guide.id ?? i} className={styles.card}>
              <div className={styles.media}>
                <img
                  src={guide.image}
                  alt={guide.imageAlt || guide.title}
                  className={styles.mediaImage}
                />
              </div>

              <div className={styles.tags}>
                <span className={styles.tag}>{guide.category}</span>
              </div>

              <h3>{guide.title}</h3>
              <p>{guide.description}</p>

              <Link
                href={`/style-guide/${guide.slug}`}
                className={styles.readMore}
              >
                Read More
              </Link>
            </article>
          ))}
        </div>

        <Link href="/style-guide" className={styles.learnMore}>
          View all guides
        </Link>
      </div>
    </section>
  );
}
