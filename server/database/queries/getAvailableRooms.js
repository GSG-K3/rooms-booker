const dbconnection = require('../db_connection')

// To get available rooms from rooms table where t's room_id doesn't exist in the result of second query, 
// which return available rooms id's that doesn't have an event at this date 
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
