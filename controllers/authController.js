// Models
const User = require('../models/userModel');

const bcrypt = require('bcryptjs');

exports.signup = async (req, res, next) => {
  const { password, repeatPassword, username, email } = req.body;

  if (password === repeatPassword) {
    try {
      const hashpassword = await bcrypt.hash(password, 12);
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
    return res.status(400).json({
      status: 'fail',
      message: 'Passwords do not match'
    })
  }
  next();
};

// Login user
exports.login = async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username })

    if (user) {
      const passCorrect = await bcrypt.compare(password, user.password)
      if (passCorrect) {
        // Set user session
        req.session.user = user;

        res.status(200).json({
          status: 'success',
          message: 'User logged in'
        })
      } else {
        res.status(400).json({
          status: 'fail',
          message: 'Incorrect username or password'
        })
      }
    } else {
      return res.status(404).json({
        status: 'fail',
        message: 'User not found',
      })
    }

  } catch (err) {
    console.trace(err);
    res.status(500).json({ message: err.message })
  }
  next();
};