import mongoose from "mongoose";

const SectionSchema = new mongoose.Schema(
  {
    id: { type: String, required: true },
    heading: { type: String, required: true },
    body: { type: String, required: true },
  },
  { _id: false }
);

const GuideSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true, trim: true },
    category: { type: String, required: true, trim: true },
    title: { type: String, required: true, trim: true },
    description: { type: String, default: "" },
    readTime: { type: String, default: "" },
    date: { type: String, default: "" },
    image: { type: String, default: "" },
    takeaways: { type: [String], default: [] },
    sections: { type: [SectionSchema], default: [] },
    published: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.models.Guide || mongoose.model("Guide", GuideSchema);
