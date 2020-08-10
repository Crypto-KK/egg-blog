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

  public async listUser(username: any): Promise<User[]> {
    const { ctx } = this;
    let conditions = {};
    if (username) {
      conditions['username'] = { $regex: new RegExp(username, 'i') };
    }
    const result = await ctx.model.User.find(conditions);
    return result;
  }
}
