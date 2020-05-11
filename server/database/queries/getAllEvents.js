
const dbconnection = require('../db_connection')
const events = () => {
  return dbconnection
    .query('select * from events inner join rooms on events.room_id = rooms.room_id')
    .then(res => res.rows)
    .catch(err => console.log(err))
}
module.exports = events
