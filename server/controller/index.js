const express = require('express')
const router = express.Router()
const userEvents = require('./userHome')


router.get('/api/user-events/:id', userEvents)

module.exports = router
