
const dbconnection = require('../db_connection')
const events = () => {
  const sql = {
    text: 'select * from events inner join rooms on events.room_id = rooms.room_id where event_date >= $1 ',
    value: [new Date().toLocaleDateString()]
  }
  return dbconnection
    .query(sql.text, sql.value)
}
module.exports = events
