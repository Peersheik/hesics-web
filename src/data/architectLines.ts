/**
 * THE ARCHITECT — voice lines
 *
 * Tone: calm, controlled, precise. Thinks in systems.
 * References HESICS' actual pillars — web dev, AI, digital products.
 * Never hype. Never generic heist flavour.
 */

/** Single line shown on the hero landing, before any chapter is active */
export const LANDING_LINE =
  "Every empire needs a blueprint. This is ours.";

/**
 * District briefing lines — shown when hovering a district on the Empire Map.
 * Keyed by chapter id (1–8).
 */
export const DISTRICT_LINES: Record<number, string> = {
  1: "The first move is always deliberate. Every client starts here.",
  2: "Most agencies ignore the root cause. We start there.",
  3: "A system without a blueprint is just noise with a deadline.",
  4: "Four capabilities. One integrated arsenal. Nothing wasted.",
  5: "The process is the product. Chaos is not a workflow.",
  6: "Results don't lie. Every entry in the Vault is evidence.",
  7: "The people define the standard. The standard defines the output.",
  8: "This is not the end of the story. It is the beginning of yours.",
};

/**
 * Chapter transition lines — shown as the camera arrives at each chapter.
 * Keyed by chapter id (1–8).
 * Short. One breath. Fades in and out automatically.
 */
export const TRANSITION_LINES: Record<number, string> = {
  1: "You are being evaluated.",
  2: "Every problem has an origin. Find it before building anything.",
  3: "We do not guess. We architect.",
  4: "Capability without strategy is just activity.",
  5: "Six phases. No exceptions.",
  6: "The work speaks first. Then we speak.",
  7: "Culture is infrastructure.",
  8: "The empire is not a destination. It is a standard.",
};
