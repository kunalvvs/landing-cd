import { notFound } from "next/navigation";
import { connectDB } from "@/lib/mongodb";
import Guide from "@/lib/models/Guide";
import EditBlogClient from "./EditBlogClient";

export const metadata = { title: "Edit Blog | Admin" };

export default async function EditBlogPage({ params }) {
  await connectDB();
  const { id } = await params;

  let guide;
  try {
    guide = await Guide.findById(id).lean();
  } catch {
    notFound();
  }

  if (!guide) notFound();

  const serialized = {
    ...guide,
    _id: guide._id.toString(),
    createdAt: guide.createdAt?.toISOString() ?? null,
    updatedAt: guide.updatedAt?.toISOString() ?? null,
  };

  return <EditBlogClient guide={serialized} />;
}
