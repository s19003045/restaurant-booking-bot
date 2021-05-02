async function HandlePostback(context) {
  return context.sendText("bot postback");
}

module.exports = HandlePostback;
