import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, Star, Truck, Shield, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const PackersAndMoversKundli = () => {
  useEffect(() => {
    document.title = "Packers and Movers Kundli - Best Shifting Services ₹4,500+ | 100% Safe";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Professional Packers and Movers in Kundli, Sonipat. Home, Office & Vehicle Shifting. 100% Insured, Zero Damage Guarantee. Call +91 90686 62191 for Free Quote."
      );
    }
  }, []);

  const features = [
    { icon: Shield, title: "100% Insured", desc: "Full transit insurance coverage" },
    { icon: Truck, title: "Modern Vehicles", desc: "GPS-enabled fleet" },
    { icon: Clock, title: "On-Time Delivery", desc: "Guaranteed timely service" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Packers and Movers in <span className="text-primary">Kundli</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Trusted Packing & Moving Services in Kundli, Sonipat | Home, Office & Vehicle Transport | Starting ₹4,500+
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                <Button size="lg" asChild className="text-lg px-8 py-6 h-auto">
                  <a href="tel:+919068662191">
                    <Phone className="mr-2 h-5 w-5" />
                    Call: +91 90686 62191
                  </a>
                </Button>
                <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-6 h-auto">
                  <a href="https://wa.me/919068662191?text=Hi,%20I%20need%20a%20moving%20quote%20from%20Kundli">
                    <Phone className="mr-2 h-5 w-5" />
                    WhatsApp Quote
                  </a>
                </Button>
              </div>
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <span className="text-yellow-500">★★★★★</span>
                <span className="text-sm">Rated 4.9/5 by 500+ Happy Customers</span>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-6">
              {features.map((feature, idx) => (
                <Card key={idx}>
                  <CardContent className="p-6 text-center">
                    <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <article className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Best Packers and Movers in Kundli, Sonipat
              </h2>
              
              <p className="text-muted-foreground mb-6">
                Looking for reliable packers and movers in Kundli? We are the most trusted moving company serving Kundli, Sonipat, and nearby areas with professional home shifting, office relocation, and vehicle transportation services. With years of experience and a 100% safe delivery record, we guarantee zero damage to your belongings.
              </p>

              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Our Services in Kundli
              </h3>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground"><strong>Home Shifting Services:</strong> Complete household relocation within Kundli and to Delhi NCR. Starting from ₹4,500 for 1BHK.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground"><strong>Office Relocation:</strong> Safe and efficient commercial moving with minimal downtime.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground"><strong>Vehicle Transportation:</strong> Car and bike shifting with covered carriers. Starting ₹3,500 for cars.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground"><strong>Packing Services:</strong> Professional packing using bubble wrap, corrugated boxes, and wooden crates.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground"><strong>Storage & Warehousing:</strong> Secure short-term and long-term storage facilities.</span>
                </li>
              </ul>

              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Why Choose Us for Kundli Packers and Movers?
              </h3>
              
              <p className="text-muted-foreground mb-4">
                We have been serving Kundli residents since 2020 with dedication and professionalism. Our team understands local routes, traffic patterns, and the best moving practices for Kundli's industrial and residential areas.
              </p>

              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <Star className="h-5 w-5 text-yellow-500 mt-1" />
                  <span className="text-muted-foreground">100% Insured Transportation with comprehensive coverage</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="h-5 w-5 text-yellow-500 mt-1" />
                  <span className="text-muted-foreground">Zero Hidden Charges - transparent pricing</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="h-5 w-5 text-yellow-500 mt-1" />
                  <span className="text-muted-foreground">Experienced & Trained Staff with 5+ years experience</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="h-5 w-5 text-yellow-500 mt-1" />
                  <span className="text-muted-foreground">GPS-enabled Vehicles for real-time tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="h-5 w-5 text-yellow-500 mt-1" />
                  <span className="text-muted-foreground">24/7 Customer Support via call and WhatsApp</span>
                </li>
              </ul>

              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Kundli to Delhi Shifting Charges
              </h3>
              
              <p className="text-muted-foreground mb-6">
                We offer competitive rates for moving from Kundli to anywhere in Delhi NCR. Our pricing includes packing materials, loading, transportation, unloading, and basic insurance. 1BHK shifting from Kundli to Delhi starts at ₹5,500, 2BHK at ₹7,500, and 3BHK at ₹10,500. Call us for an exact quote based on your requirements.
              </p>

              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Areas We Serve in Kundli
              </h3>
              
              <p className="text-muted-foreground mb-6">
                Kundli Industrial Area, Kundli Border, Sonipat Road Kundli, Delhi-Chandigarh Highway, Industrial Model Township, Pace City Kundli, and all nearby localities. We also provide seamless connectivity to Panipat, Sonipat, Delhi, Gurgaon, and entire NCR.
              </p>

              <div className="bg-primary/5 p-6 rounded-lg mt-8">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Get Free Moving Quote for Kundli
                </h3>
                <p className="text-muted-foreground mb-4">
                  Call now or WhatsApp us for instant quotation. Our team will visit your location for free survey and provide transparent pricing with no hidden costs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild>
                    <a href="tel:+919068662191">
                      <Phone className="mr-2 h-5 w-5" />
                      Call: +91 90686 62191
                    </a>
                  </Button>
                  <Button size="lg" variant="secondary" asChild>
                    <a href="https://wa.me/919068662191?text=Hi,%20I%20need%20a%20quote%20for%20Kundli%20shifting">
                      WhatsApp Now
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

export default PackersAndMoversKundli;
