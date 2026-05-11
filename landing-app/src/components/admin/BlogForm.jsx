"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import ImageUpload from "./ImageUpload";
import RichTextEditor from "./RichTextEditor";
import styles from "./BlogForm.module.css";

const CATEGORIES = ["Getting Started", "Strategy", "Advanced", "How-To", "Niche Guides"];

function slugify(str) {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// Convert existing multi-section data into a single HTML body string
function sectionsToBody(sections) {
  if (!sections?.length) return "";
  if (sections.length === 1 && !sections[0].heading) return sections[0].body ?? "";
  return sections
    .map((s) => (s.heading ? `<h2>${s.heading}</h2>` : "") + (s.body || ""))
    .join("");
}

// Extract H2 text content from an HTML string for ToC preview
function extractH2Texts(html) {
  const items = [];
  const regex = /<h2[^>]*>([\s\S]*?)<\/h2>/gi;
  let match;
  while ((match = regex.exec(html)) !== null) {
    const text = match[1].replace(/<[^>]+>/g, "").trim();
    if (text) items.push(text);
  }
  return items;
}

export default function BlogForm({ initialData = null }) {
  const router = useRouter();
  const isEdit = !!initialData;

  const [form, setForm] = useState({
    title:       initialData?.title        ?? "",
    slug:        initialData?.slug         ?? "",
    category:    initialData?.category     ?? CATEGORIES[0],
    description: initialData?.description  ?? "",
    readTime:    initialData?.readTime     ?? "",
    date:        initialData?.date         ?? "",
    image:       initialData?.image        ?? "",
    imageAlt:    initialData?.imageAlt     ?? "",
    keywords:    initialData?.keywords?.join(", ") ?? "",
    takeaways:   initialData?.takeaways?.join("\n") ?? "",
    body:        sectionsToBody(initialData?.sections),
    published:   initialData?.published    ?? true,
  });

  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const tocPreview = useMemo(() => extractH2Texts(form.body), [form.body]);

  function set(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
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
      keywords: form.keywords
        .split(",")
        .map((k) => k.trim())
        .filter(Boolean),
      takeaways: form.takeaways
        .split("\n")
        .map((t) => t.trim())
        .filter(Boolean),
      sections: [{ id: "body", heading: "", body: form.body }],
    };

    try {
      const url    = isEdit ? `/api/admin/blogs/${initialData._id}` : "/api/admin/blogs";
      const method = isEdit ? "PUT" : "POST";

      const res  = await fetch(url, {
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

      {/* ── Core ── */}
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

      {/* ── SEO ── */}
      <div className={styles.sectionDivider}>
        <span>SEO</span>
      </div>

      <div className={styles.field}>
        <label className={styles.label}>
          Meta Description
          <span className={styles.hint}> (shown in search results — aim for 140–160 chars)</span>
        </label>
        <textarea
          className={styles.textarea}
          rows={3}
          maxLength={160}
          value={form.description}
          onChange={(e) => set("description", e.target.value)}
        />
        <span className={styles.charCount}>{form.description.length} / 160</span>
      </div>

      <div className={styles.field}>
        <label className={styles.label}>
          Keywords
          <span className={styles.hint}> (comma-separated)</span>
        </label>
        <input
          className={styles.input}
          placeholder="instagram dm automation, chatbot, manychat alternative"
          value={form.keywords}
          onChange={(e) => set("keywords", e.target.value)}
        />
      </div>

      {/* ── Cover Image ── */}
      <div className={styles.sectionDivider}>
        <span>Cover Image</span>
      </div>

      <div className={styles.field}>
        <label className={styles.label}>Image</label>
        <ImageUpload value={form.image} onChange={(url) => set("image", url)} />
      </div>

      <div className={styles.field}>
        <label className={styles.label}>
          Image Alt Text
          <span className={styles.hint}> (for accessibility &amp; SEO)</span>
        </label>
        <input
          className={styles.input}
          placeholder="e.g. Instagram DM automation workflow diagram"
          value={form.imageAlt}
          onChange={(e) => set("imageAlt", e.target.value)}
        />
      </div>

      {/* ── Key Takeaways ── */}
      <div className={styles.sectionDivider}>
        <span>Key Takeaways</span>
      </div>

      <div className={styles.field}>
        <label className={styles.label}>
          Takeaways
          <span className={styles.hint}> (one per line)</span>
        </label>
        <textarea
          className={styles.textarea}
          rows={4}
          value={form.takeaways}
          onChange={(e) => set("takeaways", e.target.value)}
          placeholder="Each line becomes one takeaway bullet"
        />
      </div>

      {/* ── Content Body ── */}
      <div className={styles.sectionDivider}>
        <span>Content</span>
      </div>

      <div className={styles.contentLayout}>
        <div className={styles.editorCol}>
          <div className={styles.field}>
            <label className={styles.label}>
              Body
              <span className={styles.hint}> — use H2 headings to build the table of contents</span>
            </label>
            <RichTextEditor
              value={form.body}
              onChange={(html) => set("body", html)}
              placeholder="Write your blog content… Use H2 for section headings."
            />
          </div>
        </div>

        <div className={styles.tocPreviewCol}>
          <div className={styles.tocPreview}>
            <p className={styles.tocPreviewTitle}>Table of Contents</p>
            {tocPreview.length > 0 ? (
              <ol className={styles.tocPreviewList}>
                {tocPreview.map((text, i) => (
                  <li key={i} className={styles.tocPreviewItem}>{text}</li>
                ))}
              </ol>
            ) : (
              <p className={styles.tocPreviewEmpty}>
                Add H2 headings to auto-generate the ToC
              </p>
            )}
          </div>
        </div>
      </div>

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
