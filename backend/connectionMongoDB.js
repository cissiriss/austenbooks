/* eslint-disable no-undef */
const mongoose = require('mongoose')

const connectionMongoDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/bookReview')
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

module.exports = connectionMongoDB