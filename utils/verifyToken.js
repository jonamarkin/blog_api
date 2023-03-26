const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        responseCode: "01",
        responseMessage: "Unauthorized",
      });
    }
    return decoded;
  });
};

module.exports = verifyToken;
