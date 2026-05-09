"use client";

import BlogForm from "@/components/admin/BlogForm";
import styles from "./edit.module.css";

export default function EditBlogClient({ guide }) {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Edit Blog Post</h1>
      <p className={styles.slug}>/{guide.slug}</p>
      <BlogForm initialData={guide} />
    </div>
  );
}
