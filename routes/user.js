const { Router } = reqiure(express);

function createUserRoutes(app) {
  app.post("/user/signup", function (req, res) {
    res.json({
      message: "",
    });
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
}
module.exports = {
  createUserRoutes: createUserRoutes,
};
