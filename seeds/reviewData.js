const { Review } = require('../models');

const reviewData = [
  {
    userId: 1,
    burgerId: 1,
    reviewDetails: 'The burgers here are AMAZING! Especially the Corona Burger, it literally deserves the crown.',
  },
  {
    userId: 1,
    burgerId: 2,
    reviewDetails: 'The most delicous burger you\'ll ever eat! I totally recommend.',
  },
  {
    userId: 1,
    burgerId: 3,
    reviewDetails: 'If you love tuna, I strongly recommend this burger. It is absolutely delicious, I will keep ordering this in the future. ',
  },
  {
    userId: 1,
    burgerId: 4,
    reviewDetails: 'Mexican ingredients on a burger, my goodness it is a great burger! Also, the delivery service is amazing, my delivery space monkey was the best. Mikko, if you\'re reading this, you\'re the best!',
  },
];

const seedReviews = () => Review.bulkCreate(reviewData);

module.exports = seedReviews;