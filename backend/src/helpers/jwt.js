const jwt = require("jsonwebtoken");

const tokenPrivateKey = "alkjsdhaskjdhasj";
const jwtRefresh = "18adasfgfg3098";

const option = { expiresIn: "30 days" };
const refreshOption = { expiresIn: "30 days" };

const gerenateJwt = (payload) => {
  return jwt.sign(payload, tokenPrivateKey, option);
};

const verifyJwt = (token) => {
  return jwt.verify(token, tokenPrivateKey);
};

const generateRefreshJwt = (payload) => {
  return jwt.sign(jwtRefresh, refreshOption);
};

const verifyRefreshJwt = (token) => {
  return jwt.verify(token, jwtRefresh);
};

module.exports = {
  gerenateJwt,
  generateRefreshJwt,
  verifyJwt,
  verifyRefreshJwt,
};
