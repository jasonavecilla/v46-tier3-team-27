const jwt = require("jsonwebtoken");
const { Unauthenticated } = require("../errors");

const authMiddleware = async (req, res, next) => {
  const authHeaders = req.headers.authorization;

  if (!authHeaders || !authHeaders.startsWith("Bearer ")) {
    throw new Unauthenticated("Invalid Token");
  }
  const token = authHeaders.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const isTestUser = decoded.userID === 17;
    // console.log(decoded);
    req.user = { id: decoded.userID, userName: decoded.userName, isTestUser };
    next();
  } catch (error) {
    throw new Unauthenticated(`Invalid or Expired Token`);
  }
};

module.exports = authMiddleware;
