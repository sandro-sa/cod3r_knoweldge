// 1
const app = require('express')()
// 6
const consign = require('consign')
// 10
const db = require('./config/db.js')

const mongoose = require('mongoose')

require('./config/mongodb.js')

app.db = db
app.mongoose = mongoose

// 7
consign()
  .include('./config/passport.js')
  .then('./config/middlewares.js')
  .then('./api/validation.js')
  .then('./api')
  .then('./schedule')
  .then('./config/routes.js')
  .into(app)
// 2
app.listen(3000, () => {
  console.log('Backend Running.....')
})