const userHome = require('../database/queries/getUserHome')

const userEvents = (req, res) => {
  const userId = req.params.id
  userHome(userId, (err, response) => {
    if (err) console.log(err)
    else res.send(response)
  })
}

module.exports = userEvents
