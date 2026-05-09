import BlogForm from "@/components/admin/BlogForm";
import styles from "./new.module.css";

export const metadata = { title: "New Blog | Admin" };

export default function NewBlogPage() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>New Blog Post</h1>
      <BlogForm />
    </div>
  );
}
