// A review data seed file with data for four sample reviews. Each review has a user id, burger id, and the text of the review itself.

const { Review } = require('../models');

const reviewData = [
  {
    user_id: 1,
    burger_id: 1,
    reviewDetails: 'The burgers here are AMAZING! Especially the Corona Burger, it literally deserves the crown.',
  },
  {
    user_id: 1,
    burger_id: 2,
    reviewDetails: 'The most delicous burger you\'ll ever eat! I totally recommend.',
  },
  {
    user_id: 1,
    burger_id: 3,
    reviewDetails: 'If you love spicy, I strongly recommend this burger. It is absolutely delicious, I will keep ordering this in the future.',
  },
  {
    user_id: 1,
    burger_id: 4,
    reviewDetails: 'My goodness it is a great burger! Also, the delivery service is amazing, my delivery space monkey was the best. Mikko, if you\'re reading this, you\'re the best!',
  },
];

const seedReviews = () => Review.bulkCreate(reviewData);

module.exports = seedReviews;