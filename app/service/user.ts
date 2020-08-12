import { Service } from 'egg';

export default class User extends Service {
  public async register(reqBody) {
    const { ctx } = this;
    const { username, password, name } = reqBody
    const userCount = await this.ctx.model.User.find({ username }).count()
    if (userCount > 0) {
      return {
        msg: '用户名已存在'
      }
    }
    const salt = ctx.helper.makeSalt();
    const encryptedPassword = ctx.helper.encryptPassword(password, salt)
    return await ctx.model.User.create({
      username,
      password: encryptedPassword,
      name,
      salt
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
    const user = await ctx.model.User.findOne({ username })
    if (!user) {
      return {
        msg: '用户名错误'
      }
    }
    const encryptedPassword = ctx.helper.encryptPassword(password, user.salt)
    if (user.password === encryptedPassword) {
      let token = app.jwt.sign({
        username: username
      }, app.config.jwt.secret);
      // 设置last_login
      const now = new Date();
      await ctx.model.User.update({ username },
        { $set: { last_login: now } })
      return token;
    } else {
      return {
        msg: '用户名或密码错误'
      }
    }
  }
}
