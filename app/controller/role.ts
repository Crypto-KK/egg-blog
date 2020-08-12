import {Get, Post, Prefix} from "egg-shell-decorators/index";
import {Controller} from "egg";

@Prefix('/role')
export default class RoleController extends Controller {

  @Get('')
  public async list() {
    const { ctx, app } = this;
    const result = await ctx.service.role.list();
    return app.config.successResponse(result);
  }

  @Post('')
  public async add() {
    const { ctx, app } = this;
    const result = await ctx.service.role.add();
    return app.config.successResponse(result);
  }
}
