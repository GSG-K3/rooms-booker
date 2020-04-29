const express = require('express')
const router = express.Router()

const { getAllRooms } = require('./getAllRooms')
const { getAllEvents } = require('./getAllEvents')
const userEvents = require('./userHome')

router.get('/api/rooms', getAllRooms);
router.get('/api/events', getAllEvents)
router.get('/api/user-events/:id', userEvents)

module.exports = router;


