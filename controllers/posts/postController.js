//Post model
const Post = require("../../model/Post/Post");

//User model
const User = require("../../model/User/User");
//Create post
const createPost = async(req, res, next) => {
    const { title, description } = req.body;
    try {
        //Check if logged in user exists
        const userExists = await User.findById(req.userId);

        if (!userExists) {
            return res.status(404).json({
                responseCode: "01",
                responseMessage: "User not found",
            });
        }

        //Create post
        const post = await Post.create({
            title,
            description,
            user: userExists._id,
        });

        //Add post to user's posts
        userExists.posts.push(post._id);
        await userExists.save();

        res.status(201).json({
            responseCode: "00",
            responseMessage: "Post created successfully",
            responseData: post,
        });
    } catch (err) {
        console.log(err);
        next(new Error(err));
    }
};

//Get all posts
const getAllPosts = async(req, res) => {
    try {
        //
        res.status(200).json({
            responseCode: "00",
            responseMessage: "Posts fetched successfully",
            //responseData: post,
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