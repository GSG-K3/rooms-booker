const getAvailableRooms = require('../database/queries/getAvailableRooms')

const getAvailableRoom = (req, res) => {
  const eventDate = req.params.date
  getAvailableRooms(eventDate)
    .then(data => console.log(res.json(data)))
    .catch(err => err)
}

module.exports = getAvailableRoom
