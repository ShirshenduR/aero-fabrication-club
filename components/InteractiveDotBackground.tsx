'use client';

import { useEffect, useRef } from 'react';
import { Box } from '@chakra-ui/react';

export default function InteractiveDotBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    const dots: { x: number; y: number; baseAlpha: number }[] = [];
    const spacing = 50;
    const dotRadius = 1.5;
    const glowRadius = 120;

    for (let x = 0; x < canvas.width; x += spacing) {
      for (let y = 0; y < canvas.height; y += spacing) {
        dots.push({
          x,
          y,
          baseAlpha: Math.random() * 0.15 + 0.05,
        });
      }
    }

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      ctx.fillStyle = '#0a0e27';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      dots.forEach((dot) => {
        const dx = mouseX - dot.x;
        const dy = mouseY - dot.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        let alpha = dot.baseAlpha;
        let radius = dotRadius;
        let glowIntensity = 0;

        if (distance < glowRadius) {
          const intensity = 1 - distance / glowRadius;
          alpha = Math.min(0.8, dot.baseAlpha + intensity * 0.5);
          radius = dotRadius + intensity * 2;
          glowIntensity = intensity;
        }

        if (glowIntensity > 0.3) {
          const glowSize = glowRadius * (1 - distance / glowRadius);
          const gradient = ctx.createRadialGradient(dot.x, dot.y, 0, dot.x, dot.y, glowSize);
          gradient.addColorStop(0, `rgba(0, 212, 255, ${glowIntensity * 0.4})`);
          gradient.addColorStop(0.5, `rgba(0, 212, 255, ${glowIntensity * 0.2})`);
          gradient.addColorStop(1, 'rgba(0, 212, 255, 0)');
          
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(dot.x, dot.y, glowSize, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.fillStyle = `rgba(0, 212, 255, ${alpha})`;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, radius, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <Box
      as="canvas"
      ref={canvasRef}
      position="fixed"
      top={0}
      left={0}
      width="100%"
      height="100%"
      zIndex={0}
      pointerEvents="none"
    />
  );
}
