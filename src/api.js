const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    hello: "hi2! from bogysnth!!"
  });
});

router.get("/test", (req, res) => {
  res.json({
    hello: "test"
  });
});

router.get("/env", (req, res) => {
  res.json({
    hello: "env: " + process.env.TEST_VAR
  });
});

app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);