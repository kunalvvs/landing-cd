"use client";
import { useMemo, useState } from "react";
import Navbar from "@/components/ui/Navbar";
import FooterSection from "@/components/sections/footer/FooterSection";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaArrowTrendUp } from "react-icons/fa6";
import { MdOutlineSettings } from "react-icons/md";
import { RiLightbulbFill } from "react-icons/ri";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { IoRocketOutline } from "react-icons/io5";
import { FaShield } from "react-icons/fa6";
import { TbApiAppOff } from "react-icons/tb";
import { FaMapMarkedAlt } from "react-icons/fa";



import styles from "./page.module.css";

const TABS = [
  "All Guides",
  "Getting Started",
  "Strategy",
  "Advanced",
  "How-To",
  "Niche Guides",
];

const GUIDES = [
  {
    id: "01",
    category: "Getting Started",
    title: "What is Instagram DM Automation?",
    description:
      "Learn the fundamentals of DM automation, how it works through Meta's official API, and why it’s different from unreliable bots.",
    readTime: "12 min read",
  },
  {
    id: "02",
    category: "Strategy",
    title: "Why DM Automation Works",
    description:
      "Discover the 6 data-backed reasons why DM automation converts better than traditional lead capture funnels.",
    readTime: "10 min read",
  },
  {
    id: "03",
    category: "Getting Started",
    title: "How DM Automation Works",
    description:
      "Understand the technical workflow: triggers, conditions, actions, and how messages are sent through Meta’s APIs.",
    readTime: "7 min read",
  },
  {
    id: "04",
    category: "Strategy",
    title: "9 Ways Creators Use DM Automation",
    description:
      "Real-world use cases: affiliate links, lead magnets, coaching bookings, e-commerce, giveaways, and more.",
    readTime: "12 min read",
  },
  {
    id: "05",
    category: "Advanced",
    title: "Manual vs Automated DMs",
    description:
      "A detailed comparison of manual messaging vs automation. Plus: 2026 trends shaping the future of Instagram DM automation.",
    readTime: "9 min read",
  },
  {
    id: "06",
    category: "Getting Started",
    title: "Getting Started: Step-by-Step Guide",
    description:
      "Everything you need to set up your first automation: free tools, prerequisites, implementation steps, and troubleshooting tips.",
    readTime: "15 min read",
  },
  {
    id: "07",
    category: "Getting Started",
    title: "Is Instagram DM Automation Safe?",
    description:
      "Meta API vs unauthorized bots: understand the safety difference. Learn how to automate DMs without risking your account.",
    readTime: "12 min read",
  },
  {
    id: "08",
    category: "Advanced",
    title: "Meta API vs Instagram Bots",
    description:
      "Official Meta API automation vs third-party bots. Risks, compliance, and why API method matters for your account safety.",
    readTime: "8 min read",
  },
  {
    id: "09",
    category: "Strategy",
    title: "Instagram DM Marketing Strategy",
    description:
      "Build a DM marketing strategy that converts followers into customers. Campaign types, trigger selection, and performance tracking.",
    readTime: "10 min read",
  },
];

const FAQS = [
  {
    id: "faq-1",
    question: "What is Instagram DM automation?",
    answer:
      "Instagram DM automation allows you to automatically send messages based on triggers like comments, story replies, or keywords using Meta-approved APIs.",
  },
  {
    id: "faq-2",
    question: "Is Instagram DM automation safe?",
    answer:
      "Yes. When you use Meta’s official API, automation is compliant and safe. Avoid third-party bots that violate platform policies.",
  },
  {
    id: "faq-3",
    question: "How is DM automation different from spam bots?",
    answer:
      "Legit automation follows opt-in, approved messaging windows, and platform policies. Spam bots bypass rules and put accounts at risk.",
  },
  {
    id: "faq-4",
    question: "What can I automate with Instagram DMs?",
    answer:
      "You can automate replies for comments, story interactions, keyword triggers, lead capture, and follow-up sequences.",
  },
  {
    id: "faq-5",
    question: "Do I need technical skills to set up DM automation?",
    answer:
      "No. Modern tools provide templates and guided steps so you can launch automations without code.",
  },
  {
    id: "faq-6",
    question: "What’s the best DM automation tool for Instagram?",
    answer:
      "The best tool is one that uses Meta’s official API, offers templates, analytics, and makes setup simple for your workflow.",
  },
  {
    id: "faq-7",
    question: "How much does Instagram DM automation cost?",
    answer:
      "Costs vary by provider and message volume, but most plans start with affordable monthly tiers and scale with usage.",
  },
  {
    id: "faq-8",
    question: "Can DM automation collect emails?",
    answer:
      "Yes. Many tools can collect emails with consent and pass them into your CRM or email platform.",
  },
  {
    id: "faq-9",
    question: "What’s the difference between comment-to-DM and keyword automation?",
    answer:
      "Comment-to-DM triggers when someone comments on a post. Keyword automation triggers when a specific word is used in comments or DMs.",
  },
  {
    id: "faq-10",
    question: "Do I need a business or creator account for DM automation?",
    answer:
      "Yes. Meta requires a Business or Creator account to access the official messaging API.",
  },
  {
    id: "faq-11",
    question: "How do I get started with DM automation?",
    answer:
      "Pick a goal, connect your account, choose a trigger, write your DM message, and launch your automation in minutes.",
  },
];

export const metadata = {
  title: "Instagram DM Automation Guides | Creatordesks",
  description:
    "Browse the complete guide collection for Instagram DM automation strategies, tutorials, and best practices.",
};

export default function StyleGuidePage() {
  const [activeTab, setActiveTab] = useState(TABS[0]);
  const [openFaq, setOpenFaq] = useState(FAQS[0].id);

  const filteredGuides = useMemo(() => {
    if (activeTab === "All Guides") return GUIDES;
    return GUIDES.filter((guide) => guide.category === activeTab);
  }, [activeTab]);

  return (
    <main className={styles.page}>
      <div className={styles.shell}>
       <span className={styles.navBar}><Navbar /></span>  
        <section className={styles.hero}>
          <p className={styles.eyebrow}>COMPLETE GUIDE COLLECTION</p>
          <h1 className={styles.title}>Instagram DM Automation Guides</h1>
          <p className={styles.subtitle}>
            Everything you need to master Instagram DM automation. From beginner
            fundamentals to advanced strategies for turning engagement into
            revenue.
          </p>
          <a href="#guides" className={styles.primaryButton}>
            Browse Guides
          </a>

          <div className={styles.tabs} role="tablist" aria-label="Guide filters">
            {TABS.map((tab) => (
              <button
                key={tab}
                type="button"
                role="tab"
                aria-selected={activeTab === tab}
                className={`${styles.tab} ${
                  activeTab === tab ? styles.tabActive : ""
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </section>
      </div>

      <section id="guides" className={styles.guidesSection}>
        <div className={styles.guidesGrid}>
          {filteredGuides.map((guide) => (
            <a key={guide.id} href="#" className={styles.guideCard}>
              <div className={styles.cardTop}>
                <span className={styles.cardNumber}>{guide.id}</span>
                <span className={styles.cardIcon} aria-hidden="true">
                  {guide.id === "01" && <IoIosInformationCircleOutline />
 }
                  {guide.id === "02" && <FaArrowTrendUp />
 }
                  {guide.id === "03" && <MdOutlineSettings />
  }
                  {guide.id === "04" && <RiLightbulbFill />
 }
                  {guide.id === "05" && <FaArrowRightArrowLeft />
}
                  {guide.id === "06" && <IoRocketOutline />
}
                  {guide.id === "07" && <FaShield />
}
                  {guide.id === "08" &&<TbApiAppOff />
 }
                  {guide.id === "09" && <FaMapMarkedAlt />
 }
                </span>
              </div>
              <div className={styles.cardBody}>
                <span className={styles.cardTag}>{guide.category}</span>
                <h3 className={styles.cardTitle}>{guide.title}</h3>
                <p className={styles.cardDescription}>{guide.description}</p>
                <div className={styles.cardMeta}>
                  <span>{guide.readTime}</span>
                  <span className={styles.cardCta}>Read Guide</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
        <div className={styles.faqList}>
          {FAQS.map((item) => {
            const isOpen = openFaq === item.id;
            return (
              <div
                key={item.id}
                className={`${styles.faqItem} ${isOpen ? styles.faqOpen : ""}`}
              >
                <button
                  type="button"
                  className={styles.faqButton}
                  onClick={() =>
                    setOpenFaq((current) =>
                      current === item.id ? "" : item.id
                    )
                  }
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  <span className={styles.faqIcon} aria-hidden="true">
                    +
                  </span>
                </button>
                <div
                  className={styles.faqContent}
                  aria-hidden={!isOpen}
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.ctaCard}>
          <div className={styles.ctaContent}>
            <h2>
              Get started with <span>CreatorDesk</span> today
            </h2>
            <p>
              Join 14,000+ creators and brands using CreatorDesk to turn every
              comment into a conversation. Get started in under 5 minutes.
            </p>
            <a href="#" className={styles.ctaButton}>
              Start for Free
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
