const express = require("express");
const upload = require("../config/cloudinary");
//Import user controller
const {
  registerUser,
  loginUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
  avatarUpload,
  profileViewedBy,
  followUser,
  unfollowUser,
  blockUser,
} = require("../controllers/users/userController");
const isLoggedIn = require("../middlewares/isLoggedIn");
const userRouter = express.Router();

//Register user endpoint
userRouter.post("/register", registerUser);

//Login user endpoint
userRouter.post("/login", loginUser);

//Get all users endpoint
userRouter.get("/", getAllUsers);

//Get single user endpoint
userRouter.get("/profile", isLoggedIn, getSingleUser);

//Update user endpoint
userRouter.put("/:id", updateUser);

//Delete user endpoint
userRouter.delete("/:id", deleteUser);

//Avatar upload endpoint
userRouter.post("/avatar", isLoggedIn, upload.single("avatar"), avatarUpload);

//Profile viewed by
userRouter.get("/profile/:id", isLoggedIn, profileViewedBy);

//Follow user
userRouter.post("/follow/:id", isLoggedIn, followUser);

//Unfollow user
userRouter.post("/unfollow/:id", isLoggedIn, unfollowUser);

//Block user
userRouter.post("/block/:id", isLoggedIn, blockUser);

module.exports = userRouter;
