import Navbar from "@/components/ui/Navbar";
import FooterSection from "@/components/sections/footer/FooterSection";
import styles from "./LegalPage.module.css";

function parseLegalDocument(content) {
  const lines = content
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  const title = lines[0] || "";
  let effectiveDate = "";
  let lastUpdated = "";
  let index = 1;

  while (index < lines.length) {
    const line = lines[index];
    if (line.startsWith("Effective Date:")) {
      effectiveDate = line.replace("Effective Date:", "").trim();
      index += 1;
      continue;
    }
    if (line.startsWith("Last Updated:")) {
      lastUpdated = line.replace("Last Updated:", "").trim();
      index += 1;
      continue;
    }
    break;
  }

  return {
    title,
    effectiveDate,
    lastUpdated,
    bodyLines: lines.slice(index),
  };
}

function slugify(text) {
  const base = text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
  return base || "section";
}

function createId(line, counts) {
  const base = slugify(line);
  const next = (counts[base] ?? 0) + 1;
  counts[base] = next;
  return next === 1 ? base : `${base}-${next}`;
}

function renderBody(lines) {
  const blocks = [];
  let inToc = false;
  let tocItems = [];
  let lastTocNumber = 0;
  let preLines = [];
  const tocCounts = {};
  const headingCounts = {};

  const flushToc = () => {
    if (!tocItems.length) return;
    blocks.push(
      <div key={`toc-${blocks.length}`} className={styles.toc}>
        <h2>Table of Contents</h2>
        <ol className={styles.tocList}>
          {tocItems.map((item) => (
            <li key={item.text}>
              <a href={`#${item.id}`}>{item.text}</a>
            </li>
          ))}
        </ol>
      </div>
    );
    tocItems = [];
  };

  const flushPre = () => {
    if (!preLines.length) return;
    blocks.push(
      <pre key={`pre-${blocks.length}`} className={styles.pre}>
        {preLines.join("\n")}
      </pre>
    );
    preLines = [];
  };

  lines.forEach((line) => {
    if (line === "Table of Contents") {
      flushPre();
      inToc = true;
      tocItems = [];
      lastTocNumber = 0;
      return;
    }

    if (line.includes("\t")) {
      preLines.push(line);
      return;
    }

    if (preLines.length) {
      flushPre();
    }

    const numbered = line.match(/^(\d+)\./);
    if (inToc && numbered) {
      const numberValue = Number.parseInt(numbered[1], 10);
      if (numberValue < lastTocNumber) {
        inToc = false;
        flushToc();
      } else {
        tocItems.push({ text: line, id: createId(line, tocCounts) });
        lastTocNumber = numberValue;
        return;
      }
    }

    if (inToc) {
      inToc = false;
      flushToc();
    }

    if (/^\d+\.\d+\.\d+\s/.test(line)) {
      const id = createId(line, headingCounts);
      blocks.push(
        <h4 key={`h4-${blocks.length}`} id={id} className={styles.subHeading}>
          {line}
        </h4>
      );
      return;
    }

    if (/^\d+\.\d+\s/.test(line)) {
      const id = createId(line, headingCounts);
      blocks.push(
        <h3 key={`h3-${blocks.length}`} id={id} className={styles.subHeading}>
          {line}
        </h3>
      );
      return;
    }

    if (/^\d+\.\s/.test(line)) {
      const id = createId(line, headingCounts);
      blocks.push(
        <h2
          key={`h2-${blocks.length}`}
          id={id}
          className={styles.sectionHeading}
        >
          {line}
        </h2>
      );
      return;
    }

    blocks.push(
      <p key={`p-${blocks.length}`} className={styles.paragraph}>
        {line}
      </p>
    );
  });

  flushPre();
  flushToc();

  return blocks;
}

export default function LegalPage({ content }) {
  const { title, effectiveDate, lastUpdated, bodyLines } =
    parseLegalDocument(content);

  return (
    <main className={styles.page}>
      <div className={styles.container}>
       
       <span className={styles.navBar}><Navbar /></span>  
        <header className={styles.header}>
          <h1 className={styles.title}>{title}</h1>
          {(effectiveDate || lastUpdated) && (
            <p className={styles.meta}>
              {effectiveDate && (
                <span>
                  <strong>Effective Date:</strong> {effectiveDate}
                </span>
              )}
              {lastUpdated && (
                <span>
                  <strong>Last Updated:</strong> {lastUpdated}
                </span>
              )}
            </p>
          )}
        </header>
        <section className={styles.content}>{renderBody(bodyLines)}</section>
      </div>
      <FooterSection />
    </main>
  );
}
