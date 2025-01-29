import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const CyberBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] opacity-90" />

      {/* Rotating lines with dynamic sizing */}
      <div className="absolute inset-0">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2"
            style={{
              width: `${150 + i * 10}%`,
              height: '1px',
              originX: 0,
              originY: 0,
              background: `linear-gradient(90deg, 
                transparent, 
                rgba(139, 92, 246, ${0.15 - i * 0.015}), 
                rgba(99, 102, 241, ${0.2 - i * 0.02}), 
                rgba(139, 92, 246, ${0.15 - i * 0.015}), 
                transparent
              )`,
              filter: 'blur(0.5px)',
            }}
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 25 + i * 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0" 
        style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          opacity: 0.3,
        }} 
      />

      {/* Animated particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 30 }).map((_, i) => {
          const size = Math.random() * 2 + 1;
          return (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: size,
                height: size,
                background: 'rgba(139, 92, 246, 0.6)',
                boxShadow: `0 0 ${size * 4}px rgba(139, 92, 246, 0.4)`,
                filter: 'blur(0.5px)',
              }}
              initial={{
                x: Math.random() * 100 + '%',
                y: Math.random() * 100 + '%',
                scale: 0,
              }}
              animate={{
                x: [
                  Math.random() * 100 + '%',
                  Math.random() * 100 + '%',
                  Math.random() * 100 + '%',
                ],
                y: [
                  Math.random() * 100 + '%',
                  Math.random() * 100 + '%',
                  Math.random() * 100 + '%',
                ],
                scale: [0, 1, 0],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                ease: "linear",
                times: [0, 0.5, 1],
                delay: Math.random() * 5,
              }}
            />
          );
        })}
      </div>

      {/* Glowing vignette */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(
                circle at 50% 50%,
                transparent 20%,
                rgba(139, 92, 246, 0.03) 60%,
                rgba(99, 102, 241, 0.05) 100%
              )
            `,
          }}
          animate={{
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Horizontal scan line */}
      <motion.div
        className="absolute w-full h-[100px] opacity-[0.015]"
        style={{
          background: 'linear-gradient(transparent, rgba(139, 92, 246, 1), transparent)',
          filter: 'blur(2px)',
        }}
        animate={{
          top: ['-10%', '110%'],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
};

export default CyberBackground;
