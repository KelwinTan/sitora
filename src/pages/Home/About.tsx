import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="about" className="section bg-white dark:bg-dark-primary">
      <div className="container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Image */}
          <motion.div variants={itemVariants} className="relative">
            <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden">
              <img
                src="/images/about-us.png"
                alt="About Us"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-neon-blue to-neon-purple rounded-full opacity-20 blur-2xl" />
          </motion.div>

          {/* Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              We Create Digital Experiences
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-justify">
              With years of experience in web design and full stack development,
              we help businesses establish a strong online presence. Our team of
              experts combines creativity with technical expertise to deliver
              exceptional results.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-2xl font-bold text-neon-blue mb-2">20+</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Projects Completed
                </p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-neon-purple mb-2">
                  20+
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Happy Clients
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
