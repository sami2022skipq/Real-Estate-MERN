const User = require("../models/user.model.js");
const bcrypt = require('bcrypt')

const auth = async (req, res) => {
  const { name, email, password } = req.body;
  const hashPassword = bcrypt.hashSync(password, 10)
  const newUser = new User({ name, email, password:hashPassword });
  try {
    await newUser.save()
    res.status(201).json("User created successfully");
  } catch (error) {

    res.status(500).json(error.message)
    
  }
};

module.exports = auth;
