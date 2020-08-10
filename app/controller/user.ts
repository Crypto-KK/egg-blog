import { Controller } from 'egg';
import { Get, Prefix } from 'egg-shell-decorators/index';

@Prefix('/user')
export default class UserController extends Controller {
  @Get('/register')
  public async register() {
    const { ctx } = this;
    ctx.body = await ctx.service.user.register();
  }

  @Get('')
  public async listUser({ query: { username } }) {
    const { ctx } = this;
    ctx.body = await ctx.service.user.listUser(username);
    return ctx.body;
  }
}
