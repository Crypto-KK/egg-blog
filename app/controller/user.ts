import { Controller } from 'egg';
import { Get, Prefix } from 'egg-shell-decorators/index';

@Prefix('/user')
export default class UserController extends Controller {
  @Get('/register')
  public async register() {
    const { ctx } = this;
    ctx.body = await ctx.service.user.register();
  }

  @Get('/list')
  public async listUser() {
    const { ctx } = this;
    ctx.body = await ctx.service.user.listUser();
    return ctx.body;
  }
}
