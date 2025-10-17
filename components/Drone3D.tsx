'use client';

import { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import { Box } from '@chakra-ui/react';

function Propeller({ position, index }: { position: [number, number, number]; index: number }) {
  const propellerRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (propellerRef.current) {
      propellerRef.current.rotation.y = state.clock.elapsedTime * 10 * (index % 2 === 0 ? 1 : -1);
    }
  });

  return (
    <group position={position}>
      <mesh>
        <cylinderGeometry args={[0.1, 0.1, 0.2, 16]} />
        <meshStandardMaterial color="#000000" metalness={0.9} roughness={0.1} />
      </mesh>
      
      <group ref={propellerRef}>
        <mesh>
          <boxGeometry args={[0.6, 0.02, 0.1]} />
          <meshStandardMaterial 
            color="#00d4ff" 
            metalness={0.5} 
            roughness={0.3} 
            transparent 
            opacity={0.8}
            emissive="#00d4ff"
            emissiveIntensity={0.5}
          />
        </mesh>
        
        <mesh rotation={[0, Math.PI / 2, 0]}>
          <boxGeometry args={[0.6, 0.02, 0.1]} />
          <meshStandardMaterial 
            color="#00d4ff" 
            metalness={0.5} 
            roughness={0.3} 
            transparent 
            opacity={0.8}
            emissive="#00d4ff"
            emissiveIntensity={0.5}
          />
        </mesh>
      </group>
    </group>
  );
}

function DroneModel() {
  const droneRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (droneRef.current) {
      const t = state.clock.elapsedTime;
      droneRef.current.position.y = Math.sin(t * 0.5) * 0.3;
      droneRef.current.rotation.y = Math.sin(t * 0.3) * 0.15;
      droneRef.current.rotation.x = Math.sin(t * 0.4) * 0.05;
    }
  });

  return (
    <group ref={droneRef}>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[0.8, 0.15, 0.8]} />
        <meshStandardMaterial color="#0D47A1" metalness={0.8} roughness={0.2} />
      </mesh>

      <mesh position={[0, 0.1, 0]}>
        <boxGeometry args={[0.6, 0.05, 0.6]} />
        <meshStandardMaterial color="#00d4ff" metalness={0.9} roughness={0.1} emissive="#00d4ff" emissiveIntensity={0.3} />
      </mesh>

      <mesh position={[0.6, 0, 0.6]} rotation={[0, Math.PI / 4, 0]}>
        <cylinderGeometry args={[0.04, 0.04, 1.4]} />
        <meshStandardMaterial color="#1a1a2e" metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[-0.6, 0, 0.6]} rotation={[0, -Math.PI / 4, 0]}>
        <cylinderGeometry args={[0.04, 0.04, 1.4]} />
        <meshStandardMaterial color="#1a1a2e" metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[0.6, 0, -0.6]} rotation={[0, -Math.PI / 4, 0]}>
        <cylinderGeometry args={[0.04, 0.04, 1.4]} />
        <meshStandardMaterial color="#1a1a2e" metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[-0.6, 0, -0.6]} rotation={[0, Math.PI / 4, 0]}>
        <cylinderGeometry args={[0.04, 0.04, 1.4]} />
        <meshStandardMaterial color="#1a1a2e" metalness={0.9} roughness={0.1} />
      </mesh>

      <Propeller position={[1, 0.3, 1]} index={0} />
      <Propeller position={[-1, 0.3, 1]} index={1} />
      <Propeller position={[1, 0.3, -1]} index={2} />
      <Propeller position={[-1, 0.3, -1]} index={3} />

      <mesh position={[0, -0.1, 0.4]}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial color="#00d4ff" metalness={0.9} roughness={0.1} emissive="#00d4ff" emissiveIntensity={0.5} />
      </mesh>

      <mesh position={[0.5, -0.25, 0.5]}>
        <cylinderGeometry args={[0.02, 0.02, 0.3]} />
        <meshStandardMaterial color="#1a1a2e" />
      </mesh>
      <mesh position={[-0.5, -0.25, 0.5]}>
        <cylinderGeometry args={[0.02, 0.02, 0.3]} />
        <meshStandardMaterial color="#1a1a2e" />
      </mesh>
      <mesh position={[0.5, -0.25, -0.5]}>
        <cylinderGeometry args={[0.02, 0.02, 0.3]} />
        <meshStandardMaterial color="#1a1a2e" />
      </mesh>
      <mesh position={[-0.5, -0.25, -0.5]}>
        <cylinderGeometry args={[0.02, 0.02, 0.3]} />
        <meshStandardMaterial color="#1a1a2e" />
      </mesh>

      <pointLight position={[0, 0.2, 0]} intensity={0.5} color="#00d4ff" distance={2} />
      <pointLight position={[0, -0.1, 0.4]} intensity={0.8} color="#00d4ff" distance={1.5} />
    </group>
  );
}

function Scene() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[3, 2, 3]} />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={2}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 4}
      />
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00d4ff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#0ea5e9" />
      <spotLight position={[0, 5, 0]} intensity={0.5} color="#00d4ff" angle={0.6} penumbra={1} />
      <Suspense fallback={null}>
        <DroneModel />
      </Suspense>
    </>
  );
}

export default function Drone3D() {
  return (
    <Box w="100%" h="100%">
      <Canvas>
        <Scene />
      </Canvas>
    </Box>
  );
}
