import Link from "next/link";
import Image from "next/image";
import styles from "./not-found.module.css";

export const metadata = {
  title: "404 – Page Not Found | Creatordesks",
  description:
    "The page you're looking for doesn't exist or has been moved. Head back to Creatordesks and keep growing your creator business.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>

        {/* Logo */}
        <Link href="/" className={styles.brand} aria-label="Back to Creatordesks home">
          <Image
            src="/images/icons/icon.png"
            alt="Creatordesks logo"
            width={40}
            height={40}
          />
          <span>Creatordesks</span>
        </Link>

        {/* Decorative glow */}
        <div className={styles.glow} aria-hidden="true" />

        {/* 404 number */}
        <p className={styles.code} aria-hidden="true">404</p>

        {/* Heading */}
        <h1 className={styles.title}>Page not found</h1>

        <p className={styles.subtitle}>
          Looks like this page took a wrong turn. It may have been moved,
          deleted, or never existed.
        </p>

        {/* CTAs */}
        <div className={styles.actions}>
          <Link href="/" className={styles.btnPrimary}>
            ← Back to Home
          </Link>
          <Link href="/contact" className={styles.btnSecondary}>
            Contact Support
          </Link>
        </div>

        {/* Helper links */}
        <nav className={styles.helperLinks} aria-label="Helpful pages">
          <Link href="/pricing">Pricing</Link>
          <Link href="/style-guide">Resources</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </main>
  );
}
