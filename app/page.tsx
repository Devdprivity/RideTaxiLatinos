import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Stats from './components/Stats';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import CitiesPreview from './components/CitiesPreview';
import AppPromo from './components/AppPromo';
import DriversCTA from './components/DriversCTA';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import MobileHome from './components/MobileHome';

export default function Home() {
  return (
    <>
      {/* Vista Mobile - Solo visible en pantallas pequeñas */}
      <MobileHome />
      
      {/* Vista Desktop - Solo visible en pantallas grandes */}
      <div className="hidden lg:block min-h-screen">
        <Header />
        <Hero />
        <Features />
        {/* <Stats /> */}
        <HowItWorks />
        <Testimonials />
        <CitiesPreview />
        <AppPromo />
        {/* <DriversCTA /> */}
        <FAQ />
        <Footer />
      </div>
    </>
  );
}
