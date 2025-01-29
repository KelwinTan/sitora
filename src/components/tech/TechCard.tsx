import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ReactNode, useEffect, useRef } from 'react';

interface TechCardProps {
  children: ReactNode;
  className?: string;
  glowIntensity?: number;
  hasHolographicEffect?: boolean;
  hasMatrixEffect?: boolean;
  aspectRatio?: string;
}

export default function TechCard({
  children,
  className = '',
  glowIntensity = 1,
  hasHolographicEffect = false,
  hasMatrixEffect = false,
  aspectRatio = 'aspect-[4/3]'
}: TechCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [7, -7]), {
    stiffness: 150,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-7, 7]), {
    stiffness: 150,
    damping: 20,
  });

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

  return (
    <motion.div
      className={`relative ${aspectRatio} ${className} group`}
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
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.2 },
        }}
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
              rgba(0, 255, 245, ${0.5 * glowIntensity}) 0%,
              transparent 50%
            )`,
            mixBlendMode: 'screen'
          }}
        />

        {/* Animated border */}
        <motion.div
          className="absolute inset-0 -z-10 rounded-xl overflow-hidden"
        >
          <motion.div
            className="absolute w-[200%] h-[200%] -top-1/2 -left-1/2"
            style={{
              background: `conic-gradient(
                from 0deg,
                rgba(0, 255, 245, ${0.5 * glowIntensity}),
                rgba(139, 92, 246, ${0.6 * glowIntensity}),
                rgba(99, 102, 241, ${0.6 * glowIntensity}),
                rgba(139, 92, 246, ${0.6 * glowIntensity}),
                rgba(0, 255, 245, ${0.5 * glowIntensity})
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
              background: `radial-gradient(
                circle at 50% 50%,
                rgba(0, 255, 245, ${0.4 * glowIntensity}),
                transparent 70%
              )`
            }}
            animate={{
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        </div>

        {/* Edge highlight */}
        <div className="absolute inset-px rounded-xl bg-gradient-to-b from-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        {/* Holographic Effect */}
        {hasHolographicEffect && (
          <motion.div
            className="absolute inset-0 rounded-xl"
            style={{
              background: 'linear-gradient(135deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
              mixBlendMode: 'overlay',
            }}
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        )}

        {/* Matrix Effect */}
        {hasMatrixEffect && (
          <div
            className="absolute inset-0 rounded-xl overflow-hidden opacity-20"
            style={{
              background: `repeating-linear-gradient(
                0deg,
                rgba(0, 255, 245, ${0.2 * glowIntensity}),
                rgba(0, 255, 245, ${0.2 * glowIntensity}) 2px,
                transparent 2px,
                transparent 4px
              )`,
            }}
          />
        )}
      </motion.div>
    </motion.div>
  );
}
