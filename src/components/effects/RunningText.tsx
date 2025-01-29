import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface ZodiacSign {
  name: string;
  symbol: string;
  constellation: string;
}

const zodiacSigns: ZodiacSign[] = [
  { name: 'Aries', symbol: '♈', constellation: '⋆*∙.☆∴✧' },
  { name: 'Taurus', symbol: '♉', constellation: '⋆｡°✩∘' },
  { name: 'Gemini', symbol: '♊', constellation: '∙⊹⋆.☆∵' },
  { name: 'Cancer', symbol: '♋', constellation: '✦⋆∙.∴⊹' },
  { name: 'Leo', symbol: '♌', constellation: '⋆｡⊹⋆✧' },
  { name: 'Virgo', symbol: '♍', constellation: '∙⊹⋆｡°✩' },
  { name: 'Libra', symbol: '♎', constellation: '⋆∙.☆∴✧' },
  { name: 'Scorpio', symbol: '♏', constellation: '⊹⋆｡°✩∘' },
  { name: 'Sagittarius', symbol: '♐', constellation: '∙⋆.☆∵✧' },
  { name: 'Capricorn', symbol: '♑', constellation: '✦⋆∙.∴⊹' },
  { name: 'Aquarius', symbol: '♒', constellation: '⋆｡⊹⋆✧' },
  { name: 'Pisces', symbol: '♓', constellation: '∙⊹⋆｡°✩' },
];

interface RunningTextProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
}

const RunningText: React.FC<RunningTextProps> = ({
  text,
  className = '',
  speed = 20,
  delay = 0
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const textSpan = container.querySelector('span');
    if (!textSpan) return;

    const textWidth = textSpan.offsetWidth;
    const duration = textWidth / speed;

    controls.start({
      x: [-textWidth, 0],
      transition: {
        duration,
        delay,
        repeat: Infinity,
        ease: 'linear',
      },
    });
  }, [speed, delay, controls]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Zodiac Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <div className="flex space-x-8 animate-float">
          {zodiacSigns.map((sign, index) => (
            <motion.div
              key={sign.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 2,
                delay: index * 0.2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="text-2xl text-cyber-primary"
            >
              <div className="relative">
                <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-sm">
                  {sign.constellation}
                </span>
                <span className="text-3xl">{sign.symbol}</span>
                <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs">
                  {sign.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Running Text */}
      <div
        ref={containerRef}
        className="overflow-hidden whitespace-nowrap"
        style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
      >
        <motion.span
          animate={controls}
          className="inline-block"
        >
          <div className="flex items-center space-x-8">
            {Array.from({ length: 3 }).map((_, i) => (
              <span key={i} className="inline-flex items-center">
                <span className="text-cyber-primary">{text}</span>
                <span className="mx-8 text-cyber-secondary opacity-50">
                  {zodiacSigns[i % zodiacSigns.length].symbol}
                </span>
              </span>
            ))}
          </div>
        </motion.span>
      </div>

      {/* Constellation Lines */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full opacity-5">
          <defs>
            <linearGradient id="constellation-line" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--cyber-primary)" stopOpacity="0" />
              <stop offset="50%" stopColor="var(--cyber-primary)" stopOpacity="0.5" />
              <stop offset="100%" stopColor="var(--cyber-primary)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <g className="animate-pulse-slow">
            {zodiacSigns.map((_, i) => {
              const x1 = (i / zodiacSigns.length) * 100;
              const x2 = ((i + 1) / zodiacSigns.length) * 100;
              return (
                <path
                  key={i}
                  d={`M ${x1}% 50% Q ${(x1 + x2) / 2}% ${Math.random() * 30 + 35}%, ${x2}% 50%`}
                  stroke="url(#constellation-line)"
                  strokeWidth="0.5"
                  fill="none"
                />
              );
            })}
          </g>
        </svg>
      </div>
    </div>
  );
};

export default RunningText;
