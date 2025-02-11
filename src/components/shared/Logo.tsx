import { motion } from 'framer-motion';
import React from 'react';

interface LogoProps {
  className?: string;
  animated?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = '', animated = true }) => {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 1.5, bounce: 0 },
        opacity: { duration: 0.01 }
      }
    }
  };

  return (
    <motion.div
      className={`flex items-center gap-3 ${className}`}
      initial={animated ? { opacity: 0, scale: 0.5 } : undefined}
      animate={animated ? { opacity: 1, scale: 1 } : undefined}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        <motion.svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {/* Browser Window Frame */}
          <motion.rect
            x="2"
            y="2"
            width="36"
            height="36"
            rx="4"
            className="stroke-purple-400"
            strokeWidth="2"
            variants={draw}
            initial="hidden"
            animate="visible"
          />

          {/* Browser Top Bar */}
          <motion.path
            d="M2 10h36"
            className="stroke-purple-400"
            strokeWidth="2"
            variants={draw}
            initial="hidden"
            animate="visible"
          />

          {/* Browser Buttons */}
          <motion.circle
            cx="6"
            cy="6"
            r="1.5"
            className="fill-red-400"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.5 }}
          />
          <motion.circle
            cx="11"
            cy="6"
            r="1.5"
            className="fill-yellow-400"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.6 }}
          />
          <motion.circle
            cx="16"
            cy="6"
            r="1.5"
            className="fill-green-400"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.7 }}
          />

          {/* Code Lines Animation */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
          >
            <motion.rect
              x="6"
              y="14"
              width="20"
              height="2"
              className="fill-purple-400/30"
              animate={{
                width: [20, 28, 20],
                x: [6, 6, 6]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            <motion.rect
              x="6"
              y="19"
              width="16"
              height="2"
              className="fill-purple-400/30"
              animate={{
                width: [16, 24, 16],
                x: [6, 8, 6]
              }}
              transition={{
                duration: 2,
                delay: 0.3,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            <motion.rect
              x="6"
              y="24"
              width="24"
              height="2"
              className="fill-purple-400/30"
              animate={{
                width: [24, 16, 24],
                x: [6, 10, 6]
              }}
              transition={{
                duration: 2,
                delay: 0.6,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          </motion.g>

          {/* Cursor Blink */}
          <motion.rect
            x="6"
            y="29"
            width="2"
            height="2"
            className="fill-purple-400"
            animate={{
              opacity: [1, 0, 1]
            }}
            transition={{
              duration: 1,
              repeat: Infinity
            }}
          />
        </motion.svg>
        
        {/* Glowing effect */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-purple-500/20 blur-xl rounded-full animate-pulse" />
        </div>
      </div>
      
      <div className="flex flex-col">
        {/* Company Name */}
        <motion.span
          className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent whitespace-nowrap"
          initial={animated ? { opacity: 0, x: -20 } : undefined}
          animate={animated ? { opacity: 1, x: 0 } : undefined}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Sitora
        </motion.span>

        {/* Tagline with typing effect */}
        <motion.span
          className="text-sm text-gray-400 whitespace-nowrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          Building Digital Dreams
        </motion.span>
      </div>
    </motion.div>
  );
};

export default Logo;
