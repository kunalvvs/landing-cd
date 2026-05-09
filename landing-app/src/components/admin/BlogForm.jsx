"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ImageUpload from "./ImageUpload";
import styles from "./BlogForm.module.css";

const CATEGORIES = ["Getting Started", "Strategy", "Advanced", "How-To", "Niche Guides"];

const EMPTY_SECTION = { id: "", heading: "", body: "" };

function slugify(str) {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export default function BlogForm({ initialData = null }) {
  const router = useRouter();
  const isEdit = !!initialData;

  const [form, setForm] = useState({
    title: initialData?.title ?? "",
    slug: initialData?.slug ?? "",
    category: initialData?.category ?? CATEGORIES[0],
    description: initialData?.description ?? "",
    readTime: initialData?.readTime ?? "",
    date: initialData?.date ?? "",
    image: initialData?.image ?? "",
    takeaways: initialData?.takeaways?.join("\n") ?? "",
    sections: initialData?.sections ?? [{ ...EMPTY_SECTION }],
    published: initialData?.published ?? true,
  });

  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  function set(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function setSection(index, field, value) {
    setForm((prev) => {
      const sections = [...prev.sections];
      sections[index] = { ...sections[index], [field]: value };
      return { ...prev, sections };
    });
  }

  function addSection() {
    setForm((prev) => ({
      ...prev,
      sections: [...prev.sections, { ...EMPTY_SECTION }],
    }));
  }

  function removeSection(index) {
    setForm((prev) => ({
      ...prev,
      sections: prev.sections.filter((_, i) => i !== index),
    }));
  }

  function autoSlug() {
    if (!form.slug) set("slug", slugify(form.title));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSaving(true);
    setError("");

    const payload = {
      ...form,
      takeaways: form.takeaways
        .split("\n")
        .map((t) => t.trim())
        .filter(Boolean),
      sections: form.sections.map((s, i) => ({
        ...s,
        id: s.id || slugify(s.heading) || `section-${i}`,
      })),
    };

    try {
      const url = isEdit
        ? `/api/admin/blogs/${initialData._id}`
        : "/api/admin/blogs";
      const method = isEdit ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Save failed");
      router.push("/admin/blogs");
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {error && <div className={styles.errorBanner}>{error}</div>}

      <div className={styles.grid2}>
        <div className={styles.field}>
          <label className={styles.label}>Title *</label>
          <input
            className={styles.input}
            value={form.title}
            onChange={(e) => set("title", e.target.value)}
            onBlur={autoSlug}
            required
          />
        </div>
        <div className={styles.field}>
          <label className={styles.label}>Slug *</label>
          <input
            className={styles.input}
            value={form.slug}
            onChange={(e) => set("slug", e.target.value)}
            required
          />
        </div>
      </div>

      <div className={styles.grid2}>
        <div className={styles.field}>
          <label className={styles.label}>Category</label>
          <select
            className={styles.select}
            value={form.category}
            onChange={(e) => set("category", e.target.value)}
          >
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
        <div className={styles.field}>
          <label className={styles.label}>Read Time</label>
          <input
            className={styles.input}
            placeholder="e.g. 12 min read"
            value={form.readTime}
            onChange={(e) => set("readTime", e.target.value)}
          />
        </div>
      </div>

      <div className={styles.grid2}>
        <div className={styles.field}>
          <label className={styles.label}>Date</label>
          <input
            className={styles.input}
            placeholder="e.g. Feb 17, 2026"
            value={form.date}
            onChange={(e) => set("date", e.target.value)}
          />
        </div>
        <div className={styles.field}>
          <label className={styles.label}>Published</label>
          <select
            className={styles.select}
            value={form.published ? "true" : "false"}
            onChange={(e) => set("published", e.target.value === "true")}
          >
            <option value="true">Yes</option>
            <option value="false">No (draft)</option>
          </select>
        </div>
      </div>

      <div className={styles.field}>
        <label className={styles.label}>Description</label>
        <textarea
          className={styles.textarea}
          rows={3}
          value={form.description}
          onChange={(e) => set("description", e.target.value)}
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label}>Cover Image</label>
        <ImageUpload value={form.image} onChange={(url) => set("image", url)} />
      </div>

      <div className={styles.field}>
        <label className={styles.label}>
          Key Takeaways{" "}
          <span className={styles.hint}>(one per line)</span>
        </label>
        <textarea
          className={styles.textarea}
          rows={4}
          value={form.takeaways}
          onChange={(e) => set("takeaways", e.target.value)}
          placeholder="Each line becomes one takeaway bullet"
        />
      </div>

      <div className={styles.sectionsHeader}>
        <h3 className={styles.sectionsTitle}>Content Sections</h3>
        <button type="button" className={styles.addSectionBtn} onClick={addSection}>
          + Add Section
        </button>
      </div>

      {form.sections.map((sec, i) => (
        <div key={i} className={styles.sectionBlock}>
          <div className={styles.sectionTop}>
            <span className={styles.sectionNum}>Section {i + 1}</span>
            {form.sections.length > 1 && (
              <button
                type="button"
                className={styles.removeSectionBtn}
                onClick={() => removeSection(i)}
              >
                Remove
              </button>
            )}
          </div>
          <div className={styles.grid2}>
            <div className={styles.field}>
              <label className={styles.label}>Heading</label>
              <input
                className={styles.input}
                value={sec.heading}
                onChange={(e) => setSection(i, "heading", e.target.value)}
              />
            </div>
            <div className={styles.field}>
              <label className={styles.label}>ID (optional)</label>
              <input
                className={styles.input}
                placeholder="Auto-generated from heading"
                value={sec.id}
                onChange={(e) => setSection(i, "id", e.target.value)}
              />
            </div>
          </div>
          <div className={styles.field}>
            <label className={styles.label}>Body</label>
            <textarea
              className={styles.textarea}
              rows={5}
              value={sec.body}
              onChange={(e) => setSection(i, "body", e.target.value)}
            />
          </div>
        </div>
      ))}

      <div className={styles.actions}>
        <button
          type="button"
          className={styles.cancelBtn}
          onClick={() => router.push("/admin/blogs")}
        >
          Cancel
        </button>
        <button type="submit" className={styles.saveBtn} disabled={saving}>
          {saving ? "Saving…" : isEdit ? "Update Blog" : "Create Blog"}
        </button>
      </div>
    </form>
  );
}
