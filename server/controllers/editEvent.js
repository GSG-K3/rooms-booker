const eventEdit = require("../database/queries/eventEdit");

const editEvent = (req, res) => {
  const data = req.body;
  const { eventTitle, eventAuthor } = data;

  if (!eventTitle || !eventAuthor) {
    res
      .status(400)
      .json({ message: " Fields With ( * ) Required", status: 400 });
  } else {
    eventEdit(data);
    res.send();
  }
};

module.exports = editEvent;
