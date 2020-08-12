module.exports = options => {
  return async function jwt(ctx, next) {
    const token = ctx.request.header.authorization;
    let decode: any;
    if (token) {
      try {
        // 解码
        decode = ctx.app.jwt.verify(token, options.secret);
        await next();
        console.log(decode)
      } catch (error) {
        ctx.status = 401;
        ctx.body = {
          msg: error.message
        }
        return
      }
    } else {
      ctx.status = 401;
      ctx.body = {
        msg: 'token not found'
      }
      return
    }
  }
}
