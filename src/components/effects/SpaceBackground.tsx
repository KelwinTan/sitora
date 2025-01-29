import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  speed: number;
}

interface Meteor {
  x: number;
  y: number;
  size: number;
  speed: number;
  delay: number;
  duration: number;
}

export default function SpaceBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const meteorsRef = useRef<Meteor[]>([]);
  const starsRef = useRef<Star[]>([]);
  const { scrollY } = useScroll();

  // Create stars and meteors
  useEffect(() => {
    const stars: Star[] = Array.from({ length: 200 }, () => ({
      x: Math.random() * dimensions.width,
      y: Math.random() * dimensions.height,
      size: Math.random() * 2,
      speed: Math.random() * 0.5 + 0.1,
    }));

    const meteors: Meteor[] = Array.from({ length: 20 }, () => ({
      x: Math.random() * dimensions.width,
      y: Math.random() * dimensions.height,
      size: Math.random() * 3 + 1,
      speed: Math.random() * 2 + 1,
      delay: Math.random() * 2000,
      duration: Math.random() * 1000 + 1000,
    }));

    starsRef.current = stars;
    meteorsRef.current = meteors;
  }, [dimensions]);

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        const { width, height } = canvasRef.current.getBoundingClientRect();
        canvasRef.current.width = width;
        canvasRef.current.height = height;
        setDimensions({ width, height });
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let lastTime = 0;

    const animate = (currentTime: number) => {
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;

      ctx.clearRect(0, 0, dimensions.width, dimensions.height);

      // Draw stars with parallax effect
      starsRef.current.forEach((star) => {
        star.y += star.speed * (deltaTime / 16);
        if (star.y > dimensions.height) {
          star.y = 0;
          star.x = Math.random() * dimensions.width;
        }

        const gradient = ctx.createRadialGradient(
          star.x, star.y, 0,
          star.x, star.y, star.size
        );
        gradient.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
        gradient.addColorStop(1, 'transparent');

        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw meteors
      meteorsRef.current.forEach((meteor) => {
        meteor.x += meteor.speed * 2 * (deltaTime / 16);
        meteor.y += meteor.speed * (deltaTime / 16);

        if (meteor.x > dimensions.width || meteor.y > dimensions.height) {
          meteor.x = Math.random() * dimensions.width;
          meteor.y = -10;
        }

        // Meteor head
        const gradient = ctx.createRadialGradient(
          meteor.x, meteor.y, 0,
          meteor.x, meteor.y, meteor.size * 2
        );
        gradient.addColorStop(0, 'rgba(0, 255, 245, 0.8)');
        gradient.addColorStop(1, 'transparent');

        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.arc(meteor.x, meteor.y, meteor.size, 0, Math.PI * 2);
        ctx.fill();

        // Meteor tail
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(0, 255, 245, 0.2)';
        ctx.lineWidth = meteor.size / 2;
        ctx.moveTo(meteor.x, meteor.y);
        ctx.lineTo(meteor.x - meteor.speed * 10, meteor.y - meteor.speed * 5);
        ctx.stroke();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [dimensions]);

  const parallaxY = useTransform(scrollY, [0, 1000], [0, -200]);

  return (
    <motion.canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full"
      style={{ y: parallaxY }}
    />
  );
}
