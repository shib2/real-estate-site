// components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-[rgba(165,202,211,1)] py-8 text-center">
      <div className="container mx-auto">
        <p className="text-lg">Meilin Li - Personal Real Estate Corporation</p>
        <p>&copy; {new Date().getFullYear()} All Rights Reserved</p>
      </div>
    </footer>
  );
}
