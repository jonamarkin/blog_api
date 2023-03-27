//Create post
const createPost = async(req, res) => {
    try {
        //
        res.status(201).json({
            responseCode: "00",
            responseMessage: "Post created successfully",
        });
    } catch (err) {
        console.log(err);
    }
};

//Get all posts
const getAllPosts = async(req, res) => {
    try {
        //
        res.status(200).json({
            responseCode: "00",
            responseMessage: "Posts fetched successfully",
        });
    } catch (err) {
        console.log(err);
    }
};

//Get single post
const getSinglePost = async(req, res) => {
    try {
        //
        res.status(200).json({
            responseCode: "00",
            responseMessage: "Post fetched successfully",
        });
    } catch (err) {
        console.log(err);
    }
};

//Update post
const updatePost = async(req, res) => {
    try {
        //
        res.status(200).json({
            responseCode: "00",
            responseMessage: "Post updated successfully",
        });
    } catch (err) {
        console.log(err);
    }
};

//Delete post
const deletePost = async(req, res) => {
    try {
        //
        res.status(200).json({
            responseCode: "00",
            responseMessage: "Post deleted successfully",
        });
    } catch (err) {
        console.log(err);
    }
};

module.exports = {
    createPost,
    getAllPosts,
    getSinglePost,
    updatePost,
    deletePost,
};