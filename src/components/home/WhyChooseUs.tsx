import { Card, CardContent } from "@/components/ui/card";
import { Shield, Clock, ThumbsUp, IndianRupee } from "lucide-react";
import happyFamilyImage from "@/assets/happy-family.jpg";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Shield,
      title: "Insured & Safe",
      description: "Complete insurance coverage for your belongings",
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "We value your time and ensure punctual service",
    },
    {
      icon: ThumbsUp,
      title: "Experienced Team",
      description: "Trained professionals with 10+ years experience",
    },
    {
      icon: IndianRupee,
      title: "Best Prices",
      description: "Affordable rates with no hidden charges",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-secondary/5 via-background to-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Why Choose Sonipat Packers & Movers?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Trusted by 500+ families for safe and reliable moving services
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={happyFamilyImage}
                alt="Happy Indian family moving to new home with Sonipat Packers and Movers"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Features */}
          <div className="order-1 lg:order-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col items-start space-y-3">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <reason.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {reason.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">{reason.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;