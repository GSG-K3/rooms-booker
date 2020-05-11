
const dbconnection = require('../db_connection')
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
const events = () => {
  return dbconnection
    .query('select events.event_title, events.event_date from events')
}
module.exports = events
