const dbConnection = require("../db_connection");
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const getEditEvent = (eventId) => {
  const sql = {
    text: "SELECT * FROM events WHERE event_id =$1",
    values: [eventId],
  };
  return dbConnection
    .query(sql)
    .then((res) => res.rows)
    .catch((err) => console.log(err));
};

module.exports = getEditEvent;
