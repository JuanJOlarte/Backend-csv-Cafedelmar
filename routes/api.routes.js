const express = require('express')
const router = express.Router()
const user = require('./user.routes')
//crea la ruta de la api
router.use('/api', user)

module.exports = router