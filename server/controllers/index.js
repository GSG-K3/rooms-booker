const express = require('express')
const router = express.Router()
const { getAllRooms } = require('./getAllRooms')
const { getAllEvents } = require('./getAllEvents')
const userEvents = require('./userHome')
const addEvent = require('../controllers/addEvent')
const errors = require('./errors')

router.get('/api/rooms', getAllRooms)
router.get('/api/user-events/:id', userEvents)
router.get('/api/events', getAllEvents)
router.post('/api/booking', addEvent)
router.use(errors.serverErr)
router.use(errors.notFound)

module.exports = router
