const { Spacemonkey } = require('../models');

const spacemonkeyData = [
  {
    name: 'Mikko',
    image: '/images/space-monkeys/mikko.spmky.jpg',
    bio:'',
  },
  {
    name: 'Edwin',
    image: '/images/space-monkeys/edwin.spmky.png',
    bio:'',
  },
  {
    name: 'Aldric',
    image: '/images/space-monkeys/aldric.spmky.png',
    bio:'',
  },
  {
    name: 'Leela',
    image: '/images/space-monkeys/leela.spmky.png',
    bio:'',
  },
  {
    name: 'Minlee',
    image: '/images/space-monkeys/minlee.spmky.png',
    bio:'',
  },
];

const seedSpacemonkey = () => Spacemonkey.bulkCreate(spacemonkeyData);

module.exports = seedSpacemonkey;