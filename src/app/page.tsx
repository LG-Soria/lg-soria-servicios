"use client";

import { AboutSection } from "@/components/sections/AboutSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { FitSection } from "@/components/sections/FitSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { PricingBenefitsSection } from "@/components/sections/PricingBenefitsSection";
import { ProblemSolutionSection } from "@/components/sections/ProblemSolutionSection";
import { SocialFaqSection } from "@/components/sections/SocialFaqSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FitSection />
      <ProblemSolutionSection />
      <AboutSection />
      <PricingBenefitsSection />
      <SocialFaqSection />
      <FinalCtaSection />
    </>
  );
}
