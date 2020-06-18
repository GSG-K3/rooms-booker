
const serverErr = (err, req, res, next) => {
  // check if there is an error 
  if (err) {
    res.status(500).send({ message: '500  SERVER ERROR' })
    next()
  }
}

module.exports = serverErr
