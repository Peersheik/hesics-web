"use client";

import React, { useRef, useEffect } from "react";
import * as THREE from "three";

export default function Hero3DBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check WebGL availability
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
    } catch {
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.z = 24;

    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // ── 1. Floating 3D Wireframe Polyhedron Matrix ───────────
    const geom = new THREE.IcosahedronGeometry(7.5, 1);
    const wireframeGeom = new THREE.WireframeGeometry(geom);
    const wireframeMat = new THREE.LineBasicMaterial({
      color: 0xd4af37, // Royal amber gold
      transparent: true,
      opacity: 0.35,
    });
    const wireframeMesh = new THREE.LineSegments(wireframeGeom, wireframeMat);
    wireframeMesh.position.set(7, 0, -2);
    scene.add(wireframeMesh);

    // Inner glowing core
    const coreGeom = new THREE.IcosahedronGeometry(4.2, 0);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x10b981, // Emerald accent
      wireframe: true,
      transparent: true,
      opacity: 0.22,
    });
    const coreMesh = new THREE.Mesh(coreGeom, coreMat);
    coreMesh.position.copy(wireframeMesh.position);
    scene.add(coreMesh);

    // ── 2. Cinematic 3D Particle Cloud ───────────────────────
    const particleCount = 750;
    const posArray = new Float32Array(particleCount * 3);
    const colArray = new Float32Array(particleCount * 3);

    const goldColor = new THREE.Color(0xd4af37);
    const emeraldColor = new THREE.Color(0x10b981);
    const cyanColor = new THREE.Color(0x38bdf8);

    for (let i = 0; i < particleCount; i++) {
      // Distribute in 3D volume
      posArray[i * 3] = (Math.random() - 0.4) * 55;
      posArray[i * 3 + 1] = (Math.random() - 0.5) * 35;
      posArray[i * 3 + 2] = (Math.random() - 0.5) * 30;

      // Color variation
      const r = Math.random();
      const chosenColor = r < 0.65 ? goldColor : r < 0.88 ? emeraldColor : cyanColor;
      colArray[i * 3] = chosenColor.r;
      colArray[i * 3 + 1] = chosenColor.g;
      colArray[i * 3 + 2] = chosenColor.b;
    }

    const particleGeom = new THREE.BufferGeometry();
    particleGeom.setAttribute("position", new THREE.BufferAttribute(posArray, 3));
    particleGeom.setAttribute("color", new THREE.BufferAttribute(colArray, 3));

    // Custom circular soft glow texture generated via canvas
    const canvas = document.createElement("canvas");
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      grad.addColorStop(0, "rgba(255,255,255,1)");
      grad.addColorStop(0.3, "rgba(255,255,255,0.7)");
      grad.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 32, 32);
    }
    const particleTexture = new THREE.CanvasTexture(canvas);

    const particleMat = new THREE.PointsMaterial({
      size: 0.55,
      map: particleTexture,
      transparent: true,
      opacity: 0.75,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(particleGeom, particleMat);
    scene.add(particles);

    // ── 3. Subtle Parallax & Interactive Mouse Physics ───────
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onPointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetX = x * 3.5;
      targetY = y * 2.5;
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });

    // Handle Resize
    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", onResize, { passive: true });

    // ── 4. Animation Loop ─────────────────────────────────────
    let reqId = 0;
    let clock = new THREE.Clock();

    const animate = () => {
      const elapsed = clock.getElapsedTime();

      // Smooth camera parallax lerp
      mouseX += (targetX - mouseX) * 0.04;
      mouseY += (targetY - mouseY) * 0.04;
      camera.position.x = mouseX;
      camera.position.y = mouseY;
      camera.lookAt(0, 0, 0);

      // Rotate geometric meshes
      wireframeMesh.rotation.x = elapsed * 0.12;
      wireframeMesh.rotation.y = elapsed * 0.18;
      coreMesh.rotation.x = -elapsed * 0.16;
      coreMesh.rotation.y = -elapsed * 0.22;

      // Gentle floating oscillation
      wireframeMesh.position.y = Math.sin(elapsed * 0.8) * 0.6;
      coreMesh.position.y = wireframeMesh.position.y;

      // Particle slow drift
      particles.rotation.y = elapsed * 0.025;
      particles.rotation.x = Math.sin(elapsed * 0.03) * 0.08;

      renderer.render(scene, camera);
      reqId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(reqId);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("resize", onResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geom.dispose();
      wireframeGeom.dispose();
      wireframeMat.dispose();
      coreGeom.dispose();
      coreMat.dispose();
      particleGeom.dispose();
      particleMat.dispose();
      particleTexture.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        zIndex: 1,
        overflow: "hidden",
      }}
      aria-hidden="true"
    />
  );
}
