const getAllEvents = require('../database/queries/getAllEvents')

exports.getAllEvents = (req, res) => {
  getAllEvents()
    .then(data =>
      res.json(data.rows))

    .catch(err => res.send({ message: err.message }))
}
