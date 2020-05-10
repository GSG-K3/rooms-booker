const eventPost = require('../database/queries/eventPost')

const addEvent = (req, res) => {
  const data = req.body
  eventPost(data)
    .then(response => res.send(response))
    .catch(err => res.send({ message: err.message }))
}

module.exports = addEvent
