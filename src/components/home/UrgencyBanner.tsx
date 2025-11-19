import { AlertCircle, X } from "lucide-react";
import { useState } from "react";

const UrgencyBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-primary to-secondary text-primary-foreground py-3 px-4 relative">
      <div className="container mx-auto">
        <div className="flex items-center justify-center gap-2 text-sm sm:text-base font-semibold">
          <AlertCircle className="h-5 w-5 animate-pulse" />
          <span className="text-center">
            🔥 Limited slots this week – Book Now and Save ₹500! Call{" "}
            <a href="tel:+919068662191" className="underline hover:no-underline">
              +91 90686 62191
            </a>
          </span>
        </div>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-2 top-1/2 -translate-y-1/2 hover:bg-white/20 rounded p-1 transition-colors"
        aria-label="Close banner"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
};

export default UrgencyBanner;