import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const TestimonialsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Customer Reviews & Testimonials - Sonipat Packers and Movers";
  }, []);

  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Sonipat to Delhi",
      rating: 5,
      text: "Excellent service! They shifted my entire 2BHK household from Sonipat to Dwarka, Delhi in just 5 hours. The team was very professional, careful with fragile items, and the pricing was very affordable. Highly recommended!",
      service: "Home Shifting",
      date: "March 2024"
    },
    {
      name: "Priya Sharma",
      location: "Model Town, Sonipat",
      rating: 5,
      text: "Best packers and movers in Sonipat! I was worried about my expensive furniture and electronics, but everything reached my new home safely without any damage. The packing quality was top-notch. Thank you team!",
      service: "Local Shifting",
      date: "February 2024"
    },
    {
      name: "Amit Singh",
      location: "Sonipat to Gurgaon",
      rating: 5,
      text: "Very professional and punctual service. They completed my office relocation from Sonipat to Gurgaon over the weekend without disturbing our business operations. The entire team was cooperative and efficient.",
      service: "Office Relocation",
      date: "January 2024"
    },
    {
      name: "Sunita Devi",
      location: "Sector 15, Sonipat",
      rating: 5,
      text: "I'm very satisfied with their packing service. They used quality materials and labeled everything properly. The staff was polite and completed the move within the promised time. Value for money!",
      service: "Packing Service",
      date: "March 2024"
    },
    {
      name: "Vikram Mehta",
      location: "Sonipat to Noida",
      rating: 5,
      text: "Needed to transport my car along with household goods. They handled both perfectly! The car reached without a single scratch. Transparent pricing with no hidden charges. Will definitely use again.",
      service: "Vehicle Transport",
      date: "February 2024"
    },
    {
      name: "Neha Gupta",
      location: "Rai Market, Sonipat",
      rating: 5,
      text: "Shifted from a 3rd floor apartment without lift. The team managed everything so efficiently! They were careful on stairs and completed loading in just 2 hours. Impressed with their professionalism.",
      service: "Home Shifting",
      date: "January 2024"
    },
    {
      name: "Rahul Verma",
      location: "Sonipat to Faridabad",
      rating: 5,
      text: "Quick and hassle-free relocation. Booked them just 2 days before my moving date and they accommodated my request. Everything was handled smoothly. Good communication throughout the process.",
      service: "Intercity Moving",
      date: "March 2024"
    },
    {
      name: "Kavita Jain",
      location: "Murthal Road, Sonipat",
      rating: 5,
      text: "I had antique furniture and delicate crockery. They packed everything with extra care using bubble wrap and wooden crates. Not even a single item was damaged. Truly trustworthy movers!",
      service: "Packing & Moving",
      date: "February 2024"
    },
    {
      name: "Deepak Yadav",
      location: "Sonipat to Ghaziabad",
      rating: 5,
      text: "Affordable rates and reliable service. They provided insurance for transit which gave me peace of mind. The team was professional and delivery was on time. Highly recommend for Delhi NCR moves.",
      service: "Insured Moving",
      date: "January 2024"
    },
    {
      name: "Anjali Kapoor",
      location: "Industrial Area, Sonipat",
      rating: 5,
      text: "Best experience with packers and movers! From quote to final delivery, everything was perfect. The team leader kept me updated at every step. Customer service is excellent. Five stars!",
      service: "Complete Relocation",
      date: "March 2024"
    },
    {
      name: "Sandeep Chauhan",
      location: "Sonipat to Bahadurgarh",
      rating: 5,
      text: "Shifted my bike and household goods together. Very reasonable pricing and no hidden costs. The team was courteous and handled everything with care. Will recommend to friends and family.",
      service: "Mixed Shifting",
      date: "February 2024"
    },
    {
      name: "Pooja Rawat",
      location: "Old Mandi Road, Sonipat",
      rating: 5,
      text: "I was moving alone and they helped me so much! From packing to arranging items at new home, they did everything. Such a relief to have professionals handle the entire move. Thank you!",
      service: "Full Service Moving",
      date: "January 2024"
    }
  ];

  const renderStars = (rating: number) => {
    return Array(rating).fill(0).map((_, i) => (
      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
    ));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Customer Reviews & Testimonials
              </h1>
              <p className="text-xl text-muted-foreground mb-4">
                See what our 5000+ happy customers say about our packing and moving services
              </p>
              <div className="flex items-center justify-center gap-2">
                <div className="flex">{renderStars(5)}</div>
                <span className="text-lg font-semibold text-foreground">
                  4.9/5 Rating
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-1 mb-3">
                    {renderStars(testimonial.rating)}
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="border-t border-border pt-4">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs text-primary font-medium">{testimonial.service}</span>
                      <span className="text-xs text-muted-foreground">{testimonial.date}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Ready to Experience Our Service?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join thousands of satisfied customers who trusted us for their relocation needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+919068662191"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-md font-semibold hover:bg-primary/90 transition-colors"
                >
                  Call: +91 90686 62191
                </a>
                <a
                  href="https://wa.me/919068662191?text=Hi,%20I%20need%20a%20moving%20quote"
                  className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-8 py-3 rounded-md font-semibold hover:bg-secondary/90 transition-colors"
                >
                  Get Free Quote
                </a>
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

export default TestimonialsPage;