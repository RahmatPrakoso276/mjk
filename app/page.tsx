import Navbars from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Armada from "./components/Armada";
import Gallery from "./components/Galeri";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Whatsapp from "./components/Whatsapp";
export default function Home() {
  return (
    <>
      <Navbars />
      <Hero />
      <About />
      <Services />
      <Armada />
      <Gallery />
      <Contact />
      <Footer />
      <Whatsapp />
    </>
  );
}
