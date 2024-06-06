/* eslint-disable no-undef */
const express = require('express')
const router = express.Router()
const reviewController = require('../controllers/reviewController')

router.post('/api/reviews/createreview', reviewController.createReview)
router.get('/api/reviews/getreviews/:bookId', reviewController.getReview)

module.exports = router