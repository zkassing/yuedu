const query = require('./index')

class User {
  constructor () {

  }
  
  static user_insert (values) {
    const _sql = `INSERT INTO t_users SET ?`
    return query(_sql, values)
  }

  static user_select_by_id (values) {
    const _sql = `SELECT ?? FROM t_users WHERE id = ?`
    return query(_sql, values)
  }

  static user_select_by_username (values) {
    const _sql = `SELECT ?? FROM t_users WHERE username = ?`
    return query(_sql, values)
  }

  static user_update_by_id (values) {
    const _sql = `UPDATE t_users SET ? WHERE id = ?`
    return query(_sql, values)
  }
}


module.exports = User