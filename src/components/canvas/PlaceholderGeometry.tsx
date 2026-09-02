"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface PlaceholderGeometryProps {
  color?: string;
  wireframe?: boolean;
}

export default function PlaceholderGeometry({
  color = "#0c745d",
  wireframe = true,
}: PlaceholderGeometryProps) {
  const outerMeshRef = useRef<THREE.Mesh>(null);
  const innerMeshRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (outerMeshRef.current) {
      outerMeshRef.current.rotation.x += delta * 0.15;
      outerMeshRef.current.rotation.y += delta * 0.2;
    }
    if (innerMeshRef.current) {
      innerMeshRef.current.rotation.x -= delta * 0.2;
      innerMeshRef.current.rotation.z += delta * 0.15;
    }
  });

  return (
    <group>
      {/* Outer Icosahedron Wireframe */}
      <mesh ref={outerMeshRef}>
        <icosahedronGeometry args={[1.5, 1]} />
        <meshStandardMaterial
          color={color}
          wireframe={wireframe}
          emissive={color}
          emissiveIntensity={0.3}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* Inner Octahedron / Core */}
      <mesh ref={innerMeshRef}>
        <octahedronGeometry args={[0.8, 0]} />
        <meshStandardMaterial
          color="#149a7c"
          wireframe={false}
          emissive="#0c745d"
          emissiveIntensity={0.6}
          roughness={0.1}
          metalness={0.9}
          transparent
          opacity={0.85}
        />
      </mesh>
    </group>
  );
}
