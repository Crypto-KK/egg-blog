import { Service } from 'egg';

export default class User extends Service {
  public async register() {
    const { ctx } = this;
    const result = await ctx.model.User.create({
      username: 'admin',
      password: 'admin',
    });
    return result;
  }

  public async listUser(): Promise<User[]> {
    const { ctx } = this;
    const result = await ctx.model.User.find({});
    return result;
  }
}
