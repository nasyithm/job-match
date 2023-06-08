'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pendaftaran', {
      id_pendaftaran: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nik: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references : {
          model: "pelamar",
          key: "nik"
        }
      },
      id_loker: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references : {
          model: "loker",
          key: "id_loker"
        }
      },
      id_regional: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references : {
          model: "petugas",
          key: "id_regional"
        }
      },
      tgl_daftar: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('pendaftaran');
  }
};