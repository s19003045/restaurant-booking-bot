const { router, platform, text } = require("bottender/router");

const HandleLine = require("./handlers/LINE/index.js");
const HandleMessage = require("./handlers/LINE/handleMessage/index.js");

// fallback
async function fallback(context) {
    await context.sendText("很抱歉，尚未提供相關資訊");
}

module.exports = async function App(context) {
    return router([
        // LINE request
        platform("line", HandleLine),

        // Console mode for debug
        text("*", HandleMessage),
    ]);
};
