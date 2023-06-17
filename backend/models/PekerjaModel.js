import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Pekerja = db.define(
  "pekerja",
  {
    uuid: DataTypes.STRING,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.STRING,
    dateBirth: DataTypes.STRING,
    religion: DataTypes.STRING,
    gender: DataTypes.STRING,
    skill: DataTypes.STRING,
    education: DataTypes.STRING,
    description: DataTypes.TEXT,
    image: DataTypes.STRING,
    url: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default Pekerja;

(async () => {
  await db.sync();
})();
