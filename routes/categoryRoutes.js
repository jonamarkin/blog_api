const express = require("express");
//Import category controller
const {
  createCategory,
  getAllCategories,
  getSingleCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/categories/categoryController");

const categoryRouter = express.Router();

//CATEGORY ROUTES
//Create category endpoint
categoryRouter.post("/create", createCategory);

//Get all categories endpoint
categoryRouter.get("/", getAllCategories);

//Get single category endpoint
categoryRouter.get("/:id", getSingleCategory);

//Update category endpoint
categoryRouter.put("/:id", updateCategory);

//Delete category endpoint
categoryRouter.delete("/:id", deleteCategory);

module.exports = categoryRouter;
