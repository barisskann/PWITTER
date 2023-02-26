const User = require("../Models/User");

exports.getUsers = (req, res) => {
  User.findAll().then((r) => res.status(200).json(r));
};
