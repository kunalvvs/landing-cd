"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./blogs.module.css";

export default function BlogsTable({ guides: initial }) {
  const router = useRouter();
  const [guides, setGuides] = useState(initial);
  const [deleting, setDeleting] = useState(null);

  async function handleDelete(id) {
    if (!confirm("Delete this blog post? This cannot be undone.")) return;
    setDeleting(id);
    try {
      const res = await fetch(`/api/admin/blogs/${id}`, { method: "DELETE" });
      if (res.ok) {
        setGuides((prev) => prev.filter((g) => g._id !== id));
      }
    } finally {
      setDeleting(null);
    }
  }

  async function handleSeed() {
    if (!confirm("Seed database with all guides from guidesData.js? Existing slugs will be skipped.")) return;
    const res = await fetch("/api/admin/seed", { method: "POST" });
    const data = await res.json();
    alert(data.message || data.error);
    router.refresh();
  }

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>All Blogs</h1>
        <div className={styles.headerActions}>
          <button className={styles.seedBtn} onClick={handleSeed}>
            Seed from static data
          </button>
          <Link href="/admin/blogs/new" className={styles.newBtn}>
            + New Blog
          </Link>
        </div>
      </div>

      {guides.length === 0 ? (
        <div className={styles.empty}>
          <p>No blogs yet.</p>
          <p>
            Click <strong>Seed from static data</strong> to import all existing
            guides, or create a new one.
          </p>
        </div>
      ) : (
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Status</th>
                <th>Date</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {guides.map((g) => (
                <tr key={g._id}>
                  <td className={styles.tdTitle}>
                    <span className={styles.titleText}>{g.title}</span>
                    <span className={styles.slugText}>{g.slug}</span>
                  </td>
                  <td>
                    <span className={styles.category}>{g.category}</span>
                  </td>
                  <td>
                    {g.published ? (
                      <span className={styles.pub}>Published</span>
                    ) : (
                      <span className={styles.draft}>Draft</span>
                    )}
                  </td>
                  <td className={styles.dateCell}>{g.date || "—"}</td>
                  <td className={styles.actions}>
                    <Link
                      href={`/style-guide/${g.slug}`}
                      target="_blank"
                      className={styles.viewBtn}
                    >
                      View
                    </Link>
                    <Link
                      href={`/admin/blogs/${g._id}`}
                      className={styles.editBtn}
                    >
                      Edit
                    </Link>
                    <button
                      className={styles.deleteBtn}
                      onClick={() => handleDelete(g._id)}
                      disabled={deleting === g._id}
                    >
                      {deleting === g._id ? "…" : "Delete"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
