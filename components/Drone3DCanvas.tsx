'use client';

import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Suspense, useState, useEffect, useRef } from 'react';
import { Box, Spinner, Text, useBreakpointValue } from '@chakra-ui/react';
import Drone3DModel from './Drone3DModel';

interface Drone3DCanvasProps {
  height?: string | object;
  width?: string | object;
}

function Controls({ onInteractionChange }: { onInteractionChange: (interacting: boolean) => void }) {
  const controlsRef = useRef<any>(null);
  const touchTimerRef = useRef<NodeJS.Timeout | null>(null);
  const isTouchHoldRef = useRef(false);

  useEffect(() => {
    const controls = controlsRef.current;
    if (!controls) return;

    const handleStart = () => {
      // Only trigger interaction after a delay for touch devices
      if (touchTimerRef.current) {
        clearTimeout(touchTimerRef.current);
      }
      
      touchTimerRef.current = setTimeout(() => {
        isTouchHoldRef.current = true;
        onInteractionChange(true);
      }, 200); // 200ms delay - enough to differentiate scroll from rotate
    };
    
    const handleEnd = () => {
      if (touchTimerRef.current) {
        clearTimeout(touchTimerRef.current);
      }
      if (isTouchHoldRef.current) {
        onInteractionChange(false);
      }
      isTouchHoldRef.current = false;
    };

    controls.addEventListener('start', handleStart);
    controls.addEventListener('end', handleEnd);

    return () => {
      controls.removeEventListener('start', handleStart);
      controls.removeEventListener('end', handleEnd);
      if (touchTimerRef.current) {
        clearTimeout(touchTimerRef.current);
      }
    };
  }, [onInteractionChange]);

  return (
    <OrbitControls
      ref={controlsRef}
      enableZoom={false}
      enablePan={false}
      autoRotate={true}
      autoRotateSpeed={1.5}
      minPolarAngle={Math.PI / 3}
      maxPolarAngle={Math.PI / 1.5}
      rotateSpeed={1.2}
      enableDamping={true}
      dampingFactor={0.1}
      touches={{ 
        ONE: 0,  // Single finger for rotation (TOUCH_ROTATE)
        TWO: 0   // Disable two-finger gestures
      }}
      mouseButtons={{
        LEFT: 0,   // Left mouse button for rotation
        MIDDLE: undefined,
        RIGHT: undefined
      }}
      makeDefault
    />
  );
}

export default function Drone3DCanvas({ height = '100%', width = '100%' }: Drone3DCanvasProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isInteracting, setIsInteracting] = useState(false);
  const [showHint, setShowHint] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Responsive scale for the 3D model - Balanced sizing for all screens
  const modelScale = useBreakpointValue({ 
    base: 4.0,    // Small phones (< 480px) - Larger for better visibility
    xs: 4.2,      // Phones (480px)
    sm: 4.4,      // Large phones/small tablets (768px)
    md: 4.5,      // Tablets (992px)
    lg: 4.0,      // Desktop/Laptops (1280px) - Not too large
    xl: 4.5,      // Large desktop (1536px)
    '2xl': 5.0    // Extra large (1920px+)
  }) || 4.0;

  // Responsive camera position - Balanced distance for all screens
  const cameraDistance = useBreakpointValue({
    base: 6.2,    // Closer for phones
    xs: 6.2,
    sm: 6.3,
    md: 6.4,
    lg: 6.5,      // Consistent for desktop
    xl: 6.2,
    '2xl': 6.0
  }) || 6.2;

  // Responsive FOV for better viewing on different screens
  const cameraFOV = useBreakpointValue({
    base: 62,     // Balanced for phones
    sm: 60,
    md: 60,
    lg: 58,       // Good for laptops
    xl: 56,
    '2xl': 55
  }) || 62;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Hide hint after some time if not loading
  useEffect(() => {
    if (!isLoading && !hasInteracted) {
      const hintTimer = setTimeout(() => {
        setShowHint(false);
      }, 10000); // Show for 10 seconds
      return () => clearTimeout(hintTimer);
    }
  }, [isLoading, hasInteracted]);

  // Handle when user starts interacting
  const handleInteractionChange = (interacting: boolean) => {
    setIsInteracting(interacting);
    if (interacting && !hasInteracted) {
      setHasInteracted(true);
      setShowHint(false);
    }
  };

  return (
    <Box 
      width={width} 
      height={height} 
      position="relative"
      overflow="hidden"
      borderRadius={{ base: 'md', md: 'lg', xl: 'xl' }}
      isolation="isolate"
      bg="transparent"
      minH={{ base: '280px', xs: '300px', sm: '360px' }}
      maxW="100%"
    >
      {/* Responsive glowing background */}
      <Box
        position="absolute"
        top="50%"
        left="50%"
        width={{ base: '90%', xs: '85%', sm: '80%', md: '75%', lg: '70%', xl: '65%' }}
        height={{ base: '90%', xs: '85%', sm: '80%', md: '75%', lg: '70%', xl: '65%' }}
        borderRadius="50%"
        background="radial-gradient(circle, rgba(0,212,255,0.3) 0%, rgba(14,165,233,0.2) 30%, rgba(0,212,255,0.1) 60%, transparent 100%)"
        filter={{ base: 'blur(30px)', sm: 'blur(35px)', md: 'blur(40px)' }}
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
      
      {/* Loading Spinner */}
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
          gap={{ base: 2, sm: 3, md: 4 }}
        >
          <Spinner 
            size={{ base: 'lg', sm: 'xl' }} 
            color="#00d4ff" 
            thickness="4px" 
            speed="0.8s" 
          />
          <Text 
            color="#00d4ff" 
            fontSize={{ base: '2xs', xs: 'xs', sm: 'sm', md: 'md' }} 
            fontWeight="medium"
          >
            Loading 3D Model...
          </Text>
        </Box>
      )}
      
      {/* Interaction Hint - Compact for phones, prominent for larger screens */}
      {!isLoading && showHint && (
        <Box
          position="absolute"
          bottom={{ base: '12px', xs: '14px', sm: '20px', md: '24px', lg: '28px', xl: '32px' }}
          left="50%"
          zIndex={20}
          bg="rgba(0, 212, 255, 0.2)"
          backdropFilter="blur(12px)"
          px={{ base: 3, xs: 4, sm: 5, md: 6, lg: 7 }}
          py={{ base: 1.5, xs: 2, sm: 2.5, md: 3, lg: 3.5 }}
          borderRadius="full"
          border={{ base: '1.5px solid', md: '2px solid' }}
          borderColor="rgba(0, 212, 255, 0.6)"
          boxShadow={{ 
            base: '0 2px 20px rgba(0, 212, 255, 0.3), 0 0 40px rgba(0, 212, 255, 0.15)',
            md: '0 4px 30px rgba(0, 212, 255, 0.4), 0 0 60px rgba(0, 212, 255, 0.2)'
          }}
          pointerEvents="none"
          maxW={{ base: '85%', xs: '80%', sm: '75%', md: '70%', lg: '65%' }}
          transform="translateX(-50%)"
          sx={{
            animation: 'hintPulse 2s ease-in-out infinite, fadeInUp 0.6s ease-out',
            '@keyframes fadeInUp': {
              '0%': {
                opacity: 0,
                transform: 'translateX(-50%) translateY(20px)',
              },
              '100%': {
                opacity: 1,
                transform: 'translateX(-50%) translateY(0)',
              },
            },
            '@keyframes hintPulse': {
              '0%, 100%': {
                boxShadow: '0 4px 30px rgba(0, 212, 255, 0.4), 0 0 60px rgba(0, 212, 255, 0.2)',
              },
              '50%': {
                boxShadow: '0 4px 30px rgba(0, 212, 255, 0.6), 0 0 80px rgba(0, 212, 255, 0.4)',
              },
            },
          }}
        >
          <Text
            color="#00d4ff"
            fontSize={{ base: '2xs', xs: 'xs', sm: 'sm', md: 'md', lg: 'lg', xl: 'xl' }}
            fontWeight={{ base: 'semibold', md: 'bold' }}
            textAlign="center"
            whiteSpace="nowrap"
            textShadow={{ 
              base: '0 0 12px rgba(0, 212, 255, 0.6)',
              md: '0 0 20px rgba(0, 212, 255, 0.8), 0 0 40px rgba(0, 212, 255, 0.4)'
            }}
            lineHeight="1"
          >
            🖱️ Click & Drag to Rotate
          </Text>
        </Box>
      )}
      
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        zIndex={1}
        style={{
          touchAction: isInteracting ? 'none' : 'pan-y',
          WebkitTouchCallout: 'none',
          WebkitUserSelect: 'none',
          userSelect: 'none',
        }}
      >
        <Canvas 
          style={{ 
            opacity: isLoading ? 0 : 1, 
            transition: 'opacity 0.5s ease',
            width: '100%',
            height: '100%',
            cursor: isInteracting ? 'grabbing' : 'grab',
            display: 'block',
            position: 'absolute',
            top: 0,
            left: 0,
          }}
          gl={{ 
            antialias: true, 
            alpha: true,
            powerPreference: 'default',
            preserveDrawingBuffer: true,
          }}
          dpr={typeof window !== 'undefined' && window.innerWidth < 768 ? [1, 1.5] : [1, 2]}
          frameloop="always"
        >
          <PerspectiveCamera 
            makeDefault 
            position={[0, 0, cameraDistance]} 
            fov={cameraFOV}
          />
          
          {/* Enhanced Lighting */}
          <ambientLight intensity={0.8} />
          <directionalLight position={[5, 5, 5]} intensity={1.5} color="#00d4ff" />
          <directionalLight position={[-5, -5, -5]} intensity={0.8} color="#0ea5e9" />
          <pointLight position={[0, 0, 5]} intensity={1.2} color="#00d4ff" />
          <pointLight position={[0, 5, 0]} intensity={0.6} color="#ffffff" />
          <hemisphereLight intensity={0.5} color="#00d4ff" groundColor="#0a0e27" />
          
          <Suspense fallback={null}>
            <Drone3DModel scale={modelScale} isInteracting={isInteracting} />
          </Suspense>
          
          <Controls onInteractionChange={handleInteractionChange} />
        </Canvas>
      </Box>
    </Box>
  );
}
