import React from 'react';
import { motion } from 'framer-motion';
import { HiExternalLink } from 'react-icons/hi';

interface PortfolioItem {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  category: 'Essential' | 'Professional' | 'Enterprise';
}

const portfolioItems: PortfolioItem[] = [
  {
    title: "Artisan Café Website",
    description: "A modern, responsive website for a local café featuring online ordering and reservation system.",
    image: "/portfolio/cafe-website.jpg",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    category: "Professional",
    link: "#"
  },
  {
    title: "Tech Startup Landing Page",
    description: "High-converting landing page with stunning animations and seamless user experience.",
    image: "/portfolio/startup-landing.jpg",
    tags: ["Next.js", "TypeScript", "GSAP"],
    category: "Enterprise",
    link: "#"
  },
  {
    title: "Fashion Blog",
    description: "Minimalist blog design with focus on typography and visual hierarchy.",
    image: "/portfolio/fashion-blog.jpg",
    tags: ["React", "Styled Components"],
    category: "Essential",
    link: "#"
  },
  {
    title: "E-commerce Platform",
    description: "Full-featured online store with product management and payment integration.",
    image: "/portfolio/ecommerce.jpg",
    tags: ["Next.js", "Stripe", "Tailwind CSS"],
    category: "Enterprise",
    link: "#"
  },
  {
    title: "Real Estate Showcase",
    description: "Property listing website with virtual tour integration and lead generation.",
    image: "/portfolio/real-estate.jpg",
    tags: ["React", "Three.js", "Firebase"],
    category: "Professional",
    link: "#"
  },
  {
    title: "Personal Portfolio",
    description: "Clean and professional portfolio website for a digital artist.",
    image: "/portfolio/portfolio.jpg",
    tags: ["React", "Framer Motion"],
    category: "Essential",
    link: "#"
  }
];

const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = React.useState<string>('all');

  const filteredItems = selectedCategory === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Our Latest Work
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore our portfolio of successful projects across different industries and complexity levels.
          </p>
        </motion.div>

        <div className="flex justify-center gap-4 mb-12">
          {['all', 'Essential', 'Professional', 'Enterprise'].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-xl"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-700"
                    >
                      <HiExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-4">
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Package: {item.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
