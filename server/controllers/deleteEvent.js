const eventDelete = require("../database/queries/eventDelete");

const deleteEvent = (req, res) => {
  const eventId = req.params.id

  eventDelete(eventId).then(() => {
    res.send();
  }).catch(() => {
    console.log("something wrong")
  })
};

module.exports = deleteEvent;
