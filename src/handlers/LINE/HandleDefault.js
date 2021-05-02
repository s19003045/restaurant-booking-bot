async function HandleDefault(context, props) {
  return props.next;
  // return context.sendText(`I don't know what you say.`);
}

module.exports = HandleDefault;
