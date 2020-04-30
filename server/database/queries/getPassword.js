const dbConnection = require("../db_connection");

const getPassword = (email, cb) => {
  return dbConnection
    .query('SELECT password FROM users where email=$1', [email])
    .then((res) => res.rows[0])
    .catch((err) => console.log(err));
};

module.exports = { getPassword };
