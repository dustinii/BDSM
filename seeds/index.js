const sequelize = require('../config/connection');
const seedDevelopers = require('./developerData');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedDevelopers();
  console.log('\n----- DEVELOPERS SEEDED -----\n');

  // seed additional tables here as needed

  process.exit(0);
};

seedAll();