import PricingPage from "./PricingPage";

export const metadata = {
  title: "Pricing | Creatordesks",
  description:
    "Simple, transparent pricing. Start free with 500 DMs/month. Scale to thousands — no per-contact fees, no hidden costs.",
  openGraph: {
    title: "Pricing | Creatordesks",
    description:
      "Start free. Upgrade when you're ready. No per-contact fees, no hidden costs.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing | Creatordesks",
    description: "Start free with 500 DMs/month. Scale to thousands.",
  },
};

export default function Page() {
  return <PricingPage />;
}
