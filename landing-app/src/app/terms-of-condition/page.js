import fs from "fs";
import path from "path";
import LegalPage from "@/components/legal/LegalPage";

export const metadata = {
  title: "Terms of Condition | Creatordesks",
  description:
    "Review the Creatordesks terms of condition for using the service.",
};

export default function TermsOfConditionPage() {
  const contentPath = path.join(
    process.cwd(),
    "src",
    "termsofconditioncontent.txt"
  );
  const content = fs.readFileSync(contentPath, "utf8");

  return <LegalPage content={content} />;
}
