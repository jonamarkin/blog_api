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
    //Check if decodedUser is an error
    if (decodedUser instanceof Error) {
      next(appError("Unauthorized", 401));
    }

    req.userId = decodedUser.id;
    next();
  } catch (err) {
    console.log(err);
    next(appError("Unauthorized", 401));
  }
};

module.exports = isLoggedIn;
