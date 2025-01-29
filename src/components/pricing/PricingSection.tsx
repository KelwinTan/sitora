import React from 'react';
import { motion } from 'framer-motion';
import PricingCard from './PricingCard';

const pricingPlans = [
  {
    title: "Essential",
    price: "2.999.999",
    description: "Perfect for small businesses starting their digital journey",
    features: [
      { text: "Responsive Design", included: true },
      { text: "5 Pages Website", included: true },
      { text: "Basic SEO Optimization", included: true },
      { text: "Contact Form", included: true },
      { text: "Mobile-First Approach", included: true },
      { text: "Social Media Integration", included: true },
      { text: "3 Rounds of Revisions", included: true },
      { text: "Basic Analytics", included: true },
      { text: "Custom Animations", included: false },
      { text: "Advanced Features", included: false }
    ]
  },
  {
    title: "Professional",
    price: "4.999.999",
    description: "Ideal for growing businesses needing advanced features",
    isPopular: true,
    features: [
      { text: "Everything in Essential", included: true },
      { text: "Up to 10 Pages", included: true },
      { text: "Advanced SEO Package", included: true },
      { text: "Custom Animations", included: true },
      { text: "Blog Integration", included: true },
      { text: "E-commerce Ready", included: true },
      { text: "5 Rounds of Revisions", included: true },
      { text: "Premium Analytics", included: true },
      { text: "Priority Support", included: true },
      { text: "Performance Optimization", included: true }
    ]
  },
  {
    title: "Enterprise",
    price: "9.999.999",
    description: "Complete solution for large-scale business needs",
    features: [
      { text: "Everything in Professional", included: true },
      { text: "Unlimited Pages", included: true },
      { text: "Custom Features Development", included: true },
      { text: "Advanced Security Features", included: true },
      { text: "API Integration", included: true },
      { text: "Database Integration", included: true },
      { text: "Unlimited Revisions", included: true },
      { text: "24/7 Priority Support", included: true },
      { text: "Custom Admin Dashboard", included: true },
      { text: "Monthly Maintenance", included: true }
    ]
  }
];

const PricingSection: React.FC = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Choose Your Perfect Plan
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Transform your digital presence with our carefully crafted website packages.
            Each plan is designed to meet different business needs and growth stages.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
