import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Programs from "./components/Programs";
import Strengths from "./components/Strengths";
import Campus from "./components/Campus";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import { STYLES } from "./styles/globalStyles.js";
export default function App() {
  return (
    <>
      <style>{STYLES}</style>
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Strengths />
      <Campus />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}

