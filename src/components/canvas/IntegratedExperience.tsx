"use client";

import { useMemo, useRef, useEffect, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ARCHIVED_PROJECTS } from "@/lib/projectsData";

export default function IntegratedExperience() {
  const { camera, gl } = useThree();

  // Detect mobile / low-end device to dynamically scale particle counts
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || navigator.maxTouchPoints > 1);
    };
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(motionQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile, { passive: true });
    motionQuery.addEventListener("change", handleMotionChange);

    return () => {
      window.removeEventListener("resize", checkMobile);
      motionQuery.removeEventListener("change", handleMotionChange);
    };
  }, []);

  const pointsRef = useRef<THREE.Points>(null);
  const heroCoreRef = useRef<THREE.Mesh>(null);
  const heroRingsRef = useRef<THREE.Group>(null);
  const chaoticMeshesRef = useRef<THREE.Group>(null);
  const solutionNetworkRef = useRef<THREE.LineSegments>(null);
  const solutionCoreRef = useRef<THREE.Mesh>(null);
  
  // Vision & Mission 3D elements
  const visionConstellationRef = useRef<THREE.LineSegments>(null);
  const missionPathwayRef = useRef<THREE.LineSegments>(null);
  const pathwayNodesRef = useRef<THREE.Group>(null);

  // Services Ecosystem 3D elements
  const servicesEcosystemGroupRef = useRef<THREE.Group>(null);
  const servicesCoreRef = useRef<THREE.Mesh>(null);
  const servicesCoreRingsRef = useRef<THREE.Group>(null);
  const servicesWebNodeRef = useRef<THREE.Group>(null);
  const servicesAiNodeRef = useRef<THREE.Group>(null);
  const servicesSaasNodeRef = useRef<THREE.Group>(null);
  const servicesMarketingNodeRef = useRef<THREE.Group>(null);
  const servicesConduitsRef = useRef<THREE.LineSegments>(null);

  // Process 3D Elements
  const processGroupRef = useRef<THREE.Group>(null);
  const processConduitLinesRef = useRef<THREE.LineSegments>(null);
  const processNodesGroupRef = useRef<THREE.Group>(null);

  // Projects 3D Elements
  const projectsGroupRef = useRef<THREE.Group>(null);
  const projectsFramesGroupRef = useRef<THREE.Group>(null);
  const projectsLaserBeamsRef = useRef<THREE.LineSegments>(null);

  // Testimonials 3D Elements
  const testimonialsGroupRef = useRef<THREE.Group>(null);
  const testimonialsHaloRingRef = useRef<THREE.Mesh>(null);

  // About 3D Elements
  const aboutGroupRef = useRef<THREE.Group>(null);
  const aboutCoreRef = useRef<THREE.Mesh>(null);

  // Values 3D Elements
  const valuesGroupRef = useRef<THREE.Group>(null);
  const valuesPentaRingRef = useRef<THREE.LineSegments>(null);

  // Future Grand Unified Climax 3D Elements
  const futureGroupRef = useRef<THREE.Group>(null);
  const futureUnifiedCoreRef = useRef<THREE.Mesh>(null);
  const futureHarmonicRingsRef = useRef<THREE.Group>(null);
  const futureLatticeLinesRef = useRef<THREE.LineSegments>(null);

  // Unified animation state driven continuously by GSAP ScrollTrigger
  const stateRef = useRef({
    heroProgress: 0,
    heroDispersion: 0,
    heroCoreOpacity: 0.85,

    problemSolutionProgress: 0,
    chaosAmount: 0,
    alignmentAmount: 0,
    networkOpacity: 0,
    solutionCoreOpacity: 0,

    visionProgress: 0,
    visionSystemAmount: 0,
    visionConstellationOpacity: 0,

    missionProgress: 0,
    missionPathwayAmount: 0,
    pathwayGlowOpacity: 0,
    activeMissionStage: 0,

    servicesProgress: 0,
    servicesEcosystemAmount: 0,
    servicesOpacity: 0,
    activeServiceIndex: 0,

    processProgress: 0,
    processPathAmount: 0,
    processOpacity: 0,
    activeProcessStage: 0,

    projectsProgress: 0,
    projectsSpaceAmount: 0,
    projectsOpacity: 0,
    activeProjectIndex: 0,

    testimonialsProgress: 0,
    testimonialsTrustAmount: 0,
    testimonialsHaloOpacity: 0,

    aboutProgress: 0,
    aboutSimplicityAmount: 0,
    aboutOpacity: 0,
    activeAboutIndex: 0,

    valuesProgress: 0,
    valuesAmount: 0,
    valuesOpacity: 0,
    activeValueIndex: 0,

    futureProgress: 0,
    futureConvergenceAmount: 0,
    futureClimaxAmount: 0,
    futureCoreOpacity: 0,

    targetCamPos: new THREE.Vector3(0, 0, 6.8),
    targetCamLookAt: new THREE.Vector3(0, 0, 0),

    scrollVelocity: 0,
  });

  // Dynamic particle count: 1800 on mobile/tablets for peak battery/framerate efficiency, 3800 on desktop
  const PARTICLE_COUNT = isMobile ? 1800 : 3800;
  const CHAOTIC_FRAGMENTS_COUNT = isMobile ? 8 : 14;

  const PROCESS_STAGES_COORDS: [number, number, number][] = [
    [-1.6, 2.2, -4.0],
    [1.6, 1.4, -2.4],
    [-1.8, 0.5, -0.8],
    [1.8, -0.4, 0.8],
    [-1.5, -1.3, 2.4],
    [1.5, -2.1, 4.0],
  ];

  const FUTURE_8_NODES = [
    [-2.2, 1.4, 0.8],
    [2.2, 1.4, 0.8],
    [2.4, -1.2, 0.6],
    [-2.4, -1.2, 0.6],
    [0.0, 2.2, -0.6],
    [0.0, -2.2, -0.6],
    [-1.8, 0.0, -1.2],
    [1.8, 0.0, -1.2],
  ];

  // Particle Formations with Dynamic Count Allocation
  const [
    heroPos, chaosPos, solutionPos, visionPos, missionPos, servicesPos, processPos, projectsPos, testimonialsPos, aboutPos, valuesPos, futurePos, colors, baseSizes
  ] = useMemo(() => {
    const hPos = new Float32Array(PARTICLE_COUNT * 3);
    const cPos = new Float32Array(PARTICLE_COUNT * 3);
    const sPos = new Float32Array(PARTICLE_COUNT * 3);
    const vPos = new Float32Array(PARTICLE_COUNT * 3);
    const mPos = new Float32Array(PARTICLE_COUNT * 3);
    const srvPos = new Float32Array(PARTICLE_COUNT * 3);
    const prcPos = new Float32Array(PARTICLE_COUNT * 3);
    const projPos = new Float32Array(PARTICLE_COUNT * 3);
    const testPos = new Float32Array(PARTICLE_COUNT * 3);
    const abPos = new Float32Array(PARTICLE_COUNT * 3);
    const valPos = new Float32Array(PARTICLE_COUNT * 3);
    const futPos = new Float32Array(PARTICLE_COUNT * 3);
    const col = new Float32Array(PARTICLE_COUNT * 3);
    const sz = new Float32Array(PARTICLE_COUNT);

    const primaryColor = new THREE.Color("#0c745d");
    const tealColor = new THREE.Color("#149a7c");
    const accentWhite = new THREE.Color("#ffffff");
    const deepTeal = new THREE.Color("#06382d");

    const goldenRatio = (1 + Math.sqrt(5)) / 2;

    const nodeCenters = [
      [-2.4, 1.2, 0.4],
      [2.4, 1.2, -0.4],
      [2.4, -1.2, 0.4],
      [-2.4, -1.2, -0.4],
    ];

    const heroCoreLimit = Math.floor(PARTICLE_COUNT * 0.52);
    const heroRingLimit = Math.floor(PARTICLE_COUNT * 0.78);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3;

      // A. HERO BASE FORMATION
      if (i < heroCoreLimit) {
        const theta = (2 * Math.PI * i) / goldenRatio;
        const phi = Math.acos(1 - (2 * (i + 0.5)) / heroCoreLimit);
        const radius = 1.35 + (i % 4 === 0 ? 0.08 : 0);
        hPos[i3] = radius * Math.cos(theta) * Math.sin(phi);
        hPos[i3 + 1] = radius * Math.sin(theta) * Math.sin(phi);
        hPos[i3 + 2] = radius * Math.cos(phi);
      } else if (i < heroRingLimit) {
        const angle = ((i - heroCoreLimit) / (heroRingLimit - heroCoreLimit)) * Math.PI * 6;
        const ringRadius = 1.8 + ((i - heroCoreLimit) % 4) * 0.25;
        const planeTilt = (i % 2 === 0 ? 1 : -1) * 0.45;
        hPos[i3] = Math.cos(angle) * ringRadius;
        hPos[i3 + 1] = Math.sin(angle) * ringRadius * planeTilt;
        hPos[i3 + 2] = Math.sin(angle) * ringRadius;
      } else {
        const r = 2.4 + Math.random() * 3.2;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(Math.random() * 2 - 1);
        hPos[i3] = r * Math.sin(phi) * Math.cos(theta);
        hPos[i3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        hPos[i3 + 2] = r * Math.cos(phi);
      }

      // B. CHAOS FORMATION
      const clusterId = i % 5;
      const clusterCenter = [
        (clusterId === 0 ? -2.2 : clusterId === 1 ? 2.4 : clusterId === 2 ? -1.8 : clusterId === 3 ? 1.9 : 0) + (Math.random() - 0.5) * 0.8,
        (clusterId === 0 ? 1.6 : clusterId === 1 ? -1.4 : clusterId === 2 ? -1.8 : clusterId === 3 ? 1.7 : 0) + (Math.random() - 0.5) * 0.8,
        (Math.random() - 0.5) * 4.5,
      ];
      cPos[i3] = clusterCenter[0] + (Math.random() - 0.5) * 2.8;
      cPos[i3 + 1] = clusterCenter[1] + (Math.random() - 0.5) * 2.8;
      cPos[i3 + 2] = clusterCenter[2] + (Math.random() - 0.5) * 2.8;

      // C. SOLUTION FORMATION
      const ringSeg = Math.floor(i / 150);
      const ringAngle = ((i % 150) / 150) * Math.PI * 2;
      const heightStep = ((ringSeg - 12) / 24) * 3.6;
      const radiusAtHeight = Math.max(0.2, 1.8 * (1 - Math.abs(heightStep) / 2.2));
      sPos[i3] = Math.cos(ringAngle) * radiusAtHeight;
      sPos[i3 + 1] = heightStep;
      sPos[i3 + 2] = Math.sin(ringAngle) * radiusAtHeight;

      // D. VISION FORMATION
      const nodeRing = i % 8;
      const nodeTheta = ((i % 450) / 450) * Math.PI * 2;
      const nodeR = 1.2 + nodeRing * 0.35;
      const nodeZOffset = Math.sin(nodeTheta * 3 + nodeRing) * 0.8;
      vPos[i3] = Math.cos(nodeTheta) * nodeR;
      vPos[i3 + 1] = (Math.sin(nodeTheta) * nodeR) * 0.85;
      vPos[i3 + 2] = nodeZOffset;

      // E. MISSION FORMATION
      const stepIndex = i % 5;
      const stepZ = (stepIndex - 2) * 2.2;
      const stepY = (2 - stepIndex) * 0.9;
      const spreadR = 0.35 + (i % 6) * 0.12;
      const pAngle = (i / 100) * Math.PI * 2;
      mPos[i3] = Math.cos(pAngle) * spreadR + (Math.sin(stepIndex) * 0.4);
      mPos[i3 + 1] = stepY + Math.sin(pAngle) * spreadR * 0.6;
      mPos[i3 + 2] = stepZ + (Math.random() - 0.5) * 1.8;

      // F. SERVICES ECOSYSTEM FORMATION
      const srvHubLimit = Math.floor(PARTICLE_COUNT * 0.38);
      const srvNodesLimit = Math.floor(PARTICLE_COUNT * 0.84);
      if (i < srvHubLimit) {
        const theta = (2 * Math.PI * i) / goldenRatio;
        const phi = Math.acos(1 - (2 * (i + 0.5)) / srvHubLimit);
        const radius = 1.1 + (i % 3 === 0 ? 0.05 : 0);
        srvPos[i3] = radius * Math.cos(theta) * Math.sin(phi);
        srvPos[i3 + 1] = radius * Math.sin(theta) * Math.sin(phi);
        srvPos[i3 + 2] = radius * Math.cos(phi);
      } else if (i < srvNodesLimit) {
        const targetNode = (i - srvHubLimit) % 4;
        const center = nodeCenters[targetNode];
        const localIdx = Math.floor((i - srvHubLimit) / 4);
        const localAngle = (localIdx / 300) * Math.PI * 2;
        const localR = 0.55 + (localIdx % 3) * 0.08;
        srvPos[i3] = center[0] + Math.cos(localAngle) * localR;
        srvPos[i3 + 1] = center[1] + Math.sin(localAngle) * localR * 0.8;
        srvPos[i3 + 2] = center[2] + Math.sin(localAngle * 2) * 0.3;
      } else {
        const conduitIdx = (i - srvNodesLimit) % 4;
        const center = nodeCenters[conduitIdx];
        const t = (i - srvNodesLimit) / (PARTICLE_COUNT - srvNodesLimit);
        srvPos[i3] = THREE.MathUtils.lerp(0, center[0], t) + (Math.random() - 0.5) * 0.15;
        srvPos[i3 + 1] = THREE.MathUtils.lerp(0, center[1], t) + (Math.random() - 0.5) * 0.15;
        srvPos[i3 + 2] = THREE.MathUtils.lerp(0, center[2], t) + (Math.random() - 0.5) * 0.15;
      }

      // G. PROCESS 6-STAGE CONDUIT
      const stageIdx = i % 6;
      const stageCenter = PROCESS_STAGES_COORDS[stageIdx];
      const orbitAng = (i / 60) * Math.PI * 2;
      const orbitRadius = 0.3 + (i % 4) * 0.08;
      const prcNodesLimit = Math.floor(PARTICLE_COUNT * 0.8);
      if (i < prcNodesLimit) {
        prcPos[i3] = stageCenter[0] + Math.cos(orbitAng) * orbitRadius;
        prcPos[i3 + 1] = stageCenter[1] + Math.sin(orbitAng) * orbitRadius;
        prcPos[i3 + 2] = stageCenter[2] + Math.sin(orbitAng * 2) * 0.15;
      } else {
        const nextStageIdx = (stageIdx + 1) % 6;
        const nextCenter = PROCESS_STAGES_COORDS[nextStageIdx];
        const tFlow = (i - prcNodesLimit) / (PARTICLE_COUNT - prcNodesLimit);
        prcPos[i3] = THREE.MathUtils.lerp(stageCenter[0], nextCenter[0], tFlow) + (Math.random() - 0.5) * 0.12;
        prcPos[i3 + 1] = THREE.MathUtils.lerp(stageCenter[1], nextCenter[1], tFlow) + (Math.random() - 0.5) * 0.12;
        prcPos[i3 + 2] = THREE.MathUtils.lerp(stageCenter[2], nextCenter[2], tFlow) + (Math.random() - 0.5) * 0.12;
      }

      // H. PROJECTS CASE STUDY ARCHIVE
      const projectIdx = i % ARCHIVED_PROJECTS.length;
      const pCenter = ARCHIVED_PROJECTS[projectIdx].coordinates;
      const frameU = ((i % 100) / 100) * 2 - 1;
      const frameV = (((Math.floor(i / 100)) % 10) / 10) * 1.4 - 0.7;
      projPos[i3] = pCenter[0] + frameU * 1.1 + (Math.random() - 0.5) * 0.1;
      projPos[i3 + 1] = pCenter[1] + frameV * 0.8 + (Math.random() - 0.5) * 0.1;
      projPos[i3 + 2] = pCenter[2] + (Math.random() - 0.5) * 0.25;

      // I. TESTIMONIALS TRUST SANCTUARY
      const tAngle = (i / PARTICLE_COUNT) * Math.PI * 2 * 4;
      const tRadius = 3.2 + Math.sin(i * 0.2) * 0.4;
      const tY = (Math.cos(i * 0.15) * 1.8);
      const tZ = Math.sin(tAngle) * tRadius;
      const tX = Math.cos(tAngle) * tRadius;
      testPos[i3] = tX;
      testPos[i3 + 1] = tY;
      testPos[i3 + 2] = tZ;

      // J. ABOUT DUAL HELIX
      const aTheta = (i / PARTICLE_COUNT) * Math.PI * 10;
      const aHeight = ((i / PARTICLE_COUNT) - 0.5) * 5.2;
      const aRadius = 1.4 + Math.sin(aHeight * 2) * 0.3;
      const strand = i % 2 === 0 ? 1 : -1;
      abPos[i3] = Math.cos(aTheta) * aRadius * strand;
      abPos[i3 + 1] = aHeight;
      abPos[i3 + 2] = Math.sin(aTheta) * aRadius * strand;

      // K. VALUES 5-PILLAR PENTAGONAL LATTICE
      const vNodeIdx = i % 5;
      const vNodeAngle = (vNodeIdx / 5) * Math.PI * 2 - Math.PI / 2;
      const vNodeDist = 2.2;
      const vNodeCenterX = Math.cos(vNodeAngle) * vNodeDist;
      const vNodeCenterY = Math.sin(vNodeAngle) * vNodeDist * 0.65;
      const vParticleTheta = ((i / 5) / (PARTICLE_COUNT / 5)) * Math.PI * 2;
      const vParticleR = 0.4 + (i % 4) * 0.12;
      valPos[i3] = vNodeCenterX + Math.cos(vParticleTheta) * vParticleR;
      valPos[i3 + 1] = vNodeCenterY + Math.sin(vParticleTheta) * vParticleR;
      valPos[i3 + 2] = Math.sin(vParticleTheta * 3) * 0.4;

      // L. FUTURE: GRAND UNIFIED SYSTEM
      const futSphereLimit = Math.floor(PARTICLE_COUNT * 0.65);
      if (i < futSphereLimit) {
        const theta = (2 * Math.PI * i) / goldenRatio;
        const phi = Math.acos(1 - (2 * (i + 0.5)) / futSphereLimit);
        const radius = 1.6 + (i % 5 === 0 ? 0.12 : 0);
        futPos[i3] = radius * Math.cos(theta) * Math.sin(phi);
        futPos[i3 + 1] = radius * Math.sin(theta) * Math.sin(phi);
        futPos[i3 + 2] = radius * Math.cos(phi);
      } else {
        const streamIdx = (i - futSphereLimit) % 8;
        const originCoord = FUTURE_8_NODES[streamIdx];
        const tProgress = (i - futSphereLimit) / (PARTICLE_COUNT - futSphereLimit);
        futPos[i3] = THREE.MathUtils.lerp(originCoord[0], 0, tProgress) + (Math.random() - 0.5) * 0.08;
        futPos[i3 + 1] = THREE.MathUtils.lerp(originCoord[1], 0, tProgress) + (Math.random() - 0.5) * 0.08;
        futPos[i3 + 2] = THREE.MathUtils.lerp(originCoord[2], 0, tProgress) + (Math.random() - 0.5) * 0.08;
      }

      // Color distribution
      const r = Math.random();
      let color = primaryColor;
      if (r > 0.88) color = accentWhite;
      else if (r > 0.45) color = tealColor;
      else if (r > 0.2) color = primaryColor;
      else color = deepTeal;

      col[i3] = color.r;
      col[i3 + 1] = color.g;
      col[i3 + 2] = color.b;

      sz[i] = r > 0.9 ? 1.6 : 0.9;
    }

    return [hPos, cPos, sPos, vPos, mPos, srvPos, prcPos, projPos, testPos, abPos, valPos, futPos, col, sz];
  }, [PARTICLE_COUNT]);

  const workingPos = useMemo(() => new Float32Array(heroPos), [heroPos]);

  // Line Networks
  const [networkLinesPos] = useMemo(() => {
    const lineCount = isMobile ? 70 : 140;
    const lines = new Float32Array(lineCount * 6);
    let lIdx = 0;
    for (let i = 0; i < lineCount; i++) {
      const idxA = Math.floor(Math.random() * Math.min(800, PARTICLE_COUNT)) * 3;
      const idxB = Math.floor(Math.random() * Math.min(800, PARTICLE_COUNT)) * 3;
      lines[lIdx++] = solutionPos[idxA];
      lines[lIdx++] = solutionPos[idxA + 1];
      lines[lIdx++] = solutionPos[idxA + 2];
      lines[lIdx++] = solutionPos[idxB];
      lines[lIdx++] = solutionPos[idxB + 1];
      lines[lIdx++] = solutionPos[idxB + 2];
    }
    return [lines];
  }, [solutionPos, isMobile, PARTICLE_COUNT]);

  const [visionLinesPos] = useMemo(() => {
    const lineCount = isMobile ? 80 : 180;
    const lines = new Float32Array(lineCount * 6);
    let lIdx = 0;
    for (let i = 0; i < lineCount; i++) {
      const idxA = (i * 18) % (PARTICLE_COUNT - 1) * 3;
      const idxB = ((i * 18) + 24) % (PARTICLE_COUNT - 1) * 3;
      lines[lIdx++] = visionPos[idxA];
      lines[lIdx++] = visionPos[idxA + 1];
      lines[lIdx++] = visionPos[idxA + 2];
      lines[lIdx++] = visionPos[idxB];
      lines[lIdx++] = visionPos[idxB + 1];
      lines[lIdx++] = visionPos[idxB + 2];
    }
    return [lines];
  }, [visionPos, isMobile, PARTICLE_COUNT]);

  const [pathwayLinesPos] = useMemo(() => {
    const pointCount = 100;
    const lines = new Float32Array(pointCount * 6);
    let lIdx = 0;
    for (let i = 0; i < pointCount - 1; i++) {
      const tA = i / pointCount;
      const tB = (i + 1) / pointCount;
      const zA = THREE.MathUtils.lerp(-4.5, 4.5, tA);
      const yA = THREE.MathUtils.lerp(2.2, -1.8, tA);
      const xA = Math.sin(tA * Math.PI * 3) * 0.4;
      const zB = THREE.MathUtils.lerp(-4.5, 4.5, tB);
      const yB = THREE.MathUtils.lerp(2.2, -1.8, tB);
      const xB = Math.sin(tB * Math.PI * 3) * 0.4;
      lines[lIdx++] = xA;
      lines[lIdx++] = yA;
      lines[lIdx++] = zA;
      lines[lIdx++] = xB;
      lines[lIdx++] = yB;
      lines[lIdx++] = zB;
    }
    return [lines];
  }, []);

  const [servicesConduitLines] = useMemo(() => {
    const lines = new Float32Array(4 * 6);
    const targets = [
      [-2.4, 1.2, 0.4],
      [2.4, 1.2, -0.4],
      [2.4, -1.2, 0.4],
      [-2.4, -1.2, -0.4],
    ];
    let lIdx = 0;
    for (let i = 0; i < 4; i++) {
      lines[lIdx++] = 0;
      lines[lIdx++] = 0;
      lines[lIdx++] = 0;
      lines[lIdx++] = targets[i][0];
      lines[lIdx++] = targets[i][1];
      lines[lIdx++] = targets[i][2];
    }
    return [lines];
  }, []);

  const [processCircuitLines] = useMemo(() => {
    const lines = new Float32Array(6 * 6);
    let lIdx = 0;
    for (let i = 0; i < 6; i++) {
      const from = PROCESS_STAGES_COORDS[i];
      const to = PROCESS_STAGES_COORDS[(i + 1) % 6];
      lines[lIdx++] = from[0];
      lines[lIdx++] = from[1];
      lines[lIdx++] = from[2];
      lines[lIdx++] = to[0];
      lines[lIdx++] = to[1];
      lines[lIdx++] = to[2];
    }
    return [lines];
  }, []);

  const [projectLaserLines] = useMemo(() => {
    const lines = new Float32Array((ARCHIVED_PROJECTS.length - 1) * 6);
    let lIdx = 0;
    for (let i = 0; i < ARCHIVED_PROJECTS.length - 1; i++) {
      const p1 = ARCHIVED_PROJECTS[i].coordinates;
      const p2 = ARCHIVED_PROJECTS[i + 1].coordinates;
      lines[lIdx++] = p1[0];
      lines[lIdx++] = p1[1];
      lines[lIdx++] = p1[2];
      lines[lIdx++] = p2[0];
      lines[lIdx++] = p2[1];
      lines[lIdx++] = p2[2];
    }
    return [lines];
  }, []);

  const [valuesPentagonLines] = useMemo(() => {
    const lines = new Float32Array(5 * 6);
    let lIdx = 0;
    const vDist = 2.2;
    for (let i = 0; i < 5; i++) {
      const angA = (i / 5) * Math.PI * 2 - Math.PI / 2;
      const angB = (((i + 1) % 5) / 5) * Math.PI * 2 - Math.PI / 2;
      lines[lIdx++] = Math.cos(angA) * vDist;
      lines[lIdx++] = Math.sin(angA) * vDist * 0.65;
      lines[lIdx++] = 0;
      lines[lIdx++] = Math.cos(angB) * vDist;
      lines[lIdx++] = Math.sin(angB) * vDist * 0.65;
      lines[lIdx++] = 0;
    }
    return [lines];
  }, []);

  const [future8StreamsLines] = useMemo(() => {
    const lines = new Float32Array(8 * 6);
    let lIdx = 0;
    for (let i = 0; i < 8; i++) {
      const node = FUTURE_8_NODES[i];
      lines[lIdx++] = node[0];
      lines[lIdx++] = node[1];
      lines[lIdx++] = node[2];
      lines[lIdx++] = 0;
      lines[lIdx++] = 0;
      lines[lIdx++] = 0;
    }
    return [lines];
  }, []);

  // GSAP ScrollTrigger Orchestration
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const triggers: ScrollTrigger[] = [];

    // 1. Hero Trigger
    triggers.push(ScrollTrigger.create({
      trigger: "#hero",
      start: "top top",
      end: "bottom top",
      scrub: 0.8,
      onUpdate: (self) => {
        const p = self.progress;
        stateRef.current.heroProgress = p;

        if (p < 0.35) {
          stateRef.current.heroDispersion = 0;
          stateRef.current.heroCoreOpacity = 0.85;
        } else {
          const deconstruct = (p - 0.35) / 0.65;
          stateRef.current.heroDispersion = Math.pow(deconstruct, 1.8);
          stateRef.current.heroCoreOpacity = Math.max(0, 0.85 * (1 - deconstruct * 1.4));
        }

        if (p <= 1) {
          stateRef.current.targetCamPos.set(
            0,
            THREE.MathUtils.lerp(0, -0.3, p),
            THREE.MathUtils.lerp(6.8, 3.8, Math.min(p * 1.2, 1))
          );
          stateRef.current.targetCamLookAt.set(0, 0, 0);
        }
        stateRef.current.scrollVelocity = self.getVelocity() / 1500;
      },
    }));

    // 2. Problem -> Solution Trigger
    triggers.push(ScrollTrigger.create({
      trigger: "#problem-solution-experience",
      start: "top top",
      end: "bottom bottom",
      scrub: 0.8,
      onUpdate: (self) => {
        const p = self.progress;
        stateRef.current.problemSolutionProgress = p;

        if (p < 0.5) {
          const stage1P = p / 0.5;
          stateRef.current.chaosAmount = Math.sin(stage1P * Math.PI * 0.5);
          stateRef.current.alignmentAmount = 0;
          stateRef.current.networkOpacity = 0;
          stateRef.current.solutionCoreOpacity = 0;

          stateRef.current.targetCamPos.set(
            Math.sin(stage1P * Math.PI * 2) * 1.2,
            Math.cos(stage1P * Math.PI) * 0.6,
            THREE.MathUtils.lerp(4.2, 3.2, stage1P)
          );
          stateRef.current.targetCamLookAt.set(Math.sin(stage1P * Math.PI) * 0.4, 0, 0);
        } else {
          const stage2P = (p - 0.5) / 0.5;
          stateRef.current.chaosAmount = 1 - stage2P;
          stateRef.current.alignmentAmount = Math.pow(stage2P, 1.4);
          stateRef.current.networkOpacity = Math.max(0, (stage2P - 0.3) * 1.4);
          stateRef.current.solutionCoreOpacity = Math.max(0, (stage2P - 0.4) * 1.6);

          stateRef.current.targetCamPos.set(
            THREE.MathUtils.lerp(0.8, 0, stage2P),
            THREE.MathUtils.lerp(-0.4, 0, stage2P),
            THREE.MathUtils.lerp(3.2, 4.2, stage2P)
          );
          stateRef.current.targetCamLookAt.set(0, 0, 0);
        }
        stateRef.current.scrollVelocity = self.getVelocity() / 1500;
      },
    }));

    // 3. Vision Trigger
    triggers.push(ScrollTrigger.create({
      trigger: "#vision-experience",
      start: "top top",
      end: "bottom bottom",
      scrub: 0.8,
      onUpdate: (self) => {
        const p = self.progress;
        stateRef.current.visionProgress = p;
        stateRef.current.visionSystemAmount = p;
        stateRef.current.visionConstellationOpacity = Math.sin(p * Math.PI) * 0.85;

        const orbitAngle = p * Math.PI * 0.6;
        stateRef.current.targetCamPos.set(
          Math.sin(orbitAngle) * 2.8,
          Math.cos(p * Math.PI) * 0.6,
          THREE.MathUtils.lerp(4.2, 5.4, Math.sin(p * Math.PI))
        );
        stateRef.current.targetCamLookAt.set(0, 0, 0);
        stateRef.current.scrollVelocity = self.getVelocity() / 1500;
      },
    }));

    // 4. Mission Trigger
    triggers.push(ScrollTrigger.create({
      trigger: "#mission-experience",
      start: "top top",
      end: "bottom bottom",
      scrub: 0.8,
      onUpdate: (self) => {
        const p = self.progress;
        stateRef.current.missionProgress = p;
        stateRef.current.missionPathwayAmount = p;
        stateRef.current.pathwayGlowOpacity = Math.min(1, p * 1.5);
        stateRef.current.activeMissionStage = Math.floor(p * 5);

        const pathZ = THREE.MathUtils.lerp(5.2, -2.5, p);
        const pathY = THREE.MathUtils.lerp(0.8, -0.6, p);
        const pathX = Math.sin(p * Math.PI * 2) * 0.5;

        stateRef.current.targetCamPos.set(pathX, pathY, pathZ);
        stateRef.current.targetCamLookAt.set(0, pathY - 0.2, pathZ - 3.5);
        stateRef.current.scrollVelocity = self.getVelocity() / 1500;
      },
    }));

    // 5. Services Trigger
    triggers.push(ScrollTrigger.create({
      trigger: "#services-experience",
      start: "top top",
      end: "bottom bottom",
      scrub: 0.8,
      onUpdate: (self) => {
        const p = self.progress;
        stateRef.current.servicesProgress = p;
        stateRef.current.servicesEcosystemAmount = p;
        stateRef.current.servicesOpacity = Math.min(1, p * 2.5);

        if (p < 0.2) {
          stateRef.current.activeServiceIndex = 0;
          stateRef.current.targetCamPos.set(0, 0, 5.8);
          stateRef.current.targetCamLookAt.set(0, 0, 0);
        } else if (p < 0.4) {
          stateRef.current.activeServiceIndex = 1;
          const subP = (p - 0.2) / 0.2;
          stateRef.current.targetCamPos.set(
            THREE.MathUtils.lerp(0, -1.8, subP),
            THREE.MathUtils.lerp(0, 0.9, subP),
            THREE.MathUtils.lerp(5.8, 3.4, subP)
          );
          stateRef.current.targetCamLookAt.set(-2.4, 1.2, 0.4);
        } else if (p < 0.6) {
          stateRef.current.activeServiceIndex = 2;
          const subP = (p - 0.4) / 0.2;
          stateRef.current.targetCamPos.set(
            THREE.MathUtils.lerp(-1.8, 1.8, subP),
            THREE.MathUtils.lerp(0.9, 0.9, subP),
            THREE.MathUtils.lerp(3.4, 3.2, subP)
          );
          stateRef.current.targetCamLookAt.set(2.4, 1.2, -0.4);
        } else if (p < 0.8) {
          stateRef.current.activeServiceIndex = 3;
          const subP = (p - 0.6) / 0.2;
          stateRef.current.targetCamPos.set(
            THREE.MathUtils.lerp(1.8, 1.8, subP),
            THREE.MathUtils.lerp(0.9, -0.9, subP),
            THREE.MathUtils.lerp(3.2, 3.4, subP)
          );
          stateRef.current.targetCamLookAt.set(2.4, -1.2, 0.4);
        } else {
          stateRef.current.activeServiceIndex = 4;
          const subP = (p - 0.8) / 0.2;
          stateRef.current.targetCamPos.set(
            THREE.MathUtils.lerp(1.8, -1.8, subP),
            THREE.MathUtils.lerp(-0.9, -0.9, subP),
            THREE.MathUtils.lerp(3.4, 3.4, subP)
          );
          stateRef.current.targetCamLookAt.set(-2.4, -1.2, -0.4);
        }
        stateRef.current.scrollVelocity = self.getVelocity() / 1500;
      },
    }));

    // 6. Process Trigger
    triggers.push(ScrollTrigger.create({
      trigger: "#process-experience",
      start: "top top",
      end: "bottom bottom",
      scrub: 0.8,
      onUpdate: (self) => {
        const p = self.progress;
        stateRef.current.processProgress = p;
        stateRef.current.processPathAmount = p;
        stateRef.current.processOpacity = Math.min(1, p * 2.2);

        if (p < 0.85) {
          const mappedStage = (p / 0.85) * 5;
          const currIdx = Math.floor(mappedStage);
          const nextIdx = Math.min(currIdx + 1, 5);
          const subProg = mappedStage - currIdx;

          stateRef.current.activeProcessStage = currIdx;

          const fromCoord = PROCESS_STAGES_COORDS[currIdx];
          const toCoord = PROCESS_STAGES_COORDS[nextIdx];

          const focusX = THREE.MathUtils.lerp(fromCoord[0], toCoord[0], subProg);
          const focusY = THREE.MathUtils.lerp(fromCoord[1], toCoord[1], subProg);
          const focusZ = THREE.MathUtils.lerp(fromCoord[2], toCoord[2], subProg);

          stateRef.current.targetCamPos.set(focusX * 0.75, focusY + 0.3, focusZ + 2.4);
          stateRef.current.targetCamLookAt.set(focusX, focusY, focusZ);
        } else {
          stateRef.current.activeProcessStage = 6;
          const endP = (p - 0.85) / 0.15;
          stateRef.current.targetCamPos.set(0, 0, THREE.MathUtils.lerp(3.2, 6.2, endP));
          stateRef.current.targetCamLookAt.set(0, 0, 0);
        }
        stateRef.current.scrollVelocity = self.getVelocity() / 1500;
      },
    }));

    // 7. Projects Trigger
    triggers.push(ScrollTrigger.create({
      trigger: "#projects-experience",
      start: "top top",
      end: "bottom bottom",
      scrub: 0.8,
      onUpdate: (self) => {
        const p = self.progress;
        stateRef.current.projectsProgress = p;
        stateRef.current.projectsSpaceAmount = p;
        stateRef.current.projectsOpacity = Math.min(1, p * 2.5);

        const projectCount = ARCHIVED_PROJECTS.length;
        const mappedP = p * (projectCount - 1);
        const currIdx = Math.floor(mappedP);
        const nextIdx = Math.min(currIdx + 1, projectCount - 1);
        const subProg = mappedP - currIdx;

        stateRef.current.activeProjectIndex = currIdx;

        const pFrom = ARCHIVED_PROJECTS[currIdx].coordinates;
        const pTo = ARCHIVED_PROJECTS[nextIdx].coordinates;

        const curProjX = THREE.MathUtils.lerp(pFrom[0], pTo[0], subProg);
        const curProjY = THREE.MathUtils.lerp(pFrom[1], pTo[1], subProg);
        const curProjZ = THREE.MathUtils.lerp(pFrom[2], pTo[2], subProg);

        stateRef.current.targetCamPos.set(curProjX * 0.6, curProjY, curProjZ + 3.2);
        stateRef.current.targetCamLookAt.set(curProjX, curProjY, curProjZ);

        stateRef.current.scrollVelocity = self.getVelocity() / 1500;
      },
    }));

    // 8. Testimonials Trigger
    triggers.push(ScrollTrigger.create({
      trigger: "#testimonials-experience",
      start: "top top",
      end: "bottom bottom",
      scrub: 0.8,
      onUpdate: (self) => {
        const p = self.progress;
        stateRef.current.testimonialsProgress = p;
        stateRef.current.testimonialsTrustAmount = p;
        stateRef.current.testimonialsHaloOpacity = Math.sin(p * Math.PI) * 0.85;

        stateRef.current.targetCamPos.set(0, 0, THREE.MathUtils.lerp(5.4, 4.6, Math.sin(p * Math.PI)));
        stateRef.current.targetCamLookAt.set(0, 0, 0);
        stateRef.current.scrollVelocity = self.getVelocity() / 1500;
      },
    }));

    // 9. About Trigger
    triggers.push(ScrollTrigger.create({
      trigger: "#about-experience",
      start: "top top",
      end: "bottom bottom",
      scrub: 0.8,
      onUpdate: (self) => {
        const p = self.progress;
        stateRef.current.aboutProgress = p;
        stateRef.current.aboutSimplicityAmount = p;
        stateRef.current.aboutOpacity = Math.min(1, p * 2.2);

        const mappedAbout = p * 3;
        stateRef.current.activeAboutIndex = Math.floor(mappedAbout);

        const camAngle = p * Math.PI * 0.5;
        stateRef.current.targetCamPos.set(
          Math.sin(camAngle) * 1.5,
          Math.cos(p * Math.PI) * 0.4,
          THREE.MathUtils.lerp(5.0, 4.4, Math.sin(p * Math.PI))
        );
        stateRef.current.targetCamLookAt.set(0, 0, 0);
        stateRef.current.scrollVelocity = self.getVelocity() / 1500;
      },
    }));

    // 10. Values Trigger
    triggers.push(ScrollTrigger.create({
      trigger: "#values-experience",
      start: "top top",
      end: "bottom bottom",
      scrub: 0.8,
      onUpdate: (self) => {
        const p = self.progress;
        stateRef.current.valuesProgress = p;
        stateRef.current.valuesAmount = p;
        stateRef.current.valuesOpacity = Math.min(1, p * 2.5);

        const mappedValue = p * 4;
        const activeIdx = Math.min(Math.floor(mappedValue), 4);
        stateRef.current.activeValueIndex = activeIdx;

        const vAngle = (activeIdx / 5) * Math.PI * 2 - Math.PI / 2;
        const vDist = 1.1;
        stateRef.current.targetCamPos.set(
          Math.cos(vAngle) * vDist * 0.6,
          Math.sin(vAngle) * vDist * 0.4,
          THREE.MathUtils.lerp(4.6, 3.8, Math.sin(p * Math.PI))
        );
        stateRef.current.targetCamLookAt.set(Math.cos(vAngle) * 0.3, Math.sin(vAngle) * 0.2, 0);
        stateRef.current.scrollVelocity = self.getVelocity() / 1500;
      },
    }));

    // 11. Future Trigger
    triggers.push(ScrollTrigger.create({
      trigger: "#future-experience",
      start: "top top",
      end: "bottom bottom",
      scrub: 0.8,
      onUpdate: (self) => {
        const p = self.progress;
        stateRef.current.futureProgress = p;
        stateRef.current.futureConvergenceAmount = p;
        stateRef.current.futureCoreOpacity = Math.min(1, p * 2.0);

        if (p < 0.6) {
          const subP = p / 0.6;
          stateRef.current.futureClimaxAmount = 0;
          stateRef.current.targetCamPos.set(
            0,
            THREE.MathUtils.lerp(0, -0.2, subP),
            THREE.MathUtils.lerp(4.2, 6.0, subP)
          );
          stateRef.current.targetCamLookAt.set(0, 0, 0);
        } else {
          const climP = (p - 0.6) / 0.4;
          stateRef.current.futureClimaxAmount = climP;
          stateRef.current.targetCamPos.set(
            0,
            THREE.MathUtils.lerp(-0.2, 0, climP),
            THREE.MathUtils.lerp(6.0, 4.8, climP)
          );
          stateRef.current.targetCamLookAt.set(0, 0, 0);
        }

        stateRef.current.scrollVelocity = self.getVelocity() / 1500;
      },
    }));

    return () => {
      triggers.forEach((t) => t.kill());
    };
  }, []);

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();
    const {
      heroDispersion,
      heroCoreOpacity,
      problemSolutionProgress,
      chaosAmount,
      alignmentAmount,
      networkOpacity,
      solutionCoreOpacity,
      visionSystemAmount,
      visionConstellationOpacity,
      missionPathwayAmount,
      pathwayGlowOpacity,
      servicesEcosystemAmount,
      servicesOpacity,
      activeServiceIndex,
      processPathAmount,
      processOpacity,
      activeProcessStage,
      projectsSpaceAmount,
      projectsOpacity,
      activeProjectIndex,
      testimonialsTrustAmount,
      testimonialsHaloOpacity,
      aboutSimplicityAmount,
      aboutOpacity,
      valuesAmount,
      valuesOpacity,
      activeValueIndex,
      futureConvergenceAmount,
      futureCoreOpacity,
      targetCamPos,
      targetCamLookAt,
      scrollVelocity,
    } = stateRef.current;

    // Camera Interpolation
    camera.position.lerp(targetCamPos, 0.05);
    camera.lookAt(targetCamLookAt);

    // Dynamic speed multiplier: respects prefers-reduced-motion
    const baseSpeed = prefersReducedMotion ? 0.2 : 1.0;
    const speedDampening = THREE.MathUtils.lerp(
      baseSpeed,
      baseSpeed * 0.15,
      testimonialsTrustAmount + aboutSimplicityAmount * 0.5 + valuesAmount * 0.4 + (1 - futureConvergenceAmount) * 0.2
    );

    // 1. Hero Object & Rings
    if (heroCoreRef.current) {
      heroCoreRef.current.rotation.x = -time * 0.18 * speedDampening;
      heroCoreRef.current.rotation.y = -time * 0.22 * speedDampening;
      const mat = heroCoreRef.current.material as THREE.MeshStandardMaterial;
      if (mat) {
        mat.opacity = THREE.MathUtils.lerp(mat.opacity, heroCoreOpacity * (1 - problemSolutionProgress * 2), 0.1);
        mat.transparent = true;
      }
      const scale = THREE.MathUtils.lerp(1, 0.1, heroDispersion + problemSolutionProgress);
      heroCoreRef.current.scale.set(scale, scale, scale);
    }

    if (heroRingsRef.current) {
      heroRingsRef.current.rotation.z = time * 0.08 * speedDampening;
      heroRingsRef.current.rotation.x = Math.sin(time * 0.4) * 0.2 * speedDampening;
      const ringScale = THREE.MathUtils.lerp(1, 2.2, heroDispersion + problemSolutionProgress);
      heroRingsRef.current.scale.set(ringScale, ringScale, ringScale);
      heroRingsRef.current.children.forEach((child) => {
        const mesh = child as THREE.Mesh;
        if (mesh.material) {
          (mesh.material as THREE.MeshBasicMaterial).opacity = Math.max(
            0,
            (1 - (heroDispersion + problemSolutionProgress) * 1.5) * 0.35
          );
        }
      });
    }

    // 2. Chaotic Problem Meshes
    if (chaoticMeshesRef.current) {
      chaoticMeshesRef.current.children.forEach((child, i) => {
        const mesh = child as THREE.Mesh;
        mesh.rotation.x += delta * (0.2 + (i % 3) * 0.15) * speedDampening;
        mesh.rotation.y += delta * (0.3 + (i % 2) * 0.2) * speedDampening;
        const activeScale = chaosAmount * (0.4 + (i % 3) * 0.2);
        mesh.scale.set(activeScale, activeScale, activeScale);
        const mat = mesh.material as THREE.MeshStandardMaterial;
        if (mat) {
          mat.opacity = THREE.MathUtils.lerp(mat.opacity, chaosAmount * 0.55, 0.1);
          mat.transparent = true;
        }
      });
    }

    // 3. Continuous Morphing Particle System
    if (pointsRef.current) {
      const posAttr = pointsRef.current.geometry.attributes.position;

      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const i3 = i * 3;

        const hX = heroPos[i3];
        const hY = heroPos[i3 + 1];
        const hZ = heroPos[i3 + 2];

        const cX = chaosPos[i3];
        const cY = chaosPos[i3 + 1];
        const cZ = chaosPos[i3 + 2];

        const sX = solutionPos[i3];
        const sY = solutionPos[i3 + 1];
        const sZ = solutionPos[i3 + 2];

        const vX = visionPos[i3];
        const vY = visionPos[i3 + 1];
        const vZ = visionPos[i3 + 2];

        const mX = missionPos[i3];
        const mY = missionPos[i3 + 1];
        const mZ = missionPos[i3 + 2];

        const srvX = servicesPos[i3];
        const srvY = servicesPos[i3 + 1];
        const srvZ = servicesPos[i3 + 2];

        const prcX = processPos[i3];
        const prcY = processPos[i3 + 1];
        const prcZ = processPos[i3 + 2];

        const projX = projectsPos[i3];
        const projY = projectsPos[i3 + 1];
        const projZ = projectsPos[i3 + 2];

        const testX = testimonialsPos[i3];
        const testY = testimonialsPos[i3 + 1];
        const testZ = testimonialsPos[i3 + 2];

        const abX = aboutPos[i3];
        const abY = aboutPos[i3 + 1];
        const abZ = aboutPos[i3 + 2];

        const valX = valuesPos[i3];
        const valY = valuesPos[i3 + 1];
        const valZ = valuesPos[i3 + 2];

        const futX = futurePos[i3];
        const futY = futurePos[i3 + 1];
        const futZ = futurePos[i3 + 2];

        let currX = THREE.MathUtils.lerp(hX, cX, chaosAmount);
        let currY = THREE.MathUtils.lerp(hY, cY, chaosAmount);
        let currZ = THREE.MathUtils.lerp(hZ, cZ, chaosAmount);

        currX = THREE.MathUtils.lerp(currX, sX, alignmentAmount);
        currY = THREE.MathUtils.lerp(currY, sY, alignmentAmount);
        currZ = THREE.MathUtils.lerp(currZ, sZ, alignmentAmount);

        currX = THREE.MathUtils.lerp(currX, vX, visionSystemAmount);
        currY = THREE.MathUtils.lerp(currY, vY, visionSystemAmount);
        currZ = THREE.MathUtils.lerp(currZ, vZ, visionSystemAmount);

        currX = THREE.MathUtils.lerp(currX, mX, missionPathwayAmount);
        currY = THREE.MathUtils.lerp(currY, mY, missionPathwayAmount);
        currZ = THREE.MathUtils.lerp(currZ, mZ, missionPathwayAmount);

        currX = THREE.MathUtils.lerp(currX, srvX, servicesEcosystemAmount);
        currY = THREE.MathUtils.lerp(currY, srvY, servicesEcosystemAmount);
        currZ = THREE.MathUtils.lerp(currZ, srvZ, servicesEcosystemAmount);

        currX = THREE.MathUtils.lerp(currX, prcX, processPathAmount);
        currY = THREE.MathUtils.lerp(currY, prcY, processPathAmount);
        currZ = THREE.MathUtils.lerp(currZ, prcZ, processPathAmount);

        currX = THREE.MathUtils.lerp(currX, projX, projectsSpaceAmount);
        currY = THREE.MathUtils.lerp(currY, projY, projectsSpaceAmount);
        currZ = THREE.MathUtils.lerp(currZ, projZ, projectsSpaceAmount);

        currX = THREE.MathUtils.lerp(currX, testX, testimonialsTrustAmount);
        currY = THREE.MathUtils.lerp(currY, testY, testimonialsTrustAmount);
        currZ = THREE.MathUtils.lerp(currZ, testZ, testimonialsTrustAmount);

        currX = THREE.MathUtils.lerp(currX, abX, aboutSimplicityAmount);
        currY = THREE.MathUtils.lerp(currY, abY, aboutSimplicityAmount);
        currZ = THREE.MathUtils.lerp(currZ, abZ, aboutSimplicityAmount);

        currX = THREE.MathUtils.lerp(currX, valX, valuesAmount);
        currY = THREE.MathUtils.lerp(currY, valY, valuesAmount);
        currZ = THREE.MathUtils.lerp(currZ, valZ, valuesAmount);

        currX = THREE.MathUtils.lerp(currX, futX, futureConvergenceAmount);
        currY = THREE.MathUtils.lerp(currY, futY, futureConvergenceAmount);
        currZ = THREE.MathUtils.lerp(currZ, futZ, futureConvergenceAmount);

        // Micro-oscillations if not in reduced motion
        if (!prefersReducedMotion) {
          if (chaosAmount > 0.05) {
            const turbFreq = time * 1.5 + i * 0.08;
            currX += Math.sin(turbFreq) * 0.18 * chaosAmount;
            currY += Math.cos(turbFreq * 1.2) * 0.18 * chaosAmount;
            currZ += Math.sin(turbFreq * 0.8) * 0.18 * chaosAmount;
          }

          if (valuesAmount > 0.05) {
            const isNodeActive = (i % 5) === activeValueIndex;
            const nodePulse = isNodeActive ? Math.sin(time * 2.5 + i) * 0.08 * valuesAmount : 0;
            currX += currX * nodePulse;
            currY += currY * nodePulse;
          }

          if (futureConvergenceAmount > 0.05) {
            const resonance = Math.sin(time * 1.6 + currZ * 2.0) * 0.025 * futureConvergenceAmount;
            currX += currX * resonance;
            currY += currY * resonance;
            currZ += currZ * resonance;
          }
        }

        const velReaction = Math.sin(time * 3 + hX * 2) * scrollVelocity * 0.08 * speedDampening;
        workingPos[i3] = currX + velReaction;
        workingPos[i3 + 1] = currY;
        workingPos[i3 + 2] = currZ + velReaction;
      }

      posAttr.needsUpdate = true;
    }

    // 4. Solution Network Line Segment
    if (solutionNetworkRef.current) {
      solutionNetworkRef.current.rotation.y = time * 0.08 * speedDampening;
      const mat = solutionNetworkRef.current.material as THREE.LineBasicMaterial;
      if (mat) {
        const solFade = networkOpacity * Math.max(0, 1 - visionSystemAmount * 2);
        mat.opacity = THREE.MathUtils.lerp(mat.opacity, solFade * 0.45, 0.1);
        mat.transparent = true;
      }
    }

    // 5. Solution Central Core
    if (solutionCoreRef.current) {
      solutionCoreRef.current.rotation.y = time * 0.15 * speedDampening;
      const solCoreFade = solutionCoreOpacity * Math.max(0, 1 - visionSystemAmount * 2);
      const scale = alignmentAmount * (1 - visionSystemAmount * 0.8) * 1.1;
      solutionCoreRef.current.scale.set(scale, scale, scale);
      const mat = solutionCoreRef.current.material as THREE.MeshStandardMaterial;
      if (mat) {
        mat.opacity = THREE.MathUtils.lerp(mat.opacity, solCoreFade * 0.75, 0.1);
        mat.transparent = true;
      }
    }

    // 6. Vision Constellation Matrix
    if (visionConstellationRef.current) {
      visionConstellationRef.current.rotation.y = time * 0.04 * speedDampening;
      const mat = visionConstellationRef.current.material as THREE.LineBasicMaterial;
      if (mat) {
        const visFade = visionConstellationOpacity * Math.max(0, 1 - missionPathwayAmount * 2);
        mat.opacity = THREE.MathUtils.lerp(mat.opacity, visFade * 0.4, 0.1);
        mat.transparent = true;
      }
    }

    // 7. Mission Pathway Conduit
    if (missionPathwayRef.current) {
      const mat = missionPathwayRef.current.material as THREE.LineBasicMaterial;
      if (mat) {
        const mFade = pathwayGlowOpacity * Math.max(0, 1 - servicesEcosystemAmount * 2);
        mat.opacity = THREE.MathUtils.lerp(mat.opacity, mFade * 0.65, 0.1);
        mat.transparent = true;
      }
    }

    // 8. Mission Waypoint Nodes
    if (pathwayNodesRef.current) {
      pathwayNodesRef.current.children.forEach((child, idx) => {
        const mesh = child as THREE.Mesh;
        mesh.rotation.y = time * 0.4 * speedDampening + idx;
        const scale = missionPathwayAmount * Math.max(0, 1 - servicesEcosystemAmount * 2) * (0.35 + (stateRef.current.activeMissionStage === idx ? 0.25 : 0));
        mesh.scale.set(scale, scale, scale);
        const mat = mesh.material as THREE.MeshStandardMaterial;
        if (mat) {
          mat.opacity = THREE.MathUtils.lerp(mat.opacity, pathwayGlowOpacity * Math.max(0, 1 - servicesEcosystemAmount * 2) * 0.8, 0.1);
          mat.transparent = true;
        }
      });
    }

    // 9. Services Ecosystem 3D Objects
    if (servicesEcosystemGroupRef.current) {
      const srvFade = servicesOpacity * Math.max(0, 1 - processPathAmount * 2);
      if (servicesCoreRef.current) {
        servicesCoreRef.current.rotation.y = time * 0.2 * speedDampening;
        const mat = servicesCoreRef.current.material as THREE.MeshStandardMaterial;
        if (mat) {
          mat.opacity = THREE.MathUtils.lerp(mat.opacity, srvFade * (activeServiceIndex === 0 ? 0.85 : 0.4), 0.1);
          mat.transparent = true;
        }
      }

      if (servicesConduitsRef.current) {
        const mat = servicesConduitsRef.current.material as THREE.LineBasicMaterial;
        if (mat) {
          mat.opacity = THREE.MathUtils.lerp(mat.opacity, srvFade * 0.5, 0.1);
          mat.transparent = true;
        }
      }

      const serviceNodeGroups = [
        servicesWebNodeRef.current,
        servicesAiNodeRef.current,
        servicesSaasNodeRef.current,
        servicesMarketingNodeRef.current,
      ];

      serviceNodeGroups.forEach((nodeGroup, idx) => {
        if (!nodeGroup) return;
        const isActive = activeServiceIndex === idx + 1;
        nodeGroup.rotation.y = time * (0.3 + idx * 0.1) * speedDampening;
        const targetScale = srvFade * (isActive ? 1.4 : 0.85);
        nodeGroup.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.08);

        nodeGroup.children.forEach((child) => {
          const mesh = child as THREE.Mesh;
          if (mesh.material) {
            const mat = mesh.material as THREE.MeshStandardMaterial;
            mat.opacity = THREE.MathUtils.lerp(mat.opacity, srvFade * (isActive ? 0.9 : 0.4), 0.1);
            mat.transparent = true;
          }
        });
      });
    }

    // 10. Process Conduit Lines & Nodes
    if (processGroupRef.current) {
      const prcFade = processOpacity * Math.max(0, 1 - projectsSpaceAmount * 2);
      if (processConduitLinesRef.current) {
        const mat = processConduitLinesRef.current.material as THREE.LineBasicMaterial;
        if (mat) {
          mat.opacity = THREE.MathUtils.lerp(mat.opacity, prcFade * 0.65, 0.1);
          mat.transparent = true;
        }
      }

      if (processNodesGroupRef.current) {
        processNodesGroupRef.current.children.forEach((child, idx) => {
          const mesh = child as THREE.Mesh;
          const isCurrentActive = activeProcessStage === idx;
          const isCompleteOverview = activeProcessStage === 6;

          mesh.rotation.y += delta * (0.3 + idx * 0.1) * speedDampening;
          const targetScale = prcFade * (isCurrentActive ? 1.5 : isCompleteOverview ? 1.2 : 0.85);
          mesh.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.08);

          const mat = mesh.material as THREE.MeshStandardMaterial;
          if (mat) {
            mat.opacity = THREE.MathUtils.lerp(mat.opacity, prcFade * (isCurrentActive || isCompleteOverview ? 0.95 : 0.45), 0.1);
            mat.transparent = true;
          }
        });
      }
    }

    // 11. Projects 3D Floating Frames
    if (projectsGroupRef.current) {
      const projFade = projectsOpacity * Math.max(0, 1 - testimonialsTrustAmount * 2);
      if (projectsLaserBeamsRef.current) {
        const mat = projectsLaserBeamsRef.current.material as THREE.LineBasicMaterial;
        if (mat) {
          mat.opacity = THREE.MathUtils.lerp(mat.opacity, projFade * 0.4, 0.1);
          mat.transparent = true;
        }
      }

      if (projectsFramesGroupRef.current) {
        projectsFramesGroupRef.current.children.forEach((child, idx) => {
          const group = child as THREE.Group;
          const isFocus = activeProjectIndex === idx;

          group.rotation.y = Math.sin(time * 0.4 + idx) * 0.06 * speedDampening;
          const targetScale = projFade * (isFocus ? 1.15 : 0.9);
          group.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.08);

          group.children.forEach((m) => {
            const mesh = m as THREE.Mesh;
            if (mesh.material) {
              const mat = mesh.material as THREE.MeshStandardMaterial;
              mat.opacity = THREE.MathUtils.lerp(mat.opacity, projFade * (isFocus ? 0.85 : 0.35), 0.1);
              mat.transparent = true;
            }
          });
        });
      }
    }

    // 12. Testimonials Trust Sanctuary Halo
    if (testimonialsHaloRingRef.current) {
      const testFade = testimonialsHaloOpacity * Math.max(0, 1 - aboutSimplicityAmount * 2);
      testimonialsHaloRingRef.current.rotation.z = time * 0.04 * speedDampening;
      const mat = testimonialsHaloRingRef.current.material as THREE.MeshBasicMaterial;
      if (mat) {
        mat.opacity = THREE.MathUtils.lerp(mat.opacity, testFade * 0.35, 0.1);
        mat.transparent = true;
      }
    }

    // 13. About 3D Geometry
    if (aboutGroupRef.current) {
      const abFade = aboutOpacity * Math.max(0, 1 - valuesAmount * 2);
      if (aboutCoreRef.current) {
        aboutCoreRef.current.rotation.y = time * 0.15;
        aboutCoreRef.current.rotation.z = Math.sin(time * 0.3) * 0.08;
        const scale = abFade * (1 + Math.sin(time * 0.8) * 0.03);
        aboutCoreRef.current.scale.set(scale, scale, scale);
        const mat = aboutCoreRef.current.material as THREE.MeshStandardMaterial;
        if (mat) {
          mat.opacity = THREE.MathUtils.lerp(mat.opacity, abFade * 0.75, 0.1);
          mat.transparent = true;
        }
      }
    }

    // 14. Values Pentagonal Lines
    if (valuesGroupRef.current) {
      const valFade = valuesOpacity * Math.max(0, 1 - futureConvergenceAmount * 2);
      if (valuesPentaRingRef.current) {
        valuesPentaRingRef.current.rotation.z = time * 0.05 * speedDampening;
        const mat = valuesPentaRingRef.current.material as THREE.LineBasicMaterial;
        if (mat) {
          mat.opacity = THREE.MathUtils.lerp(mat.opacity, valFade * 0.5, 0.1);
          mat.transparent = true;
        }
      }
    }

    // 15. Future Grand Unified Singularity
    if (futureGroupRef.current) {
      if (futureUnifiedCoreRef.current) {
        futureUnifiedCoreRef.current.rotation.y = time * 0.25;
        futureUnifiedCoreRef.current.rotation.x = Math.sin(time * 0.4) * 0.15;
        const coreScale = futureCoreOpacity * (1.1 + Math.sin(time * 1.5) * 0.06);
        futureUnifiedCoreRef.current.scale.set(coreScale, coreScale, coreScale);
        const mat = futureUnifiedCoreRef.current.material as THREE.MeshStandardMaterial;
        if (mat) {
          mat.opacity = THREE.MathUtils.lerp(mat.opacity, futureCoreOpacity * 0.9, 0.1);
          mat.transparent = true;
        }
      }

      if (futureHarmonicRingsRef.current) {
        futureHarmonicRingsRef.current.rotation.z = time * 0.1;
        futureHarmonicRingsRef.current.rotation.y = -time * 0.12;
        futureHarmonicRingsRef.current.children.forEach((child, i) => {
          const mesh = child as THREE.Mesh;
          if (mesh.material) {
            const mat = mesh.material as THREE.MeshBasicMaterial;
            mat.opacity = THREE.MathUtils.lerp(mat.opacity, futureCoreOpacity * (i === 0 ? 0.6 : 0.35), 0.1);
            mat.transparent = true;
          }
        });
      }

      if (futureLatticeLinesRef.current) {
        const mat = futureLatticeLinesRef.current.material as THREE.LineBasicMaterial;
        if (mat) {
          mat.opacity = THREE.MathUtils.lerp(mat.opacity, futureCoreOpacity * 0.45, 0.1);
          mat.transparent = true;
        }
      }
    }
  });

  return (
    <group>
      {/* 1. HERO CORE & RINGS */}
      <mesh ref={heroCoreRef}>
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

      <group ref={heroRingsRef}>
        <mesh rotation={[Math.PI / 3, 0, 0]}>
          <torusGeometry args={[1.75, 0.006, 16, 100]} />
          <meshBasicMaterial color="#149a7c" transparent opacity={0.35} />
        </mesh>
        <mesh rotation={[-Math.PI / 4, Math.PI / 6, 0]}>
          <torusGeometry args={[2.1, 0.005, 16, 100]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.2} />
        </mesh>
      </group>

      {/* 2. CHAOTIC PROBLEM FRAGMENTS */}
      <group ref={chaoticMeshesRef}>
        {Array.from({ length: CHAOTIC_FRAGMENTS_COUNT }).map((_, i) => {
          const angle = (i / CHAOTIC_FRAGMENTS_COUNT) * Math.PI * 2;
          const r = 1.6 + (i % 4) * 0.6;
          const x = Math.cos(angle) * r + (i % 2 === 0 ? 0.6 : -0.6);
          const y = Math.sin(angle * 1.5) * 1.5;
          const z = (Math.random() - 0.5) * 2;
          return (
            <mesh key={i} position={[x, y, z]}>
              <tetrahedronGeometry args={[0.35, 0]} />
              <meshStandardMaterial
                color={i % 3 === 0 ? "#ffffff" : i % 2 === 0 ? "#149a7c" : "#0c745d"}
                wireframe={true}
                transparent
                opacity={0}
                emissive="#06382d"
                emissiveIntensity={0.4}
              />
            </mesh>
          );
        })}
      </group>

      {/* 3. SOLUTION ALIGNED NETWORK LINES */}
      <lineSegments ref={solutionNetworkRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[networkLinesPos, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#149a7c"
          transparent
          opacity={0}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>

      {/* 4. SOLUTION REVEAL CORE */}
      <mesh ref={solutionCoreRef} position={[0, 0, 0]}>
        <octahedronGeometry args={[0.75, 1]} />
        <meshStandardMaterial
          color="#149a7c"
          emissive="#0c745d"
          emissiveIntensity={0.7}
          wireframe={true}
          transparent
          opacity={0}
          roughness={0.1}
          metalness={0.95}
        />
      </mesh>

      {/* 5. VISION CONSTELLATION MATRIX */}
      <lineSegments ref={visionConstellationRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[visionLinesPos, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#0c745d"
          transparent
          opacity={0}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>

      {/* 6. MISSION CONTINUOUS PATHWAY */}
      <lineSegments ref={missionPathwayRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[pathwayLinesPos, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#149a7c"
          transparent
          opacity={0}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>

      {/* 7. MISSION 5 WAYPOINT NODES */}
      <group ref={pathwayNodesRef}>
        {[
          { pos: [0, 2.2, -4.5] as [number, number, number], col: "#0c745d" },
          { pos: [0.35, 1.2, -2.25] as [number, number, number], col: "#149a7c" },
          { pos: [0, 0.2, 0] as [number, number, number], col: "#ffffff" },
          { pos: [-0.35, -0.8, 2.25] as [number, number, number], col: "#149a7c" },
          { pos: [0, -1.8, 4.5] as [number, number, number], col: "#0c745d" },
        ].map((node, i) => (
          <mesh key={i} position={node.pos}>
            <octahedronGeometry args={[0.28, 1]} />
            <meshStandardMaterial
              color={node.col}
              wireframe={true}
              transparent
              opacity={0}
              emissive={node.col}
              emissiveIntensity={0.6}
            />
          </mesh>
        ))}
      </group>

      {/* 8. SERVICES QUAD ECOSYSTEM */}
      <group ref={servicesEcosystemGroupRef}>
        <mesh ref={servicesCoreRef} position={[0, 0, 0]}>
          <icosahedronGeometry args={[0.85, 1]} />
          <meshStandardMaterial
            color="#0c745d"
            emissive="#0c745d"
            emissiveIntensity={0.8}
            wireframe={true}
            transparent
            opacity={0}
          />
        </mesh>

        <group ref={servicesCoreRingsRef}>
          <mesh rotation={[Math.PI / 4, 0, 0]}>
            <torusGeometry args={[1.35, 0.005, 16, 100]} />
            <meshBasicMaterial color="#149a7c" transparent opacity={0} />
          </mesh>
          <mesh rotation={[-Math.PI / 3, Math.PI / 4, 0]}>
            <torusGeometry args={[1.6, 0.005, 16, 100]} />
            <meshBasicMaterial color="#ffffff" transparent opacity={0} />
          </mesh>
        </group>

        <lineSegments ref={servicesConduitsRef}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              args={[servicesConduitLines, 3]}
            />
          </bufferGeometry>
          <lineBasicMaterial
            color="#149a7c"
            transparent
            opacity={0}
            blending={THREE.AdditiveBlending}
          />
        </lineSegments>

        <group ref={servicesWebNodeRef} position={[-2.4, 1.2, 0.4]}>
          <mesh>
            <octahedronGeometry args={[0.42, 1]} />
            <meshStandardMaterial color="#149a7c" emissive="#0c745d" emissiveIntensity={0.7} wireframe={true} transparent opacity={0} />
          </mesh>
        </group>
        <group ref={servicesAiNodeRef} position={[2.4, 1.2, -0.4]}>
          <mesh>
            <dodecahedronGeometry args={[0.42, 0]} />
            <meshStandardMaterial color="#ffffff" emissive="#149a7c" emissiveIntensity={0.8} wireframe={true} transparent opacity={0} />
          </mesh>
        </group>
        <group ref={servicesSaasNodeRef} position={[2.4, -1.2, 0.4]}>
          <mesh>
            <octahedronGeometry args={[0.45, 0]} />
            <meshStandardMaterial color="#0c745d" emissive="#06382d" emissiveIntensity={0.9} wireframe={true} transparent opacity={0} />
          </mesh>
        </group>
        <group ref={servicesMarketingNodeRef} position={[-2.4, -1.2, -0.4]}>
          <mesh>
            <tetrahedronGeometry args={[0.45, 0]} />
            <meshStandardMaterial color="#149a7c" emissive="#149a7c" emissiveIntensity={0.6} wireframe={true} transparent opacity={0} />
          </mesh>
        </group>
      </group>

      {/* 9. PROCESS PHYSICAL CONDUIT & NODES */}
      <group ref={processGroupRef}>
        <lineSegments ref={processConduitLinesRef}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              args={[processCircuitLines, 3]}
            />
          </bufferGeometry>
          <lineBasicMaterial color="#149a7c" transparent opacity={0} blending={THREE.AdditiveBlending} />
        </lineSegments>
        <group ref={processNodesGroupRef}>
          {PROCESS_STAGES_COORDS.map((pos, idx) => (
            <mesh key={idx} position={pos}>
              <octahedronGeometry args={[0.36, 1]} />
              <meshStandardMaterial color={idx % 2 === 0 ? "#149a7c" : "#0c745d"} emissive={idx % 2 === 0 ? "#0c745d" : "#06382d"} emissiveIntensity={0.8} wireframe={true} transparent opacity={0} />
            </mesh>
          ))}
        </group>
      </group>

      {/* 10. PROJECTS CASE STUDY ARCHIVE */}
      <group ref={projectsGroupRef}>
        <lineSegments ref={projectsLaserBeamsRef}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              args={[projectLaserLines, 3]}
            />
          </bufferGeometry>
          <lineBasicMaterial color="#149a7c" transparent opacity={0} blending={THREE.AdditiveBlending} />
        </lineSegments>
        <group ref={projectsFramesGroupRef}>
          {ARCHIVED_PROJECTS.map((proj) => (
            <group key={proj.id} position={proj.coordinates}>
              <mesh>
                <boxGeometry args={[2.2, 1.4, 0.04]} />
                <meshStandardMaterial color="#0c745d" emissive="#0c745d" emissiveIntensity={0.5} wireframe={true} transparent opacity={0} />
              </mesh>
              <mesh position={[0, 0, 0.01]}>
                <planeGeometry args={[2.0, 1.2, 8, 6]} />
                <meshStandardMaterial color="#149a7c" wireframe={true} transparent opacity={0} />
              </mesh>
            </group>
          ))}
        </group>
      </group>

      {/* 11. TESTIMONIALS TRUST SANCTUARY */}
      <group ref={testimonialsGroupRef}>
        <mesh ref={testimonialsHaloRingRef} rotation={[Math.PI / 2.5, 0, 0]}>
          <torusGeometry args={[3.2, 0.006, 16, 120]} />
          <meshBasicMaterial color="#149a7c" transparent opacity={0} />
        </mesh>
      </group>

      {/* 12. ABOUT 3D GEOMETRY */}
      <group ref={aboutGroupRef}>
        <mesh ref={aboutCoreRef} position={[0, 0, 0]}>
          <dodecahedronGeometry args={[0.7, 0]} />
          <meshStandardMaterial
            color="#149a7c"
            emissive="#0c745d"
            emissiveIntensity={0.65}
            wireframe={true}
            transparent
            opacity={0}
            roughness={0.1}
            metalness={0.9}
          />
        </mesh>
      </group>

      {/* 13. VALUES 5-PILLAR PENTAGONAL LINES */}
      <group ref={valuesGroupRef}>
        <lineSegments ref={valuesPentaRingRef}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              args={[valuesPentagonLines, 3]}
            />
          </bufferGeometry>
          <lineBasicMaterial color="#149a7c" transparent opacity={0} blending={THREE.AdditiveBlending} />
        </lineSegments>
      </group>

      {/* 14. FUTURE GRAND UNIFIED SYSTEM */}
      <group ref={futureGroupRef}>
        <mesh ref={futureUnifiedCoreRef} position={[0, 0, 0]}>
          <icosahedronGeometry args={[1.25, 2]} />
          <meshStandardMaterial
            color="#149a7c"
            emissive="#0c745d"
            emissiveIntensity={0.9}
            wireframe={true}
            transparent
            opacity={0}
            roughness={0.1}
            metalness={0.95}
          />
        </mesh>

        <group ref={futureHarmonicRingsRef}>
          <mesh rotation={[Math.PI / 3, 0, 0]}>
            <torusGeometry args={[2.2, 0.006, 16, 120]} />
            <meshBasicMaterial color="#149a7c" transparent opacity={0} />
          </mesh>
          <mesh rotation={[-Math.PI / 4, Math.PI / 4, 0]}>
            <torusGeometry args={[2.6, 0.005, 16, 120]} />
            <meshBasicMaterial color="#ffffff" transparent opacity={0} />
          </mesh>
        </group>

        <lineSegments ref={futureLatticeLinesRef}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              args={[future8StreamsLines, 3]}
            />
          </bufferGeometry>
          <lineBasicMaterial color="#149a7c" transparent opacity={0} blending={THREE.AdditiveBlending} />
        </lineSegments>
      </group>

      {/* 15. CONTINUOUS MORPHING PARTICLE FIELD */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[workingPos, 3]}
          />
          <bufferAttribute
            attach="attributes-color"
            args={[colors, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={isMobile ? 0.045 : 0.034}
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
