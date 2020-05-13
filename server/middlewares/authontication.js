const cookie = require('cookie')
const jwt = require('jsonwebtoken')
const { SECRET } = process.env

exports.authontication = (req, res, next) => {
  if (req.headers.cookie) {
    const { token } = cookie.parse(req.headers.cookie)
    jwt.verify(token, SECRET, (err, result) => {
      if (err) {
        return res.status(400)
          .json({ message: 'server error' })
      }
      if (result) {
        console.log(result)
        req.email = result.email
        return next()
      }
    })
  } else {
    return res.status(403).json({ message: 'unauthorized' })
  }
}
