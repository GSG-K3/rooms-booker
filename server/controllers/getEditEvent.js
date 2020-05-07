const getEditEvent = require("../database/queries/getEditEvent");

const eventToEdit = (req, res) => {
  const eventId = req.params.id;

  getEditEvent(eventId)
    .then((data) => res.json(data[0]))
    .catch((err) => console.log(err));
};

module.exports = eventToEdit;
