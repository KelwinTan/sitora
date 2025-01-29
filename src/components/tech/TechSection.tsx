import { motion, useScroll, useTransform } from 'framer-motion';
import { ReactNode, useRef } from 'react';

interface TechSectionProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
  hasGlowingEdge?: boolean;
  hasCyberGrid?: boolean;
}

export default function TechSection({
  children,
  title,
  subtitle,
  className = '',
  hasGlowingEdge = true,
  hasCyberGrid = true,
}: TechSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  return (
    <motion.section
      ref={sectionRef}
      className={`relative py-20 ${className}`}
      style={{ opacity, scale }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Elements */}
      {hasCyberGrid && (
        <div className="absolute inset-0 cyber-grid opacity-20" />
      )}

      {/* Glowing Edge */}
      {hasGlowingEdge && (
        <>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyber-primary/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyber-secondary/30 to-transparent" />
        </>
      )}

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        {(title || subtitle) && (
          <div className="text-center mb-16">
            {title && (
              <motion.h2
                className="text-4xl md:text-5xl font-bold mb-4 glitch neon-text"
                data-text={title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {title}
              </motion.h2>
            )}
            {subtitle && (
              <motion.p
                className="text-xl text-gray-400"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        )}

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {children}
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-cyber-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-cyber-secondary/5 rounded-full blur-3xl" />
      </div>

      {/* Animated Corner Accents */}
      <div className="absolute top-0 left-0 w-20 h-20">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-cyber-primary to-transparent" />
        <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-cyber-primary to-transparent" />
      </div>
      <div className="absolute top-0 right-0 w-20 h-20">
        <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-l from-cyber-primary to-transparent" />
        <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-cyber-primary to-transparent" />
      </div>
      <div className="absolute bottom-0 left-0 w-20 h-20">
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-cyber-primary to-transparent" />
        <div className="absolute bottom-0 left-0 w-px h-full bg-gradient-to-t from-cyber-primary to-transparent" />
      </div>
      <div className="absolute bottom-0 right-0 w-20 h-20">
        <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-cyber-primary to-transparent" />
        <div className="absolute bottom-0 right-0 w-px h-full bg-gradient-to-t from-cyber-primary to-transparent" />
      </div>
    </motion.section>
  );
}
