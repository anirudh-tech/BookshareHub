const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // Basic email format check using regex
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  role: {
    type: String
  }
});

const User = mongoose.model('users', userSchema);

module.exports = User;
