// Models
const User = require('../models/userModel');

exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    if (users) {
      console.log(users);
      res.status(200).json({
        status: 'success',
        results: users.length,
        data: {
          users
        }
      })
    } else {
      res.status(404).json({
        status: 'fail',
        message: 'No user found',
      })
    }
  } catch (err) {
    console.trace(err);
    res.status(500).json({ message: err.message })
  }
  next();
};