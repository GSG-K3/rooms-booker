const dbconniction = require('../db_connection')
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

const userHome = (userId) => {
  const sql = {
    text: 'SELECT * FROM events WHERE user_id =$1',
    values: [userId]
  }
  return dbconniction.query(sql)
}
module.exports = userHome


