import Image from "next/image";
import styles from "./SecurityWorkflowSection.module.css";

const COMPLIANCE_BADGES = [
  {
    id: "soc2",
    label: "SOC 2",
    tone: "blue",
    image: "/images/badges/badge1.svg.png",
  },
  {
    id: "gdpr",
    label: "GDPR",
    tone: "purple",
    image: "/images/badges/badge2.svg.png",
  },
  {
    id: "hippa",
    label: "HIPPA",
    tone: "green",
    image: "/images/badges/badge3.svg.png",
  },
  {
    id: "pci",
    label: "PCI DSS",
    tone: "orange",
    image: "/images/badges/badge4.svg.png",
  },
];

// SVG icons for orbit nodes
const CommentIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="8.5" cy="11" r="1" fill="white"/>
    <circle cx="12" cy="11" r="1" fill="white"/>
    <circle cx="15.5" cy="11" r="1" fill="white"/>
  </svg>
);

const DMIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path d="M22 2L11 13" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22 2l-7 20-4-9-9-4 20-7z" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const LeadIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="8" r="4" stroke="white" strokeWidth="1.8"/>
    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

const FollowUpIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="4" width="18" height="18" rx="2" stroke="white" strokeWidth="1.8"/>
    <path d="M16 2v4M8 2v4M3 10h18" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M12 14v3l2 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Card header icons
const TotalLeadsIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <circle cx="9" cy="7" r="3.5" stroke="#7c6ff7" strokeWidth="1.6"/>
    <circle cx="16" cy="8" r="2.5" stroke="#7c6ff7" strokeWidth="1.6"/>
    <path d="M2 20c0-3.3 3.1-6 7-6s7 2.7 7 6" stroke="#7c6ff7" strokeWidth="1.6" strokeLinecap="round"/>
    <path d="M19 13c2.5.5 4 2.3 4 4.5" stroke="#7c6ff7" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);

const AutomationGrowthIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" stroke="#7c6ff7" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    <polyline points="16 7 22 7 22 13" stroke="#7c6ff7" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const RecentActivityIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="9" stroke="#7c6ff7" strokeWidth="1.6"/>
    <path d="M12 7v5l3 3" stroke="#7c6ff7" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);

const SuccessIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="9" fill="#6f5bff" stroke="#6f5bff" strokeWidth="1.5"/>
    <path d="M8 12.5l2.5 2.5 5.5-5.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CheckCircleIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="9" stroke="#6f5bff" strokeWidth="1.8"/>
    <path d="M8.5 12.5l2.5 2.5 4.5-4.5" stroke="#6f5bff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ActivityCommentIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="#7c6ff7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ActivityDMIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" stroke="#7c6ff7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ActivityLeadIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="8" r="4" stroke="#7c6ff7" strokeWidth="1.8"/>
    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="#7c6ff7" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

export default function SecurityWorkflowSection() {
  return (
    <div className={styles.wrapper}>
      {/* ── Security Section ── */}
      <section className={styles.securitySection} aria-labelledby="security-title">
        <div className={styles.securityInner}>
          <span className={styles.securityBadge}>
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path 
    d="M12 3L13.5 8.5L19 10L13.5 11.5L12 17L10.5 11.5L5 10L10.5 8.5L12 3Z" 
    stroke="#6C4CFF" 
    strokeWidth="1.8" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  />
  
  <path 
    d="M18 3L18.6 4.8L20.4 5.4L18.6 6L18 7.8L17.4 6L15.6 5.4L17.4 4.8L18 3Z" 
    stroke="#6C4CFF" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  />
</svg>
            SECURITY
          </span>
          <div className={styles.securityGrid}>
            <div className={styles.securityText}>
              <h2 id="security-title">
                Creator Data Security. Built Into Every Automation.
              </h2>
              <p>
                Creatordesks is designed to keep your Instagram connection, audience
                interactions, automation rules, and business data protected while you
                grow your creator business.
              </p>
            </div>
            <div className={styles.badgeCluster} aria-label="Compliance badges">
              {COMPLIANCE_BADGES.map((badge) => (
                <div key={badge.id} className={`${styles.badgeHex} ${styles[badge.tone]}`}>
                  <Image
                    src={badge.image}
                    alt={`${badge.label} compliance badge`}
                    width={120}
                    height={120}
                    className={styles.badgeImage}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Workflow Section ── */}
      <section className={styles.workflowSection} aria-labelledby="workflow-title">
        <div className={styles.workflowInner}>
          <span className={styles.workflowBadge}>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="#6f5bff">
              <path d="M5 0l1.18 3.59H10L6.91 5.82l1.18 3.59L5 7.18l-3.09 2.23L3.09 5.82.0 3.59h3.82z"/>
            </svg>
            Our workflow
          </span>
          <h2 id="workflow-title">
            Ready to transform your creator<br />audience into real growth?
          </h2>

          <div className={styles.workflowStage}>
            {/* ── Top-left card: Total Leads ── */}
            <article className={`${styles.statCard} ${styles.topLeft}`} style={{ animationDelay: "0s" }}>
              <div className={styles.cardHeader}>
               <span className={styles.statsIcon} ><TotalLeadsIcon  /></span>  
                <span className={styles.cardTitle}>Total Leads</span>
              </div>
              <strong className={styles.cardBigNumber}>20K+</strong>
              <div className={styles.leadsBottom}>
                <span className={styles.leadsLabel}>Leads captured</span>
                <div className={styles.avatarGroup}>
                  <Image
                    className={styles.avatar}
                    src="https://i.pravatar.cc/28?img=11"
                    alt="User avatar"
                    width={26}
                    height={26}
                  />
                  <Image
                    className={styles.avatar}
                    src="https://i.pravatar.cc/28?img=22"
                    alt="User avatar"
                    width={26}
                    height={26}
                  />
                  <Image
                    className={styles.avatar}
                    src="https://i.pravatar.cc/28?img=33"
                    alt="User avatar"
                    width={26}
                    height={26}
                  />
                </div>
              </div>
            </article>

            {/* ── Top-right card: Automation Growth ── */}
            <article className={`${styles.statCard} ${styles.topRight}`} style={{ animationDelay: "0.4s" }}>
              <div className={styles.cardHeader}>
               <span className={styles.statsIcon} ><AutomationGrowthIcon /></span> 
                <span className={styles.cardTitle}>Automation Growth</span>
              </div>
              <strong className={styles.cardBigNumber}>68%</strong>
              <p className={styles.cardSubtext}>More replies handled automatically</p>
              <div className={styles.progressWrap}>
                <div className={styles.progressBar} />
                <span className={styles.progressLabel}>68%</span>
              </div>
            </article>

            {/* ── Bottom-left card: Recent Activity ── */}
            <article className={`${styles.statCard} ${styles.bottomLeft}`} style={{ animationDelay: "0.8s" }}>
              <div className={styles.cardHeader}>
              <span className={styles.statsIcon} ><RecentActivityIcon /></span>  
                <span className={styles.cardTitle}>Recent Activity</span>
              </div>
              <ul className={styles.activityList}>
                <li>
                  <span className={styles.activityDot}><ActivityCommentIcon /></span>
                  Comment keyword matched
                </li>
                <li>
                  <span className={styles.activityDot}><ActivityDMIcon /></span>
                  DM sent successfully
                </li>
                <li>
                  <span className={styles.activityDot}><ActivityLeadIcon /></span>
                  Lead captured
                </li>
              </ul>
            </article>

            {/* ── Bottom-right card: Success ── */}
            <article className={`${styles.statCard} ${styles.bottomRight}`} style={{ animationDelay: "1.2s" }}>
              <div className={styles.cardHeader}>
               <span className={styles.statsIcon} ><SuccessIcon /></span> 
                <span className={styles.cardTitleSuccess}>Success</span>
              </div>
              <ul className={styles.successList}>
                <li>
                  <CheckCircleIcon />
                  Automation completed
                </li>
                <li>
                  <CheckCircleIcon />
                  User received product link
                </li>
              </ul>
            </article>

            {/* ── Center Orbit Diagram ── */}
            <div className={styles.orbitArea}>
              {/* Outer ring */}
              <div className={styles.outerRing} />
              {/* Inner dashed ring */}
              <div className={styles.innerRing} />

              {/* Orbit nodes */}
              {/* Comment — left-top */}
              <div className={`${styles.orbitNode} ${styles.nodeComment}`} style={{ animationDelay: "0s" }}>
                <CommentIcon />
              </div>
              <span className={`${styles.nodeLabel} ${styles.labelComment}`}>Comment</span>

              {/* DM — right-top */}
              <div className={`${styles.orbitNode} ${styles.nodeDM}`} style={{ animationDelay: "0.3s" }}>
                <DMIcon />
              </div>
              <span className={`${styles.nodeLabel} ${styles.labelDM}`}>DM</span>

              {/* Lead — left-bottom */}
              <div className={`${styles.orbitNode} ${styles.nodeLead}`} style={{ animationDelay: "0.6s" }}>
                <LeadIcon />
              </div>
              <span className={`${styles.nodeLabel} ${styles.labelLead}`}>Lead</span>

              {/* Follow-up — right-bottom */}
              <div className={`${styles.orbitNode} ${styles.nodeFollowUp}`} style={{ animationDelay: "0.9s" }}>
                <FollowUpIcon />
              </div>
              <span className={`${styles.nodeLabel} ${styles.labelFollowUp}`}>Follow-up</span>

              {/* Center logo */}
              <div className={styles.centerBox}>
                <div className={styles.centerIconWrap}>
                  <Image
                    src="/images/icons/icon.png"
                    alt="Creatordesks"
                    width={52}
                    height={52}
                    className={styles.centerLogoImg}
                  />
                </div>
                <p className={styles.centerLabel}>Creatordesks</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
