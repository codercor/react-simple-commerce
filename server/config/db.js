const mysql = require('mysql2/promise');
const dotenv = require('dotenv');
dotenv.config(); 
async function connect() {
  console.log("Connecting to database...");
  let pool = await mysql.createPool({
    host: process.env.DB_host,
    user: process.env.DB_user,
    password: process.env.DB_password,
    database: process.env.DB_database,
  });
  return pool;
}

module.exports = connect;