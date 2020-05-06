const dbconniction = require('../db_connection')

const eventEdit = (data) => {
  const sql = {
    text: 'UPDATE events SET event_title = $1 WHERE event_id = $2 ',
    values: [data.event_title, data.event_id]
  }
  dbconniction.query(sql, (err, result) => {
    if (err) throw err
    else console.log(result,' event update successfuly')
  })
}
module.exports = eventEdit
