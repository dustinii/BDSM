// Seed file for restaurant data, with each restaurant having a name, image, and description. There are a total of six restaurants.

const { Restaurant } = require('../models');

const restaurantData = [
  {
    name: 'Solar Flare Café',
    image: '/images/restaurants/SolarFlareCafe.jpg',
    description: 'A fully stocked café with a menu as bright as the sun! However, you can (and are in fact, encouraged) to look directly at our café.',
  },
  {
    name: 'Event Horizon Diner',
    image: '/images/restaurants/EventHorizonDiner.jpg',
    description: 'Be careful when you come to this diner. Once you cross the event horizon, you may never be able to go back!',
  },
  {
    name: 'Aurora Borealis Bistro',
    image: '/images/restaurants/AuroraBorealisBistro.jpg',
    description: 'Bistros have never looked this good! Well, some have, but we are very confident that this one shines like the northern lights.',
  },
  {
    name: 'Black Hole Desserts',
    image: '/images/restaurants/BlackHoleDesserts.jpg',
    description: 'The name may be intimidating, but think of it this way... there is no way you can ignore our menu!',
  },
  {
    name: 'Stargrazers Grille',
    image: '/images/restaurants/StarGrazersGrille.jpg',
    description: 'At the heart of the Milky Way, StarGrazers Grille is a one-stop cosmic feast. Here, earthly desires meet celestial delights to create an unforgettable gastronomic experience.'
  },
  {
    name: 'Galactic Grub',
    image: '/images/restaurants/GalacticGrub.jpg',
    description: 'Orbiting around Saturn\'s rings, the Galactic Grillhouse offers interplanetary patrons a taste of the infinite, with burgers inspired by galaxies far, far away.'
  }
];

const seedRestaurants = () => Restaurant.bulkCreate(restaurantData);

module.exports = seedRestaurants;