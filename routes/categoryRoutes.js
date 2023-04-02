const express = require("express");
//Import category controller
const {
    createCategory,
    getAllCategories,
    getSingleCategory,
    updateCategory,
    deleteCategory,
} = require("../controllers/categories/categoryController");
const isLoggedIn = require("../middlewares/isLoggedIn");

const categoryRouter = express.Router();

//CATEGORY ROUTES
//Create category endpoint
categoryRouter.post("/create", isLoggedIn, createCategory);

//Get all categories endpoint
categoryRouter.get("/all", getAllCategories);

//Get single category endpoint
categoryRouter.get("/:id", getSingleCategory);

//Update category endpoint
categoryRouter.put("/:id", isLoggedIn, updateCategory);

//Delete category endpoint
categoryRouter.delete("/:id", isLoggedIn, deleteCategory);

module.exports = categoryRouter;