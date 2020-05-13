
const dbconniction = require('../db_connection')

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
const getPassword = (email) => {
  const sql = {
    text: 'SELECT password,user_id,user_name FROM users where email=$1',
    values: [email]
  }
  return dbconniction
    .query(sql)
}

module.exports = getPassword
