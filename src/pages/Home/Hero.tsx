import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { IoRocketSharp } from 'react-icons/io5';

const SpaceElements = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Stars */}
      {Array.from({ length: 50 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Planets */}
      <motion.div
        className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 blur-sm"
        style={{
          right: '15%',
          top: '20%',
          transform: `translate(${mousePosition.x * -0.5}px, ${mousePosition.y * -0.5}px)`,
        }}
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white opacity-30" />
      </motion.div>

      {/* Satellites */}
      <motion.div
        className="absolute text-cyber-primary text-4xl"
        style={{
          left: '10%',
          top: '30%',
          transform: `translate(${mousePosition.x * 0.8}px, ${mousePosition.y * 0.8}px)`,
        }}
        animate={{
          y: [0, -20, 0],
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="w-4 h-4 bg-cyber-primary rounded-full shadow-lg shadow-cyber-primary/50" />
      </motion.div>

      {/* Space Station */}
      <motion.div
        className="absolute text-cyber-secondary text-5xl"
        style={{
          right: '20%',
          bottom: '40%',
          transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`,
        }}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="relative">
          <div className="w-8 h-8 bg-cyber-secondary rounded-lg shadow-lg shadow-cyber-secondary/50" />
          <div className="absolute top-1/2 left-1/2 w-16 h-1 bg-cyber-secondary/50 -translate-x-1/2 -translate-y-1/2" />
        </div>
      </motion.div>
    </div>
  );
};

const LaunchButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.button
      className="relative group px-12 py-6 bg-dark-secondary rounded-full overflow-hidden scale-125"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        transition: {
          type: "spring",
          stiffness: 200,
          damping: 20
        }
      }}
    >
      {/* Animated background gradient */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-cyber-primary via-blue-500 to-cyber-secondary"
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          backgroundSize: '200% 200%',
          opacity: isHovered ? 0.3 : 0,
          transition: 'opacity 0.3s ease'
        }}
      />
      
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{
          boxShadow: isHovered 
            ? [
                '0 0 20px 2px rgba(0, 255, 245, 0.3)',
                '0 0 30px 5px rgba(0, 255, 245, 0.2)',
                '0 0 20px 2px rgba(0, 255, 245, 0.3)'
              ]
            : '0 0 0 0 rgba(0, 255, 245, 0)'
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="relative flex items-center space-x-4">
        <span className="text-cyber-primary font-bold text-2xl tracking-wider">LAUNCH PROJECT</span>
        <div className="relative w-8 h-8">
          <motion.div
            animate={isHovered ? {
              y: [-30, -60],
              scale: [1, 0.8],
              opacity: [1, 0],
              rotate: [0, 45]
            } : {}}
            transition={{ duration: 0.5 }}
            className="absolute text-3xl text-cyber-primary"
          >
            <IoRocketSharp />
          </motion.div>
          {isHovered && (
            <motion.div
              initial={{ y: 60, scale: 0.8, opacity: 0, rotate: -45 }}
              animate={{ y: 0, scale: 1, opacity: 1, rotate: 0 }}
              className="absolute text-3xl text-cyber-primary"
            >
              <IoRocketSharp />
            </motion.div>
          )}
        </div>
      </div>
      
      {/* Enhanced rocket trail */}
      <motion.div
        className="absolute bottom-0 left-1/2 w-2 -translate-x-1/2"
        style={{
          height: isHovered ? '100px' : '0px',
          background: 'linear-gradient(to top, var(--cyber-primary), transparent)',
          opacity: isHovered ? 1 : 0,
          transition: 'all 0.3s ease',
          filter: 'blur(2px)'
        }}
      />
      
      {/* Particle effects */}
      {isHovered && (
        <>
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyber-primary rounded-full"
              initial={{
                opacity: 1,
                scale: 0,
                x: 0,
                y: 0
              }}
              animate={{
                opacity: 0,
                scale: Math.random() * 2 + 1,
                x: (Math.random() - 0.5) * 100,
                y: Math.random() * 100
              }}
              transition={{
                duration: Math.random() * 0.8 + 0.5,
                repeat: Infinity,
                delay: Math.random() * 0.2,
                ease: "easeOut"
              }}
              style={{
                left: '50%',
                bottom: '0%',
                filter: 'blur(1px)'
              }}
            />
          ))}
        </>
      )}
    </motion.button>
  );
};

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);
  
  return (
    <div ref={containerRef} className="relative min-h-screen bg-dark-primary overflow-hidden">
      <SpaceElements />
      
      {/* Main Content */}
      <motion.div
        className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 text-center"
        style={{ y }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-bold mb-6"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyber-primary via-blue-400 to-cyber-secondary">
            Explore The Future
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl"
        >
          Embark on a journey through digital innovation and cutting-edge technology
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <LaunchButton />
        </motion.div>

        {/* Orbital Ring */}
        <div className="absolute w-[150%] h-[150%] border border-cyber-primary/20 rounded-full animate-spin-slow" style={{ animationDuration: '20s' }} />
        <div className="absolute w-[140%] h-[140%] border border-cyber-secondary/20 rounded-full animate-spin-slow" style={{ animationDuration: '15s' }} />
        <div className="absolute w-[130%] h-[130%] border border-cyber-primary/20 rounded-full animate-spin-slow" style={{ animationDuration: '10s' }} />
      </motion.div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      
      {/* Glow Effects */}
      <div className="absolute inset-0 bg-gradient-radial from-cyber-primary/5 to-transparent" />
    </div>
  );
}
