const mongoose = require("mongoose");

//Create schema
const categorySchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "user is required"],
    },
    title: {
      type: String,
      required: [true, "title is required"],
      trim: true,
    },
  },
  { timestamps: true }
);

//Create model
const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
