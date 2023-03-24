const express = require("express");
require("dotenv").config();
require("./config/connectDB");
const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

//middleware
//routes

//Register user endpoint
app.post("/api/v1/users/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.create({
      name,
      email,
      password,
    });

    res.status(201).json({
      success: true,
      data: user,
      message: "User created successfully",
    });
  } catch (err) {
    console.log(err);
  }
});

//Login user endpoint
app.post("/api/v1/users/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    //check if user exists

    //check if password matches

    //create token

    //send token
  } catch (err) {
    console.log(err);
  }
});

//Get all users endpoint
app.get("/api/v1/users", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      success: true,
      data: users,
      message: "All users fetched successfully",
    });
  } catch (err) {
    console.log(err);
  }
});

//Get single user endpoint
app.get("/api/v1/users/:id", async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
  }
});

//Update user endpoint
app.put("/api/v1/users/:id", async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
  }
});

//Delete user endpoint
app.delete("/api/v1/users/:id", async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
  }
});

//error handling
app.use((err, req, res, next) => {
  res.status(500).json({
    success: false,
    error: err.message,
  });
});

//Create post endpoint
app.post("/api/v1/posts", async (req, res) => {
  try {
    //
  } catch (err) {
    console.log(err);
  }
});

//Get all posts endpoint
