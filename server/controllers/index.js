const express = require('express')
const router = express.Router()
const { getAllRooms } = require('./getAllRooms')

router.get('/api/rooms', getAllRooms);

module.exports = router;