import { motion } from "framer-motion";
import { HiCheck, HiStar } from "react-icons/hi";
import { useInView } from "react-intersection-observer";
import GlowingBorder from "../../components/shared/GlowingBorder";

interface ServicePackage {
  title: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

interface ProjectShowcase {
  title: string;
  description: string;
  imageUrl: string;
  packageType: string;
  technologies: string[];
  link?: string;
}

export default function Services() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const packages: ServicePackage[] = [
    {
      title: "Essential Package",
      price: "2.999.999",
      description: "Perfect for small businesses and personal websites",
      features: [
        "Responsive Design",
        "5 Pages Website",
        "Contact Form",
        "Basic SEO Setup",
        "2 Weeks Delivery",
        "1 Month Support",
        "Mobile-First Design",
      ],
    },
    {
      title: "Professional Package",
      price: "4.999.999",
      description: "Ideal for growing businesses",
      isPopular: true,
      features: [
        "Everything in Essential",
        "Up to 10 Pages",
        "Advanced SEO Optimization",
        "Custom Animations",
        "3 Weeks Delivery",
        "Performance Optimization",
      ],
    },
    {
      title: "Enterprise Package",
      price: "Contact for Pricing",
      description: "Complete solution for large businesses",
      features: [
        "Everything in Professional",
        "Unlimited Pages",
        "Custom Backend Development",
        "Advanced Analytics",
        "4 Weeks Delivery",
        "2 Months Support",
        "Security Hardening",
      ],
    },
  ];

  const recentWork: ProjectShowcase[] = [
    {
      title: "Coinlake",
      description:
        "A highly granular crypto data website tailored for quants and analysts",
      imageUrl: "/images/portfolio/coinlake.png",
      packageType: "Enterprise",
      technologies: ["Vue.js", "Astro", "Tailwind", "GraphQL"],
      link: "https://www.coinlake.xyz/",
    },
    {
      title: "GazeOn.AI",
      description:
        "A platform for delivering customized AI solutions that address unique business challenges.",
      imageUrl: "/images/portfolio/gazeonai.png",
      packageType: "Professional",
      technologies: ["Wordpress", "MySQL", "Python"],
      link: "https://gazeonai.com/",
    },
    {
      title: "Egogohub Indonesia",
      description: "A Company Profile website for Egogohub Indonesia",
      imageUrl: "/images/portfolio/egogohub.png",
      packageType: "Enterprise",
      technologies: ["React", "Next.js", "Tailwind CSS"],
      link: "https://www.egogohub.com/",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Pricing Section */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Choose Your Plan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <motion.div
                key={pkg.title}
                variants={itemVariants}
                className={pkg.isPopular ? "transform scale-105" : ""}
              >
                <GlowingBorder
                  glowColor={
                    pkg.isPopular
                      ? "from-purple-500 via-blue-500 to-purple-500"
                      : "from-blue-500 via-purple-500 to-blue-500"
                  }
                >
                  <div className="p-6 h-full bg-gray-800 rounded-lg">
                    {pkg.isPopular && (
                      <div className="flex items-center justify-center mb-4">
                        <span className="px-3 py-1 text-sm text-purple-400 bg-purple-900/30 rounded-full flex items-center">
                          <HiStar className="w-4 h-4 mr-1" />
                          Most Popular
                        </span>
                      </div>
                    )}
                    <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>
                    <div className="mb-4">
                      {pkg.price === "Contact for Pricing" ? (
                        <span className="text-3xl font-bold">{pkg.price}</span>
                      ) : (
                        <span className="text-3xl font-bold">
                          IDR {pkg.price}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-400 mb-6">{pkg.description}</p>
                    <ul className="space-y-3 mb-6">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-center">
                          <HiCheck className="w-5 h-5 text-green-400 mr-2" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button className="w-full py-3 px-6 rounded-lg bg-purple-600 hover:bg-purple-700 transition-colors">
                      Get Started
                    </button>
                  </div>
                </GlowingBorder>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Recent Work Section */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Recent Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentWork.map((project) => (
              <motion.div key={project.title} variants={itemVariants}>
                <GlowingBorder glowColor="from-blue-500 via-purple-500 to-blue-500">
                  <div className="p-6 bg-gray-800 rounded-lg">
                    <div className="relative aspect-video mb-4 overflow-hidden rounded-lg">
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="object-cover w-full h-full transform hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm bg-purple-900/30 text-purple-400 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-400">
                        {project.packageType} Package
                      </span>
                      {project.link && (
                        <a
                          href={project.link}
                          className="text-purple-400 hover:text-purple-300 transition-colors"
                        >
                          View Project →
                        </a>
                      )}
                    </div>
                  </div>
                </GlowingBorder>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
