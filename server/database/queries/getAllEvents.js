
const dbconnection = require('../db_connection')
const events = () => {
  return dbconnection
    .query('select events.event_title, events.event_date from events')
}
module.exports = events
