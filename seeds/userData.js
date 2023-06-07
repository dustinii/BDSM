// This seed has sample user data for testing purposes

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