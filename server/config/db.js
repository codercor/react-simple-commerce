const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();

let pool = mysql.createPool({
  host: process.env.DB_host,
  user: process.env.DB_user,
  password: process.env.DB_password,
  database: process.env.DB_database,
});

pool.getConnection((err, connection) => {
  if (err) throw err;
  console.log('Database connected successfully');
  connection.release();
});

module.exports = pool;