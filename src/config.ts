export default {
  endpoints: {
    randomiserApi: process.env.REACT_APP_RANDOMISER_SERVER_ENDPOINT,
  },
  assets: {
    // baseHref: 'assets.arhe.io/dbd-randomiser',
    baseHref: 'd250z1k5sezcpa.cloudfront.net/dbd-randomiser',
    packs: {
      default: 'default',
      shitty: 'shitty',
    },
  },
};

export interface IConfig {
  endpoints: {
    randomiserApi: string;
  };
  assets: {
    // baseHref: 'assets.arhe.io/dbd-randomiser',
    baseHref: string;
    packs: {
      default: string;
      shitty: string;
    };
  };
}
