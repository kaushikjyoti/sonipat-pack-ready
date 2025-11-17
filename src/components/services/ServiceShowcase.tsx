import packingImage from "@/assets/packing-service.jpg";
import vehicleImage from "@/assets/vehicle-transport.jpg";
import officeImage from "@/assets/office-relocation.jpg";
import warehouseImage from "@/assets/warehouse-storage.jpg";

const ServiceShowcase = () => {
  const showcases = [
    {
      image: packingImage,
      title: "Professional Packing",
      description: "Expert packing with quality materials to ensure safe transit of all your belongings",
    },
    {
      image: vehicleImage,
      title: "Vehicle Transport",
      description: "Safe car and bike transportation with specialized carriers and insurance",
    },
    {
      image: officeImage,
      title: "Office Relocation",
      description: "Efficient office moves with minimal downtime for your business operations",
    },
    {
      image: warehouseImage,
      title: "Secure Storage",
      description: "Climate-controlled warehouses with 24/7 security for your peace of mind",
    },
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Our Service Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See our professional team in action
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {showcases.map((showcase, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={showcase.image}
                  alt={showcase.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{showcase.title}</h3>
                  <p className="text-white/90">{showcase.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceShowcase;