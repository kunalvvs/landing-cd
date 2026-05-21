import Navbar from "@/components/ui/Navbar";
import FooterSection from "@/components/sections/footer/FooterSection";
import styles from "./page.module.css";

export const metadata = {
  title: "User Data Deletion Instructions | Creatordesks",
  description:
    "Learn how to request deletion of your Creatordesks account data and connected Instagram account data.",
};

export default function DataDeletionPage() {
  return (
    <main className={styles.page}>
      <div className={styles.shell}>
       <span className={styles.navBar}><Navbar /></span> 

        <header className={styles.header}>
          <p className={styles.eyebrow}>DATA DELETION</p>
          <h1 className={styles.title}>User Data Deletion Instructions</h1>
          <p className={styles.subtitle}>
            This page explains how Creatordesks users can request deletion of
            their personal data and connected Instagram account data.
          </p>
        </header>

        <section className={styles.section}>
          <h2>1. How to Request Data Deletion</h2>
          <p>
            If you want to delete your data from Creatordesks, please send an
            email to:
          </p>
          <a className={styles.link} href="mailto:aditya@futuredesks.in">
            aditya@futuredesks.in
          </a>
          <p>Please include the following details in your email:</p>
          <ul>
            <li>Your registered email address</li>
            <li>Your Instagram username connected with Creatordesks</li>
            <li>A clear request to delete your Creatordesks account data</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>2. What Data Will Be Deleted</h2>
          <p>
            Upon receiving a verified deletion request, we will delete or
            anonymize data associated with your Creatordesks account, including:
          </p>
          <ul>
            <li>Account profile information</li>
            <li>Connected Instagram account details</li>
            <li>Stored automation rules</li>
            <li>Access tokens associated with your connected account</li>
            <li>Other service-related data linked to your account</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>3. Processing Time</h2>
          <p>
            We will process verified deletion requests within a reasonable time,
            generally within 7 to 30 business days, unless a longer retention
            period is required by law or for legitimate business purposes.
          </p>
        </section>

        <section className={styles.section}>
          <h2>4. Data We May Retain</h2>
          <p>
            We may retain limited information where required for legal, security,
            fraud prevention, dispute resolution, or compliance purposes.
          </p>
        </section>

        <section className={styles.section}>
          <h2>5. Contact</h2>
          <p>For any questions related to data deletion, please contact us at:</p>
          <p>
            Email: <a className={styles.link} href="mailto:aditya@futuredesks.in">
              aditya@futuredesks.in
            </a>
          </p>
        </section>
      </div>

      <FooterSection />
    </main>
  );
}
