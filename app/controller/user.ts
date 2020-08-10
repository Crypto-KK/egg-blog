import { Controller } from 'egg';
import {Get, Post, Prefix} from 'egg-shell-decorators/index';

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

  @Get('/:id')
  public async userDetail({ params: { id } }) {
    const { ctx } = this;
    ctx.body = await ctx.service.user.userDetail(id);
    return ctx.body;
  }

  @Post('/login')
  public async login() {
    const { ctx } = this;
    const data = ctx.request.body;
    const token = await ctx.service.user.login(
      data.username,
      data.password
    );
    ctx.body = token;
    return token
  }
}
