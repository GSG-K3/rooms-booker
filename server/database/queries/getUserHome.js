const dbconniction = require('../db_connection')

// To get all events that has user id equal to the user id of the user logged in
const userHome = (userId) => {
  const sql = {
    text: 'SELECT * FROM events WHERE user_id =$1',
    values: [userId]
  }
  return dbconniction.query(sql)
}
module.exports = userHome
