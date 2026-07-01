export type Source = { name: string; type: "gltfModel" | "texture"; path: string };

export const sources: readonly Source[] = [
  // Models
  { name: "room", type: "gltfModel", path: "/portfolio/models/room.glb" },
  { name: "avatar", type: "gltfModel", path: "/portfolio/models/avatar.glb" },

  // Baked textures (room + screens)
  { name: "room-texture", type: "texture", path: "/portfolio/textures/room.webp" },
  { name: "desktops-texture", type: "texture", path: "/portfolio/textures/desktops.webp" },

  // Avatar matcaps
  { name: "matcap-black", type: "texture", path: "/portfolio/textures/matcap-black.webp" },
  { name: "matcap-gray", type: "texture", path: "/portfolio/textures/matcap-gray.webp" },
  { name: "matcap-skin", type: "texture", path: "/portfolio/textures/matcap-skin.webp" },
  { name: "matcap-white", type: "texture", path: "/portfolio/textures/matcap-white.webp" },
  { name: "head-texture", type: "texture", path: "/portfolio/textures/head.webp" },
  { name: "face-texture", type: "texture", path: "/portfolio/textures/face-spritesheet.png" },
];
