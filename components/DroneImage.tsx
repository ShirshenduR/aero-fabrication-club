'use client';

import React from 'react';
import { Box } from '@chakra-ui/react';
import Image from 'next/image';

export default function DroneImage() {
  return (
    <Box
      position="relative"
      width="100%"
      height="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      {/* Animated background circle */}
      <Box
        position="absolute"
        width="300px"
        height="300px"
        borderRadius="50%"
        bgGradient="radial(circle, rgba(255,107,0,0.2), transparent)"
        className="rotate-animation"
        zIndex={0}
      />
      
      {/* Drone image with floating animation */}
      <Box
        position="relative"
        width={{ base: '250px', md: '350px', lg: '450px' }}
        height={{ base: '250px', md: '350px', lg: '450px' }}
        className="float-animation"
        zIndex={1}
      >
        <Image
          src="/drone-hero.png"
          alt="AFC Drone"
          fill
          style={{ objectFit: 'contain' }}
          priority
        />
      </Box>
      
      {/* Glowing effect */}
      <Box
        position="absolute"
        width="200px"
        height="200px"
        borderRadius="50%"
        bgGradient="radial(circle, rgba(255,107,0,0.3), transparent)"
        filter="blur(40px)"
        className="float-animation"
        zIndex={0}
      />
      
      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(2deg);
          }
        }
        
        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        
        .float-animation {
          animation: float 4s ease-in-out infinite;
        }
        
        .rotate-animation {
          animation: rotate 20s linear infinite;
        }
      `}</style>
    </Box>
  );
}
