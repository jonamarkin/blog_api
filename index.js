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
app.post("/api/v1/users/login", async (req, res) => {
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
app.get("/api/v1/users", async (req, res) => {
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
app.get("/api/v1/users/:id", async (req, res) => {
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
app.put("/api/v1/users/:id", async (req, res) => {
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
app.delete("/api/v1/users/:id", async (req, res) => {
  try {
    res.status(200).json({
      responseCode: "00",
      responseMessage: "User deleted successfully",
    });
  } catch (err) {
    console.log(err);
  }
});

//error handling
app.use((err, req, res, next) => {
  res.status(500).json({
    responseCode: "99",
    responseMessage: "Internal server error",
  });
});

//POST ROUTES
//Create post endpoint
app.post("/api/v1/posts/create", async (req, res) => {
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
app.get("/api/v1/posts", async (req, res) => {
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
app.get("/api/v1/posts/:id", async (req, res) => {
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
app.put("/api/v1/posts/:id", async (req, res) => {
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
app.delete("/api/v1/posts/:id", async (req, res) => {
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

//CATEGORY ROUTES
//Create category endpoint
app.post("/api/v1/categories/create", async (req, res) => {
  try {
    //
    res.status(201).json({
      responseCode: "00",
      responseMessage: "Category created successfully",
    });
  } catch (err) {
    console.log(err);
  }
});

//Get all categories endpoint
app.get("/api/v1/categories", async (req, res) => {
  try {
    //
    res.status(200).json({
      responseCode: "00",
      responseMessage: "Categories fetched successfully",
    });
  } catch (err) {
    console.log(err);
  }
});

//Get single category endpoint
app.get("/api/v1/categories/:id", async (req, res) => {
  try {
    //
    res.status(200).json({
      responseCode: "00",
      responseMessage: "Category fetched successfully",
    });
  } catch (err) {
    console.log(err);
  }
});

//Update category endpoint
app.put("/api/v1/categories/:id", async (req, res) => {
  try {
    //
    res.status(200).json({
      responseCode: "00",
      responseMessage: "Category updated successfully",
    });
  } catch (err) {
    console.log(err);
  }
});

//Delete category endpoint
app.delete("/api/v1/categories/:id", async (req, res) => {
  try {
    //
    res.status(200).json({
      responseCode: "00",
      responseMessage: "Category deleted successfully",
    });
  } catch (err) {
    console.log(err);
  }
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
