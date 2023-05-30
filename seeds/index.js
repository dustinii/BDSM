const sequelize = require('../config/connection');
const seedDevelopers = require('./developerData');
const seedRestaurants = require('./restaurantData');
const seedBurgers = require('./burgerData');
const seedspaceMonkey = require('./spaceMonkeyData');


const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedDevelopers();
  console.log('\n----- DEVELOPERS SEEDED -----\n');

  // seed additional tables here as needed
  
  await seedspaceMonkey();
  console.log('\n----- SPACEMONKEYS SEEDED -----\n');
  
  await seedRestaurants();
  console.log('\n----- RESTAURANTS SEEDED -----\n');

  await seedBurgers();
  console.log('\n----- BURGERS SEEDED -----\n');

  process.exit(0);
};

seedAll();