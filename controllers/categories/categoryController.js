//Create category
const createCategory = async (req, res) => {
  try {
    //
    res.status(201).json({
      responseCode: "00",
      responseMessage: "Category created successfully",
    });
  } catch (err) {
    console.log(err);
  }
};
//Get all categories
const getAllCategories = async (req, res) => {
  try {
    //
    res.status(200).json({
      responseCode: "00",
      responseMessage: "Categories fetched successfully",
    });
  } catch (err) {
    console.log(err);
  }
};
//Get single category
const getSingleCategory = async (req, res) => {
  try {
    //
    res.status(200).json({
      responseCode: "00",
      responseMessage: "Category fetched successfully",
    });
  } catch (err) {
    console.log(err);
  }
};
//Update category
const updateCategory = async (req, res) => {
  try {
    //
    res.status(200).json({
      responseCode: "00",
      responseMessage: "Category updated successfully",
    });
  } catch (err) {
    console.log(err);
  }
};
//Delete category
const deleteCategory = async (req, res) => {
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
