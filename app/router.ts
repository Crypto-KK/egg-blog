import { Application } from 'egg';
import { EggShell } from 'egg-shell-decorators/index';

export default (app: Application) => {
  EggShell(app, {
    prefix: '/',
    quickStart: true,
  });
  // const { router, controller, middleware } = app;
  // // @ts-ignore
  // const jwt = middleware.jwt(app.config.jwt)

  // router.get("/user", controller.user.listUser);
  // router.get("/user/:username", controller.user.userDetail)
  // router.post("/user/login", controller.user.login);
  // router.post("/user/register", controller.user.register);
  // router.post("/permissions/:username", controller.user.getResources)
  //
  // router.get("/resource", controller.resource.list);
  // router.post("/resource", controller.resource.add);
  //
  // router.get("/role", controller.role.list);
  // router.post("/role", controller.role.add);
};
