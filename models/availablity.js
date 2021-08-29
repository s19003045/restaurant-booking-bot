'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Availablity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here\
      Availablity.belongsTo(models.Restaurant)
    }
  };
  Availablity.init({
    restaurant_id: DataTypes.INTEGER,
    available_dates: DataTypes.JSON
  }, {
    sequelize,
    modelName: 'Availablity',
  });
  return Availablity;
};