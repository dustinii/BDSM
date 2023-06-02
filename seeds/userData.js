const { User } = require('../models');

const userData = [
  {
    name: 'Joce',
    email: 'jvaldez98@mail.com',
    password: 'ncfsidhh'
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;