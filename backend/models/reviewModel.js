/* eslint-disable no-undef */
const mongoose = require('mongoose')

const ReviewSchema = new mongoose.Schema({
  reviewerName: {
    type: String,
    required: true
  },
  reviewComment: {
    type: String,
    required: true
  },
  reviewRating: {
    type: Number,
    required: true
  }, 
  reviewBookId: {
    type: Number, 
    required: true
  }
})


const ReviewModel = mongoose.model('bookReview', ReviewSchema);

module.exports = ReviewModel;