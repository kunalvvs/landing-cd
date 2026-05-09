import Link from "next/link";
import { connectDB } from "@/lib/mongodb";
import Guide from "@/lib/models/Guide";
import styles from "./page.module.css";

export default async function AdminDashboard() {
  await connectDB();
  const total = await Guide.countDocuments();
  const published = await Guide.countDocuments({ published: true });
  const drafts = total - published;
  const recent = await Guide.find()
    .sort({ updatedAt: -1 })
    .limit(5)
    .lean();

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>Dashboard</h1>
        <Link href="/admin/blogs/new" className={styles.newBtn}>
          + New Blog
        </Link>
      </div>

      <div className={styles.stats}>
        <div className={styles.stat}>
          <span className={styles.statNum}>{total}</span>
          <span className={styles.statLabel}>Total Blogs</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statNum}>{published}</span>
          <span className={styles.statLabel}>Published</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statNum}>{drafts}</span>
          <span className={styles.statLabel}>Drafts</span>
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Recently Updated</h2>
        {recent.length === 0 ? (
          <p className={styles.empty}>No blogs yet. <Link href="/admin/blogs/new">Create one</Link> or <Link href="/admin/seed-hint">seed the database</Link>.</p>
        ) : (
          <ul className={styles.list}>
            {recent.map((g) => (
              <li key={g._id.toString()} className={styles.listItem}>
                <div>
                  <span className={styles.listTitle}>{g.title}</span>
                  <span className={styles.listMeta}>
                    {g.category} &bull;{" "}
                    {g.published ? (
                      <span className={styles.pub}>Published</span>
                    ) : (
                      <span className={styles.draft}>Draft</span>
                    )}
                  </span>
                </div>
                <Link
                  href={`/admin/blogs/${g._id}`}
                  className={styles.editLink}
                >
                  Edit
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
