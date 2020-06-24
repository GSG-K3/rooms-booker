const dbConniction = require('../db_connection')
// add new event
const postEvent = (data) => {
  const sql = {
    text: 'INSERT INTO events (event_title ,event_description ,event_note,event_date,end_date,user_id,room_id ,event_author) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)',
    values: [data.title, data.description, data.notes, data.date, data.enddate, data.userId, data.roomId, data.name]
  }

  return dbConniction.query(sql)
 
}

module.exports = postEvent
