import config from '../config';

const getAssetLocation = (iconName: string): string => {
  const selectedInterface = config.assets.packs.default;
  return `https://${config.assets.baseHref}/${selectedInterface}/${iconName}`;
};

export default getAssetLocation;
