const dbconniction = require('../db_connection')
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
const userHome = (reqbody, callBack) => {
  const sql = {
    text: 'SELECT * FROM events WHERE user_id =$1',
    values: [reqbody]
  }
  dbconniction.query(sql, (err, resulte) => {
    if (err) {
      return callBack(err)
    }
    return callBack(null, resulte.rows)
  })
}

module.exports = userHome
