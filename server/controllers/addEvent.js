
const addEvent = (req, res) => {
  console.log('req body :', req.body)
  res.send(req.body)
}

module.exports = addEvent
