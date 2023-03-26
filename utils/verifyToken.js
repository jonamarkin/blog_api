const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return new Error(err);
    }
    return decoded;
  });
};

module.exports = verifyToken;
