import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FlatFootCalculator from "@/components/FlatFootCalculator";
import ServiceSection from "@/components/ServiceSection";
import WorkProcessSection from "@/components/WorkProcessSection";
import TechnologySection from "@/components/TechnologySection";
import BlogSection from "@/components/BlogSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <FlatFootCalculator />
        <HeroSection />
        <ServiceSection />
        <WorkProcessSection />
        <TechnologySection />
        <BlogSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
