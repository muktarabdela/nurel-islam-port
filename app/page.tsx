import About from "@/components/About";
import Charity from "@/components/Charity";
import Contact from "@/components/Contact";
import Donation from "@/components/Donation";
import Footer from "@/components/Footer";
import FreeCourses from "@/components/FreeCourses";
import Hero from "@/components/hero";
import Navbar from "@/components/Navbar";
import PaidClasses from "@/components/PaidClasses";
import Programs from "@/components/Programs";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Charity />
      <FreeCourses/>
      <PaidClasses/>
      <Donation />
      <Contact />
      {/* <Footer/> */}
    </>
  );
}
