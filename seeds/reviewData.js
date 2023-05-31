const { Review } = require('../models');

const reviewData = [
  {
    name:'',
    reviewDetails:'',
  },
  {
    name:'',
    reviewDetails:'',
  },
  {
    name:'',
    reviewDetails:'',
  },
  {
    name:'',
    reviewDetails:'',
  },
  {
    name:'',
    reviewDetails:'',
  },
];

const seedReviews = () => Review.bulkCreate(reviewData);

module.exports = seedReviews;