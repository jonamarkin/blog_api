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

module.exports = userRouter;
