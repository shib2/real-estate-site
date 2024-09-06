// components/Services.js
export default function Services() {
  return (
    <section className="bg-blue-50 py-12">
      <div className="container mx-auto grid grid-cols-2 gap-8">
        <div className="bg-white p-6 shadow-md rounded">
          <h3 className="text-xl font-playfair mb-2">Selling</h3>
          <p className="mb-4">
            Thinking of selling your property? Let Sarah guide you through the
            process and get the best deal for your home.
          </p>
          <a href="#" className="btn">
            Start Selling
          </a>
        </div>
        <div className="bg-white p-6 shadow-md rounded">
          <h3 className="text-xl font-playfair mb-2">Buying</h3>
          <p className="mb-4">
            Looking to buy your dream home? Sarah can help you find the right
            property and negotiate the best price.
          </p>
          <a href="#" className="btn">
            Start Buying
          </a>
        </div>
      </div>
    </section>
  );
}
