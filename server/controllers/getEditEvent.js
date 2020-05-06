const getEditEvent = require('../database/queries/getEditEvent')

const eventToEdit = (req, res) => {
  const eventId = req.params.id
  getEditEvent(eventId, (err, response) => {    
    if (err) console.log(err)
    else res.send(response)
  })
}

module.exports = eventToEdit
