const bodyParser = require("body-parser");
const express = require("express");
const { bottender } = require("bottender");
const cors = require("cors");
const createError = require("http-errors");
const { customErrorHandle } = require("./src/route/handleError");
const app = bottender({
  dev: process.env.NODE_ENV !== "production",
});
const config = require("./src/config/config");

const port = Number(process.env.PORT) || config.LISTEN_PORT;

// the request handler of the bottender app
const handle = app.getRequestHandler();

// app is a higher level layer upon express server
app.prepare().then(() => {
  const server = express();

  server.use(cors());

  server.use(
    bodyParser.json({
      verify: (req, _, buf) => {
        req.rawBody = buf.toString();
      },
    })
  );

  // api for backend, liff, auth
  server.use("/", require("./src/route"));

  // api for webhook request
  server.all("/webhooks/line", (req, res) => {
    return handle(req, res);
  });

  // catch 404 and forward to handleError handler
  server.use(function (req, res, next) {
    // todo: handle error

    // 處理未知錯誤
    next(createError(404));
  });

  // handleError handler
  server.use(function (err, req, res, next) {
    // 處理自定義錯誤
    customErrorHandle(err, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
