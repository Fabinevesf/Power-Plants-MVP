require('dotenv').config()
const mysql = require('mysql')

const DB_HOST = process.env.DB_HOST
const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASS
const DB_NAME = process.env.DB_NAME

const con = mysql.createConnection({
  host: DB_HOST || '127.0.0.1',
  user: DB_USER || 'root',
  password: DB_PASS || 'root',
  database: DB_NAME || 'power_plants',
  multipleStatements: true,
})

con.connect(function (err) {
  if (err) throw err
  console.log('Connected!')

  let sql =
    'DROP TABLE if EXISTS `global_power_plant_database`;CREATE TABLE `global_power_plant_database`(`id` INT NOT NULL AUTO_INCREMENT,`electrical capacity` INT NOT NULL,`year` INT NOT NULL);DROP TABLE if EXISTS `Location Solar Power Plants`CREATE TABLE `Location Solar Power Plants`(`id` INT NOT NULL AUTO_INCREMENT,`long` INT NOT NULL, `lat` INT NOT NULL,`city` VARCHAR(255) NOT NULL, `country` VARCHAR(255) NOT NULL, PRIMARY KEY(id));'
  con.query(sql, function (err, result) {
    if (err) throw err
    console.log(
      'Table creation `Solar Power Plants and Location Power Plants` was successful!'
    )

    console.log('Closing...')
  })

  con.end()
})
