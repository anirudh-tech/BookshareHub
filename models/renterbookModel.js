const mongoose = require('mongoose');

const renterbookSchema = new mongoose.Schema({
  bookName: {
    type: String,
    required: true,
    trim: true,
  },
  rent: {
    type:Number,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    default: 0,
  },
  rentedBooks: {
    type: Number
  },
  status: {
    type: String,
    default:"active"
  },
  addedDate: {
    type: Date,
    default: Date.now,
  }
});

const RenterBook = mongoose.model('renterbooks', renterbookSchema);

module.exports = RenterBook;
