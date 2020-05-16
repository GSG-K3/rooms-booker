const eventDelete = require("../database/queries/eventDelete");

const deleteEvent = (req, res) => {
  const eventId = req.params.id

  eventDelete(eventId).then(() => {
    res.send();
  })
    .catch((err) => res.status(500).json({ message: err.message }));

};

module.exports = deleteEvent;
