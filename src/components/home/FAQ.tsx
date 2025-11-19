import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useEffect } from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "How much do packers and movers charge in Sonipat?",
      answer: "Our charges depend on the size of your move. For local shifting in Sonipat, 1BHK starts from ₹3,500, 2BHK from ₹5,500, and 3BHK from ₹8,500. Sonipat to Delhi shifting starts from ₹4,500. All prices include packing material, loading, transport, and unloading. Call +91 90686 62191 for an exact quote."
    },
    {
      question: "Are your packing and moving services insured?",
      answer: "Yes, we provide comprehensive transit insurance for all shipments. Your belongings are covered against damage, breakage, or loss during transportation. We use high-quality packing materials and experienced staff to ensure maximum safety."
    },
    {
      question: "How many days in advance should I book your services?",
      answer: "We recommend booking at least 2-3 days in advance for local moves and 5-7 days for intercity moves. However, we also accommodate last-minute bookings based on availability. Contact us immediately for urgent shifting requirements."
    },
    {
      question: "Do you provide packing materials?",
      answer: "Yes, we provide all necessary packing materials including corrugated boxes, bubble wrap, packing paper, thermocol, wooden crates for fragile items, and adhesive tapes. All materials are included in our shifting packages."
    },
    {
      question: "How long does it take to shift from Sonipat to Delhi?",
      answer: "Sonipat to Delhi shifting typically takes 4-6 hours depending on the destination locality in Delhi and traffic conditions. We complete most local Sonipat moves within 3-5 hours on the same day."
    },
    {
      question: "Do you transport vehicles (car/bike)?",
      answer: "Yes, we provide specialized vehicle transportation services. We use covered carriers for cars and bikes to protect them from weather and road debris. Car transport from Sonipat to anywhere in Delhi NCR starts from ₹3,500 and bike transport from ₹1,500."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all payment methods including cash, bank transfer (NEFT/RTGS/IMPS), UPI (Google Pay, PhonePe, Paytm), and online payment. We require a small advance (20-30%) to confirm booking, with the balance payable after delivery."
    },
    {
      question: "Do you offer unpacking services?",
      answer: "Yes, we provide complete unpacking services at your new location. Our team will carefully unpack all items, place them in designated rooms, and remove packing materials. This service is included in our premium packages or available as an add-on."
    }
  ];

  // Add FAQ Schema for SEO
  useEffect(() => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(faqSchema);
    script.id = 'faq-schema';
    
    // Remove existing script if present
    const existing = document.getElementById('faq-schema');
    if (existing) {
      existing.remove();
    }
    
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById('faq-schema');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  return (
    <section className="py-16 sm:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get answers to common questions about our packing and moving services in Sonipat
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold text-foreground pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <a
            href="tel:+919068662191"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            Call us at +91 90686 62191
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;