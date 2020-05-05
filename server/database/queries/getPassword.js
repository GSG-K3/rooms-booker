
const dbconniction = require('../db_connection')
/* process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
const getPassword = (email, callBack) => {
  const sql = {
    text: 'SELECT password FROM users where email=$1',
    values: [email]
  }
  dbconniction.query(sql, (err, resulte) => {
    if (err) {
      return callBack(err)
    }
    return callBack(null, resulte.rows[0])
  })
} */


process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
const getPassword = (email) => {
  const sql = {
  text: 'SELECT password FROM users where email=$1',
  values: [email]
}
  return dbconniction
    .query(sql)
}

module.exports = getPassword
