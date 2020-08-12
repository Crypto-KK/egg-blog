// 返回(正确/错误)字典
export const jsonResponse = (code, msg = null, res = null) => {
  return {
    code,
    msg,
    result: res,
  };
};

export const successResponse = data => {
  // @ts-ignore
  return jsonResponse(200, 'suc', data);
};
