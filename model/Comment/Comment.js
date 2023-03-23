const mongoose = require("mongoose");

//Create schema
const commentSchema = new mongoose.Schema({
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
    required: [true, "post is required"],
  },
  user: {
    type: Object,
    required: [true, "user is required"],
  },
});
