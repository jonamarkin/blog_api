const mongoose = require("mongoose");

//Create schema
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "title is required"],
        trim: true,
    },
    description: {
        type: String,
        required: [true, "description is required"],
    },
    category: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        // required: [true, "category is required"],
    }, ],

    numViews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }, ],

    numLikes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }, ],

    numDislikes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }, ],

    user: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "Author is required"],
    }, ],

    photo: {
        type: String,
        // required: [true, "photo is required"],
    },
}, {
    timestamps: true,
});

//Create model
const Post = mongoose.model("Post", postSchema);

//Export model
module.exports = Post;