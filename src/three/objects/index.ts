import * as THREE from "three";
import { scene } from "../core/scene";
import { renderer } from "../core/renderer";

let logoGroup: THREE.Group | null = null;

const init = () => {
  // Create a simple DT logo using basic geometries
  logoGroup = new THREE.Group();

  // "D" letter - a cylinder with half cut (using TorusGeometry + BoxGeometry as a simplified D)
  const dShape = new THREE.Group();

  // D vertical bar
  const dBar = new THREE.Mesh(
    new THREE.BoxGeometry(0.3, 2, 0.3),
    new THREE.MeshPhysicalMaterial({ color: 0x0ea5e9, metalness: 0.6, roughness: 0.2 }),
  );
  dBar.position.x = -0.5;
  dShape.add(dBar);

  // D curve (half torus)
  const dCurve = new THREE.Mesh(
    new THREE.TorusGeometry(0.5, 0.15, 16, 32, Math.PI),
    new THREE.MeshPhysicalMaterial({ color: 0x0ea5e9, metalness: 0.6, roughness: 0.2 }),
  );
  dCurve.rotation.z = Math.PI / 2;
  dCurve.position.x = 0.25;
  dShape.add(dCurve);

  // "T" letter
  const tShape = new THREE.Group();

  // T top bar
  const tTop = new THREE.Mesh(
    new THREE.BoxGeometry(1.2, 0.3, 0.3),
    new THREE.MeshPhysicalMaterial({ color: 0x3b82f6, metalness: 0.6, roughness: 0.2 }),
  );
  tTop.position.y = 0.85;
  tShape.add(tTop);

  // T vertical bar
  const tBar = new THREE.Mesh(
    new THREE.BoxGeometry(0.3, 2, 0.3),
    new THREE.MeshPhysicalMaterial({ color: 0x3b82f6, metalness: 0.6, roughness: 0.2 }),
  );
  tBar.position.x = 0.15;
  tShape.add(tBar);

  // Position letters side by side
  dShape.position.x = -1;
  tShape.position.x = 1;

  logoGroup.add(dShape);
  logoGroup.add(tShape);

  // Add a subtle glow effect with a point light
  const glowLight = new THREE.PointLight(0x0ea5e9, 1, 5);
  glowLight.position.set(0, 0, 2);
  logoGroup.add(glowLight);

  scene.add(logoGroup);

  renderer.compile();
};

const destroy = () => {
  if (logoGroup) {
    scene.remove(logoGroup);
    logoGroup = null;
  }
};

export const objects = { init, destroy };
