// This file contains seed data for burgers that customers can order, along with their respective restaurant IDs. There are six restaurants with four burgers at each restaurant, for a total of 24 burgers.

const { Burger } = require('../models');

const burgerData = [
  {
    name: 'Corona Burger',
    image: '/images/burgers/CoronaBurger.jpg',
    burgerDetails: 'Don\'t think of the beer, the city in the Inland Empire, or that despicable virus. This burger is the crown prince of burgers, as well as the crown jewel of the Solar Flare Café\'s.',
    restaurantId: 1
  },
  {
    name: 'Photosphere Burger',
    image: '/images/burgers/PhotosphereBurger.jpg',
    burgerDetails: 'A picture-perfect appearance and a delightfully brilliant taste make for a burger that is a winner for our space monkey delivery team and our esteemed customers as well.',
    restaurantId: 1
  },
  {
    name: 'Spicy Supernova Burger',
    image: '/images/burgers/SpicySupernovaBurger.jpg',
    burgerDetails: 'Celestial Chicken patty, Supernova spicy sauce, Interstellar iceberg lettuce, Cosmic coleslaw.',
    restaurantId: 1
  },
  {
    name: 'Rocket Reuben',
    image: '/images/burgers/RocketReuben.jpg',
    burgerDetails: 'Beef patty, Cosmic corned beef, Rocket Russian dressing, Lunar sauerkraut.',    
    restaurantId: 1
  },
  {
    name: 'Escape Velocity Burger',
    image: '/images/burgers/EscapeVelocityBurger.jpg',
    burgerDetails: 'Savory spices and an touch of spice that\'s enough to fuel your escape all the way to the Event Horizon Diner\'s signature burger!',
    restaurantId: 2
  },
  {
    name: 'Terrestrial Turkey Burger',
    image: '/images/burgers/TerrestrialTurkey.jpg',
    burgerDetails: 'Turkey patty, Terrestrial Thousand Island dressing, Interstellar iceberg lettuce, Moon mayo.',
    restaurantId: 2
  },
  {
    name: 'Alien Avocado Burger',
    image: '/images/burgers/AlienAvocado.jpg',
    burgerDetails: 'Vegan patty, Alien avocado, Cosmic coleslaw, Rocket red onions.',
    restaurantId: 2
  },
  {
    name: 'Big Bang Bison',
    image: '/images/burgers/BigBangBison.jpg',
    burgerDetails: 'Bison patty, Big Bang BBQ sauce, Cosmic caramelized onions, Moon Monterey Jack.',
    restaurantId: 2
  },
  {
    name: 'Constellation Caprese',
    image: '/images/burgers/ConstellationCaprese.jpg',
    burgerDetails: 'Chicken patty, Constellation caprese salad, Mars balsamic glaze, Rocket red onions.',
    restaurantId: 3
  },
  {
    name: 'Galactic Greek',
    image: '/images/burgers/GalacticGreek.jpg',
    burgerDetails: 'Lamb patty, Feta from a far-off galaxy, Cosmic cucumber, Rocket red onions, Andromeda aioli.',
    restaurantId: 3
  },
  {
    name: 'Space Station Stroganoff',
    image: '/images/burgers/SpaceStationStroganoff.jpg',
    burgerDetails: 'Beef patty, Space Station sour cream, Solar sautéed mushrooms, Cosmic caramelized onions.',
    restaurantId: 3
  },
  {
    name: 'Starlight Swiss',
    image: '/images/burgers/StarlightSwiss.jpg',
    burgerDetails: 'Chicken patty, Starlight Swiss cheese, Cosmic cucumber, Solar Sriracha mayo.',
    restaurantId: 3
  },
  {
    name: 'White Dwarf Wasabi',
    image: '/images/burgers/WhiteDwarfWasabi.jpg',
    burgerDetails: 'Tuna patty, White Dwarf wasabi mayo, Cosmic coleslaw, Interstellar iceberg lettuce.',
    restaurantId: 4
  },
  {
    name: 'Spacetime Salmon',
    image: '/images/burgers/SpacetimeSalmon.jpg',
    burgerDetails: 'Salmon patty, Spacetime soy glaze, Cosmic coleslaw, Orion onions.',
    restaurantId: 4
  },
  {
    name: 'Lunar Eclispe Lamb',
    image: '/images/burgers/LunarEclipseLamb.jpg',
    burgerDetails: 'Moondust-spiced lamb, solar salsa, cosmic cucumber yogurt sauce.',
    restaurantId: 4
  },
  {
    name: 'Neptune Noodle Burger',
    image: '/images/burgers/NeptuneNoodleBurger.jpg',
    burgerDetails: 'Noodle "bun", solar-seared tofu, lunar lotus root, Andromeda Asian slaw.',
    restaurantId: 4
  },
  {
    name:'Galaxy Glider',
    image: '/images/burgers/GalaxyGlider.jpg',
    burgerDetails: 'Beef patty, galaxy blue cheese, caramelized Milky Way onions, Saturn onion rings, Mars-malade sauce.',
    restaurantId: 5
  },
  {
    name:'Nebula Nacho Burger',
    image: '/images/burgers/NebulaNachoBurger.jpg',
    burgerDetails: 'Black bean burger, Nebula nacho cheese, cosmic corn salsa, jalapenos.',
    restaurantId: 5
  },
  {
    name:'Comet Crunch',
    image: '/images/burgers/CometCrunch.jpg',
    burgerDetails: 'Chicken burger, Comet\'s crispy lettuce, spicy solar slaw, moon mustard.',
    restaurantId: 5
  },
  {
    name:'Pulsar Pulled Pork',
    image: '/images/burgers/PulsarPulledPork.jpg',
    burgerDetails: 'Pulled pork, coleslaw, Pulsar pickle, Andromeda Aioli.',
    restaurantId: 5
  },
  {
    name: 'Uranus Ultimate Umami Burger',
    image: '/images/burgers/UranusUltimateUmamiBurger.jpg',
    burgerDetails: 'Beef patty, Solar shiitake mushrooms, Venus\'s vintage cheddar, Cosmic caramelized onions.',
    restaurantId: 6
  },
  {
    name: 'Pluto\'s Pork Burger',
    image: '/images/burgers/PlutosPorkBurger.jpg',
    burgerDetails: 'Pluto pork patty, asteroid apple slaw, cosmic cheddar, black hole BBQ sauce.',
    restaurantId: 6
  },
  {
    name: 'Andromeda Ahi Tuna',
    image: '/images/burgers/AndromedaAhiTuna.jpg',
    burgerDetails: 'Nebula-seared tuna, cosmic coleslaw, celestial caper mayo.',
    restaurantId: 6
  },
  {
    name: 'Cosmic Crab Cake',
    image: '/images/burgers/CosmicCrabCake.jpg',
    burgerDetails: 'Star-shaped crab cakes, cosmic coleslaw, Venusian vegetable tartar sauce.',
    restaurantId: 6
  }
];

const seedBurgers = () => Burger.bulkCreate(burgerData);

module.exports = seedBurgers;