//# Helpers
const Result = require("../helpers/handleErros");
const { verifyJwt } = require("../helpers/jwt");

//# Init Functions
const result = new Result();

const checkJwt = (req, res, next) => {
  let token = req.headers["authorization"];
  token = token ? token.slice(7, token.length) : null;

  if (!token) {
  }
  try {
    const decoded = verifyJwt(token);
    req.accountId = decoded.id;
    next();
  } catch (err) {
    return res.json(result.jsonUnathorized("invalid token"));
  }
};

module.exports = checkJwt;
