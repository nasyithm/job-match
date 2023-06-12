import {Sequelize} from "sequelize";

const db = new Sequelize('jobmatch','root','',{
    host: 'localhost',
    dialect: "mysql"
});

export default db;