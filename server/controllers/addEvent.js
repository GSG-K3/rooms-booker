const eventPost = require('../database/queries/eventPost')

const addEvent = (req, res) => {
  const data = req.body
  const { eventTitle, eventAuthor } = data

  if (!eventTitle || !eventAuthor) {
    res
      .status(400)
      .json({ message: ' Fields Are Required', status: 400 })
  } else {
    eventPost(data)
      .then(response => res.send(response))
      .catch(err => res.send({ message: err.message }))
  }
}

module.exports = addEvent
