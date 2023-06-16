// 1
const app = require('express')()
// 6
const consign = require('consign')
// 10
const db = require('./config/db.js')

app.db = db
// 7
consign()
  .include('./config/passport.js')
  .then('./config/middlewares.js')
  .then('./api/validation.js')
  .then('./api')
  .then('./config/routes.js')
  .into(app)
// 2
app.listen(3000, () => {
  console.log('Backend Running.....')
})