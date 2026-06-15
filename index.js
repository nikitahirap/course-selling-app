const express = require("express");
const { UserRoutes } = require("./routes/course");

const { createdUserRoutes } = require("./routes/user");

const app = express;

app.use("/user", userRouter);
app.use("/course", courseRouter);
app.listen(3000);
