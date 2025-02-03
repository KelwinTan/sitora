import Navbar from "@/components/Layout/Navbar";
import { motion } from "framer-motion";
import About from "./About";
import Contact from "./Contact";
import Hero from "./Hero";
import Services from "./Services";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Contact />
    </motion.div>
  );
}
