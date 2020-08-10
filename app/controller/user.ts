import { Controller } from 'egg';

export default class UserController extends Controller {
  public async add() {
    const { ctx } = this;
    ctx.body = await ctx.service.user.add();
  }
}
