const userHome = require('../database/queries/getUserHome')

const userEvents = (req, res) => {
  const userId = req.params.id

  userHome(userId).then(data =>

    res.send(data.rows))
    .catch(err => console.log(err))
}

module.exports = userEvents