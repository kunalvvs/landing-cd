"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./FooterSection.module.css";

function InstagramIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ig-grad" x1="0" y1="36" x2="36" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FED373" />
          <stop offset="30%" stopColor="#F15245" />
          <stop offset="65%" stopColor="#D92E7F" />
          <stop offset="100%" stopColor="#9B36B7" />
        </linearGradient>
      </defs>
      <rect width="36" height="36" rx="8" fill="url(#ig-grad)" />
      <rect x="10" y="10" width="16" height="16" rx="4.5" stroke="white" strokeWidth="1.6" fill="none" />
      <circle cx="18" cy="18" r="3.8" stroke="white" strokeWidth="1.6" fill="none" />
      <circle cx="23.8" cy="12.2" r="1.3" fill="white" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="36" height="36" rx="8" fill="#000000" />
      <path
        d="M20.8 16.9 25.6 11H23.9L20.1 15.8 16.8 11H11.2L16.4 18.6 11.3 25H13L17.1 19.9 20.7 25H26.3L20.8 16.9ZM13.3 12.2H16L23.4 23.8H20.7L13.3 12.2Z"
        fill="white"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="36" height="36" rx="8" fill="#0077B5" />
      <path
        d="M12.5 14.5H10V25H12.5V14.5ZM11.25 13.3C10.42 13.3 9.75 12.62 9.75 11.78C9.75 10.94 10.42 10.26 11.25 10.26C12.08 10.26 12.75 10.94 12.75 11.78C12.75 12.62 12.08 13.3 11.25 13.3ZM26 25H23.5V19.85C23.5 18.55 23.47 16.89 21.71 16.89C19.93 16.89 19.65 18.3 19.65 19.76V25H17.15V14.5H19.55V15.98H19.58C19.93 15.3 20.8 14.58 22.1 14.58C24.68 14.58 26 16.28 26 18.88V25Z"
        fill="white"
      />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="36" height="36" rx="8" fill="#FF0000" />
      <path
        d="M27.2 13.6C26.9 12.5 26.1 11.6 25 11.4C23.1 11 18 11 18 11C18 11 12.9 11 11 11.4C9.9 11.6 9.1 12.5 8.8 13.6C8.5 15.5 8.5 18.5 8.5 18.5C8.5 18.5 8.5 21.5 8.8 23.4C9.1 24.5 9.9 25.4 11 25.6C12.9 26 18 26 18 26C18 26 23.1 26 25 25.6C26.1 25.4 26.9 24.5 27.2 23.4C27.5 21.5 27.5 18.5 27.5 18.5C27.5 18.5 27.5 15.5 27.2 13.6ZM15.8 21.8V15.2L21.2 18.5L15.8 21.8Z"
        fill="white"
      />
    </svg>
  );
}

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
                <InstagramIcon />
              </a>
              <a href="#" aria-label="X (Twitter)" className={styles.socialLink}>
                <XIcon />
              </a>
              <a href="#" aria-label="LinkedIn" className={styles.socialLink}>
                <LinkedInIcon />
              </a>
              <a href="#" aria-label="YouTube" className={styles.socialLink}>
                <YouTubeIcon />
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
              <li><Link href="/terms-of-service">Terms of Service</Link></li>
              <li><Link href="/refund-policy">Refund Policy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.col}>
            <h4 className={styles.colHeading}>Contact</h4>
            <ul className={styles.contactList}>
              <li>support@creatordesks.in</li>
              <li>+91 8923612313</li>
              <li>4140 Parker Rd. Allentown, New Mexico 31134</li>
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
        <div className={styles.watermark} aria-hidden="true">CREATORDESKS</div>
      </div>
    </footer>
  );
}
