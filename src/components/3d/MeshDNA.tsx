import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, Float } from '@react-three/drei';
import * as THREE from 'three';

export function MeshDNA() {
  // Load the GLB file from public/models
  const { scene } = useGLTF('/models/dna.glb');
  const group = useRef<THREE.Group>(null);

  // Traverse the scene and apply a glowing emissive material and adjust properties if needed
  React.useEffect(() => {
    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        // Keep the original material but ensure it catches light beautifully
        if (mesh.material instanceof THREE.MeshStandardMaterial) {
          mesh.material.roughness = 0.2;
          mesh.material.metalness = 0.8;
          // Optionally add a slight emissive glow based on the mesh color
          mesh.material.emissive = mesh.material.color || new THREE.Color(0x0f6a6e);
          mesh.material.emissiveIntensity = 0.2;
        }
      }
    });
  }, [scene]);

  useFrame((state, delta) => {
    if (group.current) {
      // Slowly rotate the DNA model on its Y axis
      group.current.rotation.y -= delta * 0.4;
    }
  });

  return (
    <Float
      speed={2} 
      rotationIntensity={0.6} 
      floatIntensity={1.5} 
    >
      <group ref={group} dispose={null} scale={5} position={[0, -4, 0]}>
        <primitive object={scene} />
      </group>
    </Float>
  );
}

useGLTF.preload('/models/dna.glb');
