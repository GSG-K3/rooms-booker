const eventEdit = require('../database/queries/eventEdit')

const editEvent = (req, res) => {
  const data = req.body
  console.log('data',data)
  eventEdit(data)
  res.send()
}

module.exports = editEvent
