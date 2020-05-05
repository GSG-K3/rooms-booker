const dbConnection = '../db_connection.js'
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

const availableRooms = (eventDate) => {
  const sql = {
    query: 'select room_id from events WHERE event_date = $1',
    values: [eventDate]
  }

  return dbConnection
    .query(sql)
    .then((res) => res.rows)
    .catch((err) => err)
}

module.exports = availableRooms
