'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pelamar', {
      nik: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama_pelamar: {
        type: Sequelize.STRING
      },
      username_pelamar: {
        type: Sequelize.STRING
      },
      password_pelamar: {
        type: Sequelize.STRING
      },
      no_telp: {
        type: Sequelize.STRING
      },
      alamat: {
        type: Sequelize.STRING
      },
      img: {
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
    await queryInterface.dropTable('pelamar');
  }
};