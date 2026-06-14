const express = require("express");
const app = express;

app.post("/user/signup", function (req, res) {
  res.json({
    message: "",
  });

  app.post("/user/login", function (req, res) {
    res.json({
      message: "",
    });
  });

  app.get("/courses", function (req, res) {
    res.json({
      message: "signup endpoint",
    });
  });

  app.get("/user/purchases", function (req, res) {
    res.json({
      message: "",
    });
  });

  app.get("/user/purchase", function (req, res) {
    //you would expect the user to you the moneyg
    res.json({
      message: "",
    });
  });
});

app.listen(3000);
