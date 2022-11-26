require('dotenv').config();
var Sequelize = require('sequelize');
const { MYSQLUSER, MYSQLPASSWORD, MYSQLHOST, DB_NAME, DB_DIALECT } = process.env;
var db = new Sequelize(DB_NAME, MYSQLUSER, MYSQLPASSWORD, {
  dialect: DB_DIALECT,
  host: MYSQLHOST,
});

module.exports = db;
