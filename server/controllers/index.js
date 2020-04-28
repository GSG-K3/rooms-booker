const express = require('express')
const router = express.Router()
const { getAllEvents } = require('./getAllEvents')

router.get('/api/events', getAllEvents)

module.exports = router
