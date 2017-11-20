const { Pool } = require('pg')

/**
 * 先写死了，不会数据库好怕怕
 */
const pool = new Pool({
  database: 'skinny',
  host: '127.0.0.1',
  port: 5432,
  username: '',
  password: ''
})

module.exports = {
  query: (text, params) => pool.query(text, params)
}