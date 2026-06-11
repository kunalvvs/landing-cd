"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./FooterSection.module.css";


export default function FooterSection() {
  return (
    <footer className={styles.footer}>
      {/* ── Top white section ── */}
      <div className={styles.topSection}>
        <div className={styles.inner}>
          {/* Brand */}
          <div className={styles.brand}>
            <div className={styles.brandRow}>
              <Image
                src="/images/icons/icon.png"
                alt="Creatordesks logo"
                width={40}
                height={40}
              />
              <span className={styles.brandName}>Creatordesks</span>
            </div>
            <h3 className={styles.brandTagline}>
              Instagram DM Automation for Creators, Brands, and Agencies
            </h3>
            <p className={styles.brandDesc}>
              So reply to comments, send link in DMs, and capture leads. Turn
              Instagram conversation into sales automatically.
            </p>
            <div className={styles.socials}>
              <a href="#" aria-label="Instagram" className={styles.socialLink}>
                <Image src="/images/footer/i.png" alt="Instagram" width={36} height={36} />
              </a>
              <a href="#" aria-label="X (Twitter)" className={styles.socialLink}>
                <Image src="/images/footer/x.png" alt="X" width={36} height={36} />
              </a>
              <a href="#" aria-label="LinkedIn" className={styles.socialLink}>
                <Image src="/images/footer/l.png" alt="LinkedIn" width={36} height={36} />
              </a>
              <a href="#" aria-label="YouTube" className={styles.socialLink}>
                <Image src="/images/footer/y.png" alt="YouTube" width={36} height={36} />
              </a>
            </div>
            <p className={styles.copyright}>
              &#169; 2026 CreatedDesk. All Rights Reserved
            </p>
          </div>

          {/* Menus */}
          <div className={styles.col}>
            <h4 className={styles.colHeading}>Menus</h4>
            <ul className={styles.colList}>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/solutions">Solutions</Link></li>
              <li><Link href="/pricing">Pricing</Link></li>
              <li><Link href="/about">About</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div className={styles.col}>
            <h4 className={styles.colHeading}>Legal</h4>
            <ul className={styles.colList}>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/terms-of-condition">Terms of Service</Link></li>
              <li><Link href="/refund-policy">Refund Policy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.col}>
            <h4 className={styles.colHeading}>Contact</h4>
            <ul className={styles.contactList}>
              <li>support@creatordesks.in</li>
              <li>+91 8923612313</li>
              <li>Avas Vikas, Agra, Uttar Pradesh</li>
            </ul>
          </div>

          {/* Disclaimer — spans cols 2-4 */}
          <p className={styles.disclaimer}>
            CreatorDesk is an independent platform and is not affiliated with, endorsed by, or sponsored by Meta
            Platforms, Inc. Instagram is a trademark of Meta Platforms, Inc. Results may vary based on audience,
            content, niche, and engagement. Users are responsible for following Instagram/Meta rules, policies,
            and applicable privacy guidelines. Meta may change API access, limits, or features at any time.
          </p>
        </div>
      </div>

      {/* ── Background image section ── */}
      <div className={styles.imageSection}>
        <Image
          src="/images/footer/footer.webp"
          alt=""
          fill
          className={styles.bgImage}
          priority={false}
        />
        <div className={styles.watermark} aria-hidden="true">
          {/* Desktop: pre-rendered glass PNG — hidden on mobile */}
          <Image
            src="/images/footer/CREATORDESKS.png"
            alt=""
            width={1280}
            height={114}
            className={styles.wmImage}
          />

          {/* Mobile fallback: SVG text — hidden on desktop */}
          <svg className={styles.wmTextSvg} xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <text
              className={styles.wmText}
              x="50%"
              y="88%"
              textAnchor="middle"
              fill="rgba(249,184,148,0.55)"
            >
              CREATORDESKS
            </text>
          </svg>
        </div>
      </div>
    </footer>
  );
}
