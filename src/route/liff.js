const express = require("express");
const router = express.Router();
const { httpHeader } = require("./handleHttpHeader");
const liffController = require("../controllers/liff/liffController")

function handleUrl(req, res, next) {
  console.log("req.url", req.url);
  console.log("req.query", req.query);
  next();
}

const preProcessing = [
  // httpHeader,
  handleUrl,
  // verifyToke,
  // verifyPermission
];

router.get("/*", preProcessing, liffController.handleLiffUrl);

module.exports = router;
