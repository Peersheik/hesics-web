"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

interface HesicsTiltedEmblemProps {
  className?: string;
  size?: number;
}

export default function HesicsTiltedEmblem({ className = "", size = 260 }: HesicsTiltedEmblemProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const width = size;
    const height = size * 0.9;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 1000);
    camera.position.set(0, 0, 5.2);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.4;
    container.appendChild(renderer.domElement);

    // 2. Master Coin Group with Exact Tilted Angle from Reference Image
    const masterGroup = new THREE.Group();
    // Tilt angle matching reference image
    masterGroup.rotation.x = 0.52;
    masterGroup.rotation.y = -0.22;
    masterGroup.rotation.z = -0.12;
    scene.add(masterGroup);

    // 3. Glass & Chrome Disc (Cylinder with Beveled Edges)
    const coinGeo = new THREE.CylinderGeometry(1.42, 1.42, 0.22, 64);
    
    // Glass Body Material with Silver Reflections
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color("#111315"),
      metalness: 0.25,
      roughness: 0.1,
      transmission: 0.88,
      ior: 1.52,
      thickness: 1.2,
      specularIntensity: 1.0,
      specularColor: new THREE.Color("#ffffff"),
      transparent: true,
      opacity: 0.85,
    });
    const coinMesh = new THREE.Mesh(coinGeo, glassMat);
    // Cylinder is default vertical; rotate so circular face points towards viewer
    coinMesh.rotation.x = Math.PI / 2;
    masterGroup.add(coinMesh);

    // Polished Silver Rim Ring (Outer Edge Reflection)
    const rimGeo = new THREE.TorusGeometry(1.43, 0.03, 32, 96);
    const rimMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color("#e0e3e6"),
      metalness: 0.95,
      roughness: 0.12,
    });
    const rimMesh = new THREE.Mesh(rimGeo, rimMat);
    masterGroup.add(rimMesh);

    // Inner Silver Chamfer Accent
    const innerRimGeo = new THREE.TorusGeometry(1.28, 0.015, 24, 80);
    const innerRimMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color("#ffffff"),
      metalness: 0.9,
      roughness: 0.15,
    });
    const innerRimMesh = new THREE.Mesh(innerRimGeo, innerRimMat);
    innerRimMesh.position.z = 0.11;
    masterGroup.add(innerRimMesh);

    // 4. Etched Silver Hesics Emblem Plane inside Coin
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load("/hesics-emblem-silver.png", (texture) => {
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.needsUpdate = true;

      const emblemGeo = new THREE.PlaneGeometry(1.65, 1.65);
      const emblemMat = new THREE.MeshStandardMaterial({
        map: texture,
        transparent: true,
        metalness: 0.85,
        roughness: 0.18,
        side: THREE.DoubleSide,
        depthWrite: false,
      });
      const emblemMesh = new THREE.Mesh(emblemGeo, emblemMat);
      emblemMesh.position.z = 0.12;
      masterGroup.add(emblemMesh);
    });

    // 5. Delicate Elliptical Orbit Rings
    const orbitGroup = new THREE.Group();
    scene.add(orbitGroup);

    // Inner Elliptical Orbit
    const orbitCurve1 = new THREE.EllipseCurve(0, 0, 2.05, 1.05, 0, 2 * Math.PI, false, 0);
    const orbitPoints1 = orbitCurve1.getPoints(96);
    const orbitGeo1 = new THREE.BufferGeometry().setFromPoints(
      orbitPoints1.map((p) => new THREE.Vector3(p.x, p.y, 0))
    );
    const orbitMat1 = new THREE.LineBasicMaterial({
      color: new THREE.Color("#ffffff"),
      transparent: true,
      opacity: 0.28,
    });
    const orbitLine1 = new THREE.Line(orbitGeo1, orbitMat1);
    orbitLine1.rotation.x = 0.65;
    orbitLine1.rotation.y = -0.35;
    orbitGroup.add(orbitLine1);

    // Outer Thin Orbit
    const orbitCurve2 = new THREE.EllipseCurve(0, 0, 2.5, 1.35, 0, 2 * Math.PI, false, 0);
    const orbitPoints2 = orbitCurve2.getPoints(120);
    const orbitGeo2 = new THREE.BufferGeometry().setFromPoints(
      orbitPoints2.map((p) => new THREE.Vector3(p.x, p.y, 0))
    );
    const orbitMat2 = new THREE.LineBasicMaterial({
      color: new THREE.Color("#ffffff"),
      transparent: true,
      opacity: 0.14,
    });
    const orbitLine2 = new THREE.Line(orbitGeo2, orbitMat2);
    orbitLine2.rotation.x = -0.45;
    orbitLine2.rotation.y = 0.25;
    orbitGroup.add(orbitLine2);

    // Orbiting Satellite Chrome Beads
    const beadGeo = new THREE.SphereGeometry(0.045, 24, 24);
    const beadMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color("#ffffff"),
      metalness: 0.98,
      roughness: 0.08,
    });
    const bead1 = new THREE.Mesh(beadGeo, beadMat);
    orbitLine1.add(bead1);

    const bead2 = new THREE.Mesh(beadGeo, beadMat);
    orbitLine2.add(bead2);

    // 6. Realistic Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    // Key Light from Top Right (Silver specular glint)
    const keyLight = new THREE.DirectionalLight(0xffffff, 3.2);
    keyLight.position.set(4, 5, 5);
    scene.add(keyLight);

    // Fill Light from Bottom Left
    const fillLight = new THREE.DirectionalLight(0x8a99a8, 1.4);
    fillLight.position.set(-4, -3, 3);
    scene.add(fillLight);

    // Extremely Subtle Emerald Accent Light (Refined surgical touch)
    const accentLight = new THREE.PointLight(0x00A982, 1.2, 4);
    accentLight.position.set(0, 0, 1.0);
    scene.add(accentLight);

    // 7. Interactive Mouse Inertia Tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0.52;
    let targetRotationY = -0.22;

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
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Subtle Breathing Levitation
      masterGroup.position.y = Math.sin(elapsedTime * 1.2) * 0.05;

      // Restrained Pointer Response (Expensive, physics-based damping)
      targetRotationX = 0.52 + -mouseY * 0.25;
      targetRotationY = -0.22 + mouseX * 0.35;

      masterGroup.rotation.x += (targetRotationX - masterGroup.rotation.x) * 0.05;
      masterGroup.rotation.y += (targetRotationY - masterGroup.rotation.y) * 0.05;

      // Orbit satellite motion
      const t1 = elapsedTime * 0.6;
      bead1.position.set(Math.cos(t1) * 2.05, Math.sin(t1) * 1.05, 0);

      const t2 = -elapsedTime * 0.45;
      bead2.position.set(Math.cos(t2) * 2.5, Math.sin(t2) * 1.35, 0);

      // Slow gentle orbit drift
      orbitGroup.rotation.z = Math.sin(elapsedTime * 0.2) * 0.04;

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
      coinGeo.dispose();
      glassMat.dispose();
      rimGeo.dispose();
      rimMat.dispose();
      innerRimGeo.dispose();
      innerRimMat.dispose();
      orbitGeo1.dispose();
      orbitMat1.dispose();
      orbitGeo2.dispose();
      orbitMat2.dispose();
      beadGeo.dispose();
      beadMat.dispose();
    };
  }, [size]);

  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      {/* Subtle Silver Glow Aura */}
      <div className="absolute w-[220px] h-[160px] rounded-full bg-white/[0.04] blur-[60px] pointer-events-none" />
      <div ref={containerRef} style={{ width: size, height: size * 0.9 }} className="cursor-grab active:cursor-grabbing" />
    </div>
  );
}

