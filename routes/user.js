var express = require("express"),
  router = express.Router(),
  path = require('path'),
  verifyToken = require("../middleware/authJWT"),
  { signup, signin } = require("../controllers/auth.controller.js");

router.get("/register", function (req, res) {
  res.sendFile(path.join(__dirname, '../public/register.html'));
});

router.post("/register", signup, function (req, res) {});

router.get("/login", function (req, res) {
  res.sendFile(path.join(__dirname, '../public/login.html'));
});

router.post("/login", signin, function (req, res) {});

router.get("/main", verifyToken, function (req, res) {
  if (!req.user) {
    res.status(403).send({
      message: "Invalid JWT token",
    });
  } else {
    res.sendFile(path.join(__dirname, '../public/main.html'));
  }
});

module.exports = router;
