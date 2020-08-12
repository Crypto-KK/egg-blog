import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';
import { jsonResponse, successResponse } from './rest'

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
  config.jsonResponse = jsonResponse;
  config.successResponse = successResponse;
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true,
    },
  };
  // config.swaggerdoc = {
  //   dirScanner: './app/controller',
  //   apiInfo: {
  //     title: 'egg-swagger',
  //     description: 'swagger-ui for egg',
  //     version: '1.0.0',
  //   },
  //   schemes: ['http', 'https'],
  //   consumes: ['application/json'],
  //   produces: ['application/json'],
  //   securityDefinitions: {
  //     // apikey: {
  //     //   type: 'apiKey',
  //     //   name: 'clientkey',
  //     //   in: 'header',
  //     // },
  //     // oauth2: {
  //     //   type: 'oauth2',
  //     //   tokenUrl: 'http://petstore.swagger.io/oauth/dialog',
  //     //   flow: 'password',
  //     //   scopes: {
  //     //     'write:access_token': 'write access_token',
  //     //     'read:access_token': 'read access_token',
  //     //   },
  //     // },
  //   },
  //   enableSecurity: false,
  //   // enableValidate: true,
  //   routerMap: false,
  //   enable: true,
  // }
  config.middleware = [];

  // 日志配置
  config.logger = {
    encoding: 'utf-8',
    appLogName: `${appInfo.name}-web.log`,
    coreLogName: 'egg-web.log',
    agentLogName: 'egg-agent.log',
    errorLogName: 'common-error.log',
  };
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
