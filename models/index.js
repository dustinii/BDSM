const User = require('./User');
const Developer = require('./Developer');
const Spacemonkey = require('./Spacemonkey');
const Restaurant = require('./Restaurant');
const Burger = require('./Burger');

Restaurant.hasMany(Burger, {
  foreignKey: 'restaurantId'
});

Burger.belongsTo(Restaurant, {
  foreignKey: 'restaurantId'
});


module.exports = { User, Developer, Spacemonkey, Restaurant, Burger };
