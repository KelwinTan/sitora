import React from 'react';
import { motion } from 'framer-motion';
import { HiCheck } from 'react-icons/hi';
import clsx from 'clsx';
import GlowingCard from '../shared/GlowingCard';

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: PricingFeature[];
  isPopular?: boolean;
  ctaText?: string;
  delay?: number;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  description,
  features,
  isPopular = false,
  ctaText = "Get Started",
  delay = 0
}) => {
  return (
    <GlowingCard
      glowColor={isPopular ? "purple" : "blue"}
      delay={delay}
      className={clsx(
        "backdrop-blur-sm",
        isPopular ? "bg-gradient-to-br from-purple-600/90 to-blue-600/90 text-white" : "bg-white/90 dark:bg-gray-800/90"
      )}
    >
      {isPopular && (
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: delay + 0.3 }}
          className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm font-medium rounded-full shadow-lg"
        >
          Most Popular
        </motion.span>
      )}
      
      <div className="p-8">
        <div className="text-center mb-8">
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: delay + 0.2 }}
            className={clsx(
              "text-2xl font-bold mb-2",
              !isPopular && "text-gray-900 dark:text-white"
            )}
          >
            {title}
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: delay + 0.3 }}
            className={clsx(
              "text-sm mb-4",
              isPopular ? "text-gray-100" : "text-gray-600 dark:text-gray-300"
            )}
          >
            {description}
          </motion.p>
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              delay: delay + 0.4,
              type: "spring",
              stiffness: 300,
              damping: 15
            }}
            className="flex items-baseline justify-center gap-1"
          >
            <span className="text-4xl font-bold">{price}</span>
            <span className={clsx(
              isPopular ? "text-gray-200" : "text-gray-500 dark:text-gray-400"
            )}>IDR</span>
          </motion.div>
        </div>

        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: delay + 0.5 }}
          className="space-y-4 mb-8"
        >
          {features.map((feature, index) => (
            <motion.li
              key={index}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: delay + 0.5 + index * 0.1 }}
              className={clsx(
                "flex items-center gap-3",
                feature.included ? "opacity-100" : "opacity-50"
              )}
            >
              <HiCheck className={clsx(
                "w-5 h-5",
                isPopular ? "text-green-300" : "text-green-500"
              )} />
              <span className={clsx(
                "text-sm",
                !isPopular && "text-gray-600 dark:text-gray-300"
              )}>
                {feature.text}
              </span>
            </motion.li>
          ))}
        </motion.ul>

        <motion.button
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: delay + 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={clsx(
            "w-full py-3 px-6 rounded-xl text-sm font-semibold transition-all duration-200",
            isPopular
              ? "bg-white text-purple-600 hover:bg-gray-100 hover:shadow-xl"
              : "bg-purple-600 text-white hover:bg-purple-700 hover:shadow-xl"
          )}
        >
          {ctaText}
        </motion.button>
      </div>
    </GlowingCard>
  );
};

export default PricingCard;
