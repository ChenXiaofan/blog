const express = require('express')
const router = express.Router()
const db = require('../db')

router
  .get('/login', (req, res) => {
    res.render('index/login')
  })
  .post('/login', async (req, res) => {
    const { body: { username, password } } = req

    if (!username || !password) {
      return res.render('index/login', {
        message: '请输入用户名或密码'
      })
    }

    const { rows: [data] } = await db.query('SELECT * FROM t_user WHERE name = $1', [username])
    if (data && data.password === password) {
      return res.end(`hello: ${username}`)
    }
    return res.render('index/login', {
      message: '用户名或密码错误'
    })
  })

module.exports = router
