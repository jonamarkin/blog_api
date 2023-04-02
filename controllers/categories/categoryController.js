//Category model
const Category = require("../../model/Category/Category");
const User = require("../../model/User/User");

//Create category
const createCategory = async(req, res, next) => {
    const { title } = req.body;
    try {
        //Check for logged in user
        const userExists = await User.findById(req.userId);
        if (!userExists) {
            return res.status(404).json({
                responseCode: "01",
                responseMessage: "User not found",
            });
        }

        //Check if category exists
        const categoryExists = await Category.findOne({ title });
        if (categoryExists) {
            return res.status(409).json({
                responseCode: "01",
                responseMessage: "Category already exists",
            });
        }

        //Create category
        const category = await Category.create({
            title,
            user: userExists._id,
        });

        res.status(201).json({
            responseCode: "00",
            responseMessage: "Category created successfully",
            responseData: category,
        });
    } catch (err) {
        console.log(err);
    }
};
//Get all categories
const getAllCategories = async(req, res) => {
    try {
        //Fecth all categories
        const categories = await Category.find();
        if (!categories) {
            return res.status(404).json({
                responseCode: "01",
                responseMessage: "No categories found",
            });
        }

        res.status(200).json({
            responseCode: "00",
            responseMessage: "Categories fetched successfully",
            responseData: categories,
        });
    } catch (err) {
        console.log(err);
    }
};
//Get single category
const getSingleCategory = async(req, res) => {
    const { id } = req.params;
    try {
        //Find category
        const category = await Category.findById(id);
        if (!category) {
            return res.status(404).json({
                responseCode: "01",
                responseMessage: "Category not found",
            });
        }

        res.status(200).json({
            responseCode: "00",
            responseMessage: "Category fetched successfully",
            responseData: category,
        });
    } catch (err) {
        console.log(err);
    }
};
//Update category
const updateCategory = async(req, res) => {
    const { title } = req.body;
    const { id } = req.params;
    try {
        //Find category
        const category = await Category.findById(id);
        if (!category) {
            return res.status(404).json({
                responseCode: "01",
                responseMessage: "Category not found",
            });
        }

        //Update category
        category.title = title;
        await category.save();

        res.status(200).json({
            responseCode: "00",
            responseMessage: "Category updated successfully",
            responseData: category,
        });
    } catch (err) {
        console.log(err);
    }
};
//Delete category
const deleteCategory = async(req, res) => {
    try {
        //
        res.status(200).json({
            responseCode: "00",
            responseMessage: "Category deleted successfully",
        });
    } catch (err) {
        console.log(err);
    }
};

//Export modules
module.exports = {
    createCategory,
    getAllCategories,
    getSingleCategory,
    updateCategory,
    deleteCategory,
};