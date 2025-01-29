import React from 'react';
import { motion } from 'framer-motion';

interface GlowingBorderProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  intensity?: 'low' | 'medium' | 'high';
}

const GlowingBorder: React.FC<GlowingBorderProps> = ({
  children,
  className = '',
  glowColor = 'from-purple-500 via-blue-500 to-purple-500',
  intensity = 'medium'
}) => {
  const glowIntensity = {
    low: 'opacity-30',
    medium: 'opacity-50',
    high: 'opacity-75'
  };

  const borderVariants = {
    initial: { 
      backgroundPosition: '0% 50%',
      filter: 'brightness(0.8) blur(4px)'
    },
    animate: {
      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
      filter: ['brightness(0.8) blur(4px)', 'brightness(1.2) blur(2px)', 'brightness(0.8) blur(4px)'],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: 'linear'
      }
    }
  };

  return (
    <div className={`relative group ${className}`}>
      {/* Outer glow */}
      <motion.div
        className={`absolute -inset-[2px] rounded-lg bg-gradient-to-r ${glowColor} ${glowIntensity[intensity]} blur-[2px]`}
        initial="initial"
        animate="animate"
        variants={borderVariants}
      />
      
      {/* Animated border */}
      <motion.div
        className={`absolute -inset-[1px] rounded-lg bg-gradient-to-r ${glowColor} ${glowIntensity[intensity]}`}
        style={{ backgroundSize: '200% 200%' }}
        initial="initial"
        animate="animate"
        variants={borderVariants}
      />

      {/* Sparkles */}
      <motion.div
        className="absolute -inset-2 rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.5, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut'
        }}
      >
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </motion.div>
      
      {/* Content */}
      <div className="relative rounded-lg bg-gray-900 p-px overflow-hidden">
        {/* Inner gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 to-gray-900/40 backdrop-blur-[2px]" />
        
        {/* Actual content */}
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </div>
  );
};

export default GlowingBorder;
