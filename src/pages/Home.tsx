import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import PricingTeaser from "@/components/home/PricingTeaser";
import Testimonials from "@/components/home/Testimonials";
import PhotoGallery from "@/components/home/PhotoGallery";
import FAQ from "@/components/home/FAQ";
import LeadForm from "@/components/home/LeadForm";
import UrgencyBanner from "@/components/home/UrgencyBanner";
import ExitIntentPopup from "@/components/home/ExitIntentPopup";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <UrgencyBanner />
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <WhyChooseUs />
        <PricingTeaser />
        <Testimonials />
        <PhotoGallery />
        <FAQ />
        <LeadForm />
      </main>
      <Footer />
      <WhatsAppButton />
      <ExitIntentPopup />
    </div>
  );
};

export default Home;