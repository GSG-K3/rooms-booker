const cookie = require('cookie')
const jwt = require('jsonwebtoken')
const { SECRET } = process.env

exports.authontication = (req, res, next) => {
  if (req.headers.cookie) {
    const { token } = cookie.parse(req.headers.cookie)
    return jwt.verify(token, SECRET, (err, result) => {
      if (err) {
        return res.status(400)
          .json({ status: 'fail', message: 'unauthorized' })
      }
      if (result) {
        req.email = result.email
        return next()
      }
    })
  } else {
    return res.status(400).json({ status: 'fail', message: 'not token' })
  }
}
