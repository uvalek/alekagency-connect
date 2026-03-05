import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TrustMarquee from "@/components/TrustMarquee";
import Process from "@/components/Process";
import Benefits from "@/components/Benefits";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-animated">
      <Header />
      <main>
        <Hero />
        <Services />
        <TrustMarquee />
        <Process />
        <Benefits />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
