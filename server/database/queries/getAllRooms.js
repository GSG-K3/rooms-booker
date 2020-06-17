const dbConnection = require('../db_connection')

// To get all rows from rooms table
const getAllRooms = () => {
  return dbConnection
    .query('SELECT * FROM rooms')
}

module.exports = getAllRooms
