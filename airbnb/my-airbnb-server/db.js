const mysql = require('mysql2')

const pool = mysql.createPool({
  host: 'localhost',
  user: 'KD3_Swapnil_83595',
  password: 'manager',
  port: 3306,
  database: 'airbnb_db',
  connectionLimit: 10,
})

module.exports = {
  pool,
}
