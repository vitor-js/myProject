//# Packages
const bcrypt = require("bcrypt");

//# Models
const User = require("../models/User");

//# Helpers
const Result = require("../helpers/handleErros");
const {
  gerenateJwt,
  generateRefreshJwt,
  verifyJwt,
  verifyRefreshJwt,
} = require("../helpers/jwt");

//# Init Functions
const result = new Result();

module.exports = {
  async SignIn(req, res) {
    const { email, password } = req.body;

    const account = await User.findOne({ where: { email } });
    if (!account) {
      return res.json(result.jsonBadRequest("User not Exist"));
    }

    const match = bcrypt.compare(password, account.password);
    if (!match) {
      return res.json(result.jsonBadRequest("User not Exist"));
    }

    const token = gerenateJwt({ id: account.id });
    const refreshToken = gerenateJwt({ id: account.id });
    const data = {
      token,
      refreshToken,
    };

    return res.json(result.jsonOk(data));
  },
};
