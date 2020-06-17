const dbconniction = require("../db_connection");
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

// delete event from events table
const eventDelete = (eventId) => {
  const sql = {
    text: "DELETE FROM events WHERE event_id = $1 ",
    values: [eventId],
  };
  return dbconniction.query(sql)
};
module.exports = eventDelete;
