"use client";

import IntegratedExperience from "./IntegratedExperience";
import Particles from "./Particles";

export default function Experience() {
  return (
    <>
      {/* Cinematic Studio Lighting adhering to the brand palette */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[6, 8, 6]} intensity={1.8} color="#ffffff" />
      <pointLight position={[-4, -2, -3]} intensity={2.5} color="#0c745d" />
      <pointLight position={[3, 3, 2]} intensity={1.8} color="#149a7c" />

      {/* Global subtle ambient background particles */}
      <Particles count={70} />

      {/* Continuous Hero -> Problem -> Solution 3D Morphing Experience */}
      <IntegratedExperience />
    </>
  );
}
