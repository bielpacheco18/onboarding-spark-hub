
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Features from "@/components/Features";
import Stats from "@/components/Stats";
import FeatureShowcase from "@/components/FeatureShowcase";
import Testimonials from "@/components/Testimonials";
import TargetAudience from "@/components/TargetAudience";
import Pricing from "@/components/Pricing";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Benefits />
        <Features />
        <FeatureShowcase />
        <Testimonials />
        <TargetAudience />
        <Pricing />
        <Cta />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
