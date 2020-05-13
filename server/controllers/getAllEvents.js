const getAllEvents = require('../database/queries/getAllEvents')

exports.getAllEvents = (req, res) => {
  getAllEvents()
    .then(data =>
      res.json(data.rows))

    .catch(err => res.status(500).json({ message: err.message }))
}
