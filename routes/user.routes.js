const express = require('express')
const router = express.Router()
const { createUser } = require('./../controllers/user.controller')
//llama a las validaciones 
const users = require('./../middlewares/validationBody')
const validateFields = require('./../middlewares/validationResult')

//crea la ruta para crear usuarios y la llama register 
router.post('/register', users, validateFields, createUser)


module.exports = router