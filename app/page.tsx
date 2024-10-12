import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Properties from './components/Properties';
import Contact from './components/Contact';



export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Properties />
      <Contact />
    </Layout>
  );
}
