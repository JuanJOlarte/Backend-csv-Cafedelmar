const { Schema, model } = require('mongoose');

const pedidoSchema = Schema({
    user: {
        type: String,
        require: true,
        unique: true
    },
    products: {
        type: String,
        require: true,
        unique: false
    },
    total: {
        type: Number,
        require: true,
        unique: true
    },
    table: {
        type: Number,
        require: true,
        unique: false
    },
    shairs: {
        type: Number,
        require: true,
        unique: false
    },
    state: {
        type: String,
        require: true,
        unique: true
    },
})

module.exports = model('pedido', pedidoSchema)