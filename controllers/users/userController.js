//Require the User model
const User = require("../../model/User/User");
const bcrypt = require("bcryptjs");
const generateToken = require("../../utils/generateToken");
const getTokenFromHeader = require("../../utils/getTokenFromHeader");
const jwt = require("jsonwebtoken");
const appError = require("../../utils/appError");
const upload = require("../../config/cloudinary");

//Register a new user
const registerUser = async (req, res, next) => {
  const { firstName, lastName, email, password, avatar } = req.body;
  try {
    //Check if user exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      next(appError("User already exists", 400));
    }

    //Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //If no user exists, create a new user
    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      avatar,
    });

    res.status(201).json({
      responseCode: "00",
      responseMessage: "User registered successfully",
      responseData: user,
    });
  } catch (err) {
    next(new Error(err));
  }
};

//Login a user
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    //Check if email exists
    const userExists = await User.findOne({ email });
    if (!userExists) {
      next(appError("User does not exist", 400));
    }
    // Check if password is correct
    const isPasswordCorrect = await bcrypt.compare(
      password,
      userExists.password
    );
    if (!isPasswordCorrect) {
      next(appError("Password is incorrect", 400));
    }

    res.status(200).json({
      responseCode: "00",
      responseMessage: "User logged in successfully",
      responseData: {
        firstName: userExists.firstName,
        lastName: userExists.lastName,
        email: userExists.email,
        avatar: userExists.avatar,
        token: generateToken(userExists._id),
      },
    });
  } catch (err) {
    //console.log(err.statusCode);
    console.log(new Error(err));
  }
};

//Get all users
const getAllUsers = async (req, res) => {
  try {
    //const users = await User.find();
    res.status(200).json({
      responseCode: "00",
      responseMessage: "Users fetched successfully",
    });
  } catch (err) {
    console.log(err);
  }
};

//Get single user
const getSingleUser = async (req, res) => {
  const loggedInUser = req.userId;
  try {
    const user = await User.findById(loggedInUser);
    if (!user) {
      next(appError("User does not exist", 400));
    }
    res.status(200).json({
      responseCode: "00",
      responseMessage: "User fetched successfully",
      responseData: user,
    });
  } catch (err) {
    console.log(err);
  }
};

//Update user
const updateUser = async (req, res) => {
  try {
    res.status(200).json({
      responseCode: "00",
      responseMessage: "User updated successfully",
    });
  } catch (err) {
    console.log(err);
  }
};

//Avatar upload
const avatarUpload = async (req, res, next) => {
  console.log(req.file);
  try {
    //Check if user exists
    const userExists = await User.findById(req.userId);
    if (!userExists) {
      next(appError("User does not exist", 400));
    }

    //Check if user is blocked
    if (userExists.isBlocked) {
      next(appError("User is blocked", 400));
    }

    //Upload avatar
    //Check if there is a file
    if (!req.file) {
      next(appError("Please upload an image", 400));
    }

    //Check if file is an image
    if (!req.file.mimetype.startsWith("image")) {
      next(appError("Please upload an image", 400));
    }

    //Find user by id and update avatar
    await User.findByIdAndUpdate(
      req.userId,
      {
        $set: { avatar: req.file.path },
      },
      {
        new: true,
      }
    );

    res.status(200).json({
      responseCode: "00",
      responseMessage: "Avatar uploaded successfully",
    });
  } catch (err) {
    next(appError(err.message, 500) || new Error(err));
  }
};

//Delete user
const deleteUser = async (req, res) => {
  try {
    res.status(200).json({
      responseCode: "00",
      responseMessage: "User deleted successfully",
    });
  } catch (err) {
    console.log(err);
  }
};

//Profile vieweers
const profileViewedBy = async (req, res, next) => {
  try {
    //Check if user exists
    const userExists = await User.findById(req.params.id);
    if (!userExists) {
      next(appError("User does not exist", 400));
    }

    //Get the user that is logged in
    const loggedInUser = await User.findById(req.userId);

    //check if the two users are the same
    if (userExists._id.toString() === loggedInUser._id.toString()) {
      //Don't add the user to the profile viewers
      return res.status(200).json({
        responseCode: "00",
        responseMessage: "You are viewing your own profile",
      });
    } else {
      //Check if user has viewed the profile before
      const hasViewed = userExists.viewers.find(
        (user) => user.toString() === loggedInUser._id.toString()
      );

      //If user has not viewed the profile before, add the user to the profile viewers
      if (!hasViewed) {
        //Add user to profile viewers
        userExists.viewers.push(loggedInUser._id);
        await userExists.save();

        res.status(200).json({
          responseCode: "00",
          responseMessage: "You have viewed this profile",
        });
      } else {
        res.status(200).json({
          responseCode: "00",
          responseMessage: "You have already viewed this profile",
        });
      }
    }
  } catch (err) {
    next(appError(err.message, 500) || new Error(err));
  }
};

//Follow user
const followUser = async (req, res, next) => {
  try {
    //Check if user exists
    const userExists = await User.findById(req.params.id);
    if (!userExists) {
      next(appError("User does not exist", 400));
    }

    //Get the user that is logged in
    const loggedInUser = await User.findById(req.userId);

    //check if the two users are the same
    if (userExists._id.toString() === loggedInUser._id.toString()) {
      //You cannot follow yourself
      return res.status(400).json({
        responseCode: "01",
        responseMessage: "You cannot follow yourself",
      });
    } else {
      //Check if user has followed the user before
      const hasFollowed = userExists.followers.find(
        (user) => user.toString() === loggedInUser._id.toString()
      );

      //If user has not followed the user before, add the user to the followers
      if (!hasFollowed) {
        //Add user to followers
        userExists.followers.push(loggedInUser._id);
        await userExists.save();

        //Add user to following
        loggedInUser.following.push(userExists._id);
        await loggedInUser.save();

        res.status(200).json({
          responseCode: "00",
          responseMessage: "You have followed this user",
        });
      } else {
        res.status(200).json({
          responseCode: "01",
          responseMessage: "You have already followed this user",
        });
      }
    }
  } catch (err) {
    next(appError(err.message, 500) || new Error(err));
  }
};

//Unfollow user
const unfollowUser = async (req, res, next) => {
  try {
    //Check if user exists
    const userExists = await User.findById(req.params.id);
    if (!userExists) {
      next(appError("User does not exist", 400));
    }

    //Get the user that is logged in
    const loggedInUser = await User.findById(req.userId);

    //check if the two users are the same
    if (userExists._id.toString() === loggedInUser._id.toString()) {
      //You cannot follow yourself
      return res.status(400).json({
        responseCode: "01",
        responseMessage: "You cannot unfollow yourself",
      });
    } else {
      //Check if user has followed the user before
      const hasFollowed = userExists.followers.find(
        (user) => user.toString() === loggedInUser._id.toString()
      );

      //If user has followed the user before, remove the user from the followers
      if (hasFollowed) {
        //Remove user from followers
        userExists.followers = userExists.followers.filter(
          (user) => user.toString() !== loggedInUser._id.toString()
        );
        await userExists.save();

        //Remove user from following
        loggedInUser.following = loggedInUser.following.filter(
          (user) => user.toString() !== userExists._id.toString()
        );
        await loggedInUser.save();

        res.status(200).json({
          responseCode: "00",
          responseMessage: "You have unfollowed this user",
        });
      } else {
        res.status(200).json({
          responseCode: "01",
          responseMessage: "You have not followed this user",
        });
      }
    }
  } catch (err) {
    next(appError(err.message, 500) || new Error(err));
  }
};

//Block user
const blockUser = async (req, res, next) => {
  try {
    //Check if user to be blocked exists
    const userToBeBlocked = await User.findById(req.params.id);
    if (!userToBeBlocked) {
      next(appError("User does not exist", 400));
    }

    //Get the user that is logged in
    const loggedInUser = await User.findById(req.userId);

    //check if the two users are the same
    if (userToBeBlocked._id.toString() === loggedInUser._id.toString()) {
      //You cannot block yourself
      return res.status(400).json({
        responseCode: "01",
        responseMessage: "You cannot block yourself",
      });
    } else {
      //Check if logged in user has blocked the user before before
      const hasBlocked = loggedInUser.blockedUsers.find(
        (user) => user.toString() === userToBeBlocked._id.toString()
      );

      //If user has not blocked the user before, add the user to the blocked users
      if (!hasBlocked) {
        //Add user to blocked users
        loggedInUser.blockedUsers.push(userToBeBlocked._id);
        await loggedInUser.save();

        res.status(200).json({
          responseCode: "00",
          responseMessage: "User blocked successfully",
        });
      } else {
        //Remove user from blocked users
        loggedInUser.blockedUsers = loggedInUser.blockedUsers.filter(
          (user) => user.toString() !== userToBeBlocked._id.toString()
        );
        await loggedInUser.save();

        res.status(200).json({
          responseCode: "00",
          responseMessage: "User unblocked successfully",
        });
      }
    }
  } catch (err) {
    appError(err.message, 500);
  }
};

//Exporting the registerUser function
module.exports = {
  registerUser,
  loginUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
  avatarUpload,
  profileViewedBy,
  followUser,
  unfollowUser,
  blockUser,
};
