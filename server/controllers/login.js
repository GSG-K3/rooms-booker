const bcrypt = require('bcrypt')
const { sign } = require("jsonwebtoken");
const getPassword = require('../database/queries/getPassword')
require('dotenv').config();

const { SECRET } = process.env;

const createToken = (email, SECRET) => {
  console.log("tcreateTokenoken",SECRET);

  return sign({ email }, SECRET)
}

exports.login = (req, res) => {
  const { email, password } = req.body
  console.log(email,password)
  if (!email || !password) {
    console.log("!!!!errrroorr",err)

    return res.status(400).json({ message: 'all fields are required' })
  }
  getPassword(email, (err, result) => {
    console.log("get", email, err, result)

    if (err) {
      console.log("errrroorr",err)
    } else {
      if (result) {
        const hash = result.password
        console.log("from hash",hash);
        bcrypt
          .compare(password, hash)
          .then(result => {
            console.log("from bcrypt",result);
            if (result) {
              const token = createToken(email, SECRET)
              console.log("token",token);
              
              res
                .cookie('token', token, { maxAge: 900000, httpOnly: true })
                .json({ status: 'success', token })
            } else {
              res.status(400).json({ message: 'incorrect email or password' })
            }
          })
          .catch(err => console.log(err))
      } else {
        console.log("hhhhhhhhhhhhh");
        res
          .status(400)
          .json({ message: 'incorrect email or password', status: 'failed' })
      }
    }
  })
}



/* const login = (req, res) => {
    console.log('req body :', req.body)
    res.send(req.body)
  }
  
  module.exports = login */

/*   exports.login = (req, res) => {

    res.send(req.body)
    console.log('req body :', req.body)

    } */