"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./Navbar.module.css";

const NAV_ITEMS = [
  "Solution",
  "Pricing",
  "Resources",
  "Contact",
  "About",
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.navShell}>
      <Link href="/" className={styles.brand} aria-label="Creatordesks home">
        <Image
          src="/images/icons/logo.png"
          alt="Creatordesks logo"
          width={45}
          height={45}
          priority
        />
        <span className={styles.logoText}>Creatordesks</span>
      </Link>

      <nav aria-label="Primary navigation" className={styles.desktopNav}>
        <ul className={styles.navList}>
          {NAV_ITEMS.map((item) => (
            <li key={item}>
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>
      </nav>

      <a href="#" className={`${styles.signupButton} ${styles.desktopCta}`}>
        SIGN UP NOW
      </a>

      <button
        className={styles.hamburger}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((value) => !value)}
      >
        <span className={`${styles.bar} ${menuOpen ? styles.barTop : ""}`} />
        <span className={`${styles.bar} ${menuOpen ? styles.barMid : ""}`} />
        <span className={`${styles.bar} ${menuOpen ? styles.barBot : ""}`} />
      </button>

      <div
        className={`${styles.mobileMenu} ${
          menuOpen ? styles.mobileMenuOpen : ""
        }`}
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Mobile navigation">
          <ul className={styles.mobileNavList}>
            {NAV_ITEMS.map((item) => (
              <li key={item}>
                <a href="#" onClick={() => setMenuOpen(false)}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a href="#" className={styles.mobileCtaButton}>
          SIGN UP NOW
        </a>
      </div>
    </header>
  );
}
