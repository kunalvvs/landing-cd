import Image from "next/image";
import Navbar from "@/components/ui/Navbar";
import FAQSection from "@/components/sections/faq/FAQSection";
import FooterSection from "@/components/sections/footer/FooterSection";
import styles from "./solution.module.css";

const PROBLEMS = [
  {
    img: "/images/Solution/image1.png",
    title: "Views without engagement",
    desc: "Creators get reach, but struggle to turn attention into real conversations and community.",
  },
  {
    img: "/images/Solution/image2.png",
    title: "Likes without loyalty",
    desc: "Content performs well but followers rarely become long-term audience or customers.",
  },
  {
    img: "/images/Solution/image3.png",
    title: "Lost Leads in comments",
    desc: "Potential buyers ask questions in comments, but most opportunities are missed or forgotten.",
  },
  {
    img: "/images/Solution/image4.png",
    title: "Manual DM Burnout",
    desc: "Replying to every DM manually becomes overwhelming as audience size grows.",
  },
];

const FEATURES = [
  {
    img: "/images/Solution/image1.png",
    title: "Replies to Comments Instantly",
    desc: "Streamline your operations through intelligent workflow automation that saves time, reduces errors, and boosts productivity.",
  },
  {
    img: "/images/Solution/image2.png",
    title: "Send Automated DMs",
    desc: "Transform raw engagement into strategic results using advanced automation, dashboards, and predictive messaging.",
  },
  {
    img: "/images/Solution/image3.png",
    title: "Conversation with Followers",
    desc: "We guide your audience through full-scale digital engagement — modernizing how you connect and convert at scale.",
  },
  {
    img: "/images/Solution/image4.png",
    title: "Keep Users Engaged with your Content",
    desc: "Combine data and design to deliver smarter, more personalized digital experiences that connect with your users.",
  },
];

const COMPARISON_ROWS = [
  { feature: "DM Automation",       without: "Not Possible",   with: "Intelligent Automation" },
  { feature: "Lead Capture",        without: "Easily Missed",   with: "Built-In System" },
  { feature: "Community Scaling",   without: "Hard to Manage",  with: "Scalable Engagement" },
  { feature: "Reply Management",    without: "Manual Replies",  with: "Smart Reply Setup" },
  { feature: "Comment-to-DM Funnels", without: "Manual Process", with: "Automated" },
];

export default function SolutionPage() {
  return (
    <main className={styles.page}>

      {/* ── Hero ── */}
      <div className={styles.heroWrap}>
        <Image
          src="/images/Solution/solu-bg.webp"
          alt=""
          fill
          priority
          className={styles.heroBg}
          sizes="100vw"
        />
        <div className={styles.heroNav}>
          <Navbar />
        </div>
        <div className={styles.heroContent}>
          <span className={styles.heroBadge}>Solution</span>
          <h1 className={styles.heroTitle}>
            Turn your Content into<br />
            Conversations, Leads &amp; Revenue
          </h1>
          <p className={styles.heroSubtitle}>
            Solutions That Actually Grow Creators &amp; Businesses. Stop getting only
            views. Start building engagement, conversations, leads, and revenue
            with CreatorDesk.
          </p>
          <a href="#" className={styles.heroCta}>TRY FOR FREE</a>
        </div>
      </div>

      {/* ── Problem ── */}
      <section className={styles.problemSection} aria-labelledby="problem-title">
        <div className={styles.inner}>
          <div className={styles.sectionHead}>
            <span className={`${styles.badge} ${styles.badgeProblem}`}>
              <span className={styles.badgeIcon} aria-hidden="true"><img src="/images/solution/problemicon.png" alt="" /></span>
              The Problem
            </span>
            <h2 id="problem-title" className={styles.sectionTitle}>
              The Problem With{" "}
              <span className={styles.accentRed}>Traditional Content</span>{" "}
              Growth
            </h2>
            <p className={styles.sectionSubtitle}>
              Most business and creator face this same problem and challenge that
              slow down their growth.
            </p>
          </div>

          <div className={styles.problemGrid}>
            {PROBLEMS.map((p) => (
              <article key={p.title} className={styles.problemCard}>
                <div className={styles.problemImgWrap}>
                  <Image
                    src={p.img}
                    alt={p.title}
                    width={180}
                    height={160}
                    className={styles.problemImg}
                  />
                </div>
                <h3 className={styles.cardTitle}>{p.title}</h3>
                <p className={styles.cardDesc}>{p.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Solution Features ── */}
      <section className={styles.featuresSection} aria-labelledby="solution-title">
        <div className={styles.inner}>
          <div className={styles.sectionHead}>
            <span className={`${styles.badge} ${styles.badgeSolution}`}>
              <span className={styles.badgeIcon} aria-hidden="true"> <img src="/images/solution/soluicon.png" alt="" /> </span>
              The Solution
            </span>
            <h2 id="solution-title" className={styles.sectionTitle}>
              A Smarter Way to{" "}
              <span className={styles.accentPurple}>Create,<br />Engage </span> , and <span className={styles.accentPurple} >Convert</span> 
            </h2>
            <p className={styles.sectionSubtitle}>
              Create content faster, automate conversations smarter, and convert
              audience attention into real leads all from one connected creator
              workspace.
            </p>
          </div>

          <div className={styles.featuresGrid}>
            {FEATURES.map((f) => (
              <article key={f.title} className={styles.featureCard}>
                <div className={styles.featureImgWrap}>
                  <Image
                    src={f.img}
                    alt={f.title}
                    width={220}
                    height={180}
                    className={styles.featureImg}
                  />
                </div>
                <div className={styles.featureBody}>
                  <h3 className={styles.featureTitle}>{f.title}</h3>
                  <p className={styles.featureDesc}>{f.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Comparison ── */}
      <section className={styles.comparisonSection} aria-labelledby="comparison-title">
        <div className={styles.inner}>
          <div className={styles.sectionHead}>
            <span className={`${styles.badge} ${styles.badgeDark}`}>
              The Solution
            </span>
            <h2 id="comparison-title" className={styles.comparisonTitle}>
              The Difference is Real
            </h2>
            <p className={styles.comparisonSubtitle}>
              Create content faster, automate conversations smarter, and convert
              audience attention into real leads all from one connected creator
              workspace.
            </p>
          </div>

          <div className={styles.comparisonCard}>
            {/* Column headers */}
            <div className={styles.comparisonHeader}>
              <div className={styles.comparisonHeaderFeature} />
              <div className={styles.comparisonHeaderWithout}>
                Without Creatordesks
              </div>
              <div className={styles.comparisonHeaderWith}>
                <Image
                  src="/images/icons/logo.png"
                  alt="Creatordesks logo"
                  width={22}
                  height={22}
                />
                Creatordesks
              </div>
            </div>

            {/* Rows */}
            {COMPARISON_ROWS.map((row, i) => (
              <div
                key={row.feature}
                className={`${styles.comparisonRow} ${i % 2 === 0 ? styles.comparisonRowAlt : ""}`}
              >
                <div className={styles.comparisonFeature}>{row.feature}</div>
                <div className={styles.comparisonWithout}>{row.without}</div>
                <div className={styles.comparisonWith}>{row.with}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection />
      <FooterSection />
    </main>
  );
}
