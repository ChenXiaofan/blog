const express = require('express')
const router = express.Router()

router.get('/login', (req, res) => {
  res.send('welcome to login page')
})

module.exports = router