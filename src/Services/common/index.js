const BACKEND_BASE_URL = "BACKEND_BASE_URL";

const BACKEND_BASE_CONFIG = {
  POLICY: `${BACKEND_BASE_URL}/policy`,
};

const genTxtMsg = (text) => {
  return {
    type: "text",
    text: text,
  };
};

// text message
const genTxtMsgQuiRep = () => {
  return {
    type: "text",
    text: "",
    quickReply: {
      items: [], //Max: 13 objects
    },
  };
};

// text message's quick replay item
const genQuiReplyItem = ({ imageUrl, action }) => {
  return {
    type: "action",
    action: action,
    imageUrl: imageUrl || undefined, // optional
  };
};

const genUriAction = ({ label, url }) => {
  return {
    type: "uri",
    label: label,
    uri: url,
  };
};

const genMsgAction = ({ label, text }) => {
  return {
    type: "message",
    label: label,
    text: text,
  };
};

const genPostbackAction = ({ label, text, data }) => {
  return {
    type: "postback",
    label: label,
    data: data, // required
    text: text || undefined, // optional
  };
};

// button template => use for items <=4
const genBtnTemplate = ({ altText, tempTitle, tempText }) => {
  return {
    type: "template",
    altText: altText || "this is a buttons template",
    template: {
      type: "buttons",
      title: tempTitle || undefined,
      text: tempText,
      actions: [],
    },
  };
};

const genConfirmTemplate = ({ altText, tempText, yesAction, noAction }) => {
  return {
    type: "template",
    altText: altText || "this is a buttons template",
    template: {
      type: "buttons",
      text: tempText,
      actions: [
        yesAction,
        noAction,
        // ==== action like below: 2 action objects =====
        // {
        //   type: 'message',
        //   label: 'Yes',
        //   text: 'yes',
        // },
        // {
        //   type: 'message',
        //   label: 'No',
        //   text: 'no',
        // },
      ],
    },
  };
};

const genCarTemplate = ({ altText }) => {
  return {
    type: "template", //required
    altText: altText || "this is a buttons template", //required
    template: {
      type: "carousel", //required
      columns: [
        //required, columns max: 10
      ],
    },
  };
};

// carousel template => use for items >4 & < 3*10
const genCarTemColumn = ({ tempTitle, tempText }) => {
  return {
    title: tempTitle || undefined, //optional
    text: tempText, //required
    actions: [], //required,Max objects: 3
    imageBackgroundColor: "#D7B7B7", //optional
  };
};

// 洗牌
const shuffleArray = (array) => {
  array.sort(() => Math.random() - 0.5);
};

const fallbackMsgDefault = [
  "恩...這個問題我目前沒辦法回答你。你要不要先問其他問題，讓我能幫上你的忙！",
  "這個問題的答案我還沒有想法，你要不要先問其他問題？",
  "這個問題的答案我還不知道ㄟ，你要不要先問我其他的問題？",
];

const genLiffLink = (type, nanoid) => {
  const liffUrl = `https://liff.line.me/${process.env.LINE_LIFF_ID}/?type=${type}&url=${nanoid}`;

  return liffUrl;
};

const POSTBACK_TYPE = {
  privacyPolicy: "privacyPolicy",
};

const MESSAGE = {
  WELCOME:
    "感謝成為我的好友！ \n\n聊天室下方有圖文選單，提供相關資源及指引，請多加利用！",
  POLICY: {
    askPrivacyPolicy: `使用本服務前，請先閱讀〈隱私權政策〉，若您繼續使用本服務，即代表您同意本服務的〈隱私權政策〉。\n\n ${BACKEND_BASE_CONFIG.POLICY}`,
    agreePolicy: {
      label: "同意",
      text: "同意",
      data: "yes",
      msgAfterAgree: "您可以開始使用本服務",
    },
    disagreePolicy: {
      label: "不同意",
      text: "不同意",
      data: "no",
      msgAfterDisAgree: "進入右上方設定選單，即可取消好友",
    },
    tempText: "是否同意本服務的〈隱私權政策〉？",
  },
};

// 若使用傳送以下訊息, 則不回應
const MESSAGE_NO_REPLY = ["同意", "不同意"];

const genWelcomeMsg = (username) => {
  const text = `${username}, ${MESSAGE.WELCOME}`;
  return genTxtMsg(text);
};

const genPrivacyPolicyMsg = () => {
  return genTxtMsg(MESSAGE.POLICY.askPrivacyPolicy);
};

const genAskPrivacyPolicyMsg = (userId) => {
  const yesAction = genPostbackAction({
    label: MESSAGE.POLICY.agreePolicy.label,
    // text: MESSAGE.POLICY.agreePolicy.text,
    data: `type=${POSTBACK_TYPE.privacyPolicy}&userId=${userId}&data=${MESSAGE.POLICY.agreePolicy.data}`,
  });
  const noAction = genPostbackAction({
    label: MESSAGE.POLICY.disagreePolicy.label,
    // text: MESSAGE.POLICY.disagreePolicy.text,
    data: `type=${POSTBACK_TYPE.privacyPolicy}&userId=${userId}&data=${MESSAGE.POLICY.disagreePolicy.data}`,
  });
  return genConfirmTemplate({
    altText: MESSAGE.POLICY.tempText,
    tempText: MESSAGE.POLICY.tempText,
    yesAction,
    noAction,
  });
};

module.exports = {
  genTxtMsg,
  genTxtMsgQuiRep,
  genQuiReplyItem,
  genUriAction,
  genMsgAction,
  genPostbackAction,
  genBtnTemplate,
  genConfirmTemplate,
  genCarTemplate,
  genCarTemColumn,
  shuffleArray,
  fallbackMsgDefault,
  genLiffLink,
  POSTBACK_TYPE,
  MESSAGE,
  MESSAGE_NO_REPLY,
  genWelcomeMsg,
  genPrivacyPolicyMsg,
  genAskPrivacyPolicyMsg,
};
