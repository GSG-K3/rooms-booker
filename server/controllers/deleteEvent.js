const eventDelete = require("../database/queries/eventDelete");

const deleteEvent = (req, res) => {
  const eventId = req.body.eventId;

  eventDelete(eventId);
  res.send();
};

module.exports = deleteEvent;
