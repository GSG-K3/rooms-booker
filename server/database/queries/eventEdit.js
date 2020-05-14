const dbconniction = require('../db_connection')

const eventEdit = (data) => {
  const sql = {
    text: 'UPDATE events SET event_title = $1 , event_author = $2 , event_description = $3 , event_note = $4  WHERE event_id = $5 ',
    values: [data.eventTitle, data.eventAuthor, data.eventDescription, data.eventNote, data.eventId]
  }
  return dbconniction.query(sql)
}
module.exports = eventEdit
