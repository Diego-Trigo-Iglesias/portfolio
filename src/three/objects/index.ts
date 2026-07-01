import * as THREE from "three";
import gsap from "gsap";
import { scene } from "../core/scene";
import { renderer } from "../core/renderer";
import { colors } from "../common/colors";

let logoGroup: THREE.Group | null = null;
let ticker: (() => void) | null = null;

const init = () => {
  // --- Scene lighting (added to scene, not logo group) ---
  const ambient = new THREE.AmbientLight(0x404060, 0.8);
  scene.instance.add(ambient);

  const keyLight = new THREE.DirectionalLight(0xffffff, 2);
  keyLight.position.set(5, 10, 7);
  scene.instance.add(keyLight);

  const fillLight = new THREE.DirectionalLight(0x4488ff, 0.6);
  fillLight.position.set(-5, 0, 5);
  scene.instance.add(fillLight);

  const rimLight = new THREE.DirectionalLight(0x88ccff, 0.4);
  rimLight.position.set(0, -5, -8);
  scene.instance.add(rimLight);

  // --- Logo group ---
  logoGroup = new THREE.Group();
  logoGroup.position.y = 2.5;

  // Material
  const mat = new THREE.MeshPhysicalMaterial({
    color: colors.accent,
    metalness: 0.6,
    roughness: 0.25,
    clearcoat: 0.2,
    clearcoatRoughness: 0.3,
  });

  // --- Letter "D" ---
  const dGroup = new THREE.Group();

  // Vertical stem
  const stem = new THREE.Mesh(new THREE.BoxGeometry(0.3, 2.2, 0.3), mat);
  stem.position.set(-0.65, 0, 0);
  dGroup.add(stem);

  // Curve - half torus
  const curve = new THREE.Mesh(
    new THREE.TorusGeometry(0.55, 0.14, 16, 32, Math.PI),
    mat,
  );
  curve.rotation.z = Math.PI / 2;
  curve.position.set(0.2, 0, 0);
  dGroup.add(curve);

  // --- Letter "T" ---
  const tGroup = new THREE.Group();

  // Top bar
  const topBar = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.3, 0.3), mat);
  topBar.position.set(0.1, 0.95, 0);
  tGroup.add(topBar);

  // Stem
  const tStem = new THREE.Mesh(new THREE.BoxGeometry(0.3, 2.2, 0.3), mat);
  tStem.position.set(0.1, 0, 0);
  tGroup.add(tStem);

  // --- Background ring ---
  const ringGeo = new THREE.TorusGeometry(1.6, 0.06, 24, 64);
  const ringMat = new THREE.MeshPhysicalMaterial({
    color: 0x1e3a8a,
    metalness: 0.3,
    roughness: 0.5,
    transparent: true,
    opacity: 0.6,
  });
  const ring = new THREE.Mesh(ringGeo, ringMat);
  ring.position.z = -0.2;
  logoGroup.add(ring);

  // Position letters
  dGroup.position.x = -0.7;
  tGroup.position.x = 0.7;

  logoGroup.add(dGroup);
  logoGroup.add(tGroup);

  scene.instance.add(logoGroup);

  // --- Animation ---
  let time = 0;
  ticker = () => {
    time += 0.006;
    if (!logoGroup) return;
    logoGroup.rotation.y += 0.002;
    logoGroup.position.y = 2.5 + Math.sin(time) * 0.12;
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
