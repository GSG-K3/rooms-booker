const getAvailableRooms = require('../database/queries/getAvailableRooms')

const getAvailableRoom = (req, res) => {
  console.log('kgubybhf')
  const eventDate = req.params.date
  console.log(eventDate)
  getAvailableRooms(eventDate)
    .then(result => res.Json(result))
    .catch(err => err)
}

module.exports = getAvailableRoom
