import HeroSection from "@/components/HeroSection";
import VisionMissionSection from "@/components/VisionMissionSection";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import DeveloperSection from "@/components/DeveloperSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <VisionMissionSection />
      <AboutSection />
      <FeaturesSection />
      <HowItWorksSection />
      <DeveloperSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;