import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Properties from './components/Properties';


export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Services />
      <Properties />
    </Layout>
  );
}
