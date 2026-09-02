/**
 * HESICS Empire — District Map Data
 *
 * Winding road layout: RECRUITMENT (outer edge, top-right) → ... → EMPIRE (core, center).
 * SVG coordinate space: 0 0 1000 640
 *
 * mapX / mapY: center of each district node.
 * routeNext: id of the next district for route-line drawing.
 * mapSize: node radius in SVG units.
 * mapLabel: optional short override label for map display (falls back to chapter.shortName).
 */

import { CHAPTERS, type Chapter } from "@/data/chapters";

export interface District extends Chapter {
  mapX: number;
  mapY: number;
  routeNext?: number;
  mapSize: number;
  mapLabel?: string;
}

/** Winding road from entry (top-right) to empire core (center-left).
 *  Path: 1 → 2 → 3 → 4 → 5 → 6 → 7 → 8
 *  Visual rhythm: alternates left/right like a switchback road.
 */
const DISTRICT_MAP: Record<number, Pick<District, "mapX" | "mapY" | "mapSize" | "routeNext" | "mapLabel">> = {
  1: { mapX: 840, mapY: 70,  mapSize: 38, routeNext: 2, mapLabel: "ENTRANCE"    },
  2: { mapX: 660, mapY: 195, mapSize: 32, routeNext: 3, mapLabel: "ORIGIN"      },
  3: { mapX: 790, mapY: 330, mapSize: 32, routeNext: 4, mapLabel: "BLUEPRINT"   },
  4: { mapX: 570, mapY: 440, mapSize: 34, routeNext: 5, mapLabel: "ARSENAL"     },
  5: { mapX: 370, mapY: 350, mapSize: 32, routeNext: 6, mapLabel: "OPERATIONS"  },
  6: { mapX: 220, mapY: 480, mapSize: 32, routeNext: 7, mapLabel: "VAULT"       },
  7: { mapX: 160, mapY: 310, mapSize: 30, routeNext: 8, mapLabel: "CREW"        },
  8: { mapX: 480, mapY: 250, mapSize: 42, routeNext: undefined, mapLabel: "EMPIRE" },
};

export const DISTRICTS: District[] = CHAPTERS.map((chapter) => ({
  ...chapter,
  ...DISTRICT_MAP[chapter.id],
}));

export function getDistrictById(id: number): District | undefined {
  return DISTRICTS.find((d) => d.id === id);
}

/**
 * Returns ordered pairs of [from, to] districts for route line drawing.
 * Each pair represents one dashed segment on the map.
 */
export function getRouteSegments(): Array<[District, District]> {
  const segments: Array<[District, District]> = [];
  for (const district of DISTRICTS) {
    if (district.routeNext !== undefined) {
      const next = getDistrictById(district.routeNext);
      if (next) segments.push([district, next]);
    }
  }
  return segments;
}
