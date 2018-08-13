const router = require('koa-router')()

const user = require('./user/user')
const test = require('./test')

router.use('/api', user.routes(), user.allowedMethods())
router.use('/test', test.routes(), test.allowedMethods())

module.exports = router