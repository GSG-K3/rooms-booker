const express = require('express')
const router = express.Router()
const { getAllRooms } = require('./getAllRooms')
const { getAllEvents } = require('./getAllEvents')
const userEvents = require('./userHome')
const addEvent = require('../controllers/addEvent')

router.get('/api/rooms', getAllRooms)
router.get('/api/user-events/:id', userEvents)
router.get('/api/events', getAllEvents)
router.post('/api/booking', addEvent)

module.exports = router
