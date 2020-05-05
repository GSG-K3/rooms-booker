const dbconnection = require('../db_connection')
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

const availableRooms = (eventDate) => {
  const sql = {
    text: 'SELECT room_id FROM events WHERE event_date !=$1',
    values: [eventDate]
  }

  return dbconnection
    .query(sql)
    .then(res => res.rows)
    .catch(err => err)
}

module.exports = availableRooms
