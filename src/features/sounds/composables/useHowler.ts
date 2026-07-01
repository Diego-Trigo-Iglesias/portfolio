import { ref } from "vue";
import { isFeatureEnabled } from "../../../utils/features";

export const howlerUnlocked = ref(false);
export const soundsEnabled = ref(false);

export const useHowler = () => {
  const enabledVolume = ref<number>(0);

  // Sounds feature disabled — no-op composable
  if (!isFeatureEnabled("sounds")) {
    return { howlerUnlocked, soundsEnabled, enabledVolume };
  }

  return { howlerUnlocked, soundsEnabled, enabledVolume };
};
