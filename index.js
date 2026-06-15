const express = require("express");
const { CourseRouter } = require("./routes/course");

const { userRouter } = require("./routes/user");

const app = express();

app.use("/api/v1/user", userRouter);
app.use("/api/v1/course", CourseRouter);

app.listen(30000, () => {
  console.log("Server running on port 30000");
});
