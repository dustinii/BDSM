const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Class Burger for burger info
class Burger extends Model {}

Burger.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.BLOB,
      allowNull: true,
    },
    burgerDetails: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'burger',
  }
);

module.exports = Burger;
