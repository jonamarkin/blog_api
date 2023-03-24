const express = require("express");

const postRouter = express.Router();

//POST ROUTES
//Create post endpoint
postRouter.post("/api/v1/posts/create", async (req, res) => {
  try {
    //
    res.status(201).json({
      responseCode: "00",
      responseMessage: "Post created successfully",
    });
  } catch (err) {
    console.log(err);
  }
});

//Get all posts endpoint
postRouter.get("/api/v1/posts", async (req, res) => {
  try {
    //
    res.status(200).json({
      responseCode: "00",
      responseMessage: "Posts fetched successfully",
    });
  } catch (err) {
    console.log(err);
  }
});

//Get single post endpoint
postRouter.get("/api/v1/posts/:id", async (req, res) => {
  try {
    //
    res.status(200).json({
      responseCode: "00",
      responseMessage: "Post fetched successfully",
    });
  } catch (err) {
    console.log(err);
  }
});

//Update post endpoint
postRouter.put("/api/v1/posts/:id", async (req, res) => {
  try {
    //
    res.status(200).json({
      responseCode: "00",
      responseMessage: "Post updated successfully",
    });
  } catch (err) {
    console.log(err);
  }
});

//Delete post endpoint
postRouter.delete("/api/v1/posts/:id", async (req, res) => {
  try {
    //
    res.status(200).json({
      responseCode: "00",
      responseMessage: "Post deleted successfully",
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = postRouter;
