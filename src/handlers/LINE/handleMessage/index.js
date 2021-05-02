const { chain } = require("bottender");

const RuleStandard = require("./RuleStandard");
const RuleBased = require("./RuleBased");
// const Dialogflow = require("./Dialogflow");

async function HandleMessage(context) {
  return chain([
    /** 主要的回應訊息邏輯都寫在 RuleBased */
    RuleBased,

    /** 制式的回應訊息可以寫在 RuleStandard */
    RuleStandard,

    /** use dialogflow if needed */
    // Dialogflow,

    // HumanAgent,
  ]);
}

module.exports = HandleMessage;
