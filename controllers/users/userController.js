//Require the User model
const User = require("../../model/User/User");
const bcrypt = require("bcryptjs");

//Register a new user
const registerUser = async (req, res) => {
  const { firstName, lastName, email, password, avatar } = req.body;
  try {
    //Check if user exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({
        responseCode: "01",
        responseMessage: "User already exists",
      });
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
    console.log(err);
  }
};

//Login a user
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    //Check if email exists
    const userExists = await User.findOne({ email });
    if (!userExists) {
      return res.status(400).json({
        responseCode: "01",
        responseMessage: "User does not exist",
      });
    }
    // Check if password is correct
    const isPasswordCorrect = await bcrypt.compare(
      password,
      userExists.password
    );
    if (!isPasswordCorrect) {
      return res.status(400).json({
        responseCode: "01",
        responseMessage: "Password is incorrect",
      });
    }

    res.status(200).json({
      responseCode: "00",
      responseMessage: "User logged in successfully",
      responseData: userExists,
    });
  } catch (err) {
    console.log(err);
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
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(400).json({
        responseCode: "01",
        responseMessage: "User does not exist",
      });
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

//Exporting the registerUser function
module.exports = {
  registerUser,
  loginUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
};
