const express = require("express");

const categoryRouter = express.Router();

//CATEGORY ROUTES
//Create category endpoint
categoryRouter.post("/create", async (req, res) => {
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
categoryRouter.get("/", async (req, res) => {
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
categoryRouter.get("/:id", async (req, res) => {
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
categoryRouter.put("/:id", async (req, res) => {
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
categoryRouter.delete("/:id", async (req, res) => {
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

module.exports = categoryRouter;
