const { Spacemonkey } = require('../models');

const spacemonkeyData = [
  {
    name: 'Mikko',
    image: '/images/space-monkeys/mikko.spmky.jpg',
    bio:'Mikko is one of the hardest-working workers that you could ever ask for. Mikko has lots of energy and is the fastest at delivering your delicious burgers!',
  },
  {
    name: 'Edwin',
    image: '/images/space-monkeys/edwin.spmky.png',
    bio:'Don\'t let that serious face initmidate you, Edwin is a softie at heart and will make your delivery experience worthwhile.',
  },
  {
    name: 'Aldric',
    image: '/images/space-monkeys/aldric.spmky.png',
    bio:'Aldric the Jokester. Aldric is a light-hearted Space Monkey that loves to crack jokes, and will make delivery the most fun you\'ll ever have.',
  },
  {
    name: 'Leela',
    image: '/images/space-monkeys/leela.spmky.png',
    bio:'Leela loves music and dancing. Do not be surprised if she is blasting good music and dancing while delivering your delicious burgers.',
  },
  {
    name: 'Minlee',
    image: '/images/space-monkeys/minlee.spmky.png',
    bio:'Minlee is one if our shiest Space Monkeys, so please be kind to her! She is one of the kindest workers. She will definitely go the extra mile to make sure you get the best costumer service.',
  },
];

const seedSpacemonkeys = () => Spacemonkey.bulkCreate(spacemonkeyData);

module.exports = seedSpacemonkeys;