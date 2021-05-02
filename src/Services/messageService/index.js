const { genTxtMsg } = require("../common");

const { MESSAGE_NO_REPLY } = require("../../Services/common");

const handleText = async (context, props) => {
  // no reply when text are in MESSAGE_NO_REPLY
  if (context.event.text.indexOf(MESSAGE_NO_REPLY) >= 0) {
    return null;
  }

  switch (context.event.text) {
    case "a":
      return await context.reply("reply message to case a");
    case "b":
      return await context.reply("reply message to case b");
    case "c":
      return await context.reply("reply message to case ");
    default:
      return props.next;
  }
};

module.exports = handleText;
