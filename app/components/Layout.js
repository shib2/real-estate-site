// components/Layout.js
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="font-roboto">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
