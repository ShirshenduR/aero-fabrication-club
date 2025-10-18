'use client';

import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

interface Drone3DModelProps {
  scale?: number;
  isInteracting?: boolean;
}

export default function Drone3DModel({ scale = 1, isInteracting = false }: Drone3DModelProps) {
  const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF('/3d-drone.glb');

  useEffect(() => {
    if (scene) {
      scene.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          const mesh = child as THREE.Mesh;
          mesh.castShadow = true;
          mesh.receiveShadow = true;
          if (mesh.material) {
            (mesh.material as THREE.MeshStandardMaterial).metalness = 0.7;
            (mesh.material as THREE.MeshStandardMaterial).roughness = 0.3;
          }
        }
      });
    }
  }, [scene]);

  useFrame((state) => {
    if (groupRef.current && !isInteracting) {
      // Subtle hover animation - smaller amplitude for stability
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <>
      <ambientLight intensity={0.8} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} castShadow />
      <pointLight position={[-10, -10, -5]} intensity={1} color="#00d4ff" />
      <pointLight position={[10, 10, 5]} intensity={0.8} color="#0ea5e9" />
      <spotLight position={[0, 10, 0]} intensity={0.5} angle={0.3} penumbra={1} color="#00d4ff" />
      <group ref={groupRef} position={[0, 0, 0]}>
        <primitive 
          object={scene.clone()} 
          scale={scale}
          position={[0, 0, 0]}
          rotation={[0, 0, 0]}
        />
      </group>
    </>
  );
}

useGLTF.preload('/3d-drone.glb');
