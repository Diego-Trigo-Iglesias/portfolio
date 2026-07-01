import { MeshBasicMaterial } from "three";
import type { Material } from "three";

export const getLogoMaterial = (color = "#0ea5e9"): Material => {
  return new MeshBasicMaterial({ color });
};

export const getPlainMaterial = (color = "#f8fafc"): Material => {
  return new MeshBasicMaterial({ color });
};
