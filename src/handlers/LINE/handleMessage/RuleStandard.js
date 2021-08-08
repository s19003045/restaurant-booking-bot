const { router, text, route } = require("bottender/router");
const { fallbackMsgDefault } = require("../../../Services/common");
const liffController = require("../../../controllers/liff/liffController")

async function SendHello(context) {
  await context.sendText("hello");
}

// 我的訂閱
async function MySubscription(context) {
  console.log('liffController.liffQueryType.rbw.name', liffController.liffQueryType.rbw.name)
  let text = `請點擊連結查看〈我的訂閱〉 \n`
  text += `${process.env.LIFF_URL}?type=${liffController.liffQueryType.rbw.name}&page=${liffController.liffQueryPage.userSubscription.name}`
  // type=rbw => 前往 react-booking-web
  await context.sendText(text);
}

// 餐廳清單
async function RestList(context) {
  let text = `請點擊連結查看〈餐廳清單〉 \n`
  text += `${process.env.LIFF_URL}?type=${liffController.liffQueryType.rbw.name}&page=${liffController.liffQueryPage.homeAll.name}`
  // type=rbw => 前往 react-booking-web
  await context.sendText(text);
}



// fallback
async function fallback(context) {
  // todo: 整合 fallbackMsg 及 引導使用者查看可能有興趣的主題( or 熱門關鍵主題)
  let replyMsg = [];
  const interestTopicMsg = [
    // {
    //   type: 'text',
    //   text: '你對棒球有興趣嗎？',
    // },
    // {
    //   type: 'text',
    //   text: '你對藍球有興趣嗎？',
    // },
  ];
  const popularTopicMsg = [
    // {
    //   type: 'text',
    //   text: '你對棒球2314有興趣嗎？',
    // },
    // {
    //   type: 'text',
    //   text: '你對藍球1234有興趣嗎？',
    // },
  ];

  // random fallback message
  let fallbackMsg = [
    {
      type: "text",
      text:
        fallbackMsgDefault[
          Math.floor(Math.random() * fallbackMsgDefault.length)
        ],
    },
  ];

  if (Array.isArray(interestTopicMsg) && interestTopicMsg.length > 0) {
    replyMsg = fallbackMsg.concat(interestTopicMsg);
    await context.reply(replyMsg);
  } else if (Array.isArray(popularTopicMsg) && popularTopicMsg.length > 0) {
    replyMsg = fallbackMsg.concat(popularTopicMsg);
    await context.reply(replyMsg);
  } else {
    replyMsg = fallbackMsg;
    await context.reply(replyMsg);
  }
}

// chain- ruleBased
function RuleStandard(context, props) {
  return router([
    // 助產資源
    text(["hello", "hi"], SendHello),

    // 我的訂閱
    text(["我的訂閱"], MySubscription),

    // 餐廳清單
    text(["餐廳清單"], RestList),

    // open fallback when Dialogflow is not needed
    text("*", () => fallback),
    // pass to next
    route("*", props.next),
  ]);
}

module.exports = RuleStandard;
