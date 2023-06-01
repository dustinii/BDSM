const { Review } = require('../models');

const reviewData = [
  {
    userId:,
    burgerId:,
    reviewDetails: '',
  },
  {
    userId:,
    burgerId:,
    reviewDetails: '',
  },
  {
    userId:,
    burgerId:,
    reviewDetails: '',
  },
  {
    userId:,
    burgerId:,
    reviewDetails: '',
  },
  {
    userId:,
    burgerId:,
    reviewDetails: '',
  },
  {
    userId:,
    burgerId:,
    reviewDetails: '',
  },
  {
    userId:,
    burgerId:,
    reviewDetails: '',
  },
  {
    userId:,
    burgerId:,
    reviewDetails: '',
  },
  {
    userId:,
    burgerId:,
    reviewDetails: '',
  },
  {
    userId:,
    burgerId:,
    reviewDetails: '',
  }
];

const seedReviews = () => Review.bulkCreate(reviewData);

module.exports = seedReviews;