'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Suspense, useState, useEffect, useRef } from 'react';
import { Box, Spinner, Text } from '@chakra-ui/react';
import Drone3DModel from './Drone3DModel';

interface Drone3DCanvasProps {
  height?: string | object;
  width?: string | object;
}

export default function Drone3DCanvas({ height = '100%', width = '100%' }: Drone3DCanvasProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isInteracting, setIsInteracting] = useState(false);
  const controlsRef = useRef<any>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box width={width} height={height} position="relative">
      {/* Responsive glowing background */}
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        width={{ base: '80%', md: '70%', lg: '60%' }}
        height={{ base: '80%', md: '70%', lg: '60%' }}
        borderRadius="50%"
        background="radial-gradient(circle, rgba(0,212,255,0.3) 0%, rgba(14,165,233,0.2) 30%, rgba(0,212,255,0.1) 60%, transparent 100%)"
        filter="blur(40px)"
        zIndex={0}
        animation="pulse 3s ease-in-out infinite"
        sx={{
          '@keyframes pulse': {
            '0%, 100%': {
              opacity: 0.6,
              transform: 'translate(-50%, -50%) scale(1)',
            },
            '50%': {
              opacity: 0.9,
              transform: 'translate(-50%, -50%) scale(1.1)',
            },
          },
        }}
      />
      {isLoading && (
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          zIndex={10}
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap={4}
        >
          <Spinner size="xl" color="#00d4ff" thickness="4px" speed="0.8s" />
          <Text color="#00d4ff" fontSize="sm">Loading 3D Model...</Text>
        </Box>
      )}
      <Box
        onMouseDown={() => setIsInteracting(true)}
        onMouseUp={() => setIsInteracting(false)}
        onMouseLeave={() => setIsInteracting(false)}
        onTouchStart={() => setIsInteracting(true)}
        onTouchEnd={() => setIsInteracting(false)}
        style={{ 
          touchAction: isInteracting ? 'none' : 'auto',
          position: 'relative',
          zIndex: 1,
          width: '100%',
          height: '100%'
        }}
      >
        <Canvas 
          style={{ 
            opacity: isLoading ? 0 : 1, 
            transition: 'opacity 0.5s ease',
            pointerEvents: isInteracting ? 'auto' : 'none'
          }}
          gl={{ antialias: true, alpha: true }}
          dpr={[1, 2]}
        >
          <PerspectiveCamera makeDefault position={[0, 0, 6]} fov={60} />
          
          {/* Enhanced Lighting */}
          <ambientLight intensity={0.8} />
          <directionalLight position={[5, 5, 5]} intensity={1.5} color="#00d4ff" />
          <directionalLight position={[-5, -5, -5]} intensity={0.8} color="#0ea5e9" />
          <pointLight position={[0, 0, 5]} intensity={1.2} color="#00d4ff" />
          <pointLight position={[0, 5, 0]} intensity={0.6} color="#ffffff" />
          <hemisphereLight intensity={0.5} color="#00d4ff" groundColor="#0a0e27" />
          
          <Suspense fallback={null}>
            <Drone3DModel scale={4} />
          </Suspense>
          <OrbitControls 
            ref={controlsRef}
            enableZoom={false} 
            enablePan={false}
            enabled={isInteracting}
            autoRotate={!isInteracting}
            autoRotateSpeed={1.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        </Canvas>
      </Box>
    </Box>
  );
}
