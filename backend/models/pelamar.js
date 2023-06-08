'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pelamar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.pendaftaran, {
        foreignKey: "nik",
        as: "pendaftaran"
      })
    }
  }
  pelamar.init({
    nik:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nama_pelamar: DataTypes.STRING,
    username_pelamar: DataTypes.STRING,
    password_pelamar: DataTypes.STRING,
    no_telp: DataTypes.STRING,
    alamat: DataTypes.STRING,
    img: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'pelamar',
    tableName: 'pelamar'
  });
  return pelamar;
};