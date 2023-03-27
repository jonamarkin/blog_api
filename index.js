const express = require("express");
require("dotenv").config();
require("./config/connectDB");
//Import routes
const userRouter = require("./routes/userRoutes");
const postRouter = require("./routes/postRoutes");
const commentRouter = require("./routes/commentRoutes");
const categoryRouter = require("./routes/categoryRoutes");
const globalErrorHandler = require("./middlewares/globalErrorHandler");
const isAdmin = require("./middlewares/isAdmin");
const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use(express.json());

app.use(isAdmin);

//middleware
//routes

//User routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/posts", postRouter);
app.use("/api/v1/comments", commentRouter);
app.use("/api/v1/categories", categoryRouter);

//error handling
app.use(globalErrorHandler);

//404 error
app.use("*", (req, res) => {
  res.status(404).json({
    responseCode: "99",
    responseMessage: `${req.originalUrl} not found`,
  });
});
