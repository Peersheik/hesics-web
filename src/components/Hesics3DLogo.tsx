"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

interface Hesics3DLogoProps {
  className?: string;
  size?: number;
}

export default function Hesics3DLogo({ className = "", size = 180 }: Hesics3DLogoProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = size;
    const height = size;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
    camera.position.z = 4.6;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.6;
    container.appendChild(renderer.domElement);

    // 2. 3D Floating Mesh Group
    const emblemGroup = new THREE.Group();
    scene.add(emblemGroup);

    // Dark Platinum Metallic Base Disc to give high contrast to the emblem
    const backDiscGeo = new THREE.CircleGeometry(1.22, 64);
    const backDiscMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color("#0d1012"),
      metalness: 0.9,
      roughness: 0.2,
      clearcoat: 0.8,
      reflectivity: 0.9,
    });
    const backDisc = new THREE.Mesh(backDiscGeo, backDiscMat);
    backDisc.position.z = -0.04;
    emblemGroup.add(backDisc);

    // Glowing Emerald Laser Border around the disc
    const discBorderGeo = new THREE.RingGeometry(1.22, 1.25, 64);
    const discBorderMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color("#0c745d"),
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });
    const discBorder = new THREE.Mesh(discBorderGeo, discBorderMat);
    discBorder.position.z = -0.035;
    emblemGroup.add(discBorder);

    // 3. Official Hesics Silver Emblem Plane
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load("/hesics-emblem-silver.png", (texture) => {
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.needsUpdate = true;

      const emblemGeo = new THREE.PlaneGeometry(2.0, 2.0);
      const emblemMat = new THREE.MeshPhysicalMaterial({
        map: texture,
        transparent: true,
        metalness: 0.8,
        roughness: 0.15,
        clearcoat: 1.0,
        clearcoatRoughness: 0.1,
        reflectivity: 1.0,
        side: THREE.DoubleSide,
        depthWrite: false,
      });
      const emblemMesh = new THREE.Mesh(emblemGeo, emblemMat);
      emblemMesh.position.z = 0.02;
      emblemGroup.add(emblemMesh);
    });

    // Central Radiant Emerald Core Iris
    const coreGeo = new THREE.SphereGeometry(0.12, 32, 32);
    const coreMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color("#159c7e"),
      transparent: true,
      opacity: 0.95,
      blending: THREE.AdditiveBlending,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    coreMesh.position.z = 0.08;
    emblemGroup.add(coreMesh);

    // 4. Precision Orbital Rings
    const ringGroup = new THREE.Group();
    scene.add(ringGroup);

    // Inner Emerald Orbital Ring
    const innerRingGeo = new THREE.RingGeometry(1.48, 1.50, 64);
    const innerRingMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color("#0c745d"),
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });
    const innerRing = new THREE.Mesh(innerRingGeo, innerRingMat);
    innerRing.rotation.x = Math.PI / 3;
    ringGroup.add(innerRing);

    // Outer Crisp Platinum Ring
    const outerRingGeo = new THREE.RingGeometry(1.82, 1.835, 80);
    const outerRingMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color("#ffffff"),
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending,
    });
    const outerRing = new THREE.Mesh(outerRingGeo, outerRingMat);
    outerRing.rotation.x = -Math.PI / 4;
    outerRing.rotation.y = Math.PI / 5;
    ringGroup.add(outerRing);

    // 5. Orbital Particles
    const particleCount = 28;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const angle = (i / particleCount) * Math.PI * 2;
      const radius = 1.65 + (Math.random() - 0.5) * 0.35;
      particlePositions[i * 3] = Math.cos(angle) * radius;
      particlePositions[i * 3 + 1] = Math.sin(angle) * radius;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 0.5;
    }
    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.045,
      color: new THREE.Color("#ffffff"),
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    ringGroup.add(particles);

    // 6. Dynamic High-Contrast Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 3.0);
    dirLight1.position.set(3, 4, 4);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x0c745d, 2.0);
    dirLight2.position.set(-3, -2, 2);
    scene.add(dirLight2);

    // 7. Mouse Interaction & Inertia
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / width - 0.5;
      const y = (e.clientY - rect.top) / height - 0.5;
      mouseX = x;
      mouseY = y;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // 8. Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Continuous Floating Levitation
      emblemGroup.position.y = Math.sin(elapsedTime * 1.6) * 0.06;

      // Smooth Inertia Response to Mouse
      targetRotationY = mouseX * 0.85;
      targetRotationX = -mouseY * 0.85;

      emblemGroup.rotation.y += (targetRotationY - emblemGroup.rotation.y) * 0.08;
      emblemGroup.rotation.x += (targetRotationX - emblemGroup.rotation.x) * 0.08;

      // Subtle Idle Drift
      emblemGroup.rotation.z = Math.sin(elapsedTime * 0.6) * 0.03;

      // Orbit Ring Rotations
      innerRing.rotation.z = elapsedTime * 0.4;
      outerRing.rotation.z = -elapsedTime * 0.25;
      particles.rotation.z = elapsedTime * 0.2;

      // Core Emerald Pulse
      const scale = 1 + Math.sin(elapsedTime * 3.5) * 0.18;
      coreMesh.scale.set(scale, scale, scale);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      backDiscGeo.dispose();
      backDiscMat.dispose();
      discBorderGeo.dispose();
      discBorderMat.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      innerRingGeo.dispose();
      innerRingMat.dispose();
      outerRingGeo.dispose();
      outerRingMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
    };
  }, [size]);

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Soft Radial Ambient Aura */}
      <div className="absolute w-[180px] h-[180px] rounded-full bg-[#0c745d]/20 blur-[50px] pointer-events-none" />
      <div ref={containerRef} style={{ width: size, height: size }} className="cursor-grab active:cursor-grabbing" />
    </div>
  );
}
