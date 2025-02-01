import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { useInView } from "react-intersection-observer";

export default function Contact() {
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

  const contactInfo = [
    {
      icon: FiMail,
      title: "Email",
      content: "lw.kelwin@gmail.com",
    },
    {
      icon: FiPhone,
      title: "Phone",
      content: "+62 813-3621-4840",
    },
    {
      icon: FiMapPin,
      title: "Location",
      content: "DKI Jakarta, Indonesia",
    },
  ];

  return (
    <section id="contact" className="section bg-gray-50 dark:bg-dark-secondary">
      <div className="container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-12"
        >
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Ready to start your project? Contact us for a free consultation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div variants={itemVariants} className="space-y-6">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg bg-white dark:bg-dark-primary border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-neon-blue dark:focus:ring-neon-blue/50 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg bg-white dark:bg-dark-primary border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-neon-blue dark:focus:ring-neon-blue/50 outline-none transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-dark-primary border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-neon-blue dark:focus:ring-neon-blue/50 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-dark-primary border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-neon-blue dark:focus:ring-neon-blue/50 outline-none transition-all"
                  />
                </div>
                <button type="submit" className="btn btn-primary w-full">
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="grid gap-8">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <info.icon className="w-6 h-6 text-neon-blue" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">{info.title}</h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        {info.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              {/* <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden bg-gray-200 dark:bg-dark-primary">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.123456789012!2d106.845599!3d-6.208763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3c1a1a1a1a1%3A0x4a501367f076adff!2sJakarta%2C+Indonesia!5e0!3m2!1sen!2sus!4v1+"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div> */}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
