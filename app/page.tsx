import StylishCTA from "@/components/CTASection";
import ExpertiseSection from "@/components/expertise";
import Hero from "@/components/hero";
import KickstartSection from "@/components/kickstart";
import MarketingSection from "@/components/marketing";
import Navbar from "@/components/navbar";
import ProcessSection from "@/components/processSection";
import RoiSection from "@/components/RoiSection";
import SeoResultsSlider from "@/components/seoresult";
import ServicesSection from "@/components/services";
import Footer from "@/components/footer";
import FooterBottom from "@/components/FooterBottom";

export default function Home() {
  return (
     <main className="min-h-screen  overflow-x-hidden">
      <Navbar/>
     <Hero/>
     <RoiSection/>
     <ExpertiseSection/>
     <MarketingSection/>
     <ServicesSection/>
     <ProcessSection/>
     <KickstartSection/>
     <SeoResultsSlider/>
     <StylishCTA/>
      <Footer/>
      <FooterBottom/>
      
      </main>
  );
}
