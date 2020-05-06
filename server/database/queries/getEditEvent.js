const dbconniction = require("../db_connection");
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
const getEditEvent = (eventId, callBack) => {
  const sql = {
    text: "SELECT * FROM events WHERE event_id =$1",
    values: [eventId],
  };
  dbconniction.query(sql, (err, result) => {
    if (err) {
      return callBack(err);
    }

    return callBack(null, result.rows[0]);
  });
};

module.exports = getEditEvent;
