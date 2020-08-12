import { Service } from 'egg';

export default class User extends Service {
  public async register(reqBody) {
    const { ctx } = this;
    const { username, password, name } = reqBody
    return await ctx.model.User.create({
      username,
      password,
      name
    });
  }

  public async listUser(username: any): Promise<User[]> {
    const { ctx } = this;
    let conditions = {};
    let $project = {
      _id: 1,
      username: 1
    };
    if (username) {
      conditions['username'] = { $regex: new RegExp(username, 'i') };
    }
    return await ctx.model.User.find(conditions, $project);
  }

  public async userDetail(username: String): Promise<User> {
    const { ctx } = this;
    return await ctx.model.User.findOne({ username }, {
      username: 1,
      password: 1,
      created_at: 1
    });
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
      // 设置last_login
      const now = new Date();
      await ctx.model.User.update({ username },
        { $set: { last_login: now } })
    }
    return token;
  }
}
