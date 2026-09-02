"use client";

import { useRef, useMemo, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useChapterNav } from "@/lib/navigation/useChapterNav";
import { CHAPTERS } from "@/data/chapters";

interface HQWorldProps {
  degraded?: boolean;
}

// Camera lerp speed — lower = smoother/slower
const CAMERA_LERP = 0.025;
const LOOK_LERP = 0.03;

export default function HQWorld({ degraded = false }: HQWorldProps) {
  const { camera } = useThree();
  const activeChapterId = useChapterNav((s) => s.activeChapterId);

  // Camera target refs (lerp toward these)
  const targetPos = useRef(new THREE.Vector3(0, 2, 28));
  const targetLook = useRef(new THREE.Vector3(0, 0, 0));
  const currentLook = useRef(new THREE.Vector3(0, 0, 0));

  // Update camera target when chapter changes
  useEffect(() => {
    const chapter = CHAPTERS.find((c) => c.id === activeChapterId);
    if (!chapter) return;
    targetPos.current.set(...chapter.cameraTarget.position);
    targetLook.current.set(...chapter.cameraTarget.lookAt);
  }, [activeChapterId]);

  // Smooth camera animation every frame
  useFrame((_, delta) => {
    const speed = Math.min(delta * 60, 1);
    camera.position.lerp(targetPos.current, CAMERA_LERP * speed);
    currentLook.current.lerp(targetLook.current, LOOK_LERP * speed);
    camera.lookAt(currentLook.current);
  });

  const particleCount = degraded ? 600 : 1200;

  return (
    <>
      {/* ─── Lighting ────────────────────────────────────────────────── */}
      <ambientLight intensity={0.04} color={0x101820} />

      {/* Main directional — strong top-left, industrial */}
      <directionalLight
        position={[10, 20, 10]}
        intensity={1.2}
        color={0xddeeff}
      />

      {/* Accent fill — teal from below-front */}
      <pointLight
        position={[0, -3, 5]}
        intensity={0.8}
        color={0x0c745d}
        distance={60}
        decay={2}
      />

      {/* Cold fill — blue-grey from behind */}
      <pointLight
        position={[0, 8, -60]}
        intensity={0.4}
        color={0x1a2a40}
        distance={120}
        decay={1}
      />

      {/* ─── Headquarters Floor ──────────────────────────────────────── */}
      <HQFloor />

      {/* ─── Corridor Walls ─────────────────────────────────────────── */}
      <HQCorridor />

      {/* ─── Chapter-specific environment objects ────────────────────── */}
      <RecruitmentScene />
      <OriginScene />
      <BlueprintScene />
      <ArsenalScene />
      <OperationsScene />
      <VaultScene />
      <CrewScene />
      <EmpireScene />

      {/* ─── Ambient Particles ──────────────────────────────────────── */}
      <AmbientParticles count={particleCount} />
    </>
  );
}

// ─── Floor Grid ─────────────────────────────────────────────────────────────
function HQFloor() {
  const mesh = useRef<THREE.Mesh>(null);

  return (
    <group>
      {/* Solid dark floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, -50]} receiveShadow>
        <planeGeometry args={[80, 200]} />
        <meshStandardMaterial
          color={0x0a0c10}
          roughness={0.9}
          metalness={0.1}
        />
      </mesh>

      {/* Grid overlay */}
      <gridHelper
        args={[200, 80, 0x0c745d, 0x0d1018]}
        position={[0, -2.98, -50]}
      />
    </group>
  );
}

// ─── Corridor Walls ──────────────────────────────────────────────────────────
function HQCorridor() {
  const wallMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: 0x0c1018,
        roughness: 0.92,
        metalness: 0.08,
      }),
    []
  );

  return (
    <group>
      {/* Left wall */}
      <mesh position={[-24, 4, -50]} receiveShadow castShadow>
        <boxGeometry args={[0.5, 16, 200]} />
        <primitive object={wallMat} attach="material" />
      </mesh>
      {/* Right wall */}
      <mesh position={[24, 4, -50]} receiveShadow castShadow>
        <boxGeometry args={[0.5, 16, 200]} />
        <primitive object={wallMat} attach="material" />
      </mesh>
      {/* Ceiling */}
      <mesh position={[0, 12, -50]}>
        <boxGeometry args={[48, 0.5, 200]} />
        <primitive object={wallMat} attach="material" />
      </mesh>

      {/* Accent strips on walls (teal glow lines) */}
      <CorridorAccentStrips />
    </group>
  );
}

function CorridorAccentStrips() {
  const glowMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: 0x0c745d,
        emissive: new THREE.Color(0x0c745d),
        emissiveIntensity: 0.6,
        roughness: 0.1,
        metalness: 0.5,
      }),
    []
  );

  const strips = [-80, -60, -40, -20, 0, 20, 40, 60];

  return (
    <group>
      {strips.map((z) => (
        <group key={z}>
          <mesh position={[-23.7, 6, z]}>
            <boxGeometry args={[0.1, 0.08, 6]} />
            <primitive object={glowMat} attach="material" />
          </mesh>
          <mesh position={[23.7, 6, z]}>
            <boxGeometry args={[0.1, 0.08, 6]} />
            <primitive object={glowMat} attach="material" />
          </mesh>
        </group>
      ))}
    </group>
  );
}

// ─── Chapter Scenes ──────────────────────────────────────────────────────────

// CH01: Entrance gate + blueprint table
function RecruitmentScene() {
  const gateRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (gateRef.current) {
      // Subtle breathing on the gate
      gateRef.current.children.forEach((child, i) => {
        if (child instanceof THREE.Mesh) {
          const t = state.clock.elapsedTime * 0.5 + i * 0.5;
          (child.material as THREE.MeshStandardMaterial).emissiveIntensity =
            0.3 + Math.sin(t) * 0.15;
        }
      });
    }
  });

  const pillarMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: 0x1a1f28,
        roughness: 0.4,
        metalness: 0.8,
      }),
    []
  );

  const glowMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: 0x149a7c,
        emissive: new THREE.Color(0x149a7c),
        emissiveIntensity: 0.4,
        roughness: 0.1,
        metalness: 0.5,
        transparent: true,
        opacity: 0.9,
      }),
    []
  );

  const tableMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: 0x141820,
        roughness: 0.6,
        metalness: 0.3,
      }),
    []
  );

  return (
    <group position={[0, 0, 16]}>
      {/* Gate pillars */}
      <mesh position={[-5, 2, 0]} castShadow>
        <boxGeometry args={[0.5, 10, 0.5]} />
        <primitive object={pillarMat} attach="material" />
      </mesh>
      <mesh position={[5, 2, 0]} castShadow>
        <boxGeometry args={[0.5, 10, 0.5]} />
        <primitive object={pillarMat} attach="material" />
      </mesh>

      {/* Horizontal gate beam */}
      <mesh position={[0, 7.2, 0]}>
        <boxGeometry args={[11, 0.2, 0.4]} />
        <primitive object={pillarMat} attach="material" />
      </mesh>

      {/* HESICS gate glow strips */}
      <group ref={gateRef}>
        <mesh position={[-5, 7, 0]}>
          <boxGeometry args={[0.15, 0.15, 0.6]} />
          <primitive object={glowMat} attach="material" />
        </mesh>
        <mesh position={[5, 7, 0]}>
          <boxGeometry args={[0.15, 0.15, 0.6]} />
          <primitive object={glowMat} attach="material" />
        </mesh>
        <mesh position={[0, 7.2, 0]}>
          <boxGeometry args={[10.6, 0.12, 0.5]} />
          <primitive object={glowMat} attach="material" />
        </mesh>
      </group>

      {/* Blueprint table */}
      <group position={[0, -1.5, -5]}>
        {/* Table top */}
        <mesh castShadow receiveShadow>
          <boxGeometry args={[4, 0.12, 2.5]} />
          <primitive object={tableMat} attach="material" />
        </mesh>
        {/* Table legs */}
        {[[-1.8, -0.8, -1.1], [1.8, -0.8, -1.1], [-1.8, -0.8, 1.1], [1.8, -0.8, 1.1]].map(
          ([x, y, z], i) => (
            <mesh key={i} position={[x, y, z]} castShadow>
              <boxGeometry args={[0.1, 1.6, 0.1]} />
              <primitive object={pillarMat} attach="material" />
            </mesh>
          )
        )}
        {/* Blueprint paper on table */}
        <mesh position={[0, 0.08, 0]} rotation={[-Math.PI / 2, 0, 0.1]}>
          <planeGeometry args={[3.5, 2.2]} />
          <meshStandardMaterial
            color={0x0a1520}
            emissive={new THREE.Color(0x041020)}
            emissiveIntensity={0.8}
            roughness={0.8}
          />
        </mesh>
        {/* Blueprint grid lines */}
        {[-0.8, 0, 0.8].map((x, i) => (
          <mesh key={`bv${i}`} position={[x, 0.09, 0]} rotation={[-Math.PI / 2, 0, 0.1]}>
            <planeGeometry args={[0.01, 2.0]} />
            <meshStandardMaterial
              color={0x149a7c}
              emissive={new THREE.Color(0x149a7c)}
              emissiveIntensity={0.5}
              transparent
              opacity={0.4}
            />
          </mesh>
        ))}
        {[-0.6, 0, 0.6].map((z, i) => (
          <mesh key={`bh${i}`} position={[0, 0.09, z]} rotation={[-Math.PI / 2, 0, 0.1]}>
            <planeGeometry args={[3.2, 0.01]} />
            <meshStandardMaterial
              color={0x149a7c}
              emissive={new THREE.Color(0x149a7c)}
              emissiveIntensity={0.5}
              transparent
              opacity={0.4}
            />
          </mesh>
        ))}
        {/* Laptop stand */}
        <mesh position={[1.2, 0.3, -0.5]} rotation={[0.1, -0.3, 0]}>
          <boxGeometry args={[0.8, 0.5, 0.05]} />
          <primitive object={pillarMat} attach="material" />
        </mesh>
        <mesh position={[1.2, 0.09, -0.5]} rotation={[-0.4, -0.3, 0]}>
          <boxGeometry args={[0.7, 0.04, 0.48]} />
          <primitive object={pillarMat} attach="material" />
        </mesh>
      </group>

      {/* Mastermind silhouette — abstract geometric form */}
      <MastermindFigure position={[-3.5, -1.5, -6]} />
    </group>
  );
}

// Abstract mastermind figure — pure geometry, no character design
function MastermindFigure({ position }: { position: [number, number, number] }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      // Very subtle breathing sway
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.04;
    }
  });

  const bodyMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: 0x080c12,
        roughness: 0.95,
        metalness: 0.05,
        transparent: true,
        opacity: 0.85,
      }),
    []
  );

  return (
    <group ref={groupRef} position={position}>
      {/* Head — dark sphere */}
      <mesh position={[0, 3.6, 0]}>
        <sphereGeometry args={[0.35, 12, 12]} />
        <primitive object={bodyMat} attach="material" />
      </mesh>
      {/* Torso */}
      <mesh position={[0, 2.4, 0]}>
        <boxGeometry args={[0.7, 1.2, 0.35]} />
        <primitive object={bodyMat} attach="material" />
      </mesh>
      {/* Shoulder width detail */}
      <mesh position={[0, 2.9, 0]}>
        <boxGeometry args={[1.0, 0.12, 0.38]} />
        <primitive object={bodyMat} attach="material" />
      </mesh>
      {/* Arms */}
      <mesh position={[-0.58, 2.2, 0]} rotation={[0, 0, 0.15]}>
        <boxGeometry args={[0.16, 1.0, 0.18]} />
        <primitive object={bodyMat} attach="material" />
      </mesh>
      <mesh position={[0.58, 2.2, 0]} rotation={[0, 0, -0.15]}>
        <boxGeometry args={[0.16, 1.0, 0.18]} />
        <primitive object={bodyMat} attach="material" />
      </mesh>
      {/* Legs */}
      <mesh position={[-0.22, 1.2, 0]}>
        <boxGeometry args={[0.22, 1.2, 0.22]} />
        <primitive object={bodyMat} attach="material" />
      </mesh>
      <mesh position={[0.22, 1.2, 0]}>
        <boxGeometry args={[0.22, 1.2, 0.22]} />
        <primitive object={bodyMat} attach="material" />
      </mesh>
      {/* Ambient glow rim light effect — small accent point */}
      <pointLight
        position={[0.5, 3.5, 0.6]}
        intensity={0.3}
        color={0x149a7c}
        distance={4}
        decay={2}
      />
    </group>
  );
}

// CH02: Chaos hall — fragmented geometry
function OriginScene() {
  const fragmentCount = 18;

  const fragments = useMemo(() => {
    return Array.from({ length: fragmentCount }).map((_, i) => ({
      pos: [
        (Math.random() - 0.5) * 14,
        (Math.random() - 0.5) * 6 + 1,
        (Math.random() - 0.5) * 6 - 3,
      ] as [number, number, number],
      rot: [Math.random() * Math.PI, Math.random() * Math.PI, 0] as [number, number, number],
      scale: 0.15 + Math.random() * 0.4,
      speed: 0.3 + Math.random() * 0.5,
      offset: Math.random() * Math.PI * 2,
    }));
  }, []);

  return (
    <group position={[0, 0, -2]}>
      {fragments.map((f, i) => (
        <OriginFragment key={i} {...f} index={i} />
      ))}
      {/* Central alignment structure */}
      <mesh position={[0, 0, -3]}>
        <torusGeometry args={[2.5, 0.04, 8, 40]} />
        <meshStandardMaterial
          color={0x149a7c}
          emissive={new THREE.Color(0x149a7c)}
          emissiveIntensity={0.4}
          transparent
          opacity={0.25}
        />
      </mesh>
    </group>
  );
}

function OriginFragment({
  pos, rot, scale, speed, offset, index,
}: {
  pos: [number, number, number];
  rot: [number, number, number];
  scale: number;
  speed: number;
  offset: number;
  index: number;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime * speed + offset;
    ref.current.rotation.x = rot[0] + t * 0.3;
    ref.current.rotation.y = rot[1] + t * 0.2;
    ref.current.position.y = pos[1] + Math.sin(t) * 0.3;
  });

  const mat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: index % 3 === 0 ? 0x1a2030 : 0x0c1018,
        roughness: 0.7,
        metalness: 0.3,
        transparent: true,
        opacity: 0.6,
      }),
    [index]
  );

  return (
    <mesh ref={ref} position={pos} rotation={rot} scale={scale} castShadow>
      {index % 3 === 0 ? (
        <boxGeometry args={[1, 1, 1]} />
      ) : index % 3 === 1 ? (
        <tetrahedronGeometry args={[1]} />
      ) : (
        <octahedronGeometry args={[1]} />
      )}
      <primitive object={mat} attach="material" />
    </mesh>
  );
}

// CH03: Blueprint room — holographic table
function BlueprintScene() {
  const tableRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (tableRef.current) {
      const mat = tableRef.current.material as THREE.MeshStandardMaterial;
      mat.emissiveIntensity = 0.3 + Math.sin(state.clock.elapsedTime * 0.8) * 0.1;
    }
  });

  return (
    <group position={[0, -1, -22]}>
      {/* Central holographic table */}
      <mesh ref={tableRef} position={[0, 0.5, 0]}>
        <boxGeometry args={[7, 0.1, 4]} />
        <meshStandardMaterial
          color={0x0a1520}
          emissive={new THREE.Color(0x0c3040)}
          emissiveIntensity={0.35}
          roughness={0.2}
          metalness={0.6}
          transparent
          opacity={0.9}
        />
      </mesh>

      {/* Blueprint hologram grid above table */}
      {Array.from({ length: 12 }).map((_, i) => (
        <mesh key={`hg-${i}`} position={[(i - 5.5) * 0.58, 0.62, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[0.01, 3.6]} />
          <meshStandardMaterial color={0x149a7c} emissive={new THREE.Color(0x149a7c)} emissiveIntensity={0.5} transparent opacity={0.2} />
        </mesh>
      ))}
      {Array.from({ length: 8 }).map((_, i) => (
        <mesh key={`hr-${i}`} position={[0, 0.62, (i - 3.5) * 0.5]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[6.8, 0.01]} />
          <meshStandardMaterial color={0x149a7c} emissive={new THREE.Color(0x149a7c)} emissiveIntensity={0.5} transparent opacity={0.2} />
        </mesh>
      ))}

      {/* Hologram projection (floating rings) */}
      {[0.8, 1.4, 2.0].map((y, i) => (
        <mesh key={`ring-${i}`} position={[0, y + 0.6, 0]}>
          <torusGeometry args={[1.8 - i * 0.3, 0.02, 8, 32]} />
          <meshStandardMaterial
            color={0x149a7c}
            emissive={new THREE.Color(0x149a7c)}
            emissiveIntensity={0.6}
            transparent
            opacity={0.35 - i * 0.08}
          />
        </mesh>
      ))}

      {/* Pillars around room */}
      {[-10, 10].map((x) =>
        [-2, 2].map((z) => (
          <mesh key={`p${x}${z}`} position={[x, 3, z]} castShadow>
            <boxGeometry args={[0.4, 12, 0.4]} />
            <meshStandardMaterial color={0x111620} roughness={0.5} metalness={0.5} />
          </mesh>
        ))
      )}
    </group>
  );
}

// CH04: Arsenal — 4 service pods
function ArsenalScene() {
  const pods = [
    { pos: [-8, 0, -34] as [number, number, number], color: 0x149a7c },
    { pos: [8, 0, -34] as [number, number, number], color: 0x0c745d },
    { pos: [-8, 0, -44] as [number, number, number], color: 0x149a7c },
    { pos: [8, 0, -44] as [number, number, number], color: 0x0c745d },
  ];

  return (
    <group>
      {pods.map((pod, i) => (
        <ServicePod key={i} position={pod.pos} color={pod.color} index={i} />
      ))}
      {/* Central HESICS hub */}
      <mesh position={[0, 1.5, -39]}>
        <icosahedronGeometry args={[1.2, 1]} />
        <meshStandardMaterial
          color={0x149a7c}
          emissive={new THREE.Color(0x0c745d)}
          emissiveIntensity={0.6}
          roughness={0.1}
          metalness={0.8}
          wireframe={false}
        />
      </mesh>
      {/* Hub orbit rings */}
      {[1.8, 2.4].map((r, i) => (
        <HubRing key={i} radius={r} speed={0.4 + i * 0.2} position={[0, 1.5, -39]} />
      ))}
    </group>
  );
}

function ServicePod({
  position,
  color,
  index,
}: {
  position: [number, number, number];
  color: number;
  index: number;
}) {
  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.4 + index) * 0.08;
    }
  });

  return (
    <group ref={ref} position={position}>
      {/* Pod base platform */}
      <mesh position={[0, -0.5, 0]} receiveShadow>
        <cylinderGeometry args={[1.8, 2, 0.2, 6]} />
        <meshStandardMaterial color={0x0d1520} roughness={0.5} metalness={0.6} />
      </mesh>
      {/* Pod screen frame */}
      <mesh position={[0, 1.2, 0]} castShadow>
        <boxGeometry args={[2.2, 1.8, 0.1]} />
        <meshStandardMaterial color={0x151c28} roughness={0.4} metalness={0.7} />
      </mesh>
      {/* Screen display */}
      <mesh position={[0, 1.2, 0.06]}>
        <boxGeometry args={[2.0, 1.6, 0.02]} />
        <meshStandardMaterial
          color={new THREE.Color(color)}
          emissive={new THREE.Color(color)}
          emissiveIntensity={0.2}
          roughness={0.1}
          transparent
          opacity={0.6}
        />
      </mesh>
      {/* Corner accent lights */}
      <pointLight position={[0, 1.5, 0.3]} intensity={0.4} color={color} distance={6} decay={2} />
    </group>
  );
}

function HubRing({
  radius,
  speed,
  position,
}: {
  radius: number;
  speed: number;
  position: [number, number, number];
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * speed;
      ref.current.rotation.z = state.clock.elapsedTime * speed * 0.7;
    }
  });

  return (
    <mesh ref={ref} position={position}>
      <torusGeometry args={[radius, 0.025, 8, 40]} />
      <meshStandardMaterial
        color={0x149a7c}
        emissive={new THREE.Color(0x0c745d)}
        emissiveIntensity={0.5}
        transparent
        opacity={0.55}
      />
    </mesh>
  );
}

// CH05: Operations — command room
function OperationsScene() {
  return (
    <group position={[0, 0, -55]}>
      {/* Large command console */}
      <mesh position={[0, 0, 0]} receiveShadow>
        <boxGeometry args={[14, 0.15, 6]} />
        <meshStandardMaterial color={0x0a1018} roughness={0.6} metalness={0.5} />
      </mesh>

      {/* Monitor banks */}
      {[-5, 0, 5].map((x, i) => (
        <group key={i} position={[x, 1.8, -1]}>
          <mesh>
            <boxGeometry args={[2.8, 1.6, 0.08]} />
            <meshStandardMaterial color={0x141c28} roughness={0.4} metalness={0.6} />
          </mesh>
          <mesh position={[0, 0, 0.05]}>
            <boxGeometry args={[2.6, 1.45, 0.02]} />
            <meshStandardMaterial
              color={0x0c745d}
              emissive={new THREE.Color(0x0c745d)}
              emissiveIntensity={0.15}
              transparent
              opacity={0.5}
            />
          </mesh>
        </group>
      ))}

      {/* Workflow pathway nodes */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <WorkflowNode key={i} index={i} position={[0, 2.5, 2 - i * 0.8]} />
      ))}
    </group>
  );
}

function WorkflowNode({ index, position }: { index: number; position: [number, number, number] }) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      const mat = ref.current.material as THREE.MeshStandardMaterial;
      mat.emissiveIntensity = 0.4 + Math.sin(state.clock.elapsedTime * 0.8 + index) * 0.25;
    }
  });

  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[0.12, 8, 8]} />
      <meshStandardMaterial
        color={0x149a7c}
        emissive={new THREE.Color(0x149a7c)}
        emissiveIntensity={0.5}
        roughness={0.1}
      />
    </mesh>
  );
}

// CH06: Vault — project archive
function VaultScene() {
  return (
    <group position={[0, 0, -70]}>
      {/* Vault door frame */}
      <mesh position={[0, 3, 5]} castShadow>
        <boxGeometry args={[6, 8, 0.4]} />
        <meshStandardMaterial color={0x1a1f28} roughness={0.3} metalness={0.9} />
      </mesh>
      <mesh position={[0, 3, 5.25]}>
        <boxGeometry args={[5.4, 7.2, 0.1]} />
        <meshStandardMaterial
          color={0x0a1520}
          emissive={new THREE.Color(0x041020)}
          emissiveIntensity={0.5}
          roughness={0.1}
        />
      </mesh>

      {/* Archive shelves */}
      {[0, 1, 2].map((row) => (
        <group key={row} position={[0, row * 2, 0]}>
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[16, 0.1, 1.5]} />
            <meshStandardMaterial color={0x111620} roughness={0.6} metalness={0.4} />
          </mesh>
          {[-5, -2.5, 0, 2.5, 5].map((x, i) => (
            <mesh key={i} position={[x, 0.5, 0.1]}>
              <boxGeometry args={[1.8, 0.9, 0.08]} />
              <meshStandardMaterial color={0x0c1520} roughness={0.3} metalness={0.5} />
            </mesh>
          ))}
        </group>
      ))}

      {/* Spot light on vault */}
      <pointLight position={[0, 10, 2]} intensity={1.2} color={0xddeeff} distance={30} decay={2} />
    </group>
  );
}

// CH07: Crew quarters — calmer space
function CrewScene() {
  return (
    <group position={[0, 0, -92]}>
      {/* Warm ambient fill */}
      <pointLight position={[0, 8, 0]} intensity={0.6} color={0x204030} distance={40} decay={1.5} />

      {/* Values display pillars */}
      {[-8, -4, 0, 4, 8].map((x, i) => (
        <group key={i} position={[x, 0, 0]}>
          <mesh position={[0, 2, 0]} castShadow>
            <boxGeometry args={[1.2, 5, 0.2]} />
            <meshStandardMaterial
              color={0x0d1018}
              roughness={0.6}
              metalness={0.4}
              emissive={new THREE.Color(0x040810)}
              emissiveIntensity={0.5}
            />
          </mesh>
          <mesh position={[0, 4.55, 0]}>
            <boxGeometry args={[1.4, 0.08, 0.22]} />
            <meshStandardMaterial color={0x149a7c} emissive={new THREE.Color(0x149a7c)} emissiveIntensity={0.5} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

// Final: Empire overlook
function EmpireScene() {
  const coreRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (coreRef.current) {
      coreRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      coreRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      const mat = coreRef.current.material as THREE.MeshStandardMaterial;
      mat.emissiveIntensity = 0.5 + Math.sin(state.clock.elapsedTime * 0.6) * 0.3;
    }
  });

  return (
    <group position={[0, 30, -95]}>
      {/* Empire central core */}
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[3, 2]} />
        <meshStandardMaterial
          color={0x149a7c}
          emissive={new THREE.Color(0x0c745d)}
          emissiveIntensity={0.6}
          roughness={0.1}
          metalness={0.8}
          wireframe
        />
      </mesh>

      {/* Convergence rings */}
      {[5, 8, 12, 16].map((r, i) => (
        <HubRing key={i} radius={r} speed={0.15 + i * 0.05} position={[0, 0, 0]} />
      ))}

      {/* Empire point light */}
      <pointLight position={[0, 0, 0]} intensity={2} color={0x149a7c} distance={80} decay={1.5} />
    </group>
  );
}

// ─── Ambient Particles ───────────────────────────────────────────────────────
function AmbientParticles({ count }: { count: number }) {
  const ref = useRef<THREE.Points>(null);

  const [positions, sizes] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const sz = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3 + 0] = (Math.random() - 0.5) * 50;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 18 + 3;
      pos[i * 3 + 2] = Math.random() * -130 + 5;
      sz[i] = 0.5 + Math.random() * 1.5;
    }
    return [pos, sz];
  }, [count]);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.008;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-size"
          args={[sizes, 1]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color={0x2a5044}
        transparent
        opacity={0.55}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}
