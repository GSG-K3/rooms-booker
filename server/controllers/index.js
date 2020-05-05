const express = require('express')
const router = express.Router()
const { getAllEvents } = require('./getAllEvents')
const userEvents = require('./userHome')
const availableRooms = require('./getAvailableRooms')

router.get('/api/user-events/:id', userEvents)

router.get('/api/events', getAllEvents)

router.get('/api/available-rooms/:date', availableRooms)

module.exports = router
