import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, Star, Truck, Shield, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const PackersAndMoversRai = () => {
  useEffect(() => {
    document.title = "Packers and Movers Rai Sonipat - Best Shifting ₹4,500+ | 100% Safe";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Top Packers and Movers in Rai, Sonipat. Home, Office & Vehicle Transport. 100% Insured. Zero Damage Guarantee. Call +91 90686 62191 for Free Quote Today."
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
                Packers and Movers in <span className="text-primary">Rai, Sonipat</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Trusted Moving Company in Rai | Home, Office & Vehicle Shifting | Starting ₹4,500+
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                <Button size="lg" asChild className="text-lg px-8 py-6 h-auto">
                  <a href="tel:+919068662191">
                    <Phone className="mr-2 h-5 w-5" />
                    Call: +91 90686 62191
                  </a>
                </Button>
                <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-6 h-auto">
                  <a href="https://wa.me/919068662191?text=Hi,%20I%20need%20a%20moving%20quote%20from%20Rai">
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
                Best Packers and Movers in Rai, Sonipat
              </h2>
              
              <p className="text-muted-foreground mb-6">
                Searching for professional packers and movers in Rai, Sonipat? We are your local moving experts providing top-quality home shifting, office relocation, and vehicle transport services in Rai and surrounding areas. Our team ensures 100% safe delivery with zero damage guarantee and transparent pricing.
              </p>

              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Our Moving Services in Rai
              </h3>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground"><strong>Household Shifting:</strong> Complete home relocation services within Rai and to Delhi NCR. Starting from ₹4,500 for 1BHK.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground"><strong>Office Relocation:</strong> Professional commercial moving with minimal business disruption.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground"><strong>Car & Bike Transport:</strong> Safe vehicle transportation with covered carriers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground"><strong>Packing & Unpacking:</strong> Expert packing using high-quality materials and careful unpacking at destination.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground"><strong>Warehousing Solutions:</strong> Secure storage facilities for short and long-term needs.</span>
                </li>
              </ul>

              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Why We Are the Best Packers and Movers in Rai?
              </h3>
              
              <p className="text-muted-foreground mb-4">
                With years of experience serving Rai residents and businesses, we understand the local requirements and provide customized moving solutions. Our commitment to quality and customer satisfaction has made us the most trusted name in Rai's moving industry.
              </p>

              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <Star className="h-5 w-5 text-yellow-500 mt-1" />
                  <span className="text-muted-foreground">Comprehensive Insurance Coverage for all shipments</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="h-5 w-5 text-yellow-500 mt-1" />
                  <span className="text-muted-foreground">Transparent Pricing with no hidden charges</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="h-5 w-5 text-yellow-500 mt-1" />
                  <span className="text-muted-foreground">Professional Team with 5+ years experience</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="h-5 w-5 text-yellow-500 mt-1" />
                  <span className="text-muted-foreground">Real-time Tracking with GPS-enabled vehicles</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="h-5 w-5 text-yellow-500 mt-1" />
                  <span className="text-muted-foreground">24/7 Support Team available on call and WhatsApp</span>
                </li>
              </ul>

              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Rai to Delhi Moving Charges
              </h3>
              
              <p className="text-muted-foreground mb-6">
                Our affordable rates for Rai to Delhi shifting include all packing materials, loading, safe transportation, unloading, and basic insurance. We offer competitive pricing: 1BHK from ₹5,500, 2BHK from ₹7,500, and 3BHK from ₹10,500. Contact us for a customized quote based on your specific needs.
              </p>

              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Service Coverage in Rai
              </h3>
              
              <p className="text-muted-foreground mb-6">
                We cover all areas in Rai including Rai Town, Rai Industrial Area, GT Road Rai, and nearby localities like Sonipat City, Gohana, Murthal, and entire Delhi NCR region. Our extensive network ensures smooth door-to-door service anywhere in North India.
              </p>

              <div className="bg-primary/5 p-6 rounded-lg mt-8">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Get Free Moving Quote for Rai
                </h3>
                <p className="text-muted-foreground mb-4">
                  Contact us today for instant quotation. We provide free home survey and detailed cost estimation without any obligation. Our customer service team is available 24/7.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild>
                    <a href="tel:+919068662191">
                      <Phone className="mr-2 h-5 w-5" />
                      Call: +91 90686 62191
                    </a>
                  </Button>
                  <Button size="lg" variant="secondary" asChild>
                    <a href="https://wa.me/919068662191?text=Hi,%20I%20need%20a%20quote%20for%20Rai%20shifting">
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

export default PackersAndMoversRai;
