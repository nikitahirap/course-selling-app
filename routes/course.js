const { Router } = require("express");
const CourseRouter = Router();

CourseRouter.get("/preview", function (req, res) {
  //you would expect the user to you the moneyg
  res.json({
    message: "signup endpoint",
  });
});
CourseRouter.get("/purchase", function (req, res) {
  res.json({
    message: "signup endpoint",
  });
});

module.exports = {
  CourseRouter: CourseRouter,
};
