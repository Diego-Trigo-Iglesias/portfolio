import { onMounted, ref } from "vue";
import { isTouchDevice } from "../utils/device";

export const isTouch = ref(false);

export const useAgent = () => {
  onMounted(() => {
    isTouch.value = isTouchDevice();
  });

  return {
    isTouch,
  };
};
