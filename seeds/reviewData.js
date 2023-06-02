const { Review } = require('../models');

const reviewData = [
  {
    userId: 1,
    burgerId: 1,
    reviewDetails: 'The burgers here are AMAZING! Especially the Corona Burger, it literally deserves the crown.',
  },
  {
    userId: 2,
    burgerId: 10,
    reviewDetails: 'The most delicous burger you\'ll ever eat! I totally recommend.',
  },
  {
    userId: 3,
    burgerId: 23,
    reviewDetails: 'If you love tuna, I strongly recommend this burger. It is absolutely delicious, I will keep ordering this in the future. ',
  },
  {
    userId: 4,
    burgerId: 18,
    reviewDetails: 'Mexican food in a burger, my goodness it is a great burger! Also, the delivery service is amazing! My delivery space monkey was the best. Mikka, if you\'re reading this, you\'re the best!',
  },
];

const seedReviews = () => Review.bulkCreate(reviewData);

module.exports = seedReviews;