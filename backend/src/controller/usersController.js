//# Models
const User = require("../models/User");

//# Helpers
const Result = require("../helpers/handleErros");
const hash = require("../helpers/hash");

//# Init Functions
const result = new Result();

module.exports = {
  async handleGetUser(req, res) {
    const { user_id } = req.params;
    try {
      const account = await User.findByPk(user_id);
      if (!account) {
        return res.json(result.jsonBadRequest("User not Exist"));
      }
      return res.json(result.jsonOk(account));
    } catch (err) {
      return res.json(result.jsonServerError());
    }
  },
  async handleCreateUser(req, res) {
    const { name, email, password } = req.body;
    const passwordHash = await hash.passwordHash(password);

    const user = {
      name: name,
      email: email,
      password: passwordHash,
    };

    const userExist = await User.findOne({ where: { email: user.email } });
    if (userExist) {
      return res.json(result.jsonBadRequest("User already exists"));
    }

    try {
      const newUser = await User.create(user);
      return res.json(result.jsonOk(newUser));
    } catch (err) {
      return res.json(result.jsonBadRequest());
    }
  },
  async handleAddAddress(req, res) {
    const { zipcode, street, number, user_id } = req.body;

    try {
      const user = await User.findByPk(user_id);
      if (!user) {
        return res.status(400).json({ error: "User not found" });
      }
      const address = await Address.create({
        zipcode,
        street,
        number,
        user_id,
      });
      return res.json(result.jsonOk(address));
    } catch (err) {
      return res.json(result.jsonServerError());
    }
  },
};
