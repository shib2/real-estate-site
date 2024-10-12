// components/Layout.js
import Head from "next/head";
import Header from './Header';
import Footer from './Footer';
import FloatingSidebar from './FloatingSidebar';
import BackToTop from '../tools/BackToTop';

export default function Layout({ children }) {
  return (
    <div className="font-roboto min-h-screen">
      <Head>
        <title>Meilin Li - Real Estate Services</title>
        <meta name="description" content="Real Estate With Integrity, Honesty, And Results" />
        <link rel="icon" href="/favicon.ico" />
        <script src="/menu-toggle.js" defer></script>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
      <FloatingSidebar />
      <BackToTop />
    </div>
  );
}
