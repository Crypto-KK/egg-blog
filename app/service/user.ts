import { Service } from 'egg';

export default class User extends Service {
  public async add() {
    const { ctx } = this;
    const result = await ctx.model.User.create({
      username: 'admin',
      password: 'admin',
    });
    return result;
  }
}
