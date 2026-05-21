import SolutionPage from "./SolutionPage";

export const metadata = {
  title: "Solutions | Creatordesks — Turn Content into Conversations & Revenue",
  description:
    "Discover how Creatordesks helps creators and businesses turn Instagram engagement into real leads and revenue through automated DM funnels, comment replies, and smart automation.",
  keywords: [
    "Instagram DM automation",
    "creator tools",
    "DM funnel",
    "comment automation",
    "lead capture Instagram",
    "Creatordesks solution",
  ],
  openGraph: {
    title: "Solutions | Creatordesks",
    description:
      "Turn your Instagram content into conversations, leads, and revenue with Creatordesks automation.",
    type: "website",
    images: [{ url: "/images/Solution/solu-bg.webp", alt: "Creatordesks Solutions" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solutions | Creatordesks",
    description:
      "Turn your Instagram content into conversations, leads, and revenue.",
    images: ["/images/Solution/solu-bg.webp"],
  },
  alternates: { canonical: "/solutions" },
};

export default function SolutionsPage() {
  return <SolutionPage />;
}
