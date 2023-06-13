import {Sequelize} from "sequelize";

const db = new Sequelize('jobmatchdb','jobmatchuser','jobmatchpass123#',{
    host: 'https://www.db4free.net',
    dialect: "mysql"
});

export default db;