async function HandleMemberLeft(context) {
  return context.sendText('someone leave')
}

module.exports = HandleMemberLeft