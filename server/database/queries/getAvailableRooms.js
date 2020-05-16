const dbconnection = require('../db_connection')

const availableRooms = (eventDate) => {
  const sql = {
    text:
      'SELECT room_name, room_id FROM rooms WHERE room_id NOT IN (SELECT room_id FROM events WHERE event_date = $1)',
    values: [eventDate]
  }

  return dbconnection
    .query(sql)

}

module.exports = availableRooms
