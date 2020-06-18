const dbConnection = require('../db_connection')

// To get all rooms from rooms table
const getAllRooms = () => {
  return dbConnection
    .query('SELECT * FROM rooms')
}

module.exports = getAllRooms
