'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Url', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      example_url: {
        type: Sequelize.STRING
      },
      method: {
        type: Sequelize.STRING
      },
      base_url_1: {
        type: Sequelize.STRING
      },
      base_url_2: {
        type: Sequelize.STRING
      },
      base_url_3: {
        type: Sequelize.STRING
      },
      param_1: {
        type: Sequelize.STRING
      },
      param_1_fixed: {
        type: Sequelize.STRING
      },
      param_2: {
        type: Sequelize.STRING
      },
      param_2_fixed: {
        type: Sequelize.STRING
      },
      param_3: {
        type: Sequelize.STRING
      },
      param_3_fixed: {
        type: Sequelize.STRING
      },
      param_4: {
        type: Sequelize.STRING
      },
      param_4_fixed: {
        type: Sequelize.STRING
      },
      param_5: {
        type: Sequelize.STRING
      },
      param_5_fixed: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Url');
  }
};