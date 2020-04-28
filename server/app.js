const express = require('express')
const route = require('./controllers')
const router = require('./controller/index')
const app = express()
app.use(route)
app.use(router)

module.exports = app
