'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Url extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Url.init({
    example_url: DataTypes.STRING,
    method: DataTypes.STRING,
    base_url_1: DataTypes.STRING,
    base_url_2: DataTypes.STRING,
    base_url_3: DataTypes.STRING,
    param_1: DataTypes.STRING,
    param_1_fixed: DataTypes.STRING,
    param_2: DataTypes.STRING,
    param_2_fixed: DataTypes.STRING,
    param_3: DataTypes.STRING,
    param_3_fixed: DataTypes.STRING,
    param_4: DataTypes.STRING,
    param_4_fixed: DataTypes.STRING,
    param_5: DataTypes.STRING,
    param_5_fixed: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Url',
  });
  return Url;
};