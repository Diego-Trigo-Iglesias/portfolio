import * as THREE from "three";
import gsap from "gsap";
import { scene } from "../core/scene";
import { renderer } from "../core/renderer";
import { colors } from "../common/colors";

let sceneGroup: THREE.Group | null = null;
let characterGroup: THREE.Group | null = null;
let floatingShapes: THREE.Group | null = null;
let ambientLight: THREE.AmbientLight | null = null;
let keyLight: THREE.DirectionalLight | null = null;
let ticker: (() => void) | null = null;

/* ------------------------------------------------------------------ */
/*  Helper: smooth rounded box (BoxGeometry + bevel via normal hack)   */
/* ------------------------------------------------------------------ */
function createMaterial(hex: THREE.Color) {
  return new THREE.MeshPhysicalMaterial({
    color: hex,
    metalness: 0.15,
    roughness: 0.35,
    clearcoat: 0.25,
    clearcoatRoughness: 0.4,
  });
}

function createMatte(hex: THREE.Color) {
  return new THREE.MeshStandardMaterial({
    color: hex,
    roughness: 0.9,
    metalness: 0,
  });
}

/* ------------------------------------------------------------------ */
/*  Character                                                                */
/* ------------------------------------------------------------------ */
function buildCharacter(): THREE.Group {
  const group = new THREE.Group();

  const pinkMat = createMaterial(colors.pink);
  const coralMat = createMaterial(colors.coral);
  const creamMat = createMaterial(colors.cream);
  const darkMat = createMatte(new THREE.Color("#2c1f1d"));

  // Head (sphere)
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.5, 32, 32), pinkMat);
  head.position.y = 2.2;
  group.add(head);

  // Eyes
  const eyeGeo = new THREE.SphereGeometry(0.1, 16, 16);
  const leftEye = new THREE.Mesh(eyeGeo, darkMat);
  leftEye.position.set(-0.15, 2.3, 0.4);
  group.add(leftEye);

  const rightEye = new THREE.Mesh(eyeGeo, darkMat);
  rightEye.position.set(0.15, 2.3, 0.4);
  group.add(rightEye);

  // Smile (arc - tiny torus)
  const smile = new THREE.Mesh(
    new THREE.TorusGeometry(0.12, 0.03, 8, 12, Math.PI),
    darkMat,
  );
  smile.position.set(0, 2.1, 0.42);
  smile.rotation.z = Math.PI;
  group.add(smile);

  // Body (capsule-like via cylinder + two half spheres)
  const torsoUpper = new THREE.Mesh(new THREE.SphereGeometry(0.45, 24, 24), coralMat);
  torsoUpper.position.y = 1.5;
  group.add(torsoUpper);

  const torsoLower = new THREE.Mesh(
    new THREE.CylinderGeometry(0.4, 0.45, 0.7, 24),
    coralMat,
  );
  torsoLower.position.y = 1.15;
  group.add(torsoLower);

  // Legs
  const legGeo = new THREE.CylinderGeometry(0.15, 0.15, 0.7, 16);
  const legLeft = new THREE.Mesh(legGeo, coralMat);
  legLeft.position.set(-0.2, 0.55, 0);
  group.add(legLeft);

  const legRight = new THREE.Mesh(legGeo, coralMat);
  legRight.position.set(0.2, 0.55, 0);
  group.add(legRight);

  // Shoes
  const shoeGeo = new THREE.BoxGeometry(0.22, 0.12, 0.3);
  const shoeLeft = new THREE.Mesh(shoeGeo, darkMat);
  shoeLeft.position.set(-0.2, 0.15, 0.05);
  group.add(shoeLeft);

  const shoeRight = new THREE.Mesh(shoeGeo, darkMat);
  shoeRight.position.set(0.2, 0.15, 0.05);
  group.add(shoeRight);

  // Arms
  const armGeo = new THREE.CylinderGeometry(0.1, 0.12, 0.9, 12);
  const armLeft = new THREE.Mesh(armGeo, coralMat);
  armLeft.position.set(-0.55, 1.6, 0);
  armLeft.rotation.z = 0.4;
  group.add(armLeft);

  const armRight = new THREE.Mesh(armGeo, coralMat);
  armRight.position.set(0.55, 1.6, 0);
  armRight.rotation.z = -0.4;
  group.add(armRight);

  // Hands
  const handGeo = new THREE.SphereGeometry(0.1, 16, 16);
  const handLeft = new THREE.Mesh(handGeo, creamMat);
  handLeft.position.set(-0.82, 1.35, 0);
  group.add(handLeft);

  const handRight = new THREE.Mesh(handGeo, creamMat);
  handRight.position.set(0.82, 1.35, 0);
  group.add(handRight);

  return group;
}

/* ------------------------------------------------------------------ */
/*  Floating shapes                                                         */
/* ------------------------------------------------------------------ */
function buildFloatingShapes(): THREE.Group {
  const group = new THREE.Group();

  const pastels: THREE.Color[] = [colors.pink, colors.coral, colors.peach, colors.cream];
  const count = 12;

  for (let i = 0; i < count; i++) {
    const color = pastels[i % pastels.length]!;
    const mat = createMaterial(color);

    let geo: THREE.BufferGeometry;
    const r = Math.random();
    if (r < 0.35) geo = new THREE.SphereGeometry(0.15 + Math.random() * 0.2, 16, 16);
    else if (r < 0.65) geo = new THREE.TorusGeometry(0.1 + Math.random() * 0.15, 0.04, 8, 16);
    else geo = new THREE.BoxGeometry(0.15, 0.15, 0.15);

    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(
      (Math.random() - 0.5) * 5,
      1 + Math.random() * 4,
      (Math.random() - 0.5) * 4,
    );
    mesh.userData = {
      speed: 0.3 + Math.random() * 0.7,
      amplitude: 0.3 + Math.random() * 0.6,
      phase: Math.random() * Math.PI * 2,
      axis: "y" as const,
    };
    group.add(mesh);
  }
  return group;
}

/* ================================================================== */
/*  Public API                                                                   */
/* ================================================================== */
const init = () => {
  // Lighting
  ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
  scene.instance.add(ambientLight);

  keyLight = new THREE.DirectionalLight(0xffeedd, 2.5);
  keyLight.position.set(8, 10, 6);
  scene.instance.add(keyLight);

  const fill = new THREE.DirectionalLight(colors.peach ?? 0xffc9a7, 1);
  fill.position.set(-4, 3, -4);
  scene.instance.add(fill);

  // Scene group
  sceneGroup = new THREE.Group();
  sceneGroup.position.y = -0.3;

  // Pedestal
  const pedestal = new THREE.Mesh(
    new THREE.CylinderGeometry(1.2, 1.4, 0.15, 32),
    createMaterial(colors.cream),
  );
  pedestal.position.y = 0.05;
  sceneGroup.add(pedestal);

  const pedestalRing = new THREE.Mesh(
    new THREE.TorusGeometry(1.35, 0.04, 16, 48),
    createMaterial(colors.coral),
  );
  pedestalRing.rotation.x = Math.PI / 2;
  pedestalRing.position.y = 0.13;
  sceneGroup.add(pedestalRing);

  // Character
  characterGroup = buildCharacter();
  sceneGroup.add(characterGroup);

  // Floating shapes
  floatingShapes = buildFloatingShapes();
  sceneGroup.add(floatingShapes);

  scene.instance.add(sceneGroup);

  // Animation
  let time = 0;
  ticker = () => {
    time += 0.008;
    if (!sceneGroup || !floatingShapes) return;

    // Gentle scene rotation
    sceneGroup.rotation.y += 0.0015;
    // Soft bobbing
    sceneGroup.position.y = -0.3 + Math.sin(time * 0.7) * 0.15;

    // Animate floating shapes
    floatingShapes.children.forEach((child) => {
      const d = child.userData as { speed: number; amplitude: number; phase: number; axis: string };
      const offset = Math.sin(time * d.speed + d.phase) * d.amplitude;
      child.position.y += offset * 0.02;
      child.rotation.y += 0.01 * d.speed;
    });
  };
  gsap.ticker.add(ticker);

  renderer.compile();
};

const destroy = () => {
  if (ticker) { gsap.ticker.remove(ticker); ticker = null; }
  if (sceneGroup) { scene.instance.remove(sceneGroup); sceneGroup = null; }
  characterGroup = null;
  floatingShapes = null;
};

export const objects = { init, destroy };
