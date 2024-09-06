import exampleImage from '../public/images/2.jpg'; // Adjust the path as needed

export default function About() {
  return (
    <section className="bg-white">
      <div className="container mx-auto flex items-center justify-between relative overflow-hidden">
        {/* Background Image and Gradient */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${exampleImage.src})`,
              filter: 'grayscale(1)',
            }}
          ></div>
          <div
            className="absolute inset-0 bg-gradient-to-b from-white/80 to-white/80"
            style={{
              zIndex: -1,
            }}
          ></div>
        </div>
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center p-8 bg-white bg-opacity-70 rounded-md">
          <h2 className="text-2xl font-playfair">Sarah Grey</h2>
          <p className="text-lg mt-2">Your Vancouver Real Estate Specialist</p>
          <p className="mt-4">
            Sarah is dedicated to providing exceptional real estate services
            tailored to meet the needs of both buyers and sellers. With years of
            experience, she can guide you through the complexities of the
            market.
          </p>
          <div className="mt-4">
            <a href="#" className="btn">
              View Listings
            </a>
            <a href="#" className="btn">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
