import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;
  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_3kx0pq3272992_3';

  config.cors = {
    origin: '*', // 访问白名单,根据你自己的需要进行设置
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  };
  config.mongoose = {
    url: 'mongodb://10.211.55.6:27017/egg-blog',
    options: { useNewUrlParser: true },
  };
  config.jwt = {
    secret: '3x900n1x74m'
  };
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true,
    },
  }
  // add your egg config in here
  config.middleware = [];

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
