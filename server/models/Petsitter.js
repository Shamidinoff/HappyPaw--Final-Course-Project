const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');

const petsitterSchema = new mongoose.Schema({
  createdAt: {
    type: String,   
    default: Date.now,
  },
  name: {
    type: String,   
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
    unique: true,
  },
  experience: {
    type: Number,
    default: 0,
  },
  prepared: {
    type: Boolean,
    default: false,
  },
  verified: {
    type: Boolean,
    default: false,
  },
  desc: {
    type: String,
  },
  avatars: [{
    type: String,
  }],
  overstaying: {
    type: Number,
    default: 0,
  },
  walk: {
    type: Number,
    default: 0,
  },
  rating: {
    star: {
      type: Number,
      default: 0,
    },
    reviewCount: {
      type: Number,
      default: 0,
    }
  }, 
  price: {
    petSitting: {
      type: Number,
      default: 0,
    },
    daytimePet: {
      type: Number,
      default: 0,
    },
    dogWalk: {
      type: Number,
      default: 0,
    }
  },
  petAccept: [{
    petType: {
      type: String,
    },
    petWeight: {
      type: String,
    },
  }],
  livConditions: [{
    type: String,
  }],
  onlineTime: {
    type: String,
  },
  replyTime: {
    type: String,
  },
  petImgs: [{
    type: String,
  }],
  reviews: [{
    type: String,
  }],

}, { timestamps: true });

module.exports = mongoose.model('Petsitter', petsitterSchema);

