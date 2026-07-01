type Source = { name: string; type: "gltfModel" | "texture"; path: string };

export const sources = [] as const satisfies readonly Source[];
