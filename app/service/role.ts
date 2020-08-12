import { Service } from "egg";

export default class Role extends Service {
  public async list() {
    const { ctx } = this;
    return await ctx.model.Role.find({}, { _v: 0 })
  }

  public async add() {
    const { ctx } = this;
    await ctx.model.Role.insertMany([
      {
        name: '普通用户',
        desc: ''
      },
      {
        name: '管理员',
        desc: '修改任何信息'
      },
    ])
  }

  
}
