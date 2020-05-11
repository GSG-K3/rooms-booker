const dbconnection = require('../db_connection')

const availableRooms = (eventDate, cb) => {
  const sql = {
    text: 'SELECT room_name FROM rooms WHERE room_id NOT IN (SELECT room_id FROM events WHERE event_date = $1)',
    values: [eventDate]
  }

  dbconnection.query(sql, (err, res) => {
    if (err) {
      return cb(err)
    }
    return cb(null, res.rows)
  })
}

module.exports = availableRooms
