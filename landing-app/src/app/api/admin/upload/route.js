import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/auth";
import { uploadImage } from "@/lib/imagekit";

export async function POST(request) {
  const session = await getAdminSession();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const formData = await request.formData();
    const file = formData.get("file");

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const base64 = buffer.toString("base64");
    const ext = file.name.split(".").pop();
    const fileName = `blog-${Date.now()}.${ext}`;

    const url = await uploadImage(`data:${file.type};base64,${base64}`, fileName);
    return NextResponse.json({ url });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
