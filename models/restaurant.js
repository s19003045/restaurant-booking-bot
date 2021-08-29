'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Restaurant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Restaurant.belongsTo(models.Platform)
    }
  };
  Restaurant.init({
    name: DataTypes.STRING,
    name_for_url: DataTypes.STRING,
    companyId: DataTypes.STRING,
    branchId: DataTypes.STRING,
    platform_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Restaurant',
  });
  return Restaurant;
};