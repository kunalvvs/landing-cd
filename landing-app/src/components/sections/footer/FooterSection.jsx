import Image from "next/image";
import Link from "next/link";
import styles from "./FooterSection.module.css";

const MENU_LINKS = [
  { label: "Solution", href: "/solutions" },
  { label: "Pricing", href: "/pricing" },
  { label: "Resources", href: "/style-guide" },
  { label: "Contact", href: "/contact" },
  { label: "About", href: "/about" },
];

const TEMPLATE_LINKS = [
  { label: "Resources", href: "/style-guide" },
  { label: "License", href: "#" },
  { label: "Changelog", href: "#" },
  { label: "404", href: "/404" },
  { label: "Password", href: "#" },
];

export default function FooterSection() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brandBlock}>
          <div className={styles.brandRow}>
            <Image
              src="/images/icons/logo.png"
              alt="Creatordesks logo"
              width={40}
              height={40}
            />
            <span className={styles.brandName}>Creatordesks</span>
          </div>
          <p className={styles.brandCopy}>
            We design experiences that connect, convert, and scale with your
            business.
          </p>
          <div className={styles.socials}>
            <span className={styles.socialIcon}>X</span>
            <span className={styles.socialIcon}>in</span>
          </div>
          <div className={styles.legalLinks}>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-of-condition">Terms of Condition</Link>
            <Link href="/cookie-policy">Cookie Policy</Link>
            <Link href="/data-deletion">Data Deletion</Link>
          </div>
        </div>

        <div className={styles.linkColumns}>
          <div>
            <h3>Menus</h3>
            <ul>
              {MENU_LINKS.map((item) => (
                <li key={item.label}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Templates</h3>
            <ul>
              {TEMPLATE_LINKS.map((item) => (
                <li key={item.label}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Contact</h3>
            <ul className={styles.contactList}>
              <li>aditya@futuredesks.in</li>
              <li>+91 89236 12313</li>
              <li>23/12A 323, Sector 12, Avas Vikas Colony, Agra, Uttar Pradesh 282002</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.watermark}>CREATORDESKS</div>
    </footer>
  );
}
