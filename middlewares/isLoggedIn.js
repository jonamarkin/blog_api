const getTokenFromHeader = require("../utils/getTokenFromHeader");

const isLoggedIn = (req, res, next) => {
  const token = getTokenFromHeader(req);
  if (!token) {
    return res.status(401).json({
      responseCode: "01",
      responseMessage: "Unauthorized",
    });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    console.log(err);
    return res.status(401).json({
      responseCode: "01",
      responseMessage: "Unauthorized",
    });
  }
};
