const express = require("express");
//Import post controller
const {
    createPost,
    getAllPosts,
    getSinglePost,
    updatePost,
    deletePost,
} = require("../controllers/posts/postController");
const isLoggedIn = require("../middlewares/isLoggedIn");

const postRouter = express.Router();

//POST ROUTES
//Create post endpoint
postRouter.post("/create", isLoggedIn, createPost);

//Get all posts endpoint
postRouter.get("/", getAllPosts);

//Get single post endpoint
postRouter.get("/:id", getSinglePost);

//Update post endpoint
postRouter.put("/:id", isLoggedIn, updatePost);

//Delete post endpoint
postRouter.delete("/:id", isLoggedIn, deletePost);

module.exports = postRouter;