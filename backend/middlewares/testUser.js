const { BadRequest } = require("../errors");

const testUser = async (req, res, next) => {
  if (req.user.isTestUser) {
    throw new BadRequest("Test User, Read Only!");
  }
  next;
};

module.exports = testUser;
