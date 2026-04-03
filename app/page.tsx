import About from "@/components/About";
import Charity from "@/components/Charity";
import Contact from "@/components/Contact";
import Donation from "@/components/Donation";
import Footer from "@/components/Footer";
import Hero from "@/components/hero";
import Navbar from "@/components/Navbar";
import Programs from "@/components/Programs";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Charity />
      <Donation />
      <Contact />
      <Footer/>
    </>
  );
}
