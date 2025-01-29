import React, { useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface GlowingCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  delay?: number;
  hover?: boolean;
  aspectRatio?: string;
}

const GlowingCard: React.FC<GlowingCardProps> = ({
  children,
  className = '',
  glowColor = 'purple',
  delay = 0,
  hover = true,
  aspectRatio = 'aspect-[4/3]'
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [7, -7]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-7, 7]), { stiffness: 150, damping: 20 });

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const updateMousePosition = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      mouseX.set(x / rect.width - 0.5);
      mouseY.set(y / rect.height - 0.5);
      
      // Update CSS variables for highlight effect
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    };

    card.addEventListener('mousemove', updateMousePosition);
    return () => card.removeEventListener('mousemove', updateMousePosition);
  }, [mouseX, mouseY]);

  const glowColors = {
    purple: {
      primary: 'rgba(139, 92, 246, 0.8)',
      secondary: 'rgba(99, 102, 241, 0.8)',
      accent: 'rgba(0, 255, 245, 0.5)'
    },
    blue: {
      primary: 'rgba(59, 130, 246, 0.8)',
      secondary: 'rgba(37, 99, 235, 0.8)',
      accent: 'rgba(147, 197, 253, 0.5)'
    },
    green: {
      primary: 'rgba(34, 197, 94, 0.8)',
      secondary: 'rgba(21, 128, 61, 0.8)',
      accent: 'rgba(134, 239, 172, 0.5)'
    },
    yellow: {
      primary: 'rgba(234, 179, 8, 0.8)',
      secondary: 'rgba(202, 138, 4, 0.8)',
      accent: 'rgba(254, 240, 138, 0.5)'
    }
  };

  const selectedColor = glowColors[glowColor as keyof typeof glowColors];

  return (
    <motion.div
      ref={ref}
      className={`relative ${aspectRatio} ${className} group`}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      style={{
        perspective: 1000,
        transformStyle: 'preserve-3d',
      }}
    >
      <motion.div
        ref={cardRef}
        className="h-full w-full relative"
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        whileHover={hover ? {
          scale: 1.05,
          transition: { duration: 0.2 }
        } : {}}
      >
        {/* Content */}
        <div className="relative z-10 h-full w-full bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-white/10">
          {children}
        </div>

        {/* Mouse follow highlight */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl z-20 pointer-events-none"
          style={{
            background: `radial-gradient(
              circle at var(--mouse-x) var(--mouse-y),
              ${selectedColor.accent} 0%,
              transparent 50%
            )`,
            mixBlendMode: 'screen'
          }}
        />

        {/* Animated border */}
        <motion.div
          className="absolute inset-0 -z-10 rounded-xl overflow-hidden"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: delay + 0.2 }}
        >
          <motion.div
            className="absolute w-[200%] h-[200%] -top-1/2 -left-1/2"
            style={{
              background: `conic-gradient(
                from 0deg,
                ${selectedColor.primary},
                ${selectedColor.secondary},
                ${selectedColor.accent},
                ${selectedColor.secondary},
                ${selectedColor.primary}
              )`,
            }}
            animate={{
              rotate: [0, 360]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </motion.div>

        {/* Glow Effects */}
        <div className="absolute inset-0 -z-20">
          <motion.div
            className="absolute inset-0 rounded-xl blur-2xl"
            style={{
              background: `radial-gradient(circle at 50% 50%, ${selectedColor.primary}, transparent 70%)`
            }}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: [0.3, 0.6, 0.3] } : {}}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        </div>

        {/* Edge highlight */}
        <div className="absolute inset-px rounded-xl bg-gradient-to-b from-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </motion.div>
    </motion.div>
  );
};

export default GlowingCard;
