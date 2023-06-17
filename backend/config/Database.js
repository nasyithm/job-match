import {Sequelize} from "sequelize";

const db = new Sequelize('jobmatchdb','root','',{
    host: 'localhost',
    dialect: "mysql"
});

export default db;