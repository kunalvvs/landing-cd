import { GUIDES } from "./style-guide/guidesData";

const BASE_URL = "https://creatordesks.com";

const STATIC_PAGES = [
  { url: "/",                    priority: 1.0, changeFrequency: "weekly"  },
  { url: "/pricing",             priority: 0.9, changeFrequency: "monthly" },
  { url: "/solutions",           priority: 0.8, changeFrequency: "monthly" },
  { url: "/contact",             priority: 0.7, changeFrequency: "monthly" },
  { url: "/style-guide",         priority: 0.7, changeFrequency: "weekly"  },
  { url: "/privacy-policy",      priority: 0.3, changeFrequency: "yearly"  },
  { url: "/terms-of-condition",  priority: 0.3, changeFrequency: "yearly"  },
  { url: "/cookie-policy",       priority: 0.3, changeFrequency: "yearly"  },
  { url: "/data-deletion",       priority: 0.3, changeFrequency: "yearly"  },
];

async function getGuideSlugs() {
  try {
    const { connectDB } = await import("@/lib/mongodb");
    const { default: Guide } = await import("@/lib/models/Guide");
    await connectDB();
    const guides = await Guide.find({ published: true }, { slug: 1, updatedAt: 1 }).lean();
    return guides.map((g) => ({ slug: g.slug, lastModified: g.updatedAt ?? new Date() }));
  } catch {
    // Fallback to static data if DB is unavailable at build time
    return GUIDES.map((g) => ({ slug: g.slug, lastModified: new Date() }));
  }
}

export default async function sitemap() {
  const now = new Date();

  const staticEntries = STATIC_PAGES.map(({ url, priority, changeFrequency }) => ({
    url: `${BASE_URL}${url}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));

  const guideSlugs = await getGuideSlugs();
  const guideEntries = guideSlugs.map(({ slug, lastModified }) => ({
    url: `${BASE_URL}/style-guide/${slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...guideEntries];
}
