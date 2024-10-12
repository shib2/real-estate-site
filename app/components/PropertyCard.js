import Image from "next/image";

export default function PropertyCard({ imageSrc, alt, address, beds, baths, lotSize, floorSpace, price }) {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg w-full mb-4 sm:mb-0 sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.667rem)]">
      <div className="relative w-full h-48 mb-3">
        <Image
          src={imageSrc}
          alt={alt}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <h3 className="text-lg font-semibold mb-2">{address}</h3>
      <div className="text-sm text-gray-600 mb-2">
        <p>Beds: {beds} | Baths: {baths}</p>
        <p>Lot Size: {lotSize.toLocaleString()} Square Feet</p>
        <p>Floor Space: {floorSpace.toLocaleString()} Square Feet</p>
      </div>
      <p className="text-lg font-bold text-blue-600">${price.toLocaleString()}</p>
    </div>
  );
}