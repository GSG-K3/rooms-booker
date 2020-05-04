const eventPost = require('../database/queries/eventPost')

const addEvent = (req, res) => {
  const data = req.body
  eventPost(data)
  res.send('an event added to the list')
}

module.exports = addEvent
