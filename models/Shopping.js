const { Schema, model } = require('mongoose');

const shoppingSchema = Schema({
    name: {
        type: String,
        required: true,
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
    state: {
        type: String,
        require: true,
        unique: true
    },
})

module.exports = model('Shoppings', shoppingSchema)