// 繼承 ERROR 來處理自己的錯誤格式
class CustomError extends Error {
  constructor(UNAUTHORIZED) {
    super();
    this.code = UNAUTHORIZED.code;
    this.message = UNAUTHORIZED.message;
  }
}

// 轉換一下格式並送出 json 內容
const customErrorHandle = (err, res) => {
  const { code, message } = err;

  // 返回 json 格式
  res.status(code || 500).json({
    status: "error",
    message,
  });
};

module.exports = {
  CustomError,
  customErrorHandle,
};
