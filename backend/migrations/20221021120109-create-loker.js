'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('loker', {
      id_loker: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama_industri: {
        type: Sequelize.STRING
      },
      alamat: {
        type: Sequelize.STRING
      },
      id_regional: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references : {
          model: "regional",
          key: "id_regional"
        }
      },
      img: {
        type: Sequelize.STRING
      },
      pen_min: {
        type: Sequelize.STRING
      },
      bidang: {
        type: Sequelize.STRING
      },
      gaji: {
        type: Sequelize.INTEGER
      },
      deskripsi: {
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
    await queryInterface.dropTable('loker');
  }
};