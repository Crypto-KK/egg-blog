import { Controller } from 'egg';
import { Get, IgnoreJwt, Post, Prefix } from 'egg-shell-decorators/index';

@Prefix('/user')
export default class UserController extends Controller {
  @IgnoreJwt
  @Post('/register')
  public async register() {
    const { ctx } = this;
    const reqBody = ctx.request.body;
    ctx.body = await ctx.service.user.register(reqBody);
  }

  @Get('')
  public async listUser({ query: { username } }) {
    const { ctx, app } = this;
    const result = await ctx.service.user.listUser(username);
    return app.config.successResponse(result);
  }

  @Get('/:username')
  public async userDetail() {
    const { ctx, app } = this;
    const result = await ctx.service.user.userDetail(ctx.params.username);
    return app.config.successResponse(result);
  }

  @IgnoreJwt
  @Post('/login')
  public async login() {
    const { ctx } = this;
    const data = ctx.request.body;
    const token = await ctx.service.user.login(
      data.username,
      data.password,
    );
    ctx.body = token;
    return token;
  }

  @Get('/permissions/:username')
  public async getResources({ params: { username } }) {
    // 获取能够访问的资源列表
    const { ctx, app } = this;
    const result = await ctx.service.user.getResources(username);
    return app.config.successResponse(result);
  }
}
