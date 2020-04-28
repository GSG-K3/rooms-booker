const getAllEvents = require('../database/queries/getAllEvents')

exports.getAllEvents = (req, res) => {
  getAllEvents()
    .then(data =>
      res.json(data))

    .catch(err => console.log(err))
}
