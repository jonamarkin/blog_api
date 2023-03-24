//Register a new user
const registerUser = async (req, res) => {
  try {
    // const { name, email, password } = req.body;
    // const user = await User.create({
    //   name,
    //   email,
    //   password,
    // });

    res.status(201).json({
      responseCode: "00",
      responseMessage: "User created successfully",
    });
  } catch (err) {
    console.log(err);
  }
};

//Login a user
const loginUser = async (req, res) => {
  try {
    // const { email, password } = req.body;

    //check if user exists

    //check if password matches

    //create token

    //send token

    res.status(200).json({
      responseCode: "00",
      responseMessage: "User logged in successfully",
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
  try {
    res.status(200).json({
      responseCode: "00",
      responseMessage: "User fetched successfully",
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
