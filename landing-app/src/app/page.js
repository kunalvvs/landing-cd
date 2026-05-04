import HeroSection from "@/components/sections/hero/HeroSection";
import HowItWorksSection from "@/components/sections/how-it-works/HowItWorksSection";
import FeaturesAutomationSection from "@/components/sections/features-automation/FeaturesAutomationSection";
import FeaturesOverviewSection from "@/components/sections/features-overview/FeaturesOverviewSection";
import SecurityWorkflowSection from "@/components/sections/security-workflow/SecurityWorkflowSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <HowItWorksSection />
      <FeaturesAutomationSection />
      <FeaturesOverviewSection />
      <SecurityWorkflowSection />
    </main>
  );
}
