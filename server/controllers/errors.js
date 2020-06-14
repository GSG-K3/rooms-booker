const notFound = (req, res) => {
  res.status(404).send({ message: '404  PAGE NOT FOUND' })
}

const serverErr = (err, req, res, next) => {
  res.status(500).send({ message: '500  SERVER ERROR' })
  next()
}

module.exports = { notFound, serverErr }
