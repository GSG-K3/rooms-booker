const express = require('express')
const router = express.Router()

const userHome = require('../database/queries/getUserHome')

router.get('/api/user-events/:id', (req, res) => {
  const reqbody = req.params.id
  userHome(reqbody, (err, response) => {
    if (err) console.log(err)
    else res.send(response)
  })
})

module.exports = router
