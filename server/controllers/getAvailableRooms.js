const getAvailableRooms = require('../database/queries/getAvailableRooms')

const getAvailableRoom = (req, res) => {
  const eventDate = req.query.date
  console.log(eventDate)
  getAvailableRooms(eventDate)
    .then(data => res.json(data))
    .catch(err => err)
}

module.exports = getAvailableRoom
