const path = require('path');
const db = require('../../../models');
const {
  Availablity,
  Platform,
  Restaurant,
  Url
} = db;

// 記錄使用者訊息
const recordUserMessage = async (message, source, UserId) => {
  // const userMessage = await UserMessage.create({
  //   message: message,
  //   source: source,
  //   UserId: UserId,
  // });
  // await userMessage.save();
};

// liff query string 中合法的 page
// 若 liff 要導引至 rest-booking-web, liff 網址後的 query string 會帶 page 參數
// 透過 page 參數取得對應的 path(接在 domain url 後)
const liffQueryPage = {
  homeAll: { name: "homeAll", query: "?type=AllList" },
  homeNew: { name: "homeNew", query: "?type=NewList" },
  homeSearch: { name: "homeSearch", query: "?type=Search" },
  userSubscription: { name: "userSubscription", query: "/user?type=subscription" },
  userBooking: { name: "userBooking", query: "/user?type=booking" },
  userNotification: { name: "userNotification", query: "/user?type=notification" },
}

// liff 的 query string 中合法的 type
const liffQueryType = {
  rd: { name: "rd", value: "redirect" },
  rbw: { name: "rbw", value: "restaurant-booking-web" },
};

const liffController = {
  liffQueryPage: liffQueryPage,
  liffQueryType: liffQueryType,
  handleLiffUrl: (req, res) => {
    // todo: 1.記錄使用者動作於資料庫

    /**
     * @example
     * req.query:
     * 'liff.state': '?type=redirect&url=https://www.youtube.com/?gl=TW&hl=zh-TW'
     * 'liff.state': '?type=rd&url=5DhVduFKfL'
     * 'liff.state': '?type=rbw&page=home_all'
     * 'liff.state': '?type=rbw&page=user_subscription'
     * */

    let typeReg = /(?<=type=).+(?=&url|&page)/;
    let typeMatch = null;
    let redirectReg = /(?<=url=).+/;
    let redirectMatch = null;
    let pageReg = /(?<=page=).+/;
    let pageMatch = null;

    // 找出 query string 中的 type, url, page
    if (req.query['liff.state']) {
      typeMatch = req.query['liff.state'].match(typeReg);
      redirectMatch = req.query['liff.state'].match(redirectReg);
      pageMatch = req.query['liff.state'].match(pageReg);
    }

    // liff 網址至少要帶 type 參數
    if(!(typeMatch && Object.keys(liffQueryType).includes(typeMatch[0]))) {
      return res.json("liff url is illegal")
    }

    // 依照 liff 的 query string 的 type 分別處理
    switch (typeMatch[0]) {
        // 前往 rest-booking-web
      case liffQueryType.rbw.name:
        let url = process.env.REACT_WEB_APP_DOMAIN

        if (pageMatch && Object.keys(liffQueryPage).includes(pageMatch[0])) {
          url += `${liffQueryPage[pageMatch[0]].query}`
        }
        // console.log("url", url)
        res.redirect(url);
        break
        // 前往其他網站
      case liffQueryType.rd.name:
        if (!redirectMatch) return res.json('redirect url is not defined or illegal');

        // todo: 暫時先轉址 到 youtube.com
        return res.redirect("https://youtube.com")

        // 透過 urlId 去資料庫找真實的網址
        const redirectUrlID = redirectMatch[0]; //

        // find url with nanoid from table fields
        // return Field.findOne({
        //   where: {
        //     nanoid: redirectUrlID,
        //   },
        // })
        //   .then(async (field) => {
        //     // 紀錄 liffCount: 監測使用者是否點擊 link 開啟 liff
        //     const [liffCount, lcCreated] = await LiffCount.findOrCreate({
        //       where: {
        //         fieldName: field.name,
        //       },
        //       defaults: {
        //         fieldName: field.name,
        //         count: 0,
        //       },
        //     });
        //     liffCount.increment('count', { by: 1 });
        //     await liffCount.save();
        //
        //     return res.redirect(field.hasResource);
        //   })
        //   .catch((err) => {
        //     return res.json('redirect url is not defined or illegal');
        //   });
        // const redirectUrl = shorUrl[redirectUrlID];
      default:
        res.json("type of liff url query is not illegal")
        break
    }
  }
}

module.exports = liffController;
