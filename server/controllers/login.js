/* const login = (req, res) => {
    console.log('req body :', req.body)
    res.send(req.body)
  }
  
  module.exports = login */

  exports.login = (req, res) => {

    res.send(req.body)
    console.log('req body :', req.body)

    }