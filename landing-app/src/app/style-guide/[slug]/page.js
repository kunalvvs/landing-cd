import { notFound } from "next/navigation";
import { GUIDES } from "../guidesData";
import GuideView from "./GuideView";

export async function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const guide = GUIDES.find((g) => g.slug === slug);
  if (!guide) return {};
  return {
    title: `${guide.title} | Creatordesks`,
    description: guide.description,
    openGraph: {
      title: `${guide.title} | Creatordesks`,
      description: guide.description,
      images: [{ url: guide.image }],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${guide.title} | Creatordesks`,
      description: guide.description,
    },
  };
}

export default async function GuidePage({ params }) {
  const { slug } = await params;
  const guide = GUIDES.find((g) => g.slug === slug);
  if (!guide) notFound();

  const related = GUIDES.filter((g) => g.slug !== slug).slice(0, 3);

  return <GuideView guide={guide} related={related} />;
}
