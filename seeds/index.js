const sequelize = require('../config/connection');
const seedDevelopers = require('./developerData');
const seedRestaurants = require('./restaurantData');
const seedBurgers = require('./burgerData');
const seedSpacemonkeys = require('./spacemonkeyData');
const seedReviews = require('./reviewData');
const seedUsers = require('./userData');

// Function to seed all of the data for the site before running it for the first time
const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedDevelopers();
  console.log('\n----- DEVELOPERS SEEDED -----\n');
  
  await seedSpacemonkeys();
  console.log('\n----- SPACEMONKEYS SEEDED -----\n');
  
  await seedRestaurants();
  console.log('\n----- RESTAURANTS SEEDED -----\n');

  await seedBurgers();
  console.log('\n----- BURGERS SEEDED -----\n');

  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  await seedReviews();
  console.log('\n----- REVIEWS SEEDED -----\n');

  process.exit(0);
};

seedAll();