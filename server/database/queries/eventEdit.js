const dbconniction = require('../db_connection')

const eventEdit = (data) => {
  const sql = {
    text: 'UPDATE events SET event_title = $1 , event_author = $2 , event_description = $3 , event_note = $4  WHERE event_id = $5 ',
    values: [data.event_title, data.event_author, data.event_description, data.event_note, data.event_id]
  }
  dbconniction.query(sql, (err, result) => {
    if (err) throw err
    else console.log(result,' event update successfuly')
  })
}
module.exports = eventEdit
