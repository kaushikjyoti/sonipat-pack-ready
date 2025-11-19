import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Phone, Shield, Clock, TrendingUp, Users, Award, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

const PackersAndMoversSonipat = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Best Packers and Movers in Sonipat - Affordable Home Shifting Services | Sonipat Packers";
  }, []);

  const services = [
    "Local Home Shifting in Sonipat",
    "Office Relocation Services",
    "Vehicle Transportation (Car & Bike)",
    "Warehouse & Storage Solutions",
    "Intercity Moving to Delhi NCR",
    "Packing & Unpacking Services"
  ];

  const whyChoose = [
    { icon: Shield, title: "100% Insured", desc: "Complete transit insurance coverage" },
    { icon: Clock, title: "On-Time Delivery", desc: "Punctual and reliable service" },
    { icon: TrendingUp, title: "10+ Years Experience", desc: "Trusted by 5000+ customers" },
    { icon: Users, title: "Trained Staff", desc: "Professional packing team" },
    { icon: Award, title: "Licensed & Certified", desc: "Government approved movers" },
    { icon: CheckCircle, title: "Transparent Pricing", desc: "No hidden charges" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Best Packers and Movers in Sonipat – Professional Home & Office Shifting Services
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Trusted by 5000+ Happy Customers | Insured & Affordable Moving Solutions in Sonipat, Haryana
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="tel:+919068662191">
                    <Phone className="mr-2 h-5 w-5" />
                    Call: +91 90686 62191
                  </a>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                  <a href="https://wa.me/919068662191?text=Hi,%20I%20need%20a%20moving%20quote%20from%20Sonipat">
                    Get Free Quote
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Welcome to Sonipat's Most Trusted Packers and Movers
              </h2>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                Looking for reliable <strong>packers and movers in Sonipat</strong>? You've come to the right place! Sonipat Packers & Movers is a leading relocation service provider offering comprehensive home shifting, office relocation, vehicle transportation, and storage solutions across Sonipat and Delhi NCR region.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                With over <strong>10 years of experience</strong> in the moving industry, we have successfully completed more than 5,000 relocations with a 99% customer satisfaction rate. Our team of trained professionals ensures that your belongings are packed, loaded, transported, and delivered safely to your new destination.
              </p>

              <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
                Our Complete Range of Moving Services in Sonipat
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mb-12 not-prose">
                {services.map((service, index) => (
                  <Card key={index} className="p-4 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <p className="font-semibold text-foreground">{service}</p>
                    </div>
                  </Card>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-4">
                1. Local Home Shifting in Sonipat
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Moving within Sonipat? We specialize in local household relocation services covering all sectors and colonies including Sector 14, 15, 16, Old Mandi Road, Rai Market, Model Town, and more. Our local shifting packages start from just ₹3,500 for 1BHK and include quality packing materials, loading, transportation, and unloading services.
              </p>

              <h3 className="text-2xl font-bold text-foreground mb-4">
                2. Sonipat to Delhi NCR Moving Services
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We provide seamless intercity relocation from Sonipat to all major cities in Delhi NCR including Delhi, Gurgaon, Noida, Ghaziabad, and Faridabad. Our dedicated fleet of modern vehicles ensures timely delivery with complete safety of your household goods. Check our <a href="/sonipat-to-delhi" className="text-primary hover:underline">Sonipat to Delhi shifting page</a> for detailed information and pricing.
              </p>

              <h3 className="text-2xl font-bold text-foreground mb-4">
                3. Office Relocation & Corporate Shifting
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Planning to relocate your office? Our corporate relocation services are designed to minimize downtime and ensure a smooth transition. We handle everything from computer systems and office furniture to sensitive documents and equipment. We work during weekends or after business hours to avoid disrupting your operations.
              </p>

              <h3 className="text-2xl font-bold text-foreground mb-4">
                4. Car & Bike Transportation
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Transport your vehicles safely with our specialized car and bike carriers. We use covered trailers to protect your vehicles from weather and road debris. Our vehicle transport service starts from ₹3,500 for cars and ₹1,500 for bikes within Delhi NCR.
              </p>

              <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
                Why Choose Sonipat Packers and Movers?
              </h2>

              <div className="grid md:grid-cols-3 gap-6 mb-12 not-prose">
                {whyChoose.map((item, index) => (
                  <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                    <item.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h4 className="font-bold text-foreground mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </Card>
                ))}
              </div>

              <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
                Our Moving Process – Simple & Transparent
              </h2>

              <ol className="space-y-4 mb-8">
                <li className="text-muted-foreground"><strong className="text-foreground">Step 1: Free Consultation</strong> – Call us or fill the quote form. Our team will understand your requirements.</li>
                <li className="text-muted-foreground"><strong className="text-foreground">Step 2: Pre-Move Survey</strong> – We conduct a detailed survey (virtual or physical) to assess the volume and provide accurate pricing.</li>
                <li className="text-muted-foreground"><strong className="text-foreground">Step 3: Packing Day</strong> – Our team arrives with quality packing materials and carefully packs all items with proper labeling.</li>
                <li className="text-muted-foreground"><strong className="text-foreground">Step 4: Safe Loading</strong> – Items are loaded into our modern trucks using proper equipment and techniques.</li>
                <li className="text-muted-foreground"><strong className="text-foreground">Step 5: Transportation</strong> – Your goods are transported via the safest and quickest route to your destination.</li>
                <li className="text-muted-foreground"><strong className="text-foreground">Step 6: Unloading & Unpacking</strong> – We unload and unpack items at your new home/office as per your instructions.</li>
              </ol>

              <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
                Affordable Pricing & Transparent Quotes
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-6">
                We believe in honest and transparent pricing with no hidden charges. Our moving charges depend on factors like distance, volume of goods, packing requirements, and additional services. Here's an approximate price range:
              </p>

              <ul className="space-y-2 mb-8">
                <li className="text-muted-foreground">• <strong>1BHK Local Shifting:</strong> ₹3,500 - ₹5,000</li>
                <li className="text-muted-foreground">• <strong>2BHK Local Shifting:</strong> ₹5,500 - ₹8,000</li>
                <li className="text-muted-foreground">• <strong>3BHK Local Shifting:</strong> ₹8,500 - ₹12,000</li>
                <li className="text-muted-foreground">• <strong>Sonipat to Delhi:</strong> ₹4,500 - ₹15,000</li>
                <li className="text-muted-foreground">• <strong>Car Transport:</strong> ₹3,500 - ₹6,000</li>
                <li className="text-muted-foreground">• <strong>Bike Transport:</strong> ₹1,500 - ₹3,000</li>
              </ul>

              <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
                Service Areas We Cover
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-6">
                We provide packing and moving services across all areas of Sonipat including:
              </p>

              <p className="text-muted-foreground mb-6">
                <strong>Sonipat Areas:</strong> Sector 1-30, Model Town, Rai Market, Old Mandi Road, Murthal Road, Kundli, Gohana Road, GT Road, Industrial Area, HUDA Sectors, and all nearby villages.
              </p>

              <p className="text-muted-foreground mb-8">
                <strong>Delhi NCR Coverage:</strong> Delhi, Gurgaon, Noida, Greater Noida, Ghaziabad, Faridabad, Bahadurgarh, Panipat, and entire NCR region.
              </p>

              <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
                Customer Reviews & Testimonials
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Don't just take our word for it! Here's what our customers say about Sonipat Packers and Movers:
              </p>

              <div className="bg-muted/50 rounded-lg p-6 mb-6 not-prose">
                <p className="text-foreground italic mb-2">"Excellent service! They shifted my 2BHK from Sonipat to Dwarka in just 5 hours. Very professional team and affordable pricing."</p>
                <p className="text-muted-foreground text-sm">- Rajesh Kumar, Sonipat</p>
              </div>

              <div className="bg-muted/50 rounded-lg p-6 mb-8 not-prose">
                <p className="text-foreground italic mb-2">"Best packers and movers in Sonipat! Everything reached safely without any damage. Highly recommended for local and intercity shifting."</p>
                <p className="text-muted-foreground text-sm">- Priya Sharma, Delhi</p>
              </div>

              <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">
                Book Your Move Today – Get Instant Quote
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Ready to make your move stress-free? Contact Sonipat Packers & Movers today for a free moving quote. Our customer support team is available 24/7 to assist you with all your relocation needs.
              </p>

              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8 text-center not-prose">
                <p className="text-2xl font-bold text-foreground mb-4">Get Your Free Moving Quote Now!</p>
                <p className="text-muted-foreground mb-6">Call us or WhatsApp for instant quote and booking</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <a href="tel:+919068662191">
                      <Phone className="mr-2 h-5 w-5" />
                      +91 90686 62191
                    </a>
                  </Button>
                  <Button size="lg" variant="secondary" asChild>
                    <a href="https://wa.me/919068662191?text=Hi,%20I%20need%20a%20moving%20quote">
                      WhatsApp Now
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default PackersAndMoversSonipat;