// get all coming events
const dbconnection = require('../db_connection')
const events = () => {
  return dbconnection
    .query('select * from events inner join rooms on events.room_id = rooms.room_id')
}
module.exports = events
