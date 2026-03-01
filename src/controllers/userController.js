const User = require('../models/user');

const getAll = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

const create = async (req, res) => {
  const user = await User.create(req.body);
  res.status(201).json(user);
};

module.exports = { getAll, create };