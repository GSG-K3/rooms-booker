const dbconniction = require("../db_connection");

const eventDelete = (eventId) => {
  const sql = {
    text: "DELETE FROM events WHERE event_id = $1 ",
    values: [eventId],
  };
  return dbconniction.query(sql).catch((err) => console.log(err));
};
module.exports = eventDelete;
