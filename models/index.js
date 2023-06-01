const User = require('./User');
const Developer = require('./Developer');
const Spacemonkey = require('./Spacemonkey');
const Restaurant = require('./Restaurant');
const Burger = require('./Burger');
const Review = require('./review');
const Order = require('./Order');

Review.belongsTo(User, {
  foreignKey: 'userId',
});

User.hasMany(Review, {
  foreignKey: 'userId',
});

Review.belongsTo(Burger, {
  foreignKey: 'burgerId',
});

Burger.hasMany(Review, {
  foreignKey: 'burgerId',
});

Review.belongsTo(Restaurant, {
  foreignKey: 'restaurantId',
});

Restaurant.hasMany(Review, {
  foreignKey: 'restaurantId',
});

Restaurant.hasMany(Burger, {
  foreignKey: 'restaurantId'
});

Burger.belongsTo(Restaurant, {
  foreignKey: 'restaurantId'
});

Order.belongsTo(User, {
  foreignKey: 'userId',
});

User.hasMany(Order, {
  foreignKey: 'userId',
});

Order.belongsTo(Burger, {
  foreignKey: 'burgerId',
});

Burger.hasMany(Order, {
  foreignKey: 'burgerId',
});

module.exports = { User, Developer, Spacemonkey, Restaurant, Burger, Review, Order };
