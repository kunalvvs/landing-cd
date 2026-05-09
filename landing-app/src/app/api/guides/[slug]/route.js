import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Guide from "@/lib/models/Guide";

export async function GET(request, { params }) {
  try {
    await connectDB();
    const { slug } = await params;
    const guide = await Guide.findOne({ slug, published: true }).lean();
    if (!guide) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }
    return NextResponse.json(guide);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
