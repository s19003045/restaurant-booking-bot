async function HandleMemberJoined(context) {
  return context.sendText('someone join')
}

module.exports = HandleMemberJoined