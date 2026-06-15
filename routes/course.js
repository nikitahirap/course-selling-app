function createUserRoutes(app) {
  app.get("/user/purchase", function (req, res) {
    //you would expect the user to you the moneyg
    res.json({
      message: "",
    });
  });
  app.get("/user/purchases", function (req, res) {
    res.json({
      message: "",
    });
  });
}

module.exports = {
  createUserRoutes: createUserRoutes,
};
