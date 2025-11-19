import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Phone, Gift } from "lucide-react";

const ExitIntentPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if mouse leaves from top of viewport and hasn't shown yet
      if (e.clientY <= 0 && !hasShown) {
        setIsOpen(true);
        setHasShown(true);
      }
    };

    // Add delay to prevent showing immediately
    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [hasShown]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <Gift className="h-6 w-6 text-primary" />
            Wait! Special Offer for You
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-6 text-center border-2 border-primary/20">
            <p className="text-4xl font-bold text-primary mb-2">₹500 OFF</p>
            <p className="text-lg font-semibold text-foreground mb-1">
              On Your First Move
            </p>
            <p className="text-sm text-muted-foreground">
              Book now and save on your relocation!
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-muted-foreground text-sm text-center">
              Limited time offer • Professional service • Insured shifting
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <Button
              size="lg"
              className="w-full"
              asChild
            >
              <a href="tel:+919068662191">
                <Phone className="mr-2 h-5 w-5" />
                Call Now: +91 90686 62191
              </a>
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="w-full"
              asChild
            >
              <a href="https://wa.me/919068662191?text=Hi,%20I%20want%20to%20claim%20₹500%20off%20on%20my%20first%20move">
                WhatsApp for Instant Quote
              </a>
            </Button>
          </div>

          <p className="text-xs text-muted-foreground text-center">
            *Terms & conditions apply. Minimum booking value ₹5,000
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExitIntentPopup;