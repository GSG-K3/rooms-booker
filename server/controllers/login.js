const bcrypt = require('bcrypt')
const { sign } = require('jsonwebtoken')
const getPassword = require('../database/queries/getPassword')
const { SECRET } = process.env
const createToken = (email, user_id, user_name, secret) => {
  return sign({ email, user_id, user_name }, secret)
}

exports.login = (req, res) => {
  const { email, password } = req.body

  // Validation
  if (!email || !password) {
    res.status(400).json({ message: 'All Fields are Required', status: 400 })
  }
// get the email password from database 
  getPassword(email)
    .then((result) => {
      if (!result || result.rows.length === 0) {
        res.status(500).json({ message: 'email is not in our record' })
      }

      const hash = result.rows[0].password
// check if the password matched 
      bcrypt.compare(password, hash, (err, result2) => {
        if (err) {
          return res.json({ err })
        }
        if (result2) {
          const { user_id, user_name } = result.rows[0]
// create token and cookie
          const token = createToken(email, user_id, user_name, SECRET)
          return res
            .cookie('token', token, { maxAge: 900000, httpOnly: true })
            .status(200)
            .json({ status: 'sucess', userId: user_id })
        } else {
          res.status(500).json({ message: 'email and password are not match' })
        }
      })
    })
}
