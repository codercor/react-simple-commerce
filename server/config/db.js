const { Sequelize } = require("sequelize");
require("dotenv").config();

const DB_HOST = process.env.DB_host;
const DB_USER = process.env.DB_user;
const DB_PASSWORD = process.env.DB_password;
const DB_DATABASE = process.env.DB_database;

const sequelize = new Sequelize(DB_DATABASE, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect:  'mysql'
});

module.exports = sequelize;