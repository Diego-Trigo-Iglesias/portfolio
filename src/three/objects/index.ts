import * as THREE from "three";
import gsap from "gsap";
import { scene } from "../core/scene";
import { renderer } from "../core/renderer";

let logoGroup: THREE.Group | null = null;
let ticker: (() => void) | null = null;

const init = () => {
  logoGroup = new THREE.Group();

  // --- Clean, minimal material ---
  const mat = new THREE.MeshPhysicalMaterial({
    color: 0x0ea5e9,
    metalness: 0.4,
    roughness: 0.3,
  });

  // --- Letter "D" ---
  const dGroup = new THREE.Group();

  // Vertical stem
  const dStem = new THREE.Mesh(new THREE.BoxGeometry(0.25, 1.8, 0.25), mat);
  dStem.position.x = -0.55;
  dGroup.add(dStem);

  // Curve (half torus)
  const dCurve = new THREE.Mesh(
    new THREE.TorusGeometry(0.45, 0.12, 12, 24, Math.PI),
    mat,
  );
  dCurve.rotation.z = Math.PI / 2;
  dCurve.position.x = 0.15;
  dGroup.add(dCurve);

  // --- Letter "T" ---
  const tGroup = new THREE.Group();

  // Top bar
  const tTop = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.25, 0.25), mat);
  tTop.position.y = 0.75;
  tGroup.add(tTop);

  // Stem
  const tStem = new THREE.Mesh(new THREE.BoxGeometry(0.25, 1.8, 0.25), mat);
  tStem.position.x = 0.1;
  tGroup.add(tStem);

  // --- Position letters ---
  dGroup.position.x = -0.9;
  tGroup.position.x = 0.9;

  logoGroup.add(dGroup);
  logoGroup.add(tGroup);

  // --- Subtle lights ---
  const ambient = new THREE.AmbientLight(0x404060, 0.6);
  logoGroup.add(ambient);

  const key = new THREE.DirectionalLight(0xffffff, 1.2);
  key.position.set(4, 6, 8);
  logoGroup.add(key);

  scene.instance.add(logoGroup);

  // --- Gentle animation ---
  let time = 0;
  ticker = () => {
    time += 0.008;
    if (!logoGroup) return;
    // Slow Y rotation
    logoGroup.rotation.y += 0.003;
    // Subtle hover
    logoGroup.position.y = Math.sin(time) * 0.1;
  };
  gsap.ticker.add(ticker);

  renderer.compile();
};

const destroy = () => {
  if (ticker) {
    gsap.ticker.remove(ticker);
    ticker = null;
  }
  if (logoGroup) {
    scene.instance.remove(logoGroup);
    logoGroup = null;
  }
};

export const objects = { init, destroy };
