const express = require('express')
const router = require('./controllers')
const app = express()
app.use(router)
module.exports = app
