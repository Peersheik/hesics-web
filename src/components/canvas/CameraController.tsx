"use client";

import { useRef, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { STORY_SECTIONS } from "@/lib/constants";

export default function CameraController() {
  const { camera } = useThree();
  const currentProgress = useRef(0);
  const targetCamPos = useRef(new THREE.Vector3(0, 0, 5));
  const targetLookAt = useRef(new THREE.Vector3(0, 0, 0));

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const totalSections = STORY_SECTIONS.length;

    // Create a master scroll trigger tied to the main document scroll
    const trigger = ScrollTrigger.create({
      trigger: "#story-container",
      start: "top top",
      end: "bottom bottom",
      scrub: 1.2,
      onUpdate: (self) => {
        currentProgress.current = self.progress;

        // Calculate current section index and interpolation
        const mappedIndex = self.progress * (totalSections - 1);
        const currentIndex = Math.floor(mappedIndex);
        const nextIndex = Math.min(currentIndex + 1, totalSections - 1);
        const segmentProgress = mappedIndex - currentIndex;

        const currentSec = STORY_SECTIONS[currentIndex];
        const nextSec = STORY_SECTIONS[nextIndex];

        if (currentSec && nextSec) {
          // Interpolate Camera Position
          const camFrom = new THREE.Vector3(...currentSec.cameraPosition);
          const camTo = new THREE.Vector3(...nextSec.cameraPosition);
          targetCamPos.current.lerpVectors(camFrom, camTo, segmentProgress);

          // Interpolate Target LookAt
          const lookFrom = new THREE.Vector3(...currentSec.targetPosition);
          const lookTo = new THREE.Vector3(...nextSec.targetPosition);
          targetLookAt.current.lerpVectors(lookFrom, lookTo, segmentProgress);
        }
      },
    });

    return () => {
      trigger.kill();
    };
  }, []);

  useFrame(() => {
    // Smooth dampening towards target camera position
    camera.position.lerp(targetCamPos.current, 0.05);
    camera.lookAt(targetLookAt.current);
  });

  return null;
}
