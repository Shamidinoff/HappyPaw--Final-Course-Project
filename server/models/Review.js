const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  createdAt: {
    type: String,   
    default: Date.now,
  },
  userName: {
    type: String,
    required: true,
  },
  star: {
    type: Number,
    default: 0,
  },
  comment: {
    type: String,
    required: true,
    unique: true,
  },
  userId: {
    type: String,
  },
}, { timestamps: true });

module.exports = mongoose.model('Review', reviewSchema);