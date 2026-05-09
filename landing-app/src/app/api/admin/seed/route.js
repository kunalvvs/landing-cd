import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/auth";
import { connectDB } from "@/lib/mongodb";
import Guide from "@/lib/models/Guide";
import { GUIDES } from "@/app/style-guide/guidesData";

export async function POST() {
  const session = await getAdminSession();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    await connectDB();

    let inserted = 0;
    let skipped = 0;

    for (const guide of GUIDES) {
      const exists = await Guide.findOne({ slug: guide.slug });
      if (exists) {
        skipped++;
        continue;
      }
      await Guide.create({
        slug: guide.slug,
        category: guide.category,
        title: guide.title,
        description: guide.description,
        readTime: guide.readTime,
        date: guide.date,
        image: guide.image,
        takeaways: guide.takeaways,
        sections: guide.sections,
        published: true,
      });
      inserted++;
    }

    return NextResponse.json({
      message: `Seeded ${inserted} guides. Skipped ${skipped} already existing.`,
    });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
