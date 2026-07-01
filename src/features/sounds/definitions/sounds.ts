import type { SoundsData, SoundKey } from "../types";

// Sounds feature disabled — all sounds are empty stubs
export const sounds = {} as const satisfies SoundsData;

export const pools = {} as const satisfies Record<string, SoundKey[]>;
