const User = require('./User');
const Developer = require('./Developer');
const Spacemonkey = require('./Spacemonkey');
const Restaurant = require('./Restaurant');
const Burger = require('./Burger');
const Review = require('./review');
const Order = require('./Order');

Review.belongsTo(User, {
  foreignKey: 'user_id',
});

User.hasMany(Review, {
  foreignKey: 'user_id',
});

Review.belongsTo(Burger, {
  foreignKey: 'burger_id',
});

Burger.hasMany(Review, {
  foreignKey: 'burger_id',
});

// Review.belongsTo(Restaurant, {
//   foreignKey: 'restaurantId',
// });

// Restaurant.hasMany(Review, {
//   foreignKey: 'restaurantId',
// });

Restaurant.hasMany(Burger, {
  foreignKey: 'restaurantId'
});

Burger.belongsTo(Restaurant, {
  foreignKey: 'restaurantId'
});

Order.belongsTo(User, {
  foreignKey: 'user_id',
});

User.hasMany(Order, {
  foreignKey: 'user_id',
});

Order.belongsTo(Burger, {
  foreignKey: 'burger_id',
});

Burger.hasMany(Order, {
  foreignKey: 'burger_id',
});

Order.belongsTo(Spacemonkey, {
  foreignKey: 'spacemonkey_id',
});

Spacemonkey.hasMany(Order, {
  foreignKey: 'spacemonkey_id',
});

module.exports = { User, Developer, Spacemonkey, Restaurant, Burger, Review, Order };
