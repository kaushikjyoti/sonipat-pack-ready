import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, Star } from "lucide-react";

const PackersAndMoversBarhi = () => {
  useEffect(() => {
    document.title = "Packers and Movers Barhi - Reliable Shifting ₹4,500+ | Sonipat";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Professional Packers and Movers in Barhi, Sonipat. Home & Office Shifting. 100% Safe. Call +91 90686 62191 for Free Quote."
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
                Packers and Movers in <span className="text-primary">Barhi</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Reliable Packing & Moving Services in Barhi, Sonipat | From ₹4,500+
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="tel:+919068662191">
                    <Phone className="mr-2" />
                    Call: +91 90686 62191
                  </a>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                  <a href="https://wa.me/919068662191?text=Hi,%20I%20need%20a%20quote%20from%20Barhi">
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
              <h2 className="text-3xl font-bold mb-6">Best Packers and Movers in Barhi, Sonipat</h2>
              <p className="text-muted-foreground mb-6">
                Searching for trusted packers and movers in Barhi? We provide professional home and office shifting services with complete safety and insurance. Our expert team ensures damage-free relocation at affordable rates.
              </p>

              <h3 className="text-2xl font-semibold mb-4">Our Services</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-1" />
                  <span className="text-muted-foreground"><strong>Household Shifting:</strong> Complete home relocation from ₹4,500</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-1" />
                  <span className="text-muted-foreground"><strong>Office Relocation:</strong> Professional commercial moving</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-1" />
                  <span className="text-muted-foreground"><strong>Vehicle Transport:</strong> Car and bike shifting services</span>
                </li>
              </ul>

              <h3 className="text-2xl font-semibold mb-4">Why Choose Us?</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <Star className="h-5 w-5 text-yellow-500 mt-1" />
                  <span className="text-muted-foreground">100% insured and safe moving</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="h-5 w-5 text-yellow-500 mt-1" />
                  <span className="text-muted-foreground">Experienced and trained staff</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="h-5 w-5 text-yellow-500 mt-1" />
                  <span className="text-muted-foreground">Transparent pricing</span>
                </li>
              </ul>

              <div className="bg-primary/5 p-6 rounded-lg mt-8">
                <h3 className="text-xl font-bold mb-4">Get Free Quote</h3>
                <p className="text-muted-foreground mb-4">
                  Call us now for instant quotation and free survey.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild>
                    <a href="tel:+919068662191">Call Now</a>
                  </Button>
                  <Button size="lg" variant="secondary" asChild>
                    <a href="https://wa.me/919068662191?text=Hi,%20need%20quote%20Barhi">
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

export default PackersAndMoversBarhi;
