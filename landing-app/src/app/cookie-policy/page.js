import fs from "fs";
import path from "path";
import LegalPage from "@/components/legal/LegalPage";

export const metadata = {
  title: "Cookie Policy | Creatordesks",
  description:
    "Learn how Creatordesks uses cookies and related technologies on the platform.",
};

export default function CookiePolicyPage() {
  const contentPath = path.join(process.cwd(), "src", "cookiescontent.txt");
  const content = fs.readFileSync(contentPath, "utf8");

  return <LegalPage content={content} />;
}
