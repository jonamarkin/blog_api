const getTokenFromHeader = require("../utils/getTokenFromHeader");
const jwt = require("jsonwebtoken");
const verifyToken = require("../utils/verifyToken");
const appError = require("../utils/appError");
const user = require("../model/User/User");

const isAdmin = (req, res, next) => {
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

    //Check if user is admin
    user.findById(req.userId).then((user) => {
      if (!user.isAdmin) {
        next(appError(" Unauthorized - Not an admin", 401));
      }
    });

    next();
  } catch (err) {
    console.log(err);
    next(appError("Unauthorized", 401));
  }
};

module.exports = isAdmin;
