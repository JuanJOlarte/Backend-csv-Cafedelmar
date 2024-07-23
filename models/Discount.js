const { Schema, model } = require('mongoose');

const discountSchema = Schema({
    code: {
        type: String,
        unique: false
    },
    discount: {
        type: Number,
        unique: false,
    },
    description: {
        type: String,
        unique: true
    },
    valid: {
        type: Date,
        unique: true
    }
})

module.exports = model('Discounts', discountSchema)