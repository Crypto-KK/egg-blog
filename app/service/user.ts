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

  public async userDetail(id: String): Promise<User> {
    const { ctx } = this;
    const result = await ctx.model.User.find({ _id: id });
    // @ts-ignore
    return result;
  }

  public async login(username, password) {
    const { ctx, app } = this;
    const userCount = await ctx.model.User.find({
      username,
      password
    }).count();
    let token = '';
    if (userCount > 0) {
      token = app.jwt.sign({
        username: username
      }, app.config.jwt.secret);
    }
    return token;
  }
}
