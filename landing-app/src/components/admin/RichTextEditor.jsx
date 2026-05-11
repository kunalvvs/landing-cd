"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import { useEffect } from "react";
import styles from "./RichTextEditor.module.css";

const TOOLBAR = [
  { action: "bold",        label: "B",   title: "Bold",        check: (e) => e.isActive("bold") },
  { action: "italic",      label: "I",   title: "Italic",      check: (e) => e.isActive("italic") },
  { action: "underline",   label: "U",   title: "Underline",   check: (e) => e.isActive("underline") },
  { sep: true },
  { action: "h2",          label: "H2",  title: "Heading 2",   check: (e) => e.isActive("heading", { level: 2 }) },
  { action: "h3",          label: "H3",  title: "Heading 3",   check: (e) => e.isActive("heading", { level: 3 }) },
  { sep: true },
  { action: "bulletList",  label: "•—",  title: "Bullet list", check: (e) => e.isActive("bulletList") },
  { action: "orderedList", label: "1—",  title: "Ordered list",check: (e) => e.isActive("orderedList") },
  { sep: true },
  { action: "blockquote",  label: "❝",   title: "Blockquote",  check: (e) => e.isActive("blockquote") },
  { action: "code",        label: "</>", title: "Inline code", check: (e) => e.isActive("code") },
  { sep: true },
  { action: "undo",        label: "↩",   title: "Undo",        check: () => false },
  { action: "redo",        label: "↪",   title: "Redo",        check: () => false },
];

function runAction(editor, action) {
  const chain = editor.chain().focus();
  switch (action) {
    case "bold":        return chain.toggleBold().run();
    case "italic":      return chain.toggleItalic().run();
    case "underline":   return chain.toggleUnderline().run();
    case "h2":          return chain.toggleHeading({ level: 2 }).run();
    case "h3":          return chain.toggleHeading({ level: 3 }).run();
    case "bulletList":  return chain.toggleBulletList().run();
    case "orderedList": return chain.toggleOrderedList().run();
    case "blockquote":  return chain.toggleBlockquote().run();
    case "code":        return chain.toggleCode().run();
    case "undo":        return chain.undo().run();
    case "redo":        return chain.redo().run();
  }
}

export default function RichTextEditor({ value, onChange, placeholder = "Write section content…" }) {
  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit,
      Underline,
      Link.configure({ openOnClick: false, HTMLAttributes: { target: "_blank", rel: "noopener" } }),
      Placeholder.configure({ placeholder }),
    ],
    content: value || "",
    editorProps: {
      attributes: { class: styles.editorArea },
    },
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
  });

  // Sync external value changes (e.g. form reset)
  useEffect(() => {
    if (!editor) return;
    const current = editor.getHTML();
    if (value !== current) {
      editor.commands.setContent(value || "");
    }
  }, [value]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!editor) return null;

  return (
    <div className={styles.wrap}>
      <div className={styles.toolbar} onMouseDown={(e) => e.preventDefault()}>
        {TOOLBAR.map((btn, i) =>
          btn.sep ? (
            <span key={i} className={styles.sep} />
          ) : (
            <button
              key={btn.action}
              type="button"
              title={btn.title}
              className={`${styles.tbBtn} ${btn.check(editor) ? styles.tbActive : ""}`}
              onClick={() => runAction(editor, btn.action)}
            >
              {btn.label}
            </button>
          )
        )}
      </div>
      <EditorContent editor={editor} className={styles.contentWrap} />
    </div>
  );
}
