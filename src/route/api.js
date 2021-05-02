const express = require("express");
const router = express.Router();
const { httpHeader } = require("./handleHttpHeader");

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

router.get("/*", preProcessing, (req, res) => {
  return res.json("api response");
});

module.exports = router;
