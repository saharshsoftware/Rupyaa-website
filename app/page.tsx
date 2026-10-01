import { Montserrat } from "next/font/google";
import SiteChrome from "@/components/SiteChrome";
import HeroSection from "@/components/home/hero-section/HeroSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import EligibilitySection from "@/components/home/EligibilitySection";
import LoanStepsSection from "@/components/home/LoanStepsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CreditScoreBannerSection from "@/components/home/CreditScoreBannerSection";
import FAQSection from "@/components/home/FAQSection";
import DownloadAppSection from "@/components/home/DownloadAppSection";
import StatsSection from "@/components/home/StatsSection";
import { ExternalAppConfigInit } from "@/components/ExternalAppConfigInit";
import { getSeoMetadata } from "@/lib/seo-metadata";
import { homepageSchema } from "@/lib/SEO-JSON-schema";

const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-montserrat-family",
});

export const generateMetadata = () => getSeoMetadata("home");

export default function HomeLandingPage() {
  return (
    <>
      {/* <script
        id="zapcash-homepage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homepageSchema).replace(/</g, "\\u003c"),
        }}
      /> */}
      <ExternalAppConfigInit />
      <SiteChrome
        className={`${montserrat.variable} min-h-screen overflow-x-hidden bg-white font-montserrat`}
        mainClassName="flex flex-col"
      >
        <HeroSection />
        <WhyChooseUsSection />
        <LoanStepsSection />
        <CreditScoreBannerSection />
        <EligibilitySection />
        <StatsSection />
        <TestimonialsSection />
        <DownloadAppSection heading="Your loan journey, made Simple." />
        <FAQSection startBatch={0} layout="split" />
        
      </SiteChrome>
    </>
  );
}
