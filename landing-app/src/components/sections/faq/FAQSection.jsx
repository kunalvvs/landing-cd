"use client";

import { useState } from "react";
import styles from "./FAQSection.module.css";

const FAQ_ITEMS = [
  {
    id: "faq-1",
    question: "What is Creatordesks?",
    answer:
      "Creatordesks is an Instagram DM automation platform that uses Meta's official API to help creators, coaches, and brands automatically respond to comments, story replies, and keyword messages — turning every interaction into a lead or sale.",
  },
  {
    id: "faq-2",
    question: "What types of businesses can use Creatordesks?",
    answer:
      "Any business with an Instagram presence can benefit — content creators, e-commerce brands, coaches, course sellers, service providers, and local businesses. If you post content and get comments or DMs, Creatordesks helps you convert that engagement automatically.",
  },
  {
    id: "faq-3",
    question: "How does Creatordesks work?",
    answer:
      "You connect your Instagram Business or Creator account, set a trigger (e.g. a comment keyword), write your DM message, and activate the flow. When someone triggers the automation, Creatordesks sends them a personalized DM instantly through Meta's official API.",
  },
  {
    id: "faq-4",
    question: "What platforms can I use Creatordesks for?",
    answer:
      "Creatordesks currently supports Instagram via Meta's official Messenger API. This covers Instagram posts, Reels, Stories, and direct messages.",
  },
  {
    id: "faq-5",
    question: "Is Instagram DM automation safe for my account?",
    answer:
      "Yes. Creatordesks uses Meta's official API — the same infrastructure Instagram itself uses. We never ask for your password, and all automations are fully compliant with Instagram's platform policies.",
  },
  {
    id: "faq-6",
    question: "How are my automations managed?",
    answer:
      "You manage everything from the Creatordesks dashboard. Create flows, set triggers, write messages, and monitor performance — all in one place. Changes go live instantly without any coding required.",
  },
  {
    id: "faq-7",
    question: "Can I run multiple automations at once?",
    answer:
      "Yes. You can run multiple automation flows simultaneously — for example, a comment-to-DM flow for one post and a keyword trigger for direct inquiries, running in parallel without conflicts.",
  },
  {
    id: "faq-8",
    question: "How will I know if my automations are working?",
    answer:
      "Creatordesks provides analytics for every flow: messages sent, open rate, click rate, and conversions. You can see exactly which automations are driving results and optimize accordingly.",
  },
  {
    id: "faq-9",
    question: "How do I get started with Creatordesks?",
    answer:
      "Sign up, connect your Instagram Business or Creator account through the onboarding flow, and build your first automation in under 5 minutes. No technical skills needed.",
  },
];

export default function FAQSection() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => setOpenId((current) => (current === id ? null : id));

  return (
    <section className={styles.section} aria-labelledby="faq-title">
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.leftColumn}>
            <h2 id="faq-title">Frequently Asked Questions</h2>
            <p>
              Don&apos;t see the answer you&apos;re looking for?{" "}
              <a href="#">Get in touch</a>
            </p>
          </div>

          <div className={styles.rightColumn}>
            {FAQ_ITEMS.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  className={`${styles.faqItem} ${isOpen ? styles.faqItemOpen : ""}`}
                >
                  <button
                    type="button"
                    className={styles.faqRow}
                    onClick={() => toggle(item.id)}
                    aria-expanded={isOpen}
                  >
                    <span>{item.question}</span>
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
      </div>
    </section>
  );
}
