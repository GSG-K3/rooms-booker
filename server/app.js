
const express = require('express')
const router = require('./controllers')
const cookieParser = require("cookie-parser");

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser());

app.use(router)
module.exports = app
