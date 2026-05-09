import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/auth";
import { connectDB } from "@/lib/mongodb";
import Guide from "@/lib/models/Guide";

async function requireAdmin() {
  const session = await getAdminSession();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  return null;
}

export async function GET() {
  const denied = await requireAdmin();
  if (denied) return denied;

  try {
    await connectDB();
    const guides = await Guide.find().sort({ createdAt: -1 }).lean();
    return NextResponse.json(guides);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(request) {
  const denied = await requireAdmin();
  if (denied) return denied;

  try {
    await connectDB();
    const body = await request.json();
    const guide = await Guide.create(body);
    return NextResponse.json(guide, { status: 201 });
  } catch (err) {
    const status = err.code === 11000 ? 409 : 400;
    return NextResponse.json({ error: err.message }, { status });
  }
}
