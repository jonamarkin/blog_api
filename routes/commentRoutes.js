const express = require("express");

const commentRouter = express.Router();

//COMMENTS ROUTES
//Create comment endpoint
commentRouter.post("/create", async (req, res) => {
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
commentRouter.get("/", async (req, res) => {
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
commentRouter.get("/:id", async (req, res) => {
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
commentRouter.put("/:id", async (req, res) => {
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
commentRouter.delete("/:id", async (req, res) => {
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

module.exports = commentRouter;
