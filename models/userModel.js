const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'User must have a name'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'User must have a password']
  },
  email: {
    type: String,
    required: [true, 'User must have an email'],
    unique: true,
    index: true
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
