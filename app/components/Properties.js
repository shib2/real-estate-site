// components/Properties.js
import Image from "next/image";
import exampleImage from "../public/images/1.jpg"; // Adjust the path as needed

export default function Properties() {
  return (
    <section className="bg-white py-12">
      <h2 className="text-center text-3xl font-playfair mb-8">
        Featured Properties
      </h2>
      <div className="container mx-auto flex space-x-4">
        <div className="bg-blue-100 p-6 w-1/3 shadow-md">
          <Image
            src={exampleImage}
            alt="House 1"
            width={300}
            height={200}
            className="rounded"
          />
          <p className="text-lg font-semibold">123 Main St, Vancouver</p>
          <p>$1,200,000</p>
        </div>
        <div className="bg-blue-100 p-6 w-1/3 shadow-md">
          <Image
            src={exampleImage}
            alt="House 2"
            width={300}
            height={200}
            className="rounded"
          />
          <p className="text-lg font-semibold">456 Oak Ave, Vancouver</p>
          <p>$850,000</p>
        </div>
        <div className="bg-blue-100 p-6 w-1/3 shadow-md">
          <Image
            src={exampleImage}
            alt="House 3"
            width={300}
            height={200}
            className="rounded"
          />
          <p className="text-lg font-semibold">789 Pine Dr, Vancouver</p>
          <p>$950,000</p>
        </div>
      </div>
    </section>
  );
}
