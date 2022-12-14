// get the client
const mysql = require('mysql2');
require('dotenv').config()

//console.log(process.env) (remove this after confirming it is working)

// create the connection to database
const connectionToDb = mysql.createConnection({
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });

  module.exports = connectionToDb; 



  
