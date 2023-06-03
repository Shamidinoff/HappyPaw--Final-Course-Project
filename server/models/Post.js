const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  postImage: {
    type: String,
  },
  createdAt: {
    type: String,   
    default: Date.now,
  },
  like: {
    type: Number,
    default: 0,
  },
  title: {
    type: String,
    required: true,
    unique: true,
  },
  content: [{
    type: String,
    required: true,
  }],
  questions: [{
    type: String,
  }],
  arguments: [{
    type: String,
  }]
}, { timestamps: true });

module.exports = mongoose.model('Post', postSchema);