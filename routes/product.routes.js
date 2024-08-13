const express = require('express')
const { createProduct, getAllProduct, getProductById, deleteProductById } = require('./../controllers/product.controller')
const Product = require('../models/Product')

router.post('/createProduct', Product, createProduct)
router.post('/getAllProduct', Product, getAllProduct)
router.post('/getProductById', Product, getProductById)
router.post('/deleteProduct', Product, deleteProductById)
module.exports = router