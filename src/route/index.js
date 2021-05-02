const express = require("express");
const router = express.Router();

// api for backend
router.use("/api", require("./api"));

// liff
router.get("/liff", require("./liff"));

// send LINE_LIFF_ID to frontend
router.get("/send-id", (req, res) => {
  res.json({ id: process.env.LINE_LIFF_ID });
});

module.exports = router;
