const express = require("express");

const userRouter = express.Router();

//Register user endpoint
userRouter.post("/api/v1/users/register", async (req, res) => {
  try {
    // const { name, email, password } = req.body;
    // const user = await User.create({
    //   name,
    //   email,
    //   password,
    // });

    res.status(201).json({
      responseCode: "00",
      responseMessage: "User created successfully",
    });
  } catch (err) {
    console.log(err);
  }
});

//Login user endpoint
userRouter.post("/api/v1/users/login", async (req, res) => {
  try {
    // const { email, password } = req.body;

    //check if user exists

    //check if password matches

    //create token

    //send token

    res.status(200).json({
      responseCode: "00",
      responseMessage: "User logged in successfully",
    });
  } catch (err) {
    console.log(err);
  }
});

//Get all users endpoint
userRouter.get("/api/v1/users", async (req, res) => {
  try {
    //const users = await User.find();
    res.status(200).json({
      responseCode: "00",
      responseMessage: "Users fetched successfully",
    });
  } catch (err) {
    console.log(err);
  }
});

//Get single user endpoint
userRouter.get("/api/v1/users/:id", async (req, res) => {
  try {
    res.status(200).json({
      responseCode: "00",
      responseMessage: "User fetched successfully",
    });
  } catch (err) {
    console.log(err);
  }
});

//Update user endpoint
userRouter.put("/api/v1/users/:id", async (req, res) => {
  try {
    res.status(200).json({
      responseCode: "00",
      responseMessage: "User updated successfully",
    });
  } catch (err) {
    console.log(err);
  }
});

//Delete user endpoint
userRouter.delete("/api/v1/users/:id", async (req, res) => {
  try {
    res.status(200).json({
      responseCode: "00",
      responseMessage: "User deleted successfully",
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = userRouter;
