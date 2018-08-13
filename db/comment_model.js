const query = require('index')

class CommentModel {
  constructor () {}

  static comments_select_limit_by_articleid (values) {
    const _sql = `SELECT id, user_id, article_id, content, DATE_FORMAT(created_time, '%Y/%m/%d %H:%i') as reply_time FROM t_comments WHERE article_id = ? ORDER BY created_time LIMIT (? - 1) * 10, 10`
    return query(_sql, values)
  }

  static comments_insert (values) {
    const _sql = `INSERT INTO t_comments SET ?`
    return query(_sql, values)
  }

  static comments_delete_by_id (values) {
    const _sql = `DELETE FROM t_comments WHERE id = ?`
    return query(_sql, values)
  }
}