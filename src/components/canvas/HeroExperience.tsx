"use client";

import { useMemo, useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function HeroExperience() {
  const pointsRef = useRef<THREE.Points>(null);
  const coreMeshRef = useRef<THREE.Mesh>(null);
  const ringGroupRef = useRef<THREE.Group>(null);
  const groupRef = useRef<THREE.Group>(null);

  // Animation values controlled by GSAP ScrollTrigger scrub
  const scrollData = useRef({
    heroProgress: 0,
    dispersion: 0, // 0 = cohesive object, 1 = breaking apart / deconstructing
    cameraZ: 6.5,
    cameraY: 0,
    rotationSpeed: 0.15,
    coreOpacity: 0.85,
    scrollVelocity: 0,
  });

  const PARTICLE_COUNT = 3200;

  // Generate structured coordinates for a multi-layered sophisticated technological core
  // (Lattice structure with spherical shells, nodal vertices, and orbit points)
  const [basePositions, explosionDirections, colors, scales] = useMemo(() => {
    const pos = new Float32Array(PARTICLE_COUNT * 3);
    const exp = new Float32Array(PARTICLE_COUNT * 3);
    const col = new Float32Array(PARTICLE_COUNT * 3);
    const sz = new Float32Array(PARTICLE_COUNT);

    const primaryColor = new THREE.Color("#0c745d");
    const highlightColor = new THREE.Color("#149a7c");
    const accentWhite = new THREE.Color("#ffffff");
    const deepTeal = new THREE.Color("#06382d");

    let idx = 0;

    // 1. Concentric Fibonacci Sphere shell (Sophisticated architectural lattice)
    const sphereCount = Math.floor(PARTICLE_COUNT * 0.55);
    const goldenRatio = (1 + Math.sqrt(5)) / 2;

    for (let i = 0; i < sphereCount; i++) {
      const theta = (2 * Math.PI * i) / goldenRatio;
      const phi = Math.acos(1 - (2 * (i + 0.5)) / sphereCount);
      const radius = 1.35 + (i % 3 === 0 ? 0.08 : 0);

      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);

      pos[idx * 3] = x;
      pos[idx * 3 + 1] = y;
      pos[idx * 3 + 2] = z;

      // Explosion vector outwards with slight vortex twist
      const dir = new THREE.Vector3(x, y, z).normalize();
      exp[idx * 3] = dir.x * (1.5 + Math.random() * 2.5) + (Math.random() - 0.5) * 0.5;
      exp[idx * 3 + 1] = dir.y * (1.5 + Math.random() * 2.5) - Math.random() * 1.5; // fall / scatter downward
      exp[idx * 3 + 2] = dir.z * (1.5 + Math.random() * 2.5) + (Math.random() - 0.5) * 0.5;

      const cRand = Math.random();
      let color = primaryColor;
      if (cRand > 0.85) color = accentWhite;
      else if (cRand > 0.45) color = highlightColor;
      else color = primaryColor;

      col[idx * 3] = color.r;
      col[idx * 3 + 1] = color.g;
      col[idx * 3 + 2] = color.b;

      sz[idx] = cRand > 0.9 ? 1.8 : 1.0;
      idx++;
    }

    // 2. Orbital System Rings (Planar orbital rings representing structured flow)
    const ringCount = Math.floor(PARTICLE_COUNT * 0.3);
    for (let i = 0; i < ringCount; i++) {
      const angle = (i / ringCount) * Math.PI * 2 * 3;
      const ringRadius = 1.8 + (i % 4) * 0.25;
      const planeTilt = (i % 2 === 0 ? 1 : -1) * 0.45;

      const x = Math.cos(angle) * ringRadius;
      const z = Math.sin(angle) * ringRadius;
      const y = Math.sin(angle) * ringRadius * planeTilt;

      pos[idx * 3] = x;
      pos[idx * 3 + 1] = y;
      pos[idx * 3 + 2] = z;

      const dir = new THREE.Vector3(x, y, z).normalize();
      exp[idx * 3] = dir.x * (2.0 + Math.random() * 3.0);
      exp[idx * 3 + 1] = dir.y * (1.0 + Math.random() * 2.0) - Math.random() * 2.0;
      exp[idx * 3 + 2] = dir.z * (2.0 + Math.random() * 3.0);

      const color = (i % 5 === 0) ? accentWhite : highlightColor;
      col[idx * 3] = color.r;
      col[idx * 3 + 1] = color.g;
      col[idx * 3 + 2] = color.b;

      sz[idx] = (i % 5 === 0) ? 1.5 : 0.9;
      idx++;
    }

    // 3. Ambient atmospheric field around the core
    const ambientCount = PARTICLE_COUNT - idx;
    for (let i = 0; i < ambientCount; i++) {
      const r = 2.5 + Math.random() * 3.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      pos[idx * 3] = x;
      pos[idx * 3 + 1] = y;
      pos[idx * 3 + 2] = z;

      exp[idx * 3] = x * 1.5;
      exp[idx * 3 + 1] = y * 1.5 - Math.random() * 2.0;
      exp[idx * 3 + 2] = z * 1.5;

      const color = Math.random() > 0.8 ? highlightColor : deepTeal;
      col[idx * 3] = color.r;
      col[idx * 3 + 1] = color.g;
      col[idx * 3 + 2] = color.b;

      sz[idx] = 0.6;
      idx++;
    }

    return [pos, exp, col, sz];
  }, [PARTICLE_COUNT]);

  // Working positions buffer updated every frame based on dispersion & velocity
  const currentPositions = useMemo(() => new Float32Array(basePositions), [basePositions]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Hero section trigger with scrub
    const trigger = ScrollTrigger.create({
      trigger: "#hero",
      start: "top top",
      end: "bottom top",
      scrub: 0.8,
      onUpdate: (self) => {
        const p = self.progress;
        scrollData.current.heroProgress = p;

        // 1. Initial distance: starts at 6.8, approaches 4.2 mid-scroll, then transitions
        scrollData.current.cameraZ = THREE.MathUtils.lerp(6.8, 3.8, Math.min(p * 1.2, 1));
        scrollData.current.cameraY = THREE.MathUtils.lerp(0, -0.4, p);

        // 2. Breaking apart / dispersion starts noticeably from p = 0.45 to 1.0
        if (p < 0.35) {
          scrollData.current.dispersion = 0;
          scrollData.current.coreOpacity = 0.85;
        } else {
          const deconstructProgress = (p - 0.35) / 0.65;
          scrollData.current.dispersion = Math.pow(deconstructProgress, 1.8);
          scrollData.current.coreOpacity = Math.max(0, 0.85 * (1 - deconstructProgress * 1.4));
        }

        // 3. Scroll velocity reaction
        scrollData.current.scrollVelocity = self.getVelocity() / 1500;
      },
    });

    return () => {
      trigger.kill();
    };
  }, []);

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();
    const { dispersion, scrollVelocity, coreOpacity, cameraZ, cameraY } = scrollData.current;

    // Dampen camera toward scroll target
    state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, cameraZ, 0.08);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, cameraY, 0.08);
    state.camera.lookAt(0, 0, 0);

    // Group subtle continuous rotation + scroll velocity tilt
    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.12 + scrollData.current.heroProgress * 1.2;
      groupRef.current.rotation.x = Math.sin(time * 0.3) * 0.08 + scrollVelocity * 0.05;
      groupRef.current.rotation.z = Math.cos(time * 0.2) * 0.04;
    }

    // Inner geometrical core handling
    if (coreMeshRef.current) {
      coreMeshRef.current.rotation.x = -time * 0.18;
      coreMeshRef.current.rotation.y = -time * 0.22;
      const mat = coreMeshRef.current.material as THREE.MeshStandardMaterial;
      if (mat) {
        mat.opacity = THREE.MathUtils.lerp(mat.opacity, coreOpacity, 0.1);
        mat.transparent = true;
      }
      const scale = THREE.MathUtils.lerp(1, 0.2, dispersion);
      coreMeshRef.current.scale.set(scale, scale, scale);
    }

    // Concentric precision rings
    if (ringGroupRef.current) {
      ringGroupRef.current.rotation.z = time * 0.08;
      ringGroupRef.current.rotation.x = Math.sin(time * 0.4) * 0.2;
      const ringScale = THREE.MathUtils.lerp(1, 1.8, dispersion);
      ringGroupRef.current.scale.set(ringScale, ringScale, ringScale);
      ringGroupRef.current.children.forEach((child) => {
        const mesh = child as THREE.Mesh;
        if (mesh.material) {
          (mesh.material as THREE.MeshBasicMaterial).opacity = Math.max(0, (1 - dispersion * 1.2) * 0.4);
        }
      });
    }

    // Deconstructing & Reacting Particles
    if (pointsRef.current) {
      const geo = pointsRef.current.geometry;
      const posAttr = geo.attributes.position;

      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const i3 = i * 3;
        const bx = basePositions[i3];
        const by = basePositions[i3 + 1];
        const bz = basePositions[i3 + 2];

        const ex = explosionDirections[i3];
        const ey = explosionDirections[i3 + 1];
        const ez = explosionDirections[i3 + 2];

        // Velocity pulse calculation
        const velOffset = Math.sin(time * 2 + bx * 2) * scrollVelocity * 0.12;

        // Current target position with dispersion + subtle organic breathing
        const breath = Math.sin(time * 1.2 + by * 3) * 0.02;

        currentPositions[i3] = bx + (bx * breath) + (ex * dispersion * 3.2) + velOffset;
        currentPositions[i3 + 1] = by + (by * breath) + (ey * dispersion * 3.2);
        currentPositions[i3 + 2] = bz + (bz * breath) + (ez * dispersion * 3.2) + velOffset;
      }

      posAttr.needsUpdate = true;
    }
  });

  return (
    <group ref={groupRef}>
      {/* 1. Sophisticated Core Geometry (Inner Octahedral Precision Core) */}
      <mesh ref={coreMeshRef}>
        <octahedronGeometry args={[0.9, 2]} />
        <meshStandardMaterial
          color="#0c745d"
          emissive="#06382d"
          emissiveIntensity={0.8}
          wireframe={true}
          roughness={0.2}
          metalness={0.9}
        />
      </mesh>

      {/* 2. Structured Orbital Rings (Fine thin precision lines) */}
      <group ref={ringGroupRef}>
        <mesh rotation={[Math.PI / 3, 0, 0]}>
          <torusGeometry args={[1.75, 0.006, 16, 100]} />
          <meshBasicMaterial color="#149a7c" transparent opacity={0.35} />
        </mesh>
        <mesh rotation={[-Math.PI / 4, Math.PI / 6, 0]}>
          <torusGeometry args={[2.1, 0.005, 16, 100]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.2} />
        </mesh>
        <mesh rotation={[Math.PI / 6, -Math.PI / 3, 0]}>
          <torusGeometry args={[2.4, 0.005, 16, 100]} />
          <meshBasicMaterial color="#0c745d" transparent opacity={0.3} />
        </mesh>
      </group>

      {/* 3. High-Density Architectural Particle Lattice */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[currentPositions, 3]}
          />
          <bufferAttribute
            attach="attributes-color"
            args={[colors, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.035}
          vertexColors
          transparent
          opacity={0.85}
          sizeAttenuation
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
}
