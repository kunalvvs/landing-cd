import Image from "next/image";
import styles from "./BlogSection.module.css";

const POSTS = [
  {
    id: "analytics",
    image: "/images/blog-img/blog1.webp.png",
    imageAlt: "Layered analytics card",
    tags: ["Financial"],
    title: "How real-time analytics can revolutionize your financial strategy",
    excerpt:
      "Perfect for small businesses or startups, our Starter Plan gives you the essential tools to manage your finances with ease.",
  },
  {
    id: "nicepay",
    image: "/images/blog-img/Border.png",
    imageAlt: "Nicepay product tile",
    tags: ["Financial", "Tips"],
    title: "Simplify and empower your financial management with Nicepay",
    excerpt:
      "In today's fast-paced business world, keeping up with financial management can be overwhelming.",
  },
  {
    id: "payments",
    image: "/images/blog-img/blog3.webp.png",
    imageAlt: "Income and total users cards",
    tags: ["Financial", "Tips"],
    title: "The importance of streamlining business payments",
    excerpt:
      "In this blog, discuss how businesses can improve efficiency by using automated payment systems.",
  },
];

export default function BlogSection() {
  return (
    <section className={styles.section} aria-labelledby="blog-title">
      <div className={styles.inner}>
        <span className={styles.badge}>Blog</span>
        <h2 id="blog-title" className={styles.title}>
          Maximizing the value of business <span>data</span>
        </h2>
        <p className={styles.subtitle}>
          Our provide valuable insights, and establish your brand as a thought
          leader in the financial space.
        </p>

        <div className={styles.grid}>
          {POSTS.map((post) => (
            <article key={post.id} className={styles.card}>
              <div className={styles.media}>
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  width={640}
                  height={460}
                  className={styles.mediaImage}
                />
              </div>

              <div className={styles.tags}>
                {post.tags.map((tag) => (
                  <span key={`${post.id}-${tag}`} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>

              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <button type="button" className={styles.readMore}>
                Read More
              </button>
            </article>
          ))}
        </div>

        <button type="button" className={styles.learnMore}>
          Learn more
        </button>
      </div>
    </section>
  );
}
