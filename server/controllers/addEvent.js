const eventPost = require('../database/queries/eventPost')

const addEvent = (req, res) => {
  const data = req.body
  const { title, name } = data

  if (!title || !name) {
    res
      .status(400)
      .json({ message: ' Fields Are Required', status: 400 })
  } else {
    eventPost(data)
      .then(response => res.send(response))
      .catch(err => res.status(500).json({ message: err.message }))
  }
}

module.exports = addEvent
