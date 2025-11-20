import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, Star } from "lucide-react";

const PackersAndMoversKharkhoda = () => {
  useEffect(() => {
    document.title = "Packers and Movers Kharkhoda - Best Shifting ₹4,500+ | Sonipat";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Top Packers and Movers in Kharkhoda, Sonipat. Home & Office Shifting. 100% Safe. Call +91 90686 62191."
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
                Packers and Movers in <span className="text-primary">Kharkhoda</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Professional Moving Services in Kharkhoda, Sonipat | From ₹4,500+
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="tel:+919068662191">
                    <Phone className="mr-2" />
                    Call: +91 90686 62191
                  </a>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                  <a href="https://wa.me/919068662191?text=Hi,%20I%20need%20a%20quote%20from%20Kharkhoda">
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
              <h2 className="text-3xl font-bold mb-6">Best Packers and Movers in Kharkhoda</h2>
              <p className="text-muted-foreground mb-6">
                Looking for reliable packers and movers in Kharkhoda? We provide complete shifting solutions with 100% safety guarantee. Our team handles home, office, and vehicle transportation with utmost care.
              </p>

              <h3 className="text-2xl font-semibold mb-4">Our Services</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-1" />
                  <span className="text-muted-foreground"><strong>Home Shifting:</strong> From ₹4,500 for 1BHK</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-1" />
                  <span className="text-muted-foreground"><strong>Office Relocation:</strong> Efficient commercial moving</span>
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
                  <span className="text-muted-foreground">100% insured moving</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="h-5 w-5 text-yellow-500 mt-1" />
                  <span className="text-muted-foreground">Experienced professional team</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="h-5 w-5 text-yellow-500 mt-1" />
                  <span className="text-muted-foreground">On-time delivery guarantee</span>
                </li>
              </ul>

              <div className="bg-primary/5 p-6 rounded-lg mt-8">
                <h3 className="text-xl font-bold mb-4">Get Free Quote</h3>
                <p className="text-muted-foreground mb-4">
                  Contact us for instant quotation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild>
                    <a href="tel:+919068662191">Call Now</a>
                  </Button>
                  <Button size="lg" variant="secondary" asChild>
                    <a href="https://wa.me/919068662191?text=Hi,%20quote%20Kharkhoda">
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

export default PackersAndMoversKharkhoda;
