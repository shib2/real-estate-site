import Image from 'next/image';
import person from "../public/images/person1.jpg";

export default function About() {
  return (
    <section id="about" className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <h2 className="text-3xl font-playfair text-center mb-8">About Meilin Li</h2> */}
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <div className="md:w-1/3 mb-6 md:mb-0">
            <Image
              src={person}
              alt="Meilin Li"
              width={300}
              height={300}
              className="rounded-full"
            />
          </div>
          <div className="md:w-2/3 md:pl-8">
            <h3 className="text-xl font-semibold mb-4">Meilin Li</h3>
            <p className="mb-4">Personal Real Estate Corporation</p>
            <p className="mb-4">
              With years of experience in the Victoria real estate market, I am committed to providing exceptional service to my clients. My expertise in both residential and commercial properties allows me to offer comprehensive guidance throughout the buying and selling process.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Contact Information</h4>
                <p>Phone: 250-893-9806</p>
                <p>Email: meilinli@outlook.com</p>
                <p>Office Phone: (250) 384-8124</p>
                <p>Fax: (250) 380-6355</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Office Address</h4>
                <p>150-805 Cloverdale Ave</p>
                <p>Victoria, BC V8X 2S9</p>
              </div>
            </div>
            <div className="mt-6">
              <h4 className="font-semibold mb-2">Languages</h4>
              <p>English, Chinese (Mandarin)</p>
            </div>
            <div className="mt-4">
              <h4 className="font-semibold mb-2">Specialties</h4>
              <ul className="list-disc list-inside grid grid-cols-2 gap-2">
                <li>Consulting</li>
                <li>Residential Counseling</li>
                <li>Development Land</li>
                <li>Residential Valuation</li>
                <li>Investment</li>
                <li>Relocation</li>
                <li>Residential Relocation</li>
                <li>Retail</li>
                <li>Multi-Family</li>
                <li>Farm/Ranch</li>
              </ul>
            </div>
            <div className="mt-4">
              <h4 className="font-semibold mb-2">Trading Areas</h4>
              <p>Central Saanich, Colwood, Duncan, Esquimalt, Highlands, Langford, Malahat, Metchosin, North Island, North Saanich, Oak Bay, Saanich East, Saanich West, Sidney, Sooke, Victoria, View Royal</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}