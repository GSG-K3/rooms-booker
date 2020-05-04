const eventPost = require('../database/queries/eventPost')

const addEvent = (req, res) => {
  const data = req.body
  eventPost(data)
  res.send()
}

module.exports = addEvent
