"use client";

import { useState } from "react";
import styles from "./FAQSection.module.css";

const FAQ_ITEMS = [
  {
    id: "faq-1",
    question: "What is Creatordesks and how we can use it?",
    answer:
      "Creatordesks is an Instagram DM automation platform that uses Meta's official API to help creators, coaches, and brands automatically respond to comments, story replies, and keyword messages — turning every interaction into a lead or sale.",
  },
  {
    id: "faq-2",
    question: "How to setup DM automation?",
    answer:
      "Connect your Instagram Business or Creator account, set a trigger keyword, write your DM message, and activate the flow. When someone triggers the automation, Creatordesks sends a personalized DM instantly through Meta's official API.",
  },
  {
    id: "faq-3",
    question: "How to setup Story Reply automation?",
    answer:
      "Go to your dashboard, create a new flow and select 'Story Reply' as the trigger type. Choose which story to target (or apply it to all), write your automated reply message, and activate. Anyone who replies to your story will receive your message automatically.",
  },
  {
    id: "faq-4",
    question: "What is the difference between Automation and Rewind?",
    answer:
      "Automation handles real-time triggers — when someone comments, sends a keyword DM, or replies to a story. Rewind lets you re-engage past followers and leads by sending targeted follow-up messages to people who previously interacted with your content.",
  },
  {
    id: "faq-5",
    question: "How to use the Rewind Feature?",
    answer:
      "Navigate to the Rewind section in your dashboard, select the audience segment (e.g. past commenters, story viewers), compose your re-engagement message, and schedule or send immediately. Rewind helps you recover lost leads and revive dormant conversations.",
  },
];

export default function FAQSection() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => setOpenId((current) => (current === id ? null : id));

  return (
    <section className={styles.section} aria-labelledby="faq-title">
      <div className={styles.inner}>
        <div className={styles.heading}>
          <h2 id="faq-title" className={styles.title}>
            Frequently Asked Questions
          </h2>
          <p className={styles.subtitle}>
            Common questions about CreatorFlow, pricing, and Instagram DM automation.
          </p>
        </div>

        <div className={styles.list}>
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id} className={styles.faqItem}>
                <button
                  type="button"
                  className={styles.faqRow}
                  onClick={() => toggle(item.id)}
                  aria-expanded={isOpen}
                >
                  <span className={styles.question}>{item.question}</span>
                  <span
                    className={`${styles.plus} ${isOpen ? styles.plusOpen : ""}`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>

                <div
                  className={`${styles.faqAnswer} ${isOpen ? styles.faqAnswerOpen : ""}`}
                  aria-hidden={!isOpen}
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
