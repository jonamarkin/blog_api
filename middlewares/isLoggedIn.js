const getTokenFromHeader = require("../utils/getTokenFromHeader");
const jwt = require("jsonwebtoken");
const verifyToken = require("../utils/verifyToken");
const appError = require("../utils/appError");

const isLoggedIn = (req, res, next) => {
  const token = getTokenFromHeader(req);
  if (!token) {
    next(appError("Unauthorized", 401));
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
    next(appError("Unauthorized", 401));
  }
};

module.exports = isLoggedIn;
