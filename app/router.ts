import { Application } from 'egg';
import { EggShell } from 'egg-shell-decorators/index';

export default (app: Application) => {
  EggShell(app, {
    prefix: '/',
    quickStart: true,
    jwtValidation: app.middleware.jwt
  });
};
