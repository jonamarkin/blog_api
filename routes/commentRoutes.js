const express = require("express");
//Import comment controller
const {
  createComment,
  getAllComments,
  getSingleComment,
  updateComment,
  deleteComment,
} = require("../controllers/comments/commentsController");

const commentRouter = express.Router();

//COMMENTS ROUTES
//Create comment endpoint
commentRouter.post("/create", createComment);

//Get all comments endpoint
commentRouter.get("/", getAllComments);

//Get single comment endpoint
commentRouter.get("/:id", getSingleComment);

//Update comment endpoint
commentRouter.put("/:id", updateComment);

//Delete comment endpoint
commentRouter.delete("/:id", deleteComment);

module.exports = commentRouter;
