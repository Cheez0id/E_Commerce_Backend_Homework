const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
        },
    product_id: {
      type: DataTypes.INTEGER,
      //TODO REFERENCE PRODUCT MODEL ID
        },
    tag_id: {
      type: DataTypes.INTEGER,
      //TODO MAKE THIS REFERENCE TAG MODELS ID
    }
  });  


module.exports = ProductTag;