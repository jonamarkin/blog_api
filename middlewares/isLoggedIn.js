const getTokenFromHeader = require("../utils/getTokenFromHeader");
const jwt = require("jsonwebtoken");
const verifyToken = require("../utils/verifyToken");

const isLoggedIn = (req, res, next) => {
  const token = getTokenFromHeader(req);
  if (!token) {
    return res.status(401).json({
      responseCode: "01",
      responseMessage: "Unauthorized",
    });
  }
  try {
    const decodedUser = verifyToken(token);
    // console.log(decodedUser);
    // console.log(decodedUser.id);
    req.userId = decodedUser.id;
    // console.log(req.userId);
    next();
  } catch (err) {
    console.log(err);
    return res.status(401).json({
      responseCode: "01",
      responseMessage: "Unauthorized",
    });
  }
};

module.exports = isLoggedIn;
