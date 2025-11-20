import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, Star } from "lucide-react";

const PackersAndMoversMurthal = () => {
  useEffect(() => {
    document.title = "Packers and Movers Murthal - Best Shifting ₹4,500+ | Sonipat";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Top Packers and Movers in Murthal, Sonipat. Home, Office & Vehicle Transport. 100% Safe. Call +91 90686 62191 for Free Quote."
      );
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Packers and Movers in <span className="text-primary">Murthal</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Trusted Moving Company in Murthal | Home & Office Shifting from ₹4,500+
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="tel:+919068662191">
                    <Phone className="mr-2" />
                    Call: +91 90686 62191
                  </a>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                  <a href="https://wa.me/919068662191?text=Hi,%20I%20need%20a%20quote%20from%20Murthal">
                    WhatsApp Quote
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <article className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-6">Best Packers and Movers in Murthal</h2>
              <p className="text-muted-foreground mb-6">
                Need professional movers in Murthal? We are the most trusted packing and moving company serving Murthal, Sonipat with complete home shifting, office relocation, and vehicle transport services. 100% safe delivery guaranteed.
              </p>

              <h3 className="text-2xl font-semibold mb-4">Services We Offer in Murthal</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-1" />
                  <span className="text-muted-foreground"><strong>Home Relocation:</strong> 1BHK, 2BHK, 3BHK+ shifting from ₹4,500</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-1" />
                  <span className="text-muted-foreground"><strong>Office Moving:</strong> Commercial relocation with minimal downtime</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-1" />
                  <span className="text-muted-foreground"><strong>Vehicle Transport:</strong> Safe car and bike shifting</span>
                </li>
              </ul>

              <h3 className="text-2xl font-semibold mb-4">Why Choose Us?</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <Star className="h-5 w-5 text-yellow-500 mt-1" />
                  <span className="text-muted-foreground">Fully insured transportation</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="h-5 w-5 text-yellow-500 mt-1" />
                  <span className="text-muted-foreground">Experienced team with modern equipment</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="h-5 w-5 text-yellow-500 mt-1" />
                  <span className="text-muted-foreground">24/7 customer support</span>
                </li>
              </ul>

              <div className="bg-primary/5 p-6 rounded-lg mt-8">
                <h3 className="text-xl font-bold mb-4">Get Free Quote</h3>
                <p className="text-muted-foreground mb-4">
                  Contact us for instant quotation and free home survey.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild>
                    <a href="tel:+919068662191">Call Now</a>
                  </Button>
                  <Button size="lg" variant="secondary" asChild>
                    <a href="https://wa.me/919068662191?text=Hi,%20need%20quote%20for%20Murthal">
                      WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default PackersAndMoversMurthal;
