import Navbar from "@/components/Layout/Navbar";
import { motion } from "framer-motion";
import About from "./About";
import ContactForm from "./Contact2";
import Footer from "./Footer";
import LandingPage from "./Landing";
import Pricing from "./Pricing";
import Showcase from "./Showcase";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      <LandingPage />
      {/* <Hero /> */}
      <About />
      {/* <AboutUs /> */}
      <Showcase />

      {/* <Services /> */}
      <Pricing />
      {/* <Contact /> */}

      <ContactForm />

      <Footer />
    </motion.div>
  );
}
