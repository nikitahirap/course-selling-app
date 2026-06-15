const { Router } = require("express");
const userRouter = Router();

userRouter.post("/user/signup", function (req, res) {
  res.json({
    message: "signup endpoint",
  });
});
userRouter.post("/user/login", function (req, res) {
  res.json({
    message: "",
  });
});

userRouter.get("/courses", function (req, res) {
  res.json({
    message: "signup endpoint",
  });
});

module.exports = {
  userRouter: userRouter,
};
