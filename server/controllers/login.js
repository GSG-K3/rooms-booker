const bcrypt = require("bcrypt");
const { sign } = require("jsonwebtoken");
const getPassword = require("../database/queries/getPassword");
require("dotenv").config();
const { SECRET } = process.env;
const createToken = (email, secret) => {
  return sign({ email }, secret);
};

exports.login = (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(200)
      .json({ message: 'all fields are required', status: '400' });
  }
  getPassword(email, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      if (result) {
        const hash = result.password;
        bcrypt
          .compare(password, hash)
          .then((result) => {
            if (result) {
              const token = createToken(email, SECRET);
              res
                .cookie('token', token, { maxAge: 900000, httpOnly: true })
                .json({ status: 'sucess', token });
            } else {
              res
                .status(200)
                .json({
                  message: 'incorrect email or password',
                  status: '403'
                });
            }
          })
          .catch((err) => console.log(err));
      } else {
        res
          .status(200)
          .json({ message: 'incorrect email or password', status: '403' });
      }
    }
  });
};

/* const login = (req, res) => {
    console.log('req body :', req.body)
    res.send(req.body)
  }
  
  module.exports = login */

/*   exports.login = (req, res) => {

    res.send(req.body)
    console.log('req body :', req.body)

    } */
