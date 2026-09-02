// Shared Three.js materials for the HESICS Empire HQ world.
// All geometry in the world uses these materials to maintain visual consistency.

import * as THREE from "three";

// ─── Material Factory Functions ─────────────────────────────────────────────
// Using factories so materials can be created fresh inside R3F components
// and disposed properly on unmount.

export function createConcreteMaterial(opacity = 1): THREE.MeshStandardMaterial {
  return new THREE.MeshStandardMaterial({
    color: new THREE.Color(0x10141a),
    roughness: 0.95,
    metalness: 0.05,
    transparent: opacity < 1,
    opacity,
  });
}

export function createDarkMetalMaterial(opacity = 1): THREE.MeshStandardMaterial {
  return new THREE.MeshStandardMaterial({
    color: new THREE.Color(0x1a1f28),
    roughness: 0.4,
    metalness: 0.8,
    transparent: opacity < 1,
    opacity,
  });
}

export function createAccentMetalMaterial(opacity = 1): THREE.MeshStandardMaterial {
  return new THREE.MeshStandardMaterial({
    color: new THREE.Color(0x0c745d),
    roughness: 0.3,
    metalness: 0.9,
    emissive: new THREE.Color(0x072d24),
    emissiveIntensity: 0.3,
    transparent: opacity < 1,
    opacity,
  });
}

export function createGlassMaterial(opacity = 0.15): THREE.MeshStandardMaterial {
  return new THREE.MeshStandardMaterial({
    color: new THREE.Color(0x8ab8c8),
    roughness: 0.05,
    metalness: 0.1,
    transparent: true,
    opacity,
    side: THREE.DoubleSide,
  });
}

export function createWireframeMaterial(color = 0x149a7c, opacity = 0.4): THREE.MeshBasicMaterial {
  return new THREE.MeshBasicMaterial({
    color: new THREE.Color(color),
    wireframe: true,
    transparent: true,
    opacity,
  });
}

export function createLineMaterial(color = 0x0c745d, opacity = 0.6): THREE.LineBasicMaterial {
  return new THREE.LineBasicMaterial({
    color: new THREE.Color(color),
    transparent: true,
    opacity,
  });
}

export function createBlueprintMaterial(opacity = 0.9): THREE.MeshStandardMaterial {
  return new THREE.MeshStandardMaterial({
    color: new THREE.Color(0x0a1520),
    roughness: 0.8,
    metalness: 0.0,
    emissive: new THREE.Color(0x041020),
    emissiveIntensity: 1,
    transparent: opacity < 1,
    opacity,
  });
}

export function createGlowMaterial(color = 0x149a7c, intensity = 0.8): THREE.MeshStandardMaterial {
  return new THREE.MeshStandardMaterial({
    color: new THREE.Color(color),
    emissive: new THREE.Color(color),
    emissiveIntensity: intensity,
    roughness: 0.1,
    metalness: 0.2,
    transparent: true,
    opacity: 0.85,
  });
}

// Utility: dispose all materials in a mesh (call on unmount to prevent leaks)
export function disposeMeshMaterials(mesh: THREE.Mesh): void {
  if (Array.isArray(mesh.material)) {
    mesh.material.forEach((m) => m.dispose());
  } else {
    mesh.material.dispose();
  }
}
