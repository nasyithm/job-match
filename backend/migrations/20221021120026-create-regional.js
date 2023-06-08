'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('regional', {
      id_regional: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama_kota: {
        type: Sequelize.STRING
      },
      nama_provinsi: {
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('regional');
  }
};