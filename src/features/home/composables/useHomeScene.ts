import { ref } from "vue";
import { three } from "../../../three";
import { renderer } from "../../../three/core/renderer";
import { raycast } from "../../../three/utils/raycast";
import gsap from "gsap";
import { useAgent } from "../../../composables/useAgent";

export function useHomeScene() {
  const threeCanvasRef = ref<HTMLCanvasElement | null>(null);
  const threeInitialized = ref(false);
  const isHoveringObject3D = ref(false);
  const { isTouch } = useAgent();

  const updateCursor = () => {
    if (isTouch.value) return;
    const hoveringBox = raycast.getHoveringBox();
    const shouldBePointer = !!hoveringBox;

    if (shouldBePointer !== isHoveringObject3D.value) {
      isHoveringObject3D.value = shouldBePointer;
      document.documentElement.style.cursor = shouldBePointer ? "pointer" : "";
    }
  };

  const initScene = () => {
    if (threeCanvasRef.value && !threeInitialized.value) {
      three.init(threeCanvasRef.value);
      threeInitialized.value = true;
    }
    renderer.setIsActive(true);
    gsap.ticker.add(updateCursor);
  };

  const destroyScene = () => {
    three.destroy();
    renderer.setIsActive(false);
    gsap.ticker.remove(updateCursor);
    document.documentElement.style.cursor = "";
  };

  return {
    threeCanvasRef,
    threeInitialized,
    isHoveringObject3D,
    initScene,
    destroyScene,
  };
}
