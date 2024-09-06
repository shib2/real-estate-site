// components/Header.js
export default function Header() {
    return (
      <header className="bg-[rgba(165,202,211,1)] p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-playfair">
            <span className="text-blue-600">Sarah Grey</span> - ABC Real Estate Services
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#" className="hover:text-blue-600">Home</a></li>
              <li><a href="#" className="hover:text-blue-600">Properties</a></li>
              <li><a href="#" className="hover:text-blue-600">Listings</a></li>
              <li><a href="#" className="hover:text-blue-600">Contact</a></li>
            </ul>
          </nav>
          <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Contact Me</a>
        </div>
      </header>
    );
  }
  