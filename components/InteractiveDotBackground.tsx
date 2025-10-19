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

    let dots: { x: number; y: number; baseAlpha: number }[] = [];
    const spacing = 50;
    const dotRadius = 1.5;
    const glowRadius = 120;
    let animationId: number;
    let dpr = Math.max(window.devicePixelRatio || 1, 1);

    const generateDots = () => {
      dots = [];
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      for (let x = 0; x < width; x += spacing) {
        for (let y = 0; y < height; y += spacing) {
          dots.push({
            x,
            y,
            baseAlpha: Math.random() * 0.15 + 0.05,
          });
        }
      }
    };

    const setCanvasSize = () => {
      // Size the canvas to the viewport so it remains fixed while content scrolls
    // Size canvas to viewport (fixed background)
      const width = window.innerWidth;
      const height = window.innerHeight;

      // Match CSS size for layout
    // CSS size for layout
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      // Match drawing buffer size with DPR scaling for crisp and accurate coordinates
    // DPR-scaled drawing buffer
      dpr = Math.max(window.devicePixelRatio || 1, 1);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      generateDots();
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);
    
    // No scroll resize needed for fixed, viewport-sized canvas
    // No scroll resize needed

  let pointerX = -1000; // CSS pixels, relative to canvas
    let pointerY = -1000;

    const updatePointer = (clientX: number, clientY: number) => {
      const rect = canvas.getBoundingClientRect();
      // Convert viewport coords to canvas-local CSS pixels
    // Convert viewport coords to canvas-local CSS pixels
      pointerX = clientX - rect.left;
      pointerY = clientY - rect.top;
    };

    const handlePointerMove = (e: PointerEvent) => {
      updatePointer(e.clientX, e.clientY);
    };

    const handlePointerLeave = () => {
      pointerX = -1000;
      pointerY = -1000;
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerleave', handlePointerLeave, { passive: true });

    const animate = () => {
      // Clear using CSS pixel units thanks to the DPR transform
    // Clear using CSS pixel units
      ctx.fillStyle = '#0a0e27';
      ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);

      dots.forEach((dot) => {
        const dx = pointerX - dot.x;
        const dy = pointerY - dot.y;
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

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerleave', handlePointerLeave);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <Box
      as="canvas"
      ref={canvasRef}
      position="fixed"
      top={0}
      left={0}
      width="100vw"
      height="100vh"
      zIndex={0}
      pointerEvents="none"
      style={{ 
        display: 'block',
        // Ensure proper hit-testing calculations for pointer coords
    // Ensure pointer coords correct
        touchAction: 'none',
      }}
    />
  );
}
