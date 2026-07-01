export type Source = { name: string; type: "gltfModel" | "texture"; path: string };

export const sources: readonly Source[] = [
  { name: "room", type: "gltfModel", path: "/portfolio/models/room.glb" },
  { name: "avatar", type: "gltfModel", path: "/portfolio/models/avatar.glb" },
];
