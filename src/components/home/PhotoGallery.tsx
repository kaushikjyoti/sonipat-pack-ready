import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import heroImage from "@/assets/hero-movers.jpg";
import packingService from "@/assets/packing-service.jpg";
import officeRelocation from "@/assets/office-relocation.jpg";
import vehicleTransport from "@/assets/vehicle-transport.jpg";
import warehouseStorage from "@/assets/warehouse-storage.jpg";
import happyFamily from "@/assets/happy-family.jpg";

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      src: heroImage,
      alt: "Professional packers and movers team loading household items into truck in Sonipat",
      title: "Expert Moving Team"
    },
    {
      src: packingService,
      alt: "Careful packing of fragile items with bubble wrap and boxes in Sonipat",
      title: "Professional Packing"
    },
    {
      src: officeRelocation,
      alt: "Office furniture and equipment being relocated by Sonipat movers",
      title: "Office Relocation"
    },
    {
      src: vehicleTransport,
      alt: "Car and bike transportation service on covered carrier truck",
      title: "Vehicle Transport"
    },
    {
      src: warehouseStorage,
      alt: "Secure warehouse storage facility for household goods in Sonipat",
      title: "Safe Storage"
    },
    {
      src: happyFamily,
      alt: "Happy family after successful home shifting service in Sonipat",
      title: "Happy Customers"
    },
    {
      src: heroImage,
      alt: "Modern moving truck with professional packers in Sonipat Delhi NCR",
      title: "Modern Fleet"
    },
    {
      src: packingService,
      alt: "Quality packing materials - boxes, bubble wrap, and tape used by Sonipat Packers",
      title: "Quality Materials"
    }
  ];

  return (
    <>
      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Work Gallery
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See our professional packing, loading, and moving services in action
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer shadow-md hover:shadow-xl transition-shadow"
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-semibold text-sm">
                      {image.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0">
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Gallery image"
              className="w-full h-auto"
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PhotoGallery;