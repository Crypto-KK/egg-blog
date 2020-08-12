import * as assert from 'assert';
import { app } from 'egg-mock/bootstrap';
import { Context } from 'egg';

describe('test/app/controller/user.test.ts', () => {
  let ctx: Context;

  before(async () => {
    ctx = app.mockContext();
  });

  it('should GET /user', async () => {
    const status = await app.httpRequest().get('/').expect(200);
    const result = await ctx.service.user.listUser(null);
    console.log(status);
    console.log(result);
    assert(1 === 1);
  });


});
