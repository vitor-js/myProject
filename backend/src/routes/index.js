const express = require("express");
const routes = express.Router();

const UserController = require("../controller/usersController");
const AuthController = require("../controller/authController");

const validadeJwt = require("../middleware/jwt");

// Users
routes.post("/create-user", UserController.handleCreateUser);
// User Validade
routes.get("/user/:id", validadeJwt, UserController.handleGetUser);
routes.get("/createAdress/:id", validadeJwt, UserController.handleAddAddress);

//Auth
routes.post("/login", AuthController.SignIn);

routes.get("/home", validadeJwt, (req, res) => {
  return res.json({ data: "ok" });
});

module.exports = routes;
