const express = require('express')
const router = express.Router()
//const user = require('./user.routes')
const product = require ('./product.routes')
const reserve = require ('./reserve.routes')
//crea la ruta de la api
router.use('/api', product )
router.use('/api', reserve)

module.exports = router