import PropertyCard from "./PropertyCard";
import image1 from "../public/images/1.jpg";

export default function Properties() {
  const properties = [
    { id: 1, name: "Property 1", description: "Description 1", imageSrc: image1, alt: "Property 1 Image", address: "123 Main St", beds: 3, baths: 2, lotSize: "5000 sqft", floorSpace: "2000 sqft", price: "300,000" },
    { id: 2, name: "Property 2", description: "Description 2", imageSrc: image1, alt: "Property 2 Image", address: "456 Main St", beds: 4, baths: 3, lotSize: "6000 sqft", floorSpace: "2500 sqft", price: "400,000" },
    { id: 3, name: "Property 3", description: "Description 3", imageSrc: image1, alt: "Property 3 Image", address: "789 Main St", beds: 5, baths: 4, lotSize: "7000 sqft", floorSpace: "3000 sqft", price: "500,000" },
    
    // Add more properties as needed
  ];

  return (
    <section id="properties" className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl sm:text-3xl font-playfair mb-6 sm:mb-8">
          Featured Properties
        </h2>
        <div className="flex flex-wrap sm:gap-4">
          {properties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>
      </div>
    </section>
  );
}
