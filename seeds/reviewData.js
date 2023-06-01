const { Review } = require('../models');

const reviewData = [
  {
    name:'',
    burgerId: 1
  },
  {
    review:'',
  },
  {
    review:'',
  },
  {
    review:'',
  },
  {
    review:'',
  },
];

const seedReviews = () => Review.bulkCreate(reviewData);

module.exports = seedReviews;