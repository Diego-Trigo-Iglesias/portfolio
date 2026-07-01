import * as THREE from "three";
import gsap from "gsap";
import { scene } from "../core/scene";
import { renderer } from "../core/renderer";

let logoGroup: THREE.Group | null = null;
let ticker: (() => void) | null = null;

const init = () => {
  logoGroup = new THREE.Group();

  // --- Shared material config ---
  const dMaterial = new THREE.MeshPhysicalMaterial({
    color: 0x0ea5e9,
    metalness: 0.8,
    roughness: 0.15,
    emissive: 0x0ea5e9,
    emissiveIntensity: 0.15,
    clearcoat: 0.3,
    clearcoatRoughness: 0.25,
  });

  const tMaterial = new THREE.MeshPhysicalMaterial({
    color: 0x3b82f6,
    metalness: 0.8,
    roughness: 0.15,
    emissive: 0x3b82f6,
    emissiveIntensity: 0.15,
    clearcoat: 0.3,
    clearcoatRoughness: 0.25,
  });

  // --- Letter D ---
  const dShape = new THREE.Group();

  const dBar = new THREE.Mesh(
    new THREE.BoxGeometry(0.3, 2, 0.3),
    dMaterial,
  );
  dBar.position.x = -0.5;
  dShape.add(dBar);

  const dCurve = new THREE.Mesh(
    new THREE.TorusGeometry(0.5, 0.15, 16, 32, Math.PI),
    dMaterial,
  );
  dCurve.rotation.z = Math.PI / 2;
  dCurve.position.x = 0.25;
  dShape.add(dCurve);

  // --- Letter T ---
  const tShape = new THREE.Group();

  const tTop = new THREE.Mesh(
    new THREE.BoxGeometry(1.2, 0.3, 0.3),
    tMaterial,
  );
  tTop.position.y = 0.85;
  tShape.add(tTop);

  const tBar = new THREE.Mesh(
    new THREE.BoxGeometry(0.3, 2, 0.3),
    tMaterial,
  );
  tBar.position.x = 0.15;
  tShape.add(tBar);

  // Position letters side by side
  dShape.position.x = -1;
  tShape.position.x = 1;

  logoGroup.add(dShape);
  logoGroup.add(tShape);

  // --- Lighting ---
  const glowLight = new THREE.PointLight(0x0ea5e9, 2, 6);
  glowLight.position.set(0, 0, 2);
  logoGroup.add(glowLight);

  // Subtle ambient fill
  const ambientLight = new THREE.AmbientLight(0x404060, 0.5);
  logoGroup.add(ambientLight);

  // Key light for depth
  const keyLight = new THREE.DirectionalLight(0xffffff, 0.8);
  keyLight.position.set(5, 5, 5);
  logoGroup.add(keyLight);

  // Back light for rim effect
  const backLight = new THREE.DirectionalLight(0x0ea5e9, 0.4);
  backLight.position.set(-3, 0, -5);
  logoGroup.add(backLight);

  scene.instance.add(logoGroup);

  // --- Animation loop (smooth rotation + floating) ---
  let time = 0;
  ticker = () => {
    time += 0.01;
    if (!logoGroup) return;

    // Smooth Y-axis rotation
    logoGroup.rotation.y += 0.005;

    // Gentle floating (bobbing)
    logoGroup.position.y = Math.sin(time) * 0.15;
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
