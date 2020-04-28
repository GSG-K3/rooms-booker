const express = require('express')
const router = express.Router()

const { getAllRooms } = require('./getAllRooms')
const { getAllEvents } = require('./getAllEvents')

router.get('/api/rooms', getAllRooms);
router.get('/api/events', getAllEvents)
router.get('/api/user-events/:id', userEvents)

module.exports = router;


