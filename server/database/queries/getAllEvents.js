
const dbconnection = require('../db_connection')
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
const events = () => {
  return dbconnection
    .query('select * from events inner join rooms on events.room_id = rooms.room_id')
    .then(res => res.rows)
    .catch(err => console.log(err))
}
module.exports = events
