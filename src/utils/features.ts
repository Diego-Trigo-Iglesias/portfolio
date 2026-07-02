export const features = {
  sounds: false,
  introWave: true,
  startProject: true,
} as const;

export const isFeatureEnabled = (feature: keyof typeof features) => {
  return features[feature];
};
