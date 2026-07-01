import * as THREE from "three";
import gsap from "gsap";
import { scene } from "../core/scene";
import { renderer } from "../core/renderer";
import { resources } from "../../utils/resources";
import { colors } from "../common/colors";

import type { GLTF } from "three/examples/jsm/loaders/GLTFLoader.js";

let container: THREE.Group | null = null;
let ticker: (() => void) | null = null;

/* ------------------------------------------------------------------ */
/*  Lighting                                                                   */
/* ------------------------------------------------------------------ */
function setupLights() {
  const ambient = new THREE.AmbientLight(0xffffff, 0.7);
  scene.instance.add(ambient);

  const key = new THREE.DirectionalLight(0xffeedd, 1.8);
  key.position.set(5, 8, 5);
  scene.instance.add(key);

  const fill = new THREE.DirectionalLight(colors.peach!, 0.8);
  fill.position.set(-3, 2, -3);
  scene.instance.add(fill);
}

/* ================================================================== */
/*  Public API                                                                   */
/* ================================================================== */
const init = () => {
  setupLights();

  container = new THREE.Group();
  scene.instance.add(container);

  // Room (environment)
  const roomGltf = resources.items["room"] as GLTF;
  if (roomGltf?.scene) {
    const roomClone = roomGltf.scene.clone();
    container.add(roomClone);
  }

  // Avatar (character / caesar bust)
  const avatarGltf = resources.items["avatar"] as GLTF;
  if (avatarGltf?.scene) {
    avatarGltf.scene.position.set(0, 1.8, 0);
    container.add(avatarGltf.scene);
  }

  // Gentle animation
  let time = 0;
  ticker = () => {
    time += 0.006;
    if (!container) return;
    container.rotation.y += 0.001;
    container.position.y = Math.sin(time * 0.5) * 0.1;
  };
  gsap.ticker.add(ticker);

  renderer.compile();
};

const destroy = () => {
  if (ticker) {
    gsap.ticker.remove(ticker);
    ticker = null;
  }
  if (container) {
    scene.instance.remove(container);
    container = null;
  }
};

export const objects = { init, destroy };
