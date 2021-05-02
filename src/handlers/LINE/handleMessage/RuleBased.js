const handleText = require("../../../Services/messageService");
const {
  genPrivacyPolicyMsg,
  genAskPrivacyPolicyMsg,
} = require("../../../Services/common");

async function RuleBased(context, props) {
  // 回應訊息(handleText)前, 統一處理的作業:
  // 1.從資料庫取得 使用者資訊
  // 2.確認是否已同意使用者隱私權政策
  // 3.其他要一併處理的作業
  if (context.event.isText) {
    /**
     * get user info from database
     * if user info not in database, then create it
     * and add user to context for use in handleText
     */
    // context.user = user

    /**
     * ask for privacy policy agree if user not agree
     * privacy polity
     */

    return handleText(context, props);
  }
}

module.exports = RuleBased;
