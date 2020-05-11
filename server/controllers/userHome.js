const userHome = require('../database/queries/getUserHome')

const userEvents = (req, res) => {
  const userId = req.params.id
  userHome(userId)
    .then(result => {
      res.json(result.rows)
    })
    .catch(err => res.status(500).json({ message: err.message }))
}

module.exports = userEvents
