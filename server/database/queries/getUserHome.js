const dbconniction = require('../db_connection')

// To return all events that has user id equal to the user id
const userHome = (userId) => {
  const sql = {
    text: 'SELECT * FROM events WHERE user_id =$1',
    values: [userId]
  }
  return dbconniction.query(sql)
}
module.exports = userHome
