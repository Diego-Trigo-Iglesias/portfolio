import { isFeatureEnabled } from "../utils/features";

const play = () => {
  if (!isFeatureEnabled("introWave")) return;
};

export const intro = { play };
