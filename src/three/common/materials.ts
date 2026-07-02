import { MeshBasicMaterial, MeshMatcapMaterial } from "three";
import { resources } from "../../utils/resources";

import type { Material, Texture } from "three";

/* ------------------------------------------------------------------ */
/*  Room — single baked lightmap/diffuse texture (no lighting needed)  */
/* ------------------------------------------------------------------ */
let roomMaterial: Material | null = null;
export const getRoomMaterial = (): Material => {
  if (roomMaterial) return roomMaterial;
  const texture = resources.items["room-texture"] as Texture;
  texture.flipY = false; // baked glTF UVs
  roomMaterial = new MeshBasicMaterial({ map: texture });
  return roomMaterial;
};

/* Baked screens (desktops) */
let desktopMaterial: Material | null = null;
export const getDesktopMaterial = (): Material => {
  if (desktopMaterial) return desktopMaterial;
  const texture = resources.items["desktops-texture"] as Texture;
  texture.flipY = false;
  desktopMaterial = new MeshBasicMaterial({ map: texture });
  return desktopMaterial;
};

/* ------------------------------------------------------------------ */
/*  Avatar — matcap materials selected by mesh name                    */
/* ------------------------------------------------------------------ */
const matcapCache = new Map<string, Material>();

const matcapByName: Record<string, string> = {
  black: "matcap-black",
  gray: "matcap-gray",
  skin: "matcap-skin",
  white: "matcap-white",
  // The head mesh fuses scalp + ears + hair; head.webp is a matcap that renders
  // dark hair on top and skin on the sides/ears.
  head: "head-texture",
  face: "matcap-skin",
};

export const getAvatarMaterial = (meshName: string): Material | null => {
  const key = matcapByName[meshName];
  if (!key) return null;

  if (matcapCache.has(meshName)) return matcapCache.get(meshName)!;

  const texture = resources.items[key] as Texture;
  const material = new MeshMatcapMaterial({ matcap: texture });
  matcapCache.set(meshName, material);
  return material;
};

export const getLogoMaterial = (color = "#0ea5e9"): Material => {
  return new MeshBasicMaterial({ color });
};

export const getPlainMaterial = (color = "#f8fafc"): Material => {
  return new MeshBasicMaterial({ color });
};
