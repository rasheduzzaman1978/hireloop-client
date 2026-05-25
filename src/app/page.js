import FeaturedJobsSection from "../components/FeaturedJobsSection";
import HeroSection from "../components/HeroSection";
import StatsSection from "../components/StatsSection";
import FeaturesSection from "../components/FeaturesSection";
import PricingSection from "../components/PricingSection";
import CTASection from "../components/CTASection";
import MotionShowcase from "@/components/MotionShowcase";

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <HeroSection />
     {/* <StatsSection /> */}
      <StatsSection />
      {/* <MotionShowcase /> */}
      <MotionShowcase />
      {/* <FeaturedJobsSection /> */}
      <FeaturedJobsSection />
      {/* <FeaturesSection /> */}
      <FeaturesSection />
      {/* <PricingSection /> */}
      <PricingSection />
      {/* <CTASection /> */}
      <CTASection />
    </div>
  );
}