import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Guide from "@/lib/models/Guide";

export async function GET() {
  try {
    await connectDB();
    const guides = await Guide.find({ published: true })
      .sort({ createdAt: -1 })
      .lean();
    return NextResponse.json(guides);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
