// Models
const User = require('../models/userModel');

const bcrypt = require('bcryptjs');

exports.signup = async (req, res, next) => {
  const { password, repeatPassword, username, email } = req.body;

  if (password === repeatPassword) {
    const hashpassword = await bcrypt.hash(password, 12);

    try {
      const newUser = await User.create({
        username: username,
        password: hashpassword,
        email: email,
      })
      console.log(newUser)
      if (newUser) {
        res.status(201).json({
          status: 'success',
          data: {
            newUser
          }
        })
      } else {
        res.status(400).json({
          status: 'fail',
          message: 'User not created',
        })
      }
    } catch (err) {
      console.trace(err);
      res.status(500).json({ message: err.message })
    }
  } else {
    res.status(400).json({
      status: 'fail',
      message: 'Passwords do not match'
    })
  }

  next();
};