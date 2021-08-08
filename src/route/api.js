const express = require("express");
const router = express.Router();
const { httpHeader } = require("./handleHttpHeader");
const apiController = require("../controllers/api")

function handleUrl(req, res, next) {
  console.log("req.url", req.url);
  next();
}

const preProcessing = [
  httpHeader,
  handleUrl,
  // verifyToke,
  // verifyPermission
];

// 餐廳列表
router.get("/restaurants", apiController.restaurant.getRestaurants)
// 單一餐廳
router.get("/restaurant", apiController.restaurant.getRestaurant)
// 餐廳 menu
router.get("/restaurant/menu", apiController.restaurant.getMenus)
// 關鍵字搜尋餐廳
router.get("/restaurants/search", apiController.restaurant.searchRestByKeyword)

// default
router.get("/*", preProcessing, (req, res) => {
  throw new Error('the api is not found')
  // return res.json("api response");
});

module.exports = router;
