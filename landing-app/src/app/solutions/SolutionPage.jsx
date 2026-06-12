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
    back:  "/images/Solution/Background+Border+Shadow.png",
    front: "/images/Solution/Background+Border+Shadow(1).png",
    title: "Replies to Comments Instantly",
    desc: "Streamline your operations through intelligent workflow automation that saves time, reduces errors, and boosts productivity.",
  },
  {
    back:  "/images/Solution/Background+Border+Shadow(2).png",
    front: "/images/Solution/Background+Border+Shadow(3).png",
    title: "Send Automated DMs",
    desc: "Transform raw engagement into strategic results using advanced automation, dashboards, and predictive messaging.",
  },
  {
    back:  "/images/Solution/Background+Border+Shadow(4).png",
    front: "/images/Solution/Background+Border+Shadow(5).png",
    title: "Conversation with Followers",
    desc: "We guide your audience through full-scale digital engagement — modernizing how you connect and convert at scale.",
  },
  {
    circles: "/images/Solution/CircleBorder.png",
    chips: [
      "/images/Solution/Background+Border+Shadow(8).png",
      "/images/Solution/Background+Border+Shadow(7).png",
      "/images/Solution/Background+Border+Shadow(6).png",
    ],
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
        {/* Background clipped separately so navbar dropdown is NOT clipped */}
        <div className={styles.heroBgWrap} aria-hidden="true">
          <Image
            src="/images/Solution/bg.webp"
            alt=""
            fill
            priority
            className={styles.heroBg}
            sizes="100vw"
          />
        </div>
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
          <a href="#" className={styles.heroCta}> 
             <Image src="https://ik.imagekit.io/Creatordesks/CD%20Landing%20Page/images/Hero%20section/stars.png?updatedAt=1781235141589" className={styles.starIcon} width={25} height={25} alt="" /> TRY FOR FREE</a>
        </div>
      </div>

      {/* ── Problem ── */}
      <section className={styles.problemSection} aria-labelledby="problem-title">
        <div className={styles.inner}>
          <div className={styles.sectionHead}>
            <span className={`${styles.badge} ${styles.badgeProblem}`}>
              <span className={styles.badgeIcon} aria-hidden="true"><img src="/images/Solution/problemicon.png" alt="" /></span>
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
              <span className={styles.badgeIcon} aria-hidden="true"> <img src="/images/Solution/soluicon.png" alt="" /> </span>
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
            {FEATURES.map((f, i) => (
              <article key={f.title} className={styles.featureCard}>
                <div className={styles.featureImgWrap}>
                  {f.circles ? (
                    /* Card 4 — circles + floating chips */
                    <>
                      <Image src={f.circles} alt="" width={280} height={280} className={styles.img4Circles} />
                      <Image src={f.chips[0]} alt="Lindsey Press" width={180} height={48} className={styles.img4Chip1} />
                      <Image src={f.chips[1]} alt="Ann Stanton"   width={170} height={48} className={styles.img4Chip2} />
                      <Image src={f.chips[2]} alt="Livia Curtis"  width={160} height={48} className={styles.img4Chip3} />
                    </>
                  ) : (
                    /* Cards 1–3 — two overlapping UI images */
                    <>
                      <Image src={f.back}  alt=""      width={220} height={200} className={`${styles.featureImgBack}  ${styles[`imgBack${i + 1}`]}`}  />
                      <Image src={f.front} alt={f.title} width={260} height={220} className={`${styles.featureImgFront} ${styles[`imgFront${i + 1}`]}`} />
                    </>
                  )}
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
        <div className={styles.comparisonGlow} aria-hidden="true" />
        <div className={styles.inner}>
          <div className={styles.sectionHead}>
            <span className={`${styles.badge} ${styles.badgeWhite}`}>
              <span className={styles.badgeIcon} aria-hidden="true"> <img src="/images/Solution/soluicon.png" alt="" /> </span>
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

          <div className={styles.comparisonLayout}>
            {/* Col 1: floating label pills */}
            <div className={styles.comparisonLabels} aria-hidden="true">
              <div className={styles.labelSpacer} />
              {COMPARISON_ROWS.map((row) => (
                <div key={row.feature} className={styles.labelOuter}>
                  <div className={styles.labelInner}>{row.feature}</div>
                </div>
              ))}
            </div>

            {/* Col 2: Without Creatordesks card */}
            <div className={styles.comparisonCardWithout}>
              <div className={styles.comparisonCardHead}>
                Without Creatordesks
              </div>
              {COMPARISON_ROWS.map((row, i) => (
                <div
                  key={row.feature}
                  className={`${styles.comparisonCardRow} ${i < COMPARISON_ROWS.length - 1 ? styles.rowDivider : ""}`}
                >
                  {row.without}
                </div>
              ))}
            </div>

            {/* Col 3: Creatordesks card */}
            <div className={styles.comparisonCardCreator}>
              <div className={`${styles.comparisonCardHead} ${styles.creatorHead}`}>
                <Image
                  src="/images/icons/icon.png"
                  alt=""
                  width={30}
                  height={30}
                />
                Creatordesks
              </div>
              {COMPARISON_ROWS.map((row, i) => (
                <div
                  key={row.feature}
                  className={`${styles.comparisonCardRow} ${styles.creatorRow} ${i < COMPARISON_ROWS.length - 1 ? styles.rowDivider : ""}`}
                >
                  {row.with}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

     <span className={styles.faqsec} ><FAQSection /></span> 
      <FooterSection />
    </main>
  );
}
