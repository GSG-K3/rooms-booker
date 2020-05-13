const eventEdit = require('../database/queries/eventEdit')

const editEvent = (req, res) => {
  const data = req.body
  const { eventTitle, eventAuthor, eventDescription, eventNote } = data

  if (!eventTitle || !eventAuthor || !eventDescription || !eventNote) {
    res
      .status(400)
      .json({ message: 'There is one item or more missing. Please filled it!', status: 400 })
  } else {
    eventEdit(data)
    res.send()
  }
}

module.exports = editEvent
