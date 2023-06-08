'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class regional extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.loker, {
        foreignKey: "id_regional",
        as: "loker"
      })
    }
  }
  regional.init({
    id_regional:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nama_kota: DataTypes.STRING,
    nama_provinsi: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'regional',
    tableName: 'regional'
  });
  return regional;
};