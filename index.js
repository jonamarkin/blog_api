const express = require("express");
require("dotenv").config();
require("./config/connectDB");
const userRouter = require("./routes/userRoutes");
const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

//middleware
//routes

//User routes
app.use("/api/v1/users", userRouter);

//error handling
app.use((err, req, res, next) => {
  res.status(500).json({
    responseCode: "99",
    responseMessage: "Internal server error",
  });
});

//COMMENTS ROUTES
//Create comment endpoint
app.post("/api/v1/comments/create", async (req, res) => {
  try {
    //
    res.status(201).json({
      responseCode: "00",
      responseMessage: "Comment created successfully",
    });
  } catch (err) {
    console.log(err);
  }
});

//Get all comments endpoint
app.get("/api/v1/comments", async (req, res) => {
  try {
    //
    res.status(200).json({
      responseCode: "00",
      responseMessage: "Comments fetched successfully",
    });
  } catch (err) {
    console.log(err);
  }
});

//Get single comment endpoint
app.get("/api/v1/comments/:id", async (req, res) => {
  try {
    //
    res.status(200).json({
      responseCode: "00",
      responseMessage: "Comment fetched successfully",
    });
  } catch (err) {
    console.log(err);
  }
});

//Update comment endpoint
app.put("/api/v1/comments/:id", async (req, res) => {
  try {
    //
    res.status(200).json({
      responseCode: "00",
      responseMessage: "Comment updated successfully",
    });
  } catch (err) {
    console.log(err);
  }
});

//Delete comment endpoint
app.delete("/api/v1/comments/:id", async (req, res) => {
  try {
    //
    res.status(200).json({
      responseCode: "00",
      responseMessage: "Comment deleted successfully",
    });
  } catch (err) {
    console.log(err);
  }
});
