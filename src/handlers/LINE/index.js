const { router, line, route } = require("bottender/router");

const HandleMessage = require("./handleMessage");
const HandleFollow = require("./HandleFollow");
const HandleUnfollow = require("./HandleUnfollow");
const HandleJoin = require("./HandleJoin");
const HandleLeave = require("./HandleLeave");
const HandleMemberJoined = require("./HandleMemberJoined");
const HandleMemberLeft = require("./HandleMemberLeft");
const HandlePostback = require("./HandlePostback");
const HandleDefault = require("./HandleDefault");

async function HandleLine(context) {
  return router([
    line.message(HandleMessage),
    line.follow(HandleFollow),
    line.unfollow(HandleUnfollow),
    line.join(HandleJoin),
    line.leave(HandleLeave),
    line.memberJoined(HandleMemberJoined),
    line.memberLeft(HandleMemberLeft),
    line.postback(HandlePostback),
    route("*", HandleDefault),
  ]);
}

module.exports = HandleLine;
