const dbconniction = require('../db_connection')

const postEvent = (data) => {
  const sql = {
    text: 'INSERT INTO events (event_title ,event_descriprion ,event_note,event_date,user_id,room_id) VALUES ($1,$2,$3,$4,$5,$6)',
    values: [data.title, data.description, data.notes, data.date, data.user_id, data.room]
  }
  dbconniction.query(sql, (err, result) => {
    if (err) throw err
    else console.log('succes')
  })
}
module.exports = postEvent
