const crypto = require('crypto')
const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const path = require('path')
const index = require('./routes/index')

const app = express()

app.set('view engine', 'pug')
app.set('views', path.resolve(__dirname, 'views'))

// app.use(cookieParser())
app.use(bodyParser.urlencoded({
  extended: true
}))
// app.use(session({
//   secret: crypto.randomBytes(28).toString('hex') // 虎扑人人都有28
// }))

app.use('/', index)

app.listen(3000)
