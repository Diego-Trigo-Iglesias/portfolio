/**
 * 3D scene (room + avatar), animations and assets are based on the original
 * portfolio by David Heckhoff (https://david-hckh.com), used under the terms of
 * its license (see /license.md). Attribution must be preserved.
 */
import * as THREE from "three";
import gsap from "gsap";
import { scene } from "../core/scene";
import { renderer } from "../core/renderer";
import { resources } from "../../utils/resources";
import { getRoomMaterial, getDesktopMaterial, getAvatarMaterial } from "../common/materials";
import { isFeatureEnabled } from "../../utils/features";

import type { GLTF } from "three/examples/jsm/loaders/GLTFLoader.js";

let container: THREE.Group | null = null;
let mixer: THREE.AnimationMixer | null = null;
let ticker: (() => void) | null = null;
const clock = new THREE.Clock();

/* ------------------------------------------------------------------ */
/*  Room — baked texture applied to every mesh (no lights)             */
/* ------------------------------------------------------------------ */
function setupRoom(group: THREE.Group) {
  const roomGltf = resources.items["room"] as GLTF;
  if (!roomGltf?.scene) return;

  const room = roomGltf.scene;
  room.traverse((child) => {
    if (!(child instanceof THREE.Mesh)) return;

    // Shadow catcher is a helper plane — hide it (handled by baked map otherwise)
    if (child.name === "shadow-catcher") {
      child.visible = false;
      return;
    }

    if (child.name.startsWith("desktop-plane")) {
      child.material = getDesktopMaterial();
      return;
    }

    child.material = getRoomMaterial();
  });

  group.add(room);
}

/* ------------------------------------------------------------------ */
/*  Avatar — matcap materials by mesh name + idle animation            */
/* ------------------------------------------------------------------ */
function setupAvatar(group: THREE.Group) {
  const avatarGltf = resources.items["avatar"] as GLTF;
  if (!avatarGltf?.scene) return;

  const avatar = avatarGltf.scene;
  avatar.traverse((child) => {
    if (!(child instanceof THREE.Mesh)) return;

    child.frustumCulled = false;
    const material = getAvatarMaterial(child.name);
    if (material) {
      child.material = material;
      child.renderOrder = child.name === "face" ? 25 : 24;
    }
  });

  group.add(avatar);

  // Animation — intro "wave" once, then settle into a looping "idle"
  if (avatarGltf.animations?.length) {
    mixer = new THREE.AnimationMixer(avatar);
    const clips = avatarGltf.animations;
    const idleClip = THREE.AnimationClip.findByName(clips, "idle") ?? clips[0]!;
    const waveClip = THREE.AnimationClip.findByName(clips, "wave");

    const playIdle = () => {
      const idle = mixer!.clipAction(idleClip);
      idle.reset().fadeIn(0.6).play();
    };

    if (isFeatureEnabled("introWave") && waveClip) {
      const wave = mixer.clipAction(waveClip);
      wave.setLoop(THREE.LoopOnce, 1);
      wave.clampWhenFinished = true;
      wave.play();

      const onFinished = () => {
        mixer?.removeEventListener("finished", onFinished);
        wave.fadeOut(0.6);
        playIdle();
      };
      mixer.addEventListener("finished", onFinished);
    } else {
      playIdle();
    }
  }
}

/* ================================================================== */
/*  Public API                                                         */
/* ================================================================== */
const init = () => {
  container = new THREE.Group();
  scene.instance.add(container);

  setupRoom(container);
  setupAvatar(container);

  clock.start();
  ticker = () => {
    if (mixer) mixer.update(clock.getDelta());
  };
  gsap.ticker.add(ticker);

  renderer.compile();
};

const destroy = () => {
  if (ticker) {
    gsap.ticker.remove(ticker);
    ticker = null;
  }
  if (mixer) {
    mixer.stopAllAction();
    mixer = null;
  }
  if (container) {
    scene.instance.remove(container);
    container = null;
  }
};

export const objects = { init, destroy };
