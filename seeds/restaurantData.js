const { Restaurant } = require('../models');

const restaurantData = [
  {
    name: 'Solar Flare Café',
    image: '',
    description: 'A fully stocked café with a menu as bright as the sun! However, you can (and are in fact, encouraged) to look directly at our café.',
  },
  {
    name: 'Event Horizon Diner',
    image: '',
    description: 'Be careful when you come to this diner. Once you cross the event horizon, you may never be able to go back!',
  },
  {
    name: 'Aurora Borealis Bistro',
    image: '',
    description: 'Bistros have never looked this good! Well, some have, but we are very confident that this one shines like the northern lights.',
  },
  {
    name: 'Black Hole Desserts',
    image: '',
    description: 'The name may be intimidating, but think of it this way... there is no way you can ignore our menu!',
  },
];

const seedRestaurants = () => Restaurant.bulkCreate(restaurantData);

module.exports = seedRestaurants;