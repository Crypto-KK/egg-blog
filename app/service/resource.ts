import { Service } from 'egg';

export default class Resource extends Service {
  public async list() {
    const { ctx } = this;
    return await ctx.model.Resource.find({}, { _v: 0 });
  }

  public async add() {
    const { ctx } = this;
    await ctx.model.Resource.insertMany([
      {
        api: '/blog/list',
        desc: '查看博客列表',
      },
      {
        api: '/blog/detail',
        desc: '查看博客详情',
      },
      {
        api: '/blog/write',
        desc: '编写博客',
      },
      {
        api: '/blog/update',
        desc: '更新博客',
      },
      {
        api: '/blog/delete',
        desc: '删除博客',
      },
    ]);
  }
}
