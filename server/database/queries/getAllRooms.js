const dbConnection = require('../db_connection');

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
const getAllRooms = () => {
  return dbConnection
    .query('SELECT * FROM rooms')
}

module.exports = getAllRooms;