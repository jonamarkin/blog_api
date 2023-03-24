//Create comment
const createComment = async (req, res) => {
  try {
    //
    res.status(201).json({
      responseCode: "00",
      responseMessage: "Comment created successfully",
    });
  } catch (err) {
    console.log(err);
  }
};
//Get all comments

const getAllComments = async (req, res) => {
  try {
    //

    res.status(200).json({
      responseCode: "00",

      responseMessage: "Comments fetched successfully",
    });
  } catch (err) {
    console.log(err);
  }
};

//Get single comment

const getSingleComment = async (req, res) => {
  try {
    //

    res.status(200).json({
      responseCode: "00",

      responseMessage: "Comment fetched successfully",
    });
  } catch (err) {
    console.log(err);
  }
};

//Update comment

const updateComment = async (req, res) => {
  try {
    //

    res.status(200).json({
      responseCode: "00",

      responseMessage: "Comment updated successfully",
    });
  } catch (err) {
    console.log(err);
  }
};

//Delete comment

const deleteComment = async (req, res) => {
  try {
    //

    res.status(200).json({
      responseCode: "00",

      responseMessage: "Comment deleted successfully",
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  createComment,
  getAllComments,
  getSingleComment,
  updateComment,
  deleteComment,
};
