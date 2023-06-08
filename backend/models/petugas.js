'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class petugas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.loker, {
        foreignKey: "id_regional",
        as: "loker"
      })
      this.hasMany(models.pendaftaran,{
        foreignKey:"id_regional",
        as:"pendaftaran"
      })
    }
  }
  petugas.init({
    id_petugas:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    username_petugas: DataTypes.STRING,
    password_petugas: DataTypes.STRING,
    nama_petugas: DataTypes.STRING,
    no_telp: DataTypes.STRING,
    jabatan: DataTypes.STRING,
    id_regional: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'petugas',
    tableName: 'petugas'
  });
  return petugas;
};