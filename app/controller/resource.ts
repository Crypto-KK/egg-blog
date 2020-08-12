import { Get, Post, Prefix } from 'egg-shell-decorators/index';
import { Controller } from 'egg';

@Prefix('/resource')
export default class ResourceController extends Controller {

  @Get('')
  public async list() {
    const { ctx, app } = this;
    const result = await ctx.service.resource.list();
    return app.config.successResponse(result);
  }

  @Post('')
  public async add() {
    const { ctx, app } = this;
    const result = await ctx.service.resource.add();
    return app.config.successResponse(result);
  }
}
