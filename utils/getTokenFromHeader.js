//Get token from header
const getTokenFromHeader = (req) => {
  const authorization = req.headers.authorization;
  if (authorization && authorization.startsWith("Bearer")) {
    return authorization.split(" ")[1];
  }
  return null;
};

module.exports = getTokenFromHeader;
