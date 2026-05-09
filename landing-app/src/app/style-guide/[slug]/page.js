import { notFound } from "next/navigation";
import { connectDB } from "@/lib/mongodb";
import Guide from "@/lib/models/Guide";
import GuideView from "./GuideView";

export const revalidate = 60;

export async function generateStaticParams() {
  try {
    await connectDB();
    const guides = await Guide.find({ published: true }).select("slug").lean();
    return guides.map((g) => ({ slug: g.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  try {
    await connectDB();
    const guide = await Guide.findOne({ slug, published: true }).lean();
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
  } catch {
    return {};
  }
}

export default async function GuidePage({ params }) {
  const { slug } = await params;

  let guide, related;
  try {
    await connectDB();
    guide = await Guide.findOne({ slug, published: true }).lean();
    if (!guide) notFound();

    const relatedRaw = await Guide.find({ slug: { $ne: slug }, published: true })
      .limit(3)
      .lean();

    guide = {
      ...guide,
      _id: guide._id.toString(),
      createdAt: guide.createdAt?.toISOString() ?? null,
      updatedAt: guide.updatedAt?.toISOString() ?? null,
    };

    related = relatedRaw.map((g) => ({
      ...g,
      _id: g._id.toString(),
      createdAt: g.createdAt?.toISOString() ?? null,
      updatedAt: g.updatedAt?.toISOString() ?? null,
    }));
  } catch {
    notFound();
  }

  return <GuideView guide={guide} related={related} />;
}
