import type { MusicTrack } from "../types";

// Sounds feature disabled — music tracks are empty stubs
export const musicTracks = {} as const;

export const BASE_VOLUMES = {} as const satisfies Record<MusicTrack, number>;
