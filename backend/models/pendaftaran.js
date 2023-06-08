'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pendaftaran extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.loker, {
        foreignKey: "id_loker",
        as: "loker"
      })
      this.belongsTo(models.pelamar, {
        foreignKey: "nik",
        as: "pelamar"
      })
      this.belongsTo(models.petugas,{
        foreignKey:"id_regional",
        as:"petugas"
      })
    }
  }
  pendaftaran.init({
    id_pendaftaran:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nik: DataTypes.STRING,
    id_loker: DataTypes.INTEGER,
    id_regional: DataTypes.INTEGER,
    tgl_daftar: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'pendaftaran',
    tableName: 'pendaftaran'
  });
  return pendaftaran;
};