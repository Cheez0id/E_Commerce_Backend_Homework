const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Product extends Model {}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
        },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
        },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      //TODO: ADD VALIDATION TO PROOVE VALUE IS A DECIMAL
        },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      //TODO: SET DEFAULT VALUE TO 10 AND VALIDATE IT'S NUMERIC
        },
    category_id: {
      type: DataTypes.INTEGER,
      //TODO MAKE THIS REFERENCE CATEGORY MODELS ID
    }
  });  


module.exports = Product;