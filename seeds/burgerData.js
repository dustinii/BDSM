const { Burger } = require('../models');

const burgerData = [
  {
    name: 'Corona Burger',
    image: '',
    burgerDetails: 'Don\'t think of the beer, the city in the Inland Empire, or that despicable virus. This burger is the crown prince of burgers, as well as the crown jewel of the Solar Flare Café\'s.',
    restaurantId: 1
  },
  {
    name: 'Photosphere Burger',
    image: '',
    burgerDetails: 'A picture-perfect appearance and a delightfully brilliant taste make for a burger that is a winner for our space monkey delivery team and our esteemed customers as well.',
    restaurantId: 1
  },
  {
    name: 'Supernova Burger',
    image: '',
    burgerDetails: 'How hot is this burger? Think of all of the adjectives you can describe the scale of an explosion, and multiply that by several thousand. The spice explosion in this burger is so big that you\'ll be seeing it in this galaxy and almost every other galaxy in the universe.',
    restaurantId: 1
  },
  {
    name: 'Ra Burger',
    image: '',
    burgerDetails: 'Some people might think we are blasphemous for comparing this burger to a solar deity. Ra disagrees, he says that it would be blasphemous not to eat such a divine gift from the gods!',
    restaurantId: 1
  },
  {
    name: 'Escape Velocity Burger',
    image: '',
    burgerDetails: 'What kind of burger is so delicious that you move so quickly in order to get to it? Savory spices and an touch of spice that\'s enough to fuel your escape all the way to the Event Horizon Diner\'s signature burger!',
    restaurantId: 2
  },
  {
    name: 'No Return Burger',
    image: '',
    burgerDetails: 'Eat this burger and you won\'t be returning to that other restaurant!',
    restaurantId: 2
  },
  {
    name: 'Time Slip Burger',
    image: '',
    burgerDetails: '88 MPH? Slingshot around the sun? A “most excellent” elevator? However you time travel, this burger suits your taste buds no matter the era.',
    restaurantId: 2
  },
  {
    name: 'Gravity Well Burger',
    image: '',
    burgerDetails: 'You think you can escape this burger? Gravity disagrees. There\'s so much meat in this burger that you can\'t help but be pulled to it. ',
    restaurantId: 2
  },
  {
    name: 'Exosphere Burger',
    image: '',
    burgerDetails: 'Why name of burger for the outermost layer of a heavenly body? It\'s the first thing you notice, and we are confident enough to say that it will probably be the first thing you taste at the Aurora Borealis Bistro.',
    restaurantId: 3
  },
  {
    name: 'Solar Wind Burger',
    image: '',
    burgerDetails: 'Wind so powerful that it burns. This also describes the spice in the Solar Wind Burger, which carries all the way from the burger itself to your mouth. Catch it while you can!',
    restaurantId: 3
  },
  {
    name: 'Plasmoid Burger',
    image: '',
    burgerDetails: 'Like the name “plasmoid” suggests, this burger is no blob. The scientist who coined the term said, “We shall take the liberty of calling this toroidal structure a plasmoid, a word which means plasma-magnetic entity.” We shall take the liberty of calling this one of the best burgers you have ever eaten.',
    restaurantId: 3
  },
  {
    name: 'Photon Burger',
    image: '',
    burgerDetails: 'This burger makes an impression like a photon torpedo, but is essential to our menu like photons are in the universe. Once you eat this burger, you\'ll know why photons are everywhere and anywhere.',
    restaurantId: 3
  },
  {
    name: 'EMP Burger',
    image: '',
    burgerDetails: 'Make sure you eat an EMP burger before an actual EMP comes and puts our site out of business!',
    restaurantId: 4
  },
  {
    name: 'Neutron Burger',
    image: '',
    burgerDetails: 'A burger with a burst of flavor so strong that it clears out everything else from your mouth and stays there. Trust us, it\'s worth the blast!',
    restaurantId: 4
  },
  {
    name: 'Big Bang Burger',
    image: '',
    burgerDetails: 'The burger at the beginning of all burgers. Created in a nanosecond, and responsible for everything else that came afterwards.',
    restaurantId: 4
  },
  {
    name: 'Supermassive Burger',
    image: '',
    burgerDetails: 'How big is this burger? You remember those challenges at restaurants that give you a large sandwich free if you eat it in a certain amount of time? Finish this burger in an hour and the rest of your orders for a week are on us. It\'s *that* big.',
    restaurantId: 4
  },
];

const seedBurgers = () => Burger.bulkCreate(burgerData);

module.exports = seedBurgers;