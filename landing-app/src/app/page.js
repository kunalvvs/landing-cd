import HeroSection from "@/components/sections/hero/HeroSection";
import SmoothScroll from "@/components/ui/SmoothScroll";
import HowItWorksSection from "@/components/sections/how-it-works/HowItWorksSection";
import FeaturesAutomationSection from "@/components/sections/features-automation/FeaturesAutomationSection";
import FeaturesOverviewSection from "@/components/sections/features-overview/FeaturesOverviewSection";
import SecurityWorkflowSection from "@/components/sections/security-workflow/SecurityWorkflowSection";
import TestimonialsSection from "@/components/sections/testimonials/TestimonialsSection";
import BlogSection from "@/components/sections/blog/BlogSection";
import FAQSection from "@/components/sections/faq/FAQSection";
import FooterSection from "@/components/sections/footer/FooterSection";

export default function Home() {
  return (
    <SmoothScroll>
      <main>
        <HeroSection />
        <HowItWorksSection />
        <FeaturesAutomationSection />
        <FeaturesOverviewSection />
        <SecurityWorkflowSection />
        <TestimonialsSection />
        <BlogSection />
        <FAQSection />
        <FooterSection />
      </main>
    </SmoothScroll>
  );
}
