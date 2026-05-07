import fs from "fs";
import path from "path";
import LegalPage from "@/components/legal/LegalPage";

export const metadata = {
  title: "Privacy Policy | Creatordesks",
  description:
    "Read the Creatordesks privacy policy covering data collection, usage, and rights.",
};

export default function PrivacyPolicyPage() {
  const contentPath = path.join(process.cwd(), "src", "privacycontent.txt");
  const content = fs.readFileSync(contentPath, "utf8");

  return <LegalPage content={content} />;
}
