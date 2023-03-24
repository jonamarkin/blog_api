const express = require("express");
require("dotenv").config();
require("./config/connectDB");
//Import routes
const userRouter = require("./routes/userRoutes");
const postRouter = require("./routes/postRoutes");
const commentRouter = require("./routes/commentRoutes");
const categoryRouter = require("./routes/categoryRoutes");
const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

//middleware
//routes

//User routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/posts", postRouter);
app.use("/api/v1/comments", commentRouter);
app.use("/api/v1/categories", categoryRouter);

//error handling
app.use((err, req, res, next) => {
  res.status(500).json({
    responseCode: "99",
    responseMessage: "Internal server error",
  });
});
