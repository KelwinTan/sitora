import { motion } from 'framer-motion';
import Hero from './Hero';
import Services from './Services';
import About from './About';
import Contact from './Contact';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <About />
      <Services />
      <Contact />
    </motion.div>
  );
}
