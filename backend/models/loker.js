'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class loker extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.pendaftaran,{
        foreignKey:"id_loker",
        as:"pendaftaran"
      })
      this.belongsTo(models.regional, {
        foreignKey: "id_regional",
        as: "regional"
      })
      this.hasMany(models.petugas,{
        foreignKey:"id_regional",
        as:"petugas"
      })
    }
  }
  loker.init({
    id_loker:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nama_industri: DataTypes.STRING,
    alamat: DataTypes.STRING,
    id_regional: DataTypes.INTEGER,
    img: DataTypes.STRING,
    pen_min: DataTypes.STRING,
    bidang: DataTypes.STRING,
    gaji: DataTypes.INTEGER,
    deskripsi: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'loker',
    tableName: 'loker'
  });
  return loker;
};