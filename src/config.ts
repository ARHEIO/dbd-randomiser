import { IRank } from './Services/generator/models';

export default {
  endpoints: {
    randomiserApi: process.env.REACT_APP_RANDOMISER_SERVER_ENDPOINT,
    assets: process.env.REACT_APP_ASSETS,
  },
  colours: {
    [IRank.BROWN]: '#ab713c',
    [IRank.YELLOW]: '#e8c252',
    [IRank.GREEN]: '#199b1e',
    [IRank.PURPLE]: '#ac3ee3',
    [IRank.IRIDESCANT]: '#ff0955',
    [IRank.GOLD]: '#ff8800',
  },
};
