const app = require('./app.js')

process.env.NODE_ENV = 'production'

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`The things, the things are happening on ${PORT}!!`)
})