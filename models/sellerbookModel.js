const mongoose = require('mongoose');

const sellerbookSchema = new mongoose.Schema({
  bookName: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
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
  soldBooks: {
    type: Number,
    default:0,
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

const SellerBook = mongoose.model('sellerbooks', sellerbookSchema);

module.exports = SellerBook;
