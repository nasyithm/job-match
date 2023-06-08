'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('petugas', {
      id_petugas: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username_petugas: {
        type: Sequelize.STRING
      },
      password_petugas: {
        type: Sequelize.STRING
      },
      nama_petugas: {
        type: Sequelize.STRING
      },
      no_telp: {
        type: Sequelize.STRING
      },
      jabatan: {
        type: Sequelize.STRING
      },
      id_regional: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references : {
          model: "loker",
          key: "id_regional"
        }
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
    await queryInterface.dropTable('petugas');
  }
};