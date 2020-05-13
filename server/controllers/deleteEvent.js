const eventDelete = require("../database/queries/eventDelete");

const deleteEvent = (req, res) => {
  const eventId = req.body.eventId;

  eventDelete(eventId)
    .then((result) => {
      res.send();
    })
    .catch((err) => res.status(500).json({ message: err.message }));
}

module.exports = deleteEvent;
