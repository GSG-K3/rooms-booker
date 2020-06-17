const dbconniction = require('../db_connection')

// To return table contains of password, user id and user name from users table
// where user email is the same as entered by user
const getPassword = (email) => {
  const sql = {
    text: 'SELECT password,user_id,user_name FROM users where email=$1',
    values: [email]
  }
  return dbconniction
    .query(sql)
}

module.exports = getPassword
