/* eslint-disable no-undef */
const ReviewModel = require('../models/reviewModel')

exports.createReview = async (req, res) => {
  const {reviewerName, reviewComment, reviewRating, reviewBookId} = req.body
  if (reviewRating >= 0 && reviewRating <= 10) {
    try {
      const newReview = new ReviewModel({
        reviewerName: reviewerName,
        reviewComment: reviewComment, 
        reviewRating: reviewRating,
        reviewBookId: reviewBookId
      })
      const insertedReview = await newReview.save()
      if (insertedReview) {
        return res.status(201).json({msg: 'Thanks for your review!'})
      } else {
        return res.status(500).json({msg: 'Something went wrong..'})
      }
    } catch (error) {
      return res.status(500).json({
        error: error.message
      })
    }
  } else {
    return res.status(400).json({
      msg: 'Your rating needs to be between 0-10'
    })
  }
}

exports.getReview = async (req, res) => {
  try {
    const bookReview = await ReviewModel.find({
      reviewBookId: req.params.bookId
    });
    return res.status(200).json(bookReview);
  } catch (error) {
    return res.status(500).json({
      error: error.message
    });
  }
};