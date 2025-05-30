import 'dotenv/config'
import mysql from 'mysql2/promise'

export const dbPortaria = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
})
