const router = require('express').Router()
module.exports = router

router.use('/fileupload', require('./fileupload'))
router.use('/allcompanies', require('./allcompanies'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
