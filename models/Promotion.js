const { Schema, model } = require('mongoose');

const promotionSchema = Schema({
    code: {
        type: String,
        unique: flase
    },
    discount: {
        type: String,
        unique: false,
    },
    description: {
        type: String,
        unique: true
    },
    valid: {
        type: Number,
        unique: true
    }
})

module.exports = model('Promotions', promotionSchema)