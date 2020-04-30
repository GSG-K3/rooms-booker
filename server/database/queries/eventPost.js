const dbconniction = require('../db_connection')

const postEvent = (data) => {
  const sql = {
    text: 'INSERT INTO events (event_title ,event_description ,event_note,event_date,user_id,room_id,user_name,) VALUES ($1,$2,$3,$4,$5,$6,$7)',
    values: [data.title, data.description, data.notes, data.date, data.user_id, data.room.room_id, data.name]
  }
  dbconniction.query(sql, (err, result) => {
    if (err) throw err
    else console.log('succes')
  })
}
module.exports = postEvent
