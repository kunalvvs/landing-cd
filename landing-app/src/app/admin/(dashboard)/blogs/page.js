import Link from "next/link";
import { connectDB } from "@/lib/mongodb";
import Guide from "@/lib/models/Guide";
import BlogsTable from "./BlogsTable";

export default async function AdminBlogsPage() {
  await connectDB();
  const guides = await Guide.find().sort({ createdAt: -1 }).lean();

  const serialized = guides.map((g) => ({
    ...g,
    _id: g._id.toString(),
    createdAt: g.createdAt?.toISOString() ?? null,
    updatedAt: g.updatedAt?.toISOString() ?? null,
  }));

  return <BlogsTable guides={serialized} />;
}
