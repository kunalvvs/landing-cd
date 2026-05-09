import { connectDB } from "@/lib/mongodb";
import Guide from "@/lib/models/Guide";
import StyleGuideClient from "./StyleGuideClient";

export const revalidate = 60;

export const metadata = {
  title: "Instagram DM Automation Guides | Creatordesks",
  description: "Browse the complete guide collection...",
};

export default async function Page() {
  let guides = [];
  try {
    await connectDB();
    guides = await Guide.find({ published: true })
      .sort({ createdAt: -1 })
      .lean();
    guides = guides.map((g) => ({
      ...g,
      _id: g._id.toString(),
      createdAt: g.createdAt?.toISOString() ?? null,
      updatedAt: g.updatedAt?.toISOString() ?? null,
    }));
  } catch {
    // fallback to empty — client will show "no guides" state
  }

  return <StyleGuideClient initialGuides={guides} />;
}
