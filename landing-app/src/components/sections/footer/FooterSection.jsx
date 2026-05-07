import Image from "next/image";
import Link from "next/link";
import styles from "./FooterSection.module.css";

const MENU_LINKS = [
  "Home",
  "Features",
  "Why Choose",
  "Pricing",
  "Testimonial",
];

const TEMPLATE_LINKS = [
  "Style Guide",
  "License",
  "Changelog",
  "404",
  "Password",
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
          </div>
        </div>

        <div className={styles.linkColumns}>
          <div>
            <h3>Menus</h3>
            <ul>
              {MENU_LINKS.map((item) => (
                <li key={item}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Templates</h3>
            <ul>
              {TEMPLATE_LINKS.map((item) => (
                <li key={item}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Contact</h3>
            <ul className={styles.contactList}>
              <li>contact@taskgo.com</li>
              <li>+1 (800) 123-4567</li>
              <li>4140 Parker Rd. Allentown, New Mexico 31134</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.watermark}>CREATORDESKS</div>
    </footer>
  );
}
